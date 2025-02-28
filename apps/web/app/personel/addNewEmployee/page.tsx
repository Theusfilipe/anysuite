"use client";

import { getTranslation } from "./../../../../../packages/i18n/index";
import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Button, Input, InputAdornment } from "@mui/material";

const lang = "pt";

const roles = ["Engineer", "Technician", "Manager", "Operator"];
const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function NewEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    role: "",
    admissionDate: "",
    occupationalHealthCertificate: "",
    bloodType: "",
    salary: "",
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
      <h2>{getTranslation(lang, "addNewEmployee")}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label={getTranslation(lang, "employeeName")}
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          label={getTranslation(lang, "telephone")}
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          label={getTranslation(lang, "email")}
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "role")}</InputLabel>
          <Select name="role" value={formData.role} onChange={handleChange}>
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label={getTranslation(lang, "admissionDate")}
          type="date"
          name="admissionDate"
          value={formData.admissionDate}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          fullWidth
          label={getTranslation(lang, "occupationalHealthCertificate")}
          name="occupationalHealthCertificate"
          value={formData.occupationalHealthCertificate}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "bloodType")}</InputLabel>
          <Select name="bloodType" value={formData.bloodType} onChange={handleChange}>
            {bloodTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">{getTranslation(lang, "salary")}</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">{getTranslation(lang,"moneyAdornment")}</InputAdornment>}
          />
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          {getTranslation(lang, "addNewEmployee")}
        </Button>
      </form>
    </Box>
  );
}
