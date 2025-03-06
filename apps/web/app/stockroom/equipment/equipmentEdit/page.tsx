"use client";

import { getTranslation } from "../../../../../../packages/i18n/index";
import { useState } from "react";
import { Box, TextField, Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";

const lang = "pt";

const initialEquipment = {
  id: "EQ-001",
  name: "Compressor X",
  lastMaintenanceDate: "2025-01-15",
  nextMaintenanceDate: "2025-04-15",
  quantityOfDaysBetweenMaintenance: 90,
};

export default function EquipmentInfoForm() {
  const [formData, setFormData] = useState(initialEquipment);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Equipment Info:", formData);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "equipmentInfo")}</h2>
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="outlined-adornment-id">{getTranslation(lang, "id")}</InputLabel>
        <OutlinedInput
        id="outlined-adornment-id"
        name="id"
        value={formData.id}
        onChange={handleChange}
        label={getTranslation(lang, "equipmentId")}
        disabled
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="outlined-adornment-name">{getTranslation(lang, "equipmentName")}</InputLabel>
        <OutlinedInput
        id="outlined-adornment-name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        label={getTranslation(lang, "equipmentName")}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="outlined-adornment-lastMaintenanceDate">{getTranslation(lang, "lastMaintenanceDate")}</InputLabel>
        <OutlinedInput
        id="outlined-adornment-lastMaintenanceDate"
        name="lastMaintenanceDate"
        type="date"
        value={formData.lastMaintenanceDate}
        onChange={handleChange}
        label={getTranslation(lang, "lastMaintenanceDate")}
        
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="outlined-adornment-nextMaintenanceDate">{getTranslation(lang, "nextMaintenanceDate")}</InputLabel>
        <OutlinedInput
        id="outlined-adornment-nextMaintenanceDate"
        name="nextMaintenanceDate"
        type="date"
        value={formData.nextMaintenanceDate}
        onChange={handleChange}
        label={getTranslation(lang, "nextMaintenanceDate")}
        
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="outlined-adornment-quantityOfDaysBetweenMaintenance">{getTranslation(lang, "quantityOfDaysBetweenMaintenance")}</InputLabel>
        <OutlinedInput
        id="outlined-adornment-quantityOfDaysBetweenMaintenance"
        name="quantityOfDaysBetweenMaintenance"
        type="number"
        value={formData.quantityOfDaysBetweenMaintenance}
        onChange={handleChange}
        label={getTranslation(lang, "quantityOfDaysBetweenMaintenance")}
        />
      </FormControl>
      <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
        {getTranslation(lang, "saveChanges")}
      </Button>
    </form>
    </Box>
  );
}