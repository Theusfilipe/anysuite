"use client";

import { getCurrencyAdornment, getTranslation } from "../../../../../packages/i18n/src/getTranslation";
import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Button, Input, InputAdornment, OutlinedInput } from "@mui/material";

const lang = "pt";
const currency = "brReal";

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
    salary: "0,00",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formatCurrency = (value: string) => {
    let numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue === "") return "0,00";
    numericValue = (Number(numericValue) / 100).toFixed(2);
    return `${numericValue.replace(".", ",")}`;
  };

  const handleUnitaryCostChange = (e: any) => {
    const formattedValue = formatCurrency(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      salary: formattedValue,
    }));
  };

  const handleLeftZeros = (e: any) => {
    let value = e.target.value;
    if (value === "0") {
      value = "";
    }
    
    setFormData((prevData) => ({
      ...prevData,
      weight: value,
    }));
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
          <InputLabel htmlFor={String(getTranslation(lang,"role"))}>{getTranslation(lang, "role")}</InputLabel>
          <Select name="role" value={formData.role} onChange={handleChange} label={getTranslation(lang, "role")}>
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
          <InputLabel htmlFor="bloodType">{getTranslation(lang, "bloodType")}</InputLabel>
          <Select name="bloodType" value={formData.bloodType} onChange={handleChange} label={getTranslation(lang, "bloodType")}>
            {bloodTypes.map((type) => (
              <MenuItem key={type} value={type}>
          {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: 2 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount" shrink>{getTranslation(lang, "salary")}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            name="salary"
            label={getTranslation(lang, "salary")}
            value={formData.salary}
            onChange={handleUnitaryCostChange}
            startAdornment={<InputAdornment position="start">{getCurrencyAdornment(currency)}</InputAdornment>}
          />
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          {getTranslation(lang, "addNewEmployee")}
        </Button>
      </form>
    </Box>
  );
}
