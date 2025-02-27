"use client";

import { getTranslation } from "./../../../../../packages/i18n/index";
import { useState, useEffect } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const lang = "pt";

interface ServiceRequest {
  id: string;
  base: string;
  location: string;
  equipmentName: string;
  problemDescription: string;
}

export default function ServiceRequestsList() {
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);

  useEffect(() => {
    // Simulating API call
    setServiceRequests([
      { id: "1", base: "Base A", location: "São Paulo", equipmentName: "Compressor X", problemDescription: "Não está enchendo o cilindro" },
      { id: "2", base: "Base B", location: "Rio de Janeiro", equipmentName: "Generator Y", problemDescription: "Está fazendo barulho esquisito" },
      { id: "3", base: "Base C", location: "Belo Horizonte", equipmentName: "Pump Z", problemDescription: "Vazamento detectado" },
    ]);
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {getTranslation(lang, "serviceRequestList")}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "baseWhereEquipmentIsLocated")}</TableCell>
              <TableCell>{getTranslation(lang, "locationOfEquipment")}</TableCell>
              <TableCell>{getTranslation(lang, "nameOfEquipment")}</TableCell>
              <TableCell>{getTranslation(lang, "textOfProblem")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.base}</TableCell>
                <TableCell>{request.location}</TableCell>
                <TableCell>{request.equipmentName}</TableCell>
                <TableCell>{request.problemDescription}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}