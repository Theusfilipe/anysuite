"use client";

import { getTranslation } from "./../../../../../packages/i18n/index";
import { useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const lang = "pt";

const serviceOrders = [
  { id: "OS-001", requests: "SR-1001, SR-1002", equipments: "Pincel-Ultramax-2001, Tintatron-NovaTinta-2002", startDate: "20-02-2025", type: "Maintenance", observation: "Routine check-up", status: "Concluída" },
  { id: "OS-002", requests: "SR-1003", equipments: "Pincel-Ultramax-2001", startDate: "22-02-2025", type: "Repair", observation: "Fix hydraulic system", status: "Ativo" },
  { id: "OS-003", requests: "SR-1008", equipments: "Serra-Makita-2003", startDate: "22-02-2025", type: "Repair", observation: "Fix hydraulic system", status: "Ativo" },
];

export default function ServiceOrdersList() {
  const handleEdit = (id: string) => {
    console.log("Edit service order:", id);
    // Redirect or open edit modal
  };

  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "serviceOrderList")}</h2>
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
            {serviceOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.requests}</TableCell>
                <TableCell>{order.equipments}</TableCell>
                <TableCell>{order.startDate}</TableCell>
                <TableCell>{order.type}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                    <Button variant="contained" color="primary" onClick={() => window.location.href = `/maintenance/editServiceOrder/`}>
                    {getTranslation(lang, "edit")}
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
