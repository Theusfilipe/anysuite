"use client";

import { getTranslation } from "@repo/i18n/getTranslation";
import { useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Select, MenuItem } from "@mui/material";

const lang = "pt";

const serviceOrders = [
  { id: "OS-001", requests: "SR-1001, SR-1002", equipments: "Pincel-Ultramax-2001, Tintatron-NovaTinta-2002", startDate: "20-02-2025", type: "Maintenance", observation: "Routine check-up", status: "Concluída" },
  { id: "OS-002", requests: "SR-1003", equipments: "Pincel-Ultramax-2001", startDate: "22-02-2025", type: "Repair", observation: "Fix hydraulic system", status: "Ativo" },
  { id: "OS-003", requests: "SR-1008", equipments: "Serra-Makita-2003", startDate: "22-02-2025", type: "Repair", observation: "Fix hydraulic system", status: "Ativo" },
  { id: "OS-004", requests: "SR-1010", equipments: "Furadeira-Bosch-5000", startDate: "25-02-2025", type: "Installation", observation: "Drill setup", status: "Pendente" },
  { id: "OS-005", requests: "SR-1012", equipments: "Soldadora-WeldTech-900", startDate: "01-03-2025", type: "Inspection", observation: "Check welding efficiency", status: "Concluída" },
  { id: "OS-006", requests: "SR-1020", equipments: "Pá-Carregadeira-CAT-320", startDate: "05-03-2025", type: "Repair", observation: "Fix hydraulic leaks", status: "Ativo" },
  { id: "OS-007", requests: "SR-1025", equipments: "Compressores-AirMax-2020", startDate: "10-03-2025", type: "Maintenance", observation: "Routine air pressure test", status: "Pendente" },
  { id: "OS-008", requests: "SR-1030", equipments: "Gerador-Diesel-PowerGen-800", startDate: "15-03-2025", type: "Repair", observation: "Fix fuel injection system", status: "Concluída" },
  { id: "OS-009", requests: "SR-1035", equipments: "Guindaste-Liebherr-LTM1200", startDate: "18-03-2025", type: "Inspection", observation: "Safety check", status: "Ativo" },
  { id: "OS-010", requests: "SR-1040", equipments: "Esteira-Transportadora-TRX-600", startDate: "22-03-2025", type: "Installation", observation: "Setup and alignment", status: "Pendente" }
];

export default function ServiceOrdersList() {

  const [equipmentFilter, setEquipmentFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  const filteredOrders = serviceOrders.filter((order) => {
    const matchesEquipment = order.equipments.toLowerCase().includes(equipmentFilter.toLowerCase());
    const matchesStatus = statusFilter ? order.status === statusFilter : true;
    const matchesType = typeFilter ? order.type === typeFilter : true;
    const orderDate = new Date(order.startDate.split("-").reverse().join("-"));
    const matchesDateRange =
      (!startDateFilter || orderDate >= new Date(startDateFilter)) &&
      (!endDateFilter || orderDate <= new Date(endDateFilter));

    return matchesEquipment && matchesStatus && matchesType && matchesDateRange;
  });

  const handleEdit = (id: string) => {
    console.log("Edit service order:", id);
    // Redirect or open edit modal
  };

  

  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "serviceOrderList")}</h2>

      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label={getTranslation(lang, "filterByEquipment")}
          variant="outlined"
          size="small"
          value={equipmentFilter}
          onChange={(e) => setEquipmentFilter(e.target.value)}
        />
        <Select
          displayEmpty
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          size="small"
        >
          <MenuItem value="">{getTranslation(lang, "allStatuses")}</MenuItem>
          <MenuItem value="Concluída">Concluída</MenuItem>
          <MenuItem value="Ativo">Ativo</MenuItem>
        </Select>
        <Select
          displayEmpty
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          size="small"
        >
          <MenuItem value="">{getTranslation(lang, "allTypes")}</MenuItem>
          <MenuItem value="Maintenance">Maintenance</MenuItem>
          <MenuItem value="Repair">Repair</MenuItem>
        </Select>
        <TextField
          type="date"
          label={getTranslation(lang, "startDate")}
          InputLabelProps={{ shrink: true }}
          size="small"
          value={startDateFilter}
          onChange={(e) => setStartDateFilter(e.target.value)}
        />
        <TextField
          type="date"
          label={getTranslation(lang, "endDate")}
          InputLabelProps={{ shrink: true }}
          size="small"
          value={endDateFilter}
          onChange={(e) => setEndDateFilter(e.target.value)}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "id")}</TableCell>
              <TableCell>{getTranslation(lang, "serviceRequest")}</TableCell>
              <TableCell>{getTranslation(lang, "equipmentsToBeFixed")}</TableCell>
              <TableCell>{getTranslation(lang, "startDate")}</TableCell>
              <TableCell>{getTranslation(lang, "serviceOrderType")}</TableCell>
              <TableCell>{getTranslation(lang, "status")}</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.requests}</TableCell>
                <TableCell>{order.equipments}</TableCell>
                <TableCell>{order.startDate}</TableCell>
                <TableCell>{order.type}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                    <Button variant="contained" color="primary" onClick={() => window.location.href = `/maintenance/serviceOrder/editServiceOrder/`}>
                    {getTranslation(lang, "moreInfo")}
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
