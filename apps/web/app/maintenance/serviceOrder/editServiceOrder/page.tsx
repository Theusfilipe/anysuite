
"use client";

import { getTranslation } from "../../../../../../packages/i18n/src/getTranslation";
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
  Fab,
} from "@mui/material";
import { Add, Delete, Save as SaveIcon, Edit as EditIcon } from "@mui/icons-material";
import ButtonLabelAndIcon from "@repo/ui/buttonLabelAndIcon";

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

const downloadPDF = async () => {
  try {
      const response = await fetch("/api/pdf"); // Rota do Next.js
      if (!response.ok) throw new Error("Erro ao gerar PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Criar um link temporário para baixar o arquivo
      const a = document.createElement("a");
      a.href = url;
      a.download = "ordem_servico.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  } catch (error) {
      console.error("Erro ao baixar PDF:", error);
  }
};


export default function EditServiceOrder() {
  const [order, setOrder] = useState({
    requests: [],
    equipments: [],
    startDate: "2025-01-11",
    endDate: "",
    });

  const [isClosed, setIsClosed] = useState(false);
  const [isEditing, setIsEditing] = useState(true);
  const [isSigned, setIsSigned] = useState(false);

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

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const toggleClosed = () => {
    setIsClosed(!isClosed);
    setIsEditing(!isEditing);
  };

  const toggleSigned = () => {
    setIsEditing(false);
    setIsSigned(true);
    const today = new Date().toISOString().split("T")[0];
  
    setOrder((prevOrder) => ({
      ...prevOrder,
      endDate: today || "", // Ensure endDate is always a string
    }));
  };
  
  const [signedDate, setSignedDate] = useState<string>("");

  return (
    <Box sx={{ padding: 3 }}>
      
      <Fab color={isEditing ? "primary" : "secondary"} disabled={isSigned} onClick={toggleEdit} sx={{ position: "fixed", top: 80, right: 30 }}>
        {isEditing ? <SaveIcon /> : <EditIcon />}
      </Fab>
      

      <h2>{getTranslation(lang, "editServiceOrder")}</h2>

      {/* Formulário para editar a ordem de serviço */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="service-order">{getTranslation(lang, "serviceOrder")}</InputLabel>
        <Select id="service-order" label={getTranslation(lang,"serviceOrder")} disabled={!isEditing} multiple name="requests" value={order.requests.length ? order.requests : ["1", "2"]} onChange={handleChange}>
          {serviceRequests.map((request) => (
            <MenuItem key={request.id} value={request.id}>
              {`${request.code} - ${request.name} (${request.date})`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="equipment-to-fixed">{getTranslation(lang, "equipmentsToBeFixed")}</InputLabel>
        <Select id="equipment-to-fixed" label={getTranslation(lang,"equipmentsToBeFixed")} disabled={!isEditing} multiple name="equipments" value={order.equipments.length ? order.equipments : ["1"]} onChange={handleChange}>
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
        disabled={!isEditing}
        value={order.startDate}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
        InputLabelProps={{ shrink: true }}
      />

      {order.endDate && (
        <TextField 
          fullWidth
          label={getTranslation(lang, "endDate")}
          type="date"
          name="endDate"
          disabled={!isEditing}
          value={order.endDate}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
          InputLabelProps={{ shrink: true }}
        />
      )}

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
                  <Select disabled={!isEditing} value={row.employee} onChange={(e) => handleTableChange(index, "employee", e.target.value)}>
                    {employees.map((emp) => (
                      <MenuItem key={emp.id} value={emp.name}>{emp.name}</MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <TextField disabled={!isEditing} type="date" value={row.date} onChange={(e) => handleTableChange(index, "date", e.target.value)} />
                </TableCell>
                <TableCell>
                  <TextField disabled={!isEditing} type="time" value={row.startTime} onChange={(e) => handleTableChange(index, "startTime", e.target.value)} />
                </TableCell>
                <TableCell>
                  <TextField disabled={!isEditing} type="time" value={row.endTime} onChange={(e) => handleTableChange(index, "endTime", e.target.value)} />
                </TableCell>
                <TableCell>
                  <Select disabled={!isEditing} value={row.equipmentUsed} onChange={(e) => handleTableChange(index, "equipmentUsed", e.target.value)}>
                    {serviceEquipments.map((eq) => (
                      <MenuItem key={eq.id} value={eq.name}>{eq.name}</MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <Select disabled={!isEditing} value={row.sparePartUsed} onChange={(e) => handleTableChange(index, "sparePartUsed", e.target.value)}>
                    {spareParts.map((sp) => (
                      <MenuItem key={sp.id} value={sp.name}>{sp.name}</MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <IconButton disabled={!isEditing} onClick={() => deleteRow(index)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={7} align="center">
                <Button disabled={!isEditing} onClick={addRow} startIcon={<Add />}>
                  {getTranslation(lang, "addLine")}
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button disabled={isClosed} onClick={toggleClosed} variant="contained" color="primary">
        Fechar Ordem de Serviço
      </Button>
      <Button disabled={isSigned || !isClosed} onClick={toggleSigned} variant="contained" color="primary">
        {getTranslation(lang, "sign")}
      </Button>
      <ButtonLabelAndIcon disabled={!isSigned} icon="Print" text={String(getTranslation(lang, "print"))} onClick={downloadPDF} />
    </Box>
  );
}
