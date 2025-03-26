"use client";

import { getTranslation } from "../../../../../../packages/i18n";
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

const lang = "pt";

interface Checklist {
  id: string;
  type: string;
  certificate: string;
  equipmentId: string;
  equipmentName: string;
  checklistDate: string;
  quantityOfDaysBetweenMaintenance: number;
  status: string;
}

const initialChecklist: Checklist = {
  id: "C-001",
  type: "Compressor Diesel",
  certificate: "CSSM 19-030",
  equipmentId: "EQ-001",
  equipmentName: "Compressor X",
  checklistDate: "2025-03-01",
  quantityOfDaysBetweenMaintenance: 90,
  status: "opened",
};

export default function EditChecklist() {
  const [formData, setFormData] = useState(initialChecklist);
  const [isEditing, setIsEditing] = useState(false);
  const [checklistData, setChecklistData] = useState([
    { item: "Pressão do óleo" },
    { item: "Verificação vazamentos" },
    { item: "Tensão nas Correias" },
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
          <OutlinedInput name="type" value={formData.type} onChange={handleChange} disabled={!isEditing} />
        </FormControl>
        
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "certificate")}</InputLabel>
          <OutlinedInput name="certificate" value={formData.certificate} onChange={handleChange} disabled={!isEditing} />
        </FormControl>

        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "equipmentId")}</InputLabel>
          <OutlinedInput name="equipmentId" value={formData.equipmentId} onChange={handleChange} disabled={!isEditing} />
        </FormControl>
        
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "equipmentName")}</InputLabel>
          <OutlinedInput name="equipmentName" value={formData.equipmentName} onChange={handleChange} disabled={!isEditing} />
        </FormControl>
        
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "quantityOfDaysBetweenMaintenance")}</InputLabel>
          <OutlinedInput name="quantityOfDaysBetweenMaintenance" type="number" value={formData.quantityOfDaysBetweenMaintenance} onChange={handleChange} disabled={!isEditing} />
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
                <TableCell colSpan={2} align="center">
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
