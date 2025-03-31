"use client";

import { getTranslation } from "../../../../../packages/i18n/src/getTranslation";
import { useState } from "react";
import { Box, TextField, Button, FormControl, InputLabel, OutlinedInput, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Delete from '@mui/icons-material/Delete';
import { Add } from "@mui/icons-material";

const lang = "pt";

const initialEquipment = {
  id: "",
  name: "",
  brand: "",
  seriesNumber: "",
  weight: 0,
  height: 0,
  width: 0,
  depth: 0,
  lastMaintenanceDate: "",
  nextMaintenanceDate: "",
  quantityOfDaysBetweenMaintenance: 0,
};



export default function StockroomNewEquipment() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    brand: "",
    seriesNumber: "",
    weight: 0,
    height: 0,
    width: 0,
    depth: 0,
    lastMaintenanceDate: "",
    nextMaintenanceDate: "",
    quantityOfDaysBetweenMaintenance: 0,
  });

  const [equipmentData, setEquipmentData] = useState([
    { key: "", value: "" },
    
  ]);

  const handleChange = (e: any) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "newEquipment")}</h2>
      <form onSubmit={handleSubmit}>
      <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>{getTranslation(lang, "equipmentName")}</InputLabel>
        <OutlinedInput name="name" value={formData.name} onChange={handleChange} label={getTranslation(lang, "equipmentName")} />
      </FormControl>

      <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>{getTranslation(lang, "brand")}</InputLabel>
        <OutlinedInput name="brand" value={formData.brand} onChange={handleChange} label={getTranslation(lang, "brand")}  />
      </FormControl>

      <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>{getTranslation(lang, "seriesNumber")}</InputLabel>
        <OutlinedInput name="seriesNumber" value={formData.seriesNumber} onChange={handleChange} label={getTranslation(lang, "seriesNumber")}  />
      </FormControl>

      <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>{getTranslation(lang, "weight")}</InputLabel>
        <OutlinedInput name="weight" type="number" value={formData.weight} onChange={handleChange} label={getTranslation(lang, "weight")}  />
      </FormControl>

      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <FormControl variant="outlined" sx={{ flex: 1 }}>
          <InputLabel>{getTranslation(lang, "height")}</InputLabel>
          <OutlinedInput name="height" type="number" value={formData.height} onChange={handleChange} label={getTranslation(lang, "height")}  />
        </FormControl>
        <FormControl variant="outlined" sx={{ flex: 1 }}>
          <InputLabel>{getTranslation(lang, "width")}</InputLabel>
          <OutlinedInput name="width" type="number" value={formData.width} onChange={handleChange} label={getTranslation(lang, "width")} />
        </FormControl>
        <FormControl variant="outlined" sx={{ flex: 1 }}>
          <InputLabel>{getTranslation(lang, "depth")}</InputLabel>
          <OutlinedInput name="depth" type="number" value={formData.depth} onChange={handleChange} label={getTranslation(lang, "depth")} />
        </FormControl>
      </Box>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel shrink htmlFor="last-maintenance-date">{getTranslation(lang, "lastMaintenanceDate")}</InputLabel>
          <OutlinedInput
            id="last-maintenance-date"
            name="lastMaintenanceDate"
            type="date"
            value={formData.lastMaintenanceDate}
            onChange={handleChange}
            label={getTranslation(lang, "lastMaintenanceDate")}
            notched
          />
        </FormControl>
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
                  <OutlinedInput value={row.key} onChange={(e) => handleDataChange(index, "key", e.target.value)} />
                </TableCell>
                <TableCell>
                  <OutlinedInput value={row.value} onChange={(e) => handleDataChange(index, "value", e.target.value)}  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => deleteRow(index)} ><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <Button onClick={addRow} startIcon={<Add />}>{getTranslation(lang, "addParameter")}</Button>
                </TableCell>
              </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
      
        

        <Button type="submit" variant="contained" color="primary">
          {getTranslation(lang, "addEquipment")}
        </Button>
      </form>
    </Box>
  );
}