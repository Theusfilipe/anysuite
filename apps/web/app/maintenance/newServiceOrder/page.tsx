"use client";

import { getTranslation } from "./../../../../../packages/i18n/index";
import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";

const lang = "pt";

interface ServiceRequest {
  id: string;
  code: string;
  name: string;
  date: string;
}

interface ServiceEquipment {
  id: string;
  code: string;
  name: string;
  location: string;
}

const serviceRequests: ServiceRequest[] = [
  { id: "1", code: "SR-1001", name: "Fix Compressor", date: "2025-02-15" },
  { id: "2", code: "SR-1002", name: "Repair Generator", date: "2025-02-16" },
  { id: "3", code: "SR-1003", name: "Replace Hydraulic Pump", date: "2025-02-17" },
  { id: "4", code: "SR-1004", name: "Check Cooling System", date: "2025-02-18" },
  { id: "5", code: "SR-1005", name: "Lubricate Conveyor Belt", date: "2025-02-19" },
];

const serviceEquipments: ServiceEquipment[] = [
  { id: "1", code: "EQ-2001", name: "Compressor X", location: "São Paulo" },
  { id: "2", code: "EQ-2002", name: "Generator Y", location: "Rio de Janeiro" },
  { id: "3", code: "EQ-2003", name: "Hydraulic Pump A", location: "Belo Horizonte" },
  { id: "4", code: "EQ-2004", name: "Cooling System B", location: "Curitiba" },
  { id: "5", code: "EQ-2005", name: "Conveyor Belt C", location: "Porto Alegre" },
];

const serviceOrderTypes = ["Maintenance", "Inspection", "Repair"];

export default function NewServiceOrder() {
  const [formData, setFormData] = useState({
    serviceRequests: [],
    serviceEquipments: [],
    startDate: "",
    observation: "",
    serviceOrderType: "",
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
      <h2>{getTranslation(lang, "newServiceOrder")}</h2>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "serviceOrder")}</InputLabel>
          <Select
            multiple
            name="serviceRequests"
            value={formData.serviceRequests}
            onChange={handleChange}
          >
            {serviceRequests.map((request) => (
              <MenuItem key={request.id} value={request.id}>
                {`${request.code} - ${request.name} (${request.date})`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "equipmentUsed")}</InputLabel>
          <Select
            multiple
            name="serviceEquipments"
            value={formData.serviceEquipments}
            onChange={handleChange}
          >
            {serviceEquipments.map((equipment) => (
              <MenuItem key={equipment.id} value={equipment.id}>
                {`${equipment.code} - ${equipment.name} (${equipment.location})`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label={getTranslation(lang, "startDate")}
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          fullWidth
          multiline
          rows={4}
          label={getTranslation(lang, "observation")}
          name="observation"
          value={formData.observation}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "serviceOrderType")}</InputLabel>
          <Select
            name="serviceOrderType"
            value={formData.serviceOrderType}
            onChange={handleChange}
          >
            {serviceOrderTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          {getTranslation(lang, "createServiceOrder")}
        </Button>
      </form>
    </Box>
  );
}
