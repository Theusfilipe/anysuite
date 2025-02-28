"use client";

import { getTranslation } from "./../../../../../packages/i18n/index";
import { useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from "@mui/material";

const lang = "pt";

const employeeNames = [
    "Ana Silva", "Bruno Souza", "Carlos Pereira", "Carlos Costa", "Carlos Lima",
    "Carlos Alves", "Gabriel Rocha", "Helena Martins", "Helena Mendes", "Helena Castro",
    "Kleber Nascimento", "Larissa Teixeira", "Marcos Ribeiro", "Natália Fernandes", "Otávio Cardoso",
    "Paula Moura", "Quintino Barros", "Rafaela Duarte", "Samuel Lopes", "Tatiane Freitas",
    "Ubirajara Rezende", "Vera Lemos", "Wagner Moreira", "Ximena Assis", "Yasmin Andrade",
    "Zeca Tavares", "Alessandra Pinto", "Bernardo Farias", "Camila Neves", "Diego Vasconcelos",
    "Eliana Campos", "Fabiano Meireles", "Gisele Brito", "Henrique Dutra", "Isabela Fonseca",
    "Joaquim Barbosa", "Kelly Oliveira", "Luiz Gustavo", "Marta Monteiro", "Nelson Paiva",
    "Olga Mendes", "Gustavo Albuquerque", "Gustavo Moraes", "Gustavo Goulart", "Sônia Braga",
    "Thiago Sena", "Ursula Amaral", "Vinícius Machado", "Wellington França", "Zilda Moreira"
  ];
  
  const employees = employeeNames.map((name, i) => ({
    id: i + 1,
    name,
    telephone: `(11) 9000-00${i % 100}`,
    email: `employee${i + 1}@example.com`,
    role: i % 2 === 0 ? "Engineer" : "Technician",
    admissionDate: `202${i % 5}-0${(i % 9) + 1}-15`,
    bloodType: ["O+", "A+", "B+", "AB-"][i % 4],
    salary: 4000 + (i % 10) * 500,
  }));
  

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
