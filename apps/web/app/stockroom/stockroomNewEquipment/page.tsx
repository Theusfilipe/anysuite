"use client";

import { getTranslation } from "./../../../../../packages/i18n/index";
import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const lang = "pt";

export default function StockroomNewEquipment() {
  const [formData, setFormData] = useState({
    equipment_name: "",
    lastMaintenanceDate: "",
    quantityOfDaysBetweenMaintenance: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "newEquipment")}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label={getTranslation(lang, "equipmentName")}
          name="equipment_name"
          value={formData.equipment_name}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          label={getTranslation(lang, "lastMaintenanceDate")}
          type="date"
          name="lastMaintenanceDate"
          value={formData.lastMaintenanceDate}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          fullWidth
          label={getTranslation(lang, "quantityOfDaysBetweenMaintenance")}
          type="number"
          name="quantityOfDaysBetweenMaintenance"
          value={formData.quantityOfDaysBetweenMaintenance}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        <Button type="submit" variant="contained" color="primary">
          {getTranslation(lang, "addEquipment")}
        </Button>
      </form>
    </Box>
  );
}