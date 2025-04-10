"use client";

import { getTranslation } from "@repo/i18n/getTranslation";
import { useState, useEffect } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, MenuItem, Select, TextField } from "@mui/material";
import { get } from "http";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const lang = "pt";

interface ServiceRequest {
  id: string;
  base: string;
  location: string;
  equipmentName: string;
  problemDescription: string;
  date: string;
  status: string;
}

export default function ServiceRequestsList() {

  const{ data: session } = useSession({
      required: true,
      onUnauthenticated() {
        redirect("/api/auth/callback/credentials");
      }
    });

  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);

  const [equipmentFilter, setEquipmentFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [baseFilter, setBaseFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  const filteredRequests = serviceRequests.filter((request) => {
    const matchesEquipment = equipmentFilter
      ? request.equipmentName.toLowerCase().includes(equipmentFilter.toLowerCase())
      : true;
    
    // Agora, se statusFilter estiver vazio, retorna todos os registros
    const matchesStatus = statusFilter ? request.status === statusFilter : true;
  
    const matchesBase = baseFilter
      ? request.base.toLowerCase().includes(baseFilter.toLowerCase())
      : true;
  
    const matchesLocation = locationFilter
      ? request.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;
  
    const orderDate = new Date(request.date);
    const matchesDateRange =
      (!startDateFilter || orderDate >= new Date(startDateFilter)) &&
      (!endDateFilter || orderDate <= new Date(endDateFilter));
  
    return matchesEquipment && matchesStatus && matchesBase && matchesLocation && matchesDateRange;
  });

  useEffect(() => {
    // Simulating API call
    setServiceRequests([
      { 
        id: "1", 
        base: "Base A", 
        location: "São Paulo", 
        equipmentName: "Compressor X", 
        problemDescription: "Não está enchendo o cilindro", 
        date: "2025-03-10", 
        status: "Aberto" 
      },
      { 
        id: "2", 
        base: "Base B", 
        location: "Rio de Janeiro", 
        equipmentName: "Generator Y", 
        problemDescription: "Está fazendo barulho esquisito", 
        date: "2025-03-12", 
        status: "Em andamento" 
      },
      { 
        id: "3", 
        base: "Base C", 
        location: "Belo Horizonte", 
        equipmentName: "Pump Z", 
        problemDescription: "Vazamento detectado", 
        date: "2025-03-08", 
        status: "Concluído" 
      },
      { 
        id: "4", 
        base: "Base A", 
        location: "Curitiba", 
        equipmentName: "Compressor W", 
        problemDescription: "Pressão abaixo do esperado", 
        date: "2025-03-15", 
        status: "Aberto" 
      },
      { 
        id: "5", 
        base: "Base B", 
        location: "Recife", 
        equipmentName: "Motor V", 
        problemDescription: "Superaquecimento intermitente", 
        date: "2025-03-11", 
        status: "Pendente" 
      },
      { 
        id: "6", 
        base: "Base D", 
        location: "Fortaleza", 
        equipmentName: "Turbina T", 
        problemDescription: "Oscilação na rotação", 
        date: "2025-03-09", 
        status: "Concluído" 
      },
      { 
        id: "7", 
        base: "Base C", 
        location: "Manaus", 
        equipmentName: "Caldeira K", 
        problemDescription: "Baixa eficiência térmica", 
        date: "2025-03-14", 
        status: "Em andamento" 
      }
    ]);
    
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Lista de Solicitações de Serviço
      </Typography>

      {/* Filtros */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", marginBottom: 3 }}>
        <TextField
          label={getTranslation(lang, "base")}
          variant="outlined"
          value={baseFilter}
          onChange={(e) => setBaseFilter(e.target.value)}
        />
        <TextField
          label={getTranslation(lang, "location")}
          variant="outlined"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <TextField
          label={getTranslation(lang, "equipment")}
          variant="outlined"
          value={equipmentFilter}
          onChange={(e) => setEquipmentFilter(e.target.value)}
        />
        <Select
          displayEmpty
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value === getTranslation(lang, "allStatuses") ? "" : e.target.value)}
        >
          <MenuItem value={getTranslation(lang, "allStatuses")}>{getTranslation(lang, "allStatuses")}</MenuItem>
          <MenuItem value={getTranslation(lang, "opened")}>{getTranslation(lang, "opened")}</MenuItem>
          <MenuItem value={getTranslation(lang, "inProgress")}>{getTranslation(lang, "inProgress")}</MenuItem>
          <MenuItem value={getTranslation(lang, "concluded")}>{getTranslation(lang, "concluded")}</MenuItem>
          <MenuItem value={getTranslation(lang, "pending")}>{getTranslation(lang, "pending")}</MenuItem>
        </Select>
        <TextField
          label={getTranslation(lang, "startDate")}
          type="date"
          InputLabelProps={{ shrink: true }}
          value={startDateFilter}
          onChange={(e) => setStartDateFilter(e.target.value)}
        />
        <TextField
          label={getTranslation(lang, "endDate")}
          type="date"
          InputLabelProps={{ shrink: true }}
          value={endDateFilter}
          onChange={(e) => setEndDateFilter(e.target.value)}
        />
      </Box>

      {/* Tabela */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang,"base")}</TableCell>
              <TableCell>{getTranslation(lang, "location")}</TableCell>
              <TableCell>{getTranslation(lang, "equipment")}</TableCell>
              <TableCell>{getTranslation(lang, "textOfProblem")}</TableCell>
              <TableCell>{getTranslation(lang,"date")}</TableCell>
              <TableCell>{getTranslation(lang,"status")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.base}</TableCell>
                  <TableCell>{request.location}</TableCell>
                  <TableCell>{request.equipmentName}</TableCell>
                  <TableCell>{request.problemDescription}</TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell>{request.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                {getTranslation(lang,"noInfoFound")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}