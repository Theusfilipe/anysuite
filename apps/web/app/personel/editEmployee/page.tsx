"use client";

import { getCurrencyAdornment, getTranslation } from "../../../../../packages/i18n/src/getTranslation";
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  InputAdornment,
  OutlinedInput,
  SelectChangeEvent,
  Fab,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const lang = "pt";
const currency = "brReal";

const roles = ["Engineer", "Technician", "Manager", "Operator"];
const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const initialEmployee = {
  name: "John Doe",
  telephone: "(21) 99999-9999",
  email: "johndoe@example.com",
  role: "Engineer",
  admissionDate: "2023-05-10",
  occupationalHealthCertificate: "Valid",
  bloodType: "O+",
  salary: "5.000,00",
};

export default function EditEmployee() {
  const [formData, setFormData] = useState(initialEmployee);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatCurrency = (value: string) => {
    let numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue === "") return "0,00";
    numericValue = (Number(numericValue) / 100).toFixed(2);
    return `${numericValue.replace(".", ",")}`;
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCurrency(e.target.value);
    setFormData((prevData) => ({ ...prevData, salary: formattedValue }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Box sx={{ padding: 3, position: "relative" }}>
      <Fab
        color={isEditing ? "primary" : "secondary"}
        onClick={toggleEdit}
        sx={{ position: "fixed", top: 80, right: 30 }}
      >
        {isEditing ? <SaveIcon /> : <EditIcon />}
      </Fab>

      <form>
        <TextField fullWidth label={getTranslation(lang, "employeeName")} name="name" value={formData.name} onChange={handleChange} disabled={!isEditing} sx={{ marginBottom: 2 }} />
        <TextField fullWidth label={getTranslation(lang, "telephone")} name="telephone" value={formData.telephone} onChange={handleChange} disabled={!isEditing} sx={{ marginBottom: 2 }} />
        <TextField fullWidth label={getTranslation(lang, "email")} name="email" value={formData.email} onChange={handleChange} disabled={!isEditing} sx={{ marginBottom: 2 }} />
        
        <FormControl fullWidth sx={{ marginBottom: 2 }} disabled={!isEditing}>
          <InputLabel>{getTranslation(lang, "role")}</InputLabel>
          <Select name="role" value={formData.role} onChange={handleSelectChange}>
            {roles.map((role) => (
              <MenuItem key={role} value={role}>{role}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <TextField fullWidth label={getTranslation(lang, "admissionDate")} type="date" name="admissionDate" value={formData.admissionDate} onChange={handleChange} disabled={!isEditing} sx={{ marginBottom: 2 }} InputLabelProps={{ shrink: true }} />
        <TextField fullWidth label={getTranslation(lang, "occupationalHealthCertificate")} name="occupationalHealthCertificate" value={formData.occupationalHealthCertificate} onChange={handleChange} disabled={!isEditing} sx={{ marginBottom: 2 }} />
        
        <FormControl fullWidth sx={{ marginBottom: 2 }} disabled={!isEditing}>
          <InputLabel>{getTranslation(lang, "bloodType")}</InputLabel>
          <Select name="bloodType" value={formData.bloodType} onChange={handleSelectChange} label={getTranslation(lang, "bloodType")}>
            {bloodTypes.map((type) => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <FormControl fullWidth sx={{ marginBottom: 2 }} variant="outlined" disabled={!isEditing}>
          <InputLabel shrink>{getTranslation(lang, "salary")}</InputLabel>
          <OutlinedInput
            name="salary"
            label={getTranslation(lang, "salary")}
            value={formData.salary}
            onChange={handleSalaryChange}
            startAdornment={<InputAdornment position="start">{getCurrencyAdornment(currency)}</InputAdornment>}
          />
        </FormControl>
      </form>
    </Box>
  );
}