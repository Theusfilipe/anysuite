
"use client";

import { getTranslation } from "./../../../../../packages/i18n/index";
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

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

interface Employee {
  id: string;
  name: string;
}

interface SparePart {
  id: string;
  name: string;
}

const serviceRequests: ServiceRequest[] = [
  { id: "1", code: "SR-1001", name: "Fix Compressor", date: "2025-02-15" },
  { id: "2", code: "SR-1002", name: "Repair Generator", date: "2025-02-16" },
];

const employees: Employee[] = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Robert Johnson" },
];

const serviceEquipments: ServiceEquipment[] = [
  { id: "1", code: "EQ-2001", name: "Compressor X", location: "São Paulo" },
  { id: "2", code: "EQ-2002", name: "Generator Y", location: "Rio de Janeiro" },
];

const spareParts: SparePart[] = [
  { id: "1", name: "Filter A" },
  { id: "2", name: "Oil B" },
  { id: "3", name: "Belt C" },
];

export default function EditServiceOrder() {
  const [order, setOrder] = useState({
    requests: [],
    equipments: [],
    startDate: "",
  });

  const [tableData, setTableData] = useState([
    { employee: "", date: "", startTime: "", endTime: "", equipmentUsed: "", sparePartUsed: "" },
  ]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleTableChange = (index: number, field: string, value: string) => {
    const newData = [...tableData];
    (newData[index] as any)[field] = value;
    setTableData(newData);
  };

  const addRow = () => {
    setTableData([...tableData, { employee: "", date: "", startTime: "", endTime: "", equipmentUsed: "", sparePartUsed: "" }]);
  };

  const deleteRow = (index: number) => {
    setTableData(tableData.filter((_, i) => i !== index));
  };

  const handleCloseOrder = () => {
    console.log("Ordem de serviço fechada");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "editServiceOrder")}</h2>

      {/* Formulário para editar a ordem de serviço */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>{getTranslation(lang, "serviceOrder")}</InputLabel>
        <Select multiple name="requests" value={order.requests.length ? order.requests : ["1", "2"]} onChange={handleChange}>
          {serviceRequests.map((request) => (
            <MenuItem key={request.id} value={request.id}>
              {`${request.code} - ${request.name} (${request.date})`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>{getTranslation(lang, "equipmentsToBeFixed")}</InputLabel>
        <Select multiple name="equipments" value={order.equipments.length ? order.equipments : ["1"]} onChange={handleChange}>
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
        value={order.startDate}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
        InputLabelProps={{ shrink: true }}
      />

      {/* Tabela Editável */}
      <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang,"employee")}</TableCell>
              <TableCell>{getTranslation(lang,"date")}</TableCell>
              <TableCell>{getTranslation(lang,"startTime")}</TableCell>
              <TableCell>{getTranslation(lang,"endTime")}</TableCell>
              <TableCell>{getTranslation(lang,"equipmentUsed")}</TableCell>
              <TableCell>{getTranslation(lang,"sparePartUsed")}</TableCell>
              <TableCell>{getTranslation(lang,"action")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Select value={row.employee} onChange={(e) => handleTableChange(index, "employee", e.target.value)}>
                    {employees.map((emp) => (
                      <MenuItem key={emp.id} value={emp.name}>{emp.name}</MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <TextField type="date" value={row.date} onChange={(e) => handleTableChange(index, "date", e.target.value)} />
                </TableCell>
                <TableCell>
                  <TextField type="time" value={row.startTime} onChange={(e) => handleTableChange(index, "startTime", e.target.value)} />
                </TableCell>
                <TableCell>
                  <TextField type="time" value={row.endTime} onChange={(e) => handleTableChange(index, "endTime", e.target.value)} />
                </TableCell>
                <TableCell>
                  <Select value={row.equipmentUsed} onChange={(e) => handleTableChange(index, "equipmentUsed", e.target.value)}>
                    {serviceEquipments.map((eq) => (
                      <MenuItem key={eq.id} value={eq.name}>{eq.name}</MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <Select value={row.sparePartUsed} onChange={(e) => handleTableChange(index, "sparePartUsed", e.target.value)}>
                    {spareParts.map((sp) => (
                      <MenuItem key={sp.id} value={sp.name}>{sp.name}</MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => deleteRow(index)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={7} align="center">
                <Button onClick={addRow} startIcon={<Add />}>
                  {getTranslation(lang, "addLine")}
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
