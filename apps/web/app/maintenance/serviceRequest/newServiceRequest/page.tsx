"use client";

import { getTranslation } from "@repo/i18n/getTranslation";
import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const lang = "pt";

export default function newServiceRequest() {

  const{ data: session } = useSession({
      required: true,
      onUnauthenticated() {
        redirect("/api/auth/callback/credentials");
      }
    });

  const [formData, setFormData] = useState({
    base: "",
    location: "",
    serviceName: "",
    equipmentName: "",
    problemDescription: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const locations = [
    { key: "1", label: "Base Araruama" },
    { key: "2", label: "RCS Anequim" },
    { key: "3", label: "RCS Capitão" },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "newServiceRequest")}</h2>
      <form onSubmit={handleSubmit}>
      <TextField
          fullWidth
          label={getTranslation(lang, "serviceName")}
          name="serviceName"
          value={formData.serviceName}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />


        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "baseWhereEquipmentIsLocated")}</InputLabel>
          <Select name="base" value={formData.base} onChange={handleChange}>
            {locations.map((location) => (
              <MenuItem key={location.key} value={location.key}>
                {location.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        
        
          
        <TextField
          fullWidth
          label={getTranslation(lang, "locationOfEquipment")}
          name="location"
          value={formData.location}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        

        <TextField
          fullWidth
          label={getTranslation(lang, "nameOfEquipment")}
          name="equipmentName"
          value={formData.equipmentName}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          multiline
          rows={4}
          label={getTranslation(lang, "textOfProblem")}
          name="problemDescription"
          value={formData.problemDescription}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        <Button type="submit" variant="contained" color="primary">
          {getTranslation(lang, "createRequest")}
        </Button>
      </form>
    </Box>
  );
}