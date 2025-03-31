"use client";

import { getTranslation } from "@repo/i18n/getTranslation";

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const lang = "pt";

const equipmentList = [
  { id: "EQ-001", name: "Compressor X", quantity: 5, isEquipment: true },
  { id: "EQ-002", name: "Generator Y", quantity: 3, isEquipment: true },
  { id: "EQ-003", name: "Hydraulic Pump A", quantity: 7, isEquipment: true },
  { id: "EQ-004", name: "Cooling System B", quantity: 2, isEquipment: true },
  { id: "EQ-005", name: "Conveyor Belt C", quantity: 4, isEquipment: true },
  { id: "SP-001", name: "Bolt", quantity: 20, isEquipment: false },
  { id: "SP-002", name: "Nut", quantity: 30, isEquipment: false },
  { id: "SP-003", name: "Washer", quantity: 50, isEquipment: false },
  { id: "SP-004", name: "Screw", quantity: 40, isEquipment: false },
  { id: "SP-005", name: "Gasket", quantity: 15, isEquipment: false },
  { id: "SP-006", name: "O-Ring", quantity: 25, isEquipment: false },
  { id: "SP-007", name: "Bearing", quantity: 10, isEquipment: false },
  { id: "SP-008", name: "Belt", quantity: 12, isEquipment: false },
  { id: "SP-009", name: "Filter", quantity: 8, isEquipment: false },
  { id: "SP-010", name: "Fuse", quantity: 18, isEquipment: false },
  { id: "SP-011", name: "Hose", quantity: 14, isEquipment: false }
];

export default function StockroomEquipmentList() {
  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "equipmentList")}</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "nameOfEquipment")}</TableCell>
              <TableCell>{getTranslation(lang, "quantity")}</TableCell>
              <TableCell>{getTranslation(lang, "actions")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {equipmentList.map((equipment) => (
              <TableRow key={equipment.id}>
                <TableCell>{equipment.name}</TableCell>
                <TableCell>{equipment.quantity}</TableCell>
                <TableCell>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => window.location.href = equipment.isEquipment 
                      ? `/stockroom/equipment/equipmentEdit/` 
                      : `/stockroom/sparePart/sparePartEdit/`
                    }
                    > 
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