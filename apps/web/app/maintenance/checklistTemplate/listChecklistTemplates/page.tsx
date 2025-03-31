"use client";

import { getTranslation } from "../../../../../../packages/i18n/src/getTranslation";
import { useState, useEffect } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, MenuItem, Select, TextField, Button } from "@mui/material";
import { get } from "http";

const lang = "pt";

interface ChecklistTemplate {
  id: string;
  type: string,
  
  quantityOfDaysBetweenMaintenance: number,
  
}

const checklistTemplates: ChecklistTemplate[] = [
  {
    id: "1",
    type: "Compressor Diesel",
    
    quantityOfDaysBetweenMaintenance: 90,
  },
  {
    id: "2",
    type: "Gerador Elétrico",
    
    quantityOfDaysBetweenMaintenance: 120,
  },
  {
    id: "3",
    type: "Bomba Hidráulica",
    
    quantityOfDaysBetweenMaintenance: 60,
  },
  {
    id: "4",
    type: "Sistema de Refrigeração",
    
    quantityOfDaysBetweenMaintenance: 180,
  },
  {
    id: "5",
    type: "Esteira Transportadora",
    
    quantityOfDaysBetweenMaintenance: 75,
  },
];

export default function ChecklistTemplatesList() {
  const [checklistTemplates, setChecklistTemplates] = useState<ChecklistTemplate[]>([]);

  const [typeFilter, setTypeFilter] = useState("");
  const [qtdDaysFilter, setqtdDaysFilter] = useState("");


  const filteredTemplates = checklistTemplates.filter((checklist) => {
    const matchesType = typeFilter
      ? checklist.type.toLowerCase().includes(typeFilter.toLowerCase())
      : true;
    
    // Agora, se statusFilter estiver vazio, retorna todos os registros
    
  
    const matchesQtdDays = qtdDaysFilter
      ? checklist.quantityOfDaysBetweenMaintenance.toString().includes(qtdDaysFilter)
      : true;
    
  
    return matchesType && matchesQtdDays;
  });

  useEffect(() => {
    // Simulating API call
    setChecklistTemplates([
      {
        id: "1",
        type: "Compressor Diesel",
        
        quantityOfDaysBetweenMaintenance: 90,
      },
      {
        id: "2",
        type: "Gerador Elétrico",
        
        quantityOfDaysBetweenMaintenance: 120,
      },
      {
        id: "3",
        type: "Bomba Hidráulica",
        
        quantityOfDaysBetweenMaintenance: 60,
      },
      {
        id: "4",
        type: "Sistema de Refrigeração",
        
        quantityOfDaysBetweenMaintenance: 180,
      },
      {
        id: "5",
        type: "Esteira Transportadora",
        
        quantityOfDaysBetweenMaintenance: 75,
      },
    ]);
    
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Lista de Modelos de Checklist
      </Typography>

      {/* Filtros */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", marginBottom: 3 }}>
        <TextField
          label={getTranslation(lang, "type")}
          variant="outlined"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        />
        <TextField
          label={getTranslation(lang, "quantityOfDaysBetweenMaintenance")}
          variant="outlined"
          value={qtdDaysFilter}
          onChange={(e) => setqtdDaysFilter(e.target.value)}
        />
        
      </Box>

      {/* Tabela */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang,"type")}</TableCell>
              <TableCell>{getTranslation(lang, "quantityOfDaysBetweenMaintenance")}</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell>{template.type}</TableCell>
                  <TableCell>{template.quantityOfDaysBetweenMaintenance}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => window.location.href = `/maintenance/checklistTemplate/editChecklistTemplate/`}>
                    {getTranslation(lang, "moreInfo")}
                    </Button>
                </TableCell>
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