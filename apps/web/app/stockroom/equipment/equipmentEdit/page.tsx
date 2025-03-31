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

const lang = "pt";

const initialEquipment = {
  id: "EQ-001",
  name: "Compressor X",
  brand: "Brand X",
  seriesNumber: "SN123456",
  weight: 120,
  height: 50,
  width: 30,
  depth: 40,
  lastMaintenanceDate: "2025-01-15",
  nextMaintenanceDate: "2025-04-15",
  quantityOfDaysBetweenMaintenance: 90,
};

export default function EquipmentInfoForm() {
  const [formData, setFormData] = useState(initialEquipment);
  const [isEditing, setIsEditing] = useState(false);
  const [equipmentData, setEquipmentData] = useState([
    { key: "Pressão de Operação", value: "14,2 kgf/cm²" },
    { key: "Tipo do Motor", value: "Diesel" },
    { key: "Vazão Volumétrica", value: "750 l/min" },
    { key: "Fabricante do Motor", value: "Branco" },
    { key: "Tipo do Compressor", value: "Alternativo de pistão" },
    { key: "Potência do Motor", value: "7,5 CV" },
    { key: "Óleo lubrificante", value: "Mineral não detergente" },
    { key: "Número", value: "141709 A" },
    { key: "Fabricante", value: "PRESSURE" },
    { key: "Ø Polia (mm)", value: "100 mm" },
    { key: "Diâmetro do Volante (mm)", value: "" },
    { key: "Correia", value: "A80" },
    { key: "Modelo", value: "S-600" },
    { key: "Nº de Série", value: "141709" },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDataChange = (index: number, field: "key" | "value", value: string) => {
    const newData = [...equipmentData];
    if (newData[index]) {
      newData[index][field] = value;
    }
    setEquipmentData(newData);
  };

  const addRow = () => {
    setEquipmentData([...equipmentData, { key: "", value: "" }]);
  };

  const deleteRow = (index: number) => {
    setEquipmentData(equipmentData.filter((_, i) => i !== index));
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
          <InputLabel>{getTranslation(lang, "ID")}</InputLabel>
          <OutlinedInput name="id" value={formData.id} label={getTranslation(lang, "ID")} disabled />
        </FormControl>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "equipmentName")}</InputLabel>
          <OutlinedInput name="name" value={formData.name} onChange={handleChange} label={getTranslation(lang, "equipmentName")} disabled={!isEditing} />
        </FormControl>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "brand")}</InputLabel>
          <OutlinedInput name="brand" value={formData.brand} onChange={handleChange} label={getTranslation(lang, "brand")} disabled={!isEditing} />
        </FormControl>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "seriesNumber")}</InputLabel>
          <OutlinedInput name="seriesNumber" value={formData.seriesNumber} onChange={handleChange} label={getTranslation(lang, "seriesNumber")} disabled={!isEditing} />
        </FormControl>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "weight")}</InputLabel>
          <OutlinedInput name="weight" type="number" value={formData.weight} onChange={handleChange} label={getTranslation(lang, "weight")} disabled={!isEditing} />
        </FormControl>
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          <FormControl variant="outlined" sx={{ flex: 1 }}>
            <InputLabel>{getTranslation(lang, "height")}</InputLabel>
            <OutlinedInput name="height" type="number" value={formData.height} onChange={handleChange} label={getTranslation(lang, "height")} disabled={!isEditing} />
          </FormControl>
          <FormControl variant="outlined" sx={{ flex: 1 }}>
            <InputLabel>{getTranslation(lang, "width")}</InputLabel>
            <OutlinedInput name="width" type="number" value={formData.width} onChange={handleChange} label={getTranslation(lang, "width")} disabled={!isEditing} />
          </FormControl>
          <FormControl variant="outlined" sx={{ flex: 1 }}>
            <InputLabel>{getTranslation(lang, "depth")}</InputLabel>
            <OutlinedInput name="depth" type="number" value={formData.depth} onChange={handleChange} label={getTranslation(lang, "depth")} disabled={!isEditing} />
          </FormControl>
        </Box>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "lastMaintenanceDate")}</InputLabel>
          <OutlinedInput name="lastMaintenanceDate" type="date" value={formData.lastMaintenanceDate} onChange={handleChange} label={getTranslation(lang, "lastMaintenanceDate")} disabled={!isEditing} />
        </FormControl>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel htmlFor="outlined-next-maintenance-date">{getTranslation(lang, "nextMaintenanceDate")}</InputLabel>
          <OutlinedInput id="outlined-next-maintenance-date" name="nextMaintenanceDate" type="date" value={formData.nextMaintenanceDate} onChange={handleChange} label={getTranslation(lang, "nextMaintenanceDate")} disabled={!isEditing} />
        </FormControl>
      </form>
      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "parameter")}</TableCell>
              <TableCell>{getTranslation(lang, "value")}</TableCell>
              <TableCell>{getTranslation(lang, "action")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {equipmentData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <OutlinedInput value={row.key} onChange={(e) => handleDataChange(index, "key", e.target.value)} disabled={!isEditing} />
                </TableCell>
                <TableCell>
                  <OutlinedInput value={row.value} onChange={(e) => handleDataChange(index, "value", e.target.value)} disabled={!isEditing} />
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