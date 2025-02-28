"use client";

import { getTranslation } from "./../../../../../packages/i18n/index";
import { useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from "@mui/material";

const lang = "pt";

const employees = [
  { id: 1, name: "John Doe", telephone: "(11) 99999-9999", email: "john@example.com", role: "Engineer", admissionDate: "2023-01-10", bloodType: "O+", salary: 5000 },
  { id: 2, name: "Jane Smith", telephone: "(21) 98888-8888", email: "jane@example.com", role: "Technician", admissionDate: "2022-05-15", bloodType: "A+", salary: 4500 },
];

export default function EmployeeList() {
  const [nameFilter, setNameFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      employee.role.toLowerCase().includes(roleFilter.toLowerCase())
  );

  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "listEmployee")}</h2>
      
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label={getTranslation(lang, "filterByName")}
          variant="outlined"
          size="small"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <TextField
          label={getTranslation(lang, "filterByRole")}
          variant="outlined"
          size="small"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "employeeName")}</TableCell>
              <TableCell>{getTranslation(lang, "telephone")}</TableCell>
              <TableCell>{getTranslation(lang, "email")}</TableCell>
              <TableCell>{getTranslation(lang, "role")}</TableCell>
              <TableCell>{getTranslation(lang, "admissionDate")}</TableCell>
              <TableCell>{getTranslation(lang, "bloodType")}</TableCell>
              <TableCell>{getTranslation(lang, "salary")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.telephone}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>{employee.admissionDate}</TableCell>
                <TableCell>{employee.bloodType}</TableCell>
                <TableCell>{getTranslation(lang,"moneyAdornment")+ employee.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
        {getTranslation(lang, "addEmployee")}
      </Button>
    </Box>
  );
}
