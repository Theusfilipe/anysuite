"use client";

import { getTranslation } from "../../../../../../packages/i18n/src/getTranslation";
import { useState, useEffect } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, MenuItem, Select, TextField, Button } from "@mui/material";
import { get } from "http";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const lang = "pt";

interface Checklist {
  id: string;
  type: string,
  certificate: string,
  equipmentId: string,
  equipmentName: string,
  checklistDate: string,
  quantityOfDaysBetweenMaintenance: number,
  status: string,
  
}

const checklists: Checklist[] = [
  { id: "1", type: "Compressor Diesel", certificate: "19-030", equipmentId: "EQ-001", equipmentName: "Compressor X", checklistDate: "2025-03-01", quantityOfDaysBetweenMaintenance: 90, status: "Aberta" },
  { id: "2", type: "Compressor Elétrico", certificate: "19-031", equipmentId: "EQ-002", equipmentName: "Compressor Y", checklistDate: "2025-03-02", quantityOfDaysBetweenMaintenance: 60, status: "Fechada" },
  { id: "3", type: "Gerador", certificate: "19-032", equipmentId: "EQ-003", equipmentName: "Gerador A", checklistDate: "2025-03-03", quantityOfDaysBetweenMaintenance: 120, status: "Assinada" },
  { id: "4", type: "Bomba Hidráulica", certificate: "19-033", equipmentId: "EQ-004", equipmentName: "Bomba H1", checklistDate: "2025-03-04", quantityOfDaysBetweenMaintenance: 180, status: "Aberta" },
  { id: "5", type: "Turbina", certificate: "19-034", equipmentId: "EQ-005", equipmentName: "Turbina T1", checklistDate: "2025-03-05", quantityOfDaysBetweenMaintenance: 200, status: "Fechada" },
  { id: "6", type: "Guincho", certificate: "19-035", equipmentId: "EQ-006", equipmentName: "Guincho G1", checklistDate: "2025-03-06", quantityOfDaysBetweenMaintenance: 150, status: "Assinada" },
  { id: "7", type: "Moinho", certificate: "19-036", equipmentId: "EQ-007", equipmentName: "Moinho M1", checklistDate: "2025-03-07", quantityOfDaysBetweenMaintenance: 90, status: "Aberta" },
  { id: "8", type: "Esteira Transportadora", certificate: "19-037", equipmentId: "EQ-008", equipmentName: "Esteira E1", checklistDate: "2025-03-08", quantityOfDaysBetweenMaintenance: 60, status: "Fechada" },
  { id: "9", type: "Caldeira", certificate: "19-038", equipmentId: "EQ-009", equipmentName: "Caldeira C1", checklistDate: "2025-03-09", quantityOfDaysBetweenMaintenance: 180, status: "Assinada" },
  { id: "10", type: "Torno Mecânico", certificate: "19-039", equipmentId: "EQ-010", equipmentName: "Torno T1", checklistDate: "2025-03-10", quantityOfDaysBetweenMaintenance: 120, status: "Aberta" },
  { id: "11", type: "Fresa", certificate: "19-040", equipmentId: "EQ-011", equipmentName: "Fresa F1", checklistDate: "2025-03-11", quantityOfDaysBetweenMaintenance: 90, status: "Fechada" },
  { id: "12", type: "Empilhadeira", certificate: "19-041", equipmentId: "EQ-012", equipmentName: "Empilhadeira E1", checklistDate: "2025-03-12", quantityOfDaysBetweenMaintenance: 120, status: "Assinada" },
  { id: "13", type: "Ponte Rolante", certificate: "19-042", equipmentId: "EQ-013", equipmentName: "Ponte P1", checklistDate: "2025-03-13", quantityOfDaysBetweenMaintenance: 180, status: "Aberta" },
  { id: "14", type: "Roçadeira", certificate: "19-043", equipmentId: "EQ-014", equipmentName: "Roçadeira R1", checklistDate: "2025-03-14", quantityOfDaysBetweenMaintenance: 150, status: "Fechada" }
];

export default function ChecklistList() {

  const{ data: session } = useSession({
      required: true,
      onUnauthenticated() {
        redirect("/api/auth/callback/credentials");
      }
    });

  const [filteredChecklists, setFilteredChecklists] = useState<Checklist[]>(checklists);
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  useEffect(() => {
    const filtered = checklists.filter((checklist) => {
      const matchesType = typeFilter ? checklist.type.toLowerCase().includes(typeFilter.toLowerCase()) : true;
      const matchesStatus = statusFilter ? checklist.status.toLowerCase().includes(statusFilter.toLowerCase()) : true;
      const checklistDate = new Date(checklist.checklistDate);
      const matchesDateRange =
        (!startDateFilter || checklistDate >= new Date(startDateFilter)) &&
        (!endDateFilter || checklistDate <= new Date(endDateFilter));

      return matchesType && matchesStatus && matchesDateRange;
    });

    setFilteredChecklists(filtered);
  }, [typeFilter, statusFilter, startDateFilter, endDateFilter]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {getTranslation(lang, "checklists")}
      </Typography>

      {/* Filtros */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", marginBottom: 3 }}>
        <TextField label={getTranslation(lang, "type")} variant="outlined" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} />
        <TextField label={getTranslation(lang, "status")} variant="outlined" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} />
        <TextField label={getTranslation(lang, "startDate")} type="date" variant="outlined" InputLabelProps={{ shrink: true }} value={startDateFilter} onChange={(e) => setStartDateFilter(e.target.value)} />
        <TextField label={getTranslation(lang, "endDate")} type="date" variant="outlined" InputLabelProps={{ shrink: true }} value={endDateFilter} onChange={(e) => setEndDateFilter(e.target.value)} />
      </Box>

      {/* Tabela */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "type")}</TableCell>
              <TableCell>{getTranslation(lang, "certificate")}</TableCell>
              <TableCell>{getTranslation(lang, "equipmentId")}</TableCell>
              <TableCell>{getTranslation(lang, "equipmentName")}</TableCell>
              <TableCell>{getTranslation(lang, "checklistDate")}</TableCell>
              <TableCell>{getTranslation(lang, "quantityOfDaysBetweenMaintenance")}</TableCell>
              <TableCell>{getTranslation(lang, "status")}</TableCell>
              <TableCell>{getTranslation(lang, "actions")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredChecklists.length > 0 ? (
              filteredChecklists.map((checklist) => (
                <TableRow key={checklist.id}>
                  <TableCell>{checklist.type}</TableCell>
                  <TableCell>{checklist.certificate}</TableCell>
                  <TableCell>{checklist.equipmentId}</TableCell>
                  <TableCell>{checklist.equipmentName}</TableCell>
                  <TableCell>{checklist.checklistDate}</TableCell>
                  <TableCell>{checklist.quantityOfDaysBetweenMaintenance}</TableCell>
                  <TableCell>{checklist.status}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => window.location.href = `/maintenance/checklist/editChecklist`}>
                      {getTranslation(lang, "moreInfo")}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  {getTranslation(lang, "noInfoFound")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}