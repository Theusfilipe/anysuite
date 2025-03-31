"use client";

import { getTranslation } from "@repo/i18n/getTranslation";
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Fab,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Add, Delete, Save as SaveIcon, Edit as EditIcon } from "@mui/icons-material";
import { Certificate } from "crypto";

const lang = "pt";



const initialChecklist = {
  id: "C-001",
  type: "Compressor Diesel",
  certificate: "CSSM 19-030",
  
  quantityOfDaysBetweenMaintenance: 90,
};

export default function NewChecklistTemplate() {
  const [formData, setFormData] = useState(initialChecklist);
  const [isEditing, setIsEditing] = useState(false);

  const [checklistData, setChecklistData] = useState([
    { item: "Pressão do óleo" },
    { item: "Verificação vazamentos" },
    { item: "Tensão nas Correias" },
    { item: "Correia sobressalente" },
    { item: "Fixação no Skid" },
    { item: "Válvulas de Segurança" },
    { item: "Bico e Bomba Injetora" },
    { item: "Fixação do motor/compressor" },
    { item: "Filtros de Ar de aspiração" },
    { item: "Mangotes" },
    { item: "Serpentina" },
    { item: "Filtro de Combustível" },
    { item: "Filtro de Condensação" },
    { item: "Comando elétrico e manual" },
    { item: "Horas Trabalhadas" },
    { item: "Plaqueta de identificação" },
    { item: "Exame Visual da Válvula de Alívio" },
    { item: "Teste de Função na Configuração de Alívio" },
    { item: "Teste das Tubulações" },
    { item: "Exame Visual das Tubulações" },
    { item: "Teste de vazamento de gás" },
    { item: "Exame Visual Receptores" },
    { item: "Exame Visual Elétrica" },
    { item: "Exame Visual Operacional" },
    { item: "Taxa de Entrega e Pressão" },
    { item: "Pureza da Saída" },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDataChange = (index: number, value: string) => {
    const newData = [...checklistData];
    if (newData[index]) {
      newData[index]["item"] = value;
    }
    setChecklistData(newData);
  };

  const addRow = () => {
    setChecklistData([...checklistData, { item: "" }]);
  };

  const deleteRow = (index: number) => {
    setChecklistData(checklistData.filter((_, i) => i !== index));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Fab color={isEditing ? "primary" : "secondary"} onClick={toggleEdit} sx={{ position: "fixed", top: 80, right: 30 }}>
        {isEditing ? <SaveIcon /> : <EditIcon />}
      </Fab>
      <form>
        
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "type")}</InputLabel>
          <OutlinedInput name="type" value={formData.type} label={getTranslation(lang, "type")} disabled={!isEditing} />
        </FormControl>
        
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "certificateNumber")}</InputLabel>
          <OutlinedInput name="certificateNumber" value={formData.certificate} onChange={handleChange} label={getTranslation(lang, "certificateNumber")} disabled={!isEditing} />
        </FormControl>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "quantityOfDaysBetweenMaintenance")}</InputLabel>
          <OutlinedInput name="quantityOfDaysBetweenMaintenance" type="number" value={formData.quantityOfDaysBetweenMaintenance} onChange={handleChange} label={getTranslation(lang, "weight")} disabled={!isEditing} />
        </FormControl>
        
        
      </form>
      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "activity")}</TableCell>
              
              <TableCell>{getTranslation(lang, "action")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checklistData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <OutlinedInput value={row.item} onChange={(e) => handleDataChange(index, e.target.value)} disabled={!isEditing} />
                </TableCell>

                <TableCell>
                  <IconButton onClick={() => deleteRow(index)} disabled={!isEditing}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            {isEditing && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <Button onClick={addRow} startIcon={<Add />}>{getTranslation(lang, "addParameter")}</Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}