"use client";

import { getTranslation } from "../../../../../../packages/i18n/index";

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const lang = "pt";

const equipment = {
  id: "EQ-001",
  name: "Compressor X",
  lastMaintenanceDate: "2025-01-15",
  nextMaintenanceDate: "2025-04-15",
  quantityOfDaysBetweenMaintenance: 90,
};

export default function EquipmentInfoPage() {

  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "equipmentInfo")}</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "equipmentId")}</TableCell>
              <TableCell>{getTranslation(lang, "equipmentName")}</TableCell>
              <TableCell>{getTranslation(lang, "lastMaintenanceDate")}</TableCell>
              <TableCell>{getTranslation(lang, "nextMaintenanceDate")}</TableCell>
              <TableCell>{getTranslation(lang, "quantityOfDaysBetweenMaintenance")}</TableCell>
              <TableCell>{getTranslation(lang, "actions")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{equipment.id}</TableCell>
              <TableCell>{equipment.name}</TableCell>
              <TableCell>{equipment.lastMaintenanceDate}</TableCell>
              <TableCell>{equipment.nextMaintenanceDate}</TableCell>
              <TableCell>{equipment.quantityOfDaysBetweenMaintenance}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => window.location.href = `/stockroom/equipment/equipmentEdit`}>
                  {getTranslation(lang, "edit")}
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
      
    </Box>
  );
}
