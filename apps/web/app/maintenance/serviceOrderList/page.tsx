"use client";

import { getTranslation } from "./../../../../../packages/i18n/index";
import { useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const lang = "pt";

const serviceOrders = [
  { id: "1", requests: "SR-1001, SR-1002", equipments: "EQ-2001, EQ-2002", startDate: "2025-02-20", type: "Maintenance", observation: "Routine check-up" },
  { id: "2", requests: "SR-1003", equipments: "EQ-2003", startDate: "2025-02-22", type: "Repair", observation: "Fix hydraulic system" },
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
              <TableCell>{getTranslation(lang, "serviceRequest")}</TableCell>
              <TableCell>{getTranslation(lang, "equipmentUsed")}</TableCell>
              <TableCell>{getTranslation(lang, "startDate")}</TableCell>
              <TableCell>{getTranslation(lang, "serviceOrderType")}</TableCell>
              
              
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.requests}</TableCell>
                <TableCell>{order.equipments}</TableCell>
                <TableCell>{order.startDate}</TableCell>
                <TableCell>{order.type}</TableCell>
                
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEdit(order.id)}>
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
