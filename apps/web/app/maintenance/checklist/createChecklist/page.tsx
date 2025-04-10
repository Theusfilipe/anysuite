"use client";


import { getTranslation } from "@repo/i18n/getTranslation";
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Add, Delete, Save as SaveIcon, Edit as EditIcon } from "@mui/icons-material";
import { Certificate } from "crypto";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const lang = "pt";

interface Checklist {
  type: string;
  certificate: string;
  equipmentId: string;
  equipmentName: string;
  quantityOfDaysBetweenMaintenance: number;
}


const initialChecklist: Checklist = {
  type: "",
  certificate: "",
  equipmentId: "",
  equipmentName: "",
  quantityOfDaysBetweenMaintenance: 0,
};

const compressorDieselChecklist = [
  { item: "Pressão do óleo", value: "", observation: "" },
  { item: "Verificação vazamentos", value: "", observation: "" },
  { item: "Tensão nas Correias", value: "", observation: "" },
  { item: "Correia sobressalente", value: "", observation: "" },
  { item: "Fixação no Skid", value: "", observation: "" },
  { item: "Válvulas de Segurança", value: "", observation: "" },
  { item: "Bico e Bomba Injetora", value: "", observation: "" },
  { item: "Fixação do motor/compressor", value: "", observation: "" },
  { item: "Filtros de Ar de aspiração", value: "", observation: "" },
  { item: "Mangotes", value: "", observation: "" },
  { item: "Serpentina", value: "", observation: "" },
  { item: "Filtro de Combustível", value: "", observation: "" },
  { item: "Filtro de Condensação", value: "", observation: "" },
  { item: "Comando elétrico e manual", value: "", observation: "" },
  { item: "Horas Trabalhadas", value: "", observation: "" },
  { item: "Plaqueta de identificação", value: "", observation: "" },
  { item: "Exame Visual da Válvula de Alívio", value: "", observation: "" },
  { item: "Teste de Função na Configuração de Alívio", value: "", observation: "" },
  { item: "Teste das Tubulações", value: "", observation: "" },
  { item: "Exame Visual das Tubulações", value: "", observation: "" },
  { item: "Teste de vazamento de gás", value: "", observation: "" },
  { item: "Exame Visual Receptores", value: "", observation: "" },
  { item: "Exame Visual Elétrica", value: "", observation: "" },
  { item: "Exame Visual Operacional", value: "", observation: "" },
  { item: "Taxa de Entrega e Pressão", value: "", observation: "" },
  { item: "Pureza da Saída", value: "", observation: "" },
];
const umbilicalMergulhoChecklist = [
  { item: "Terminais", value: "", observation: "" },
  { item: "Empate", value: "", observation: "" },
  { item: "Gaiolas", value: "", observation: "" },
  { item: "Mosquetão", value: "", observation: "" },
  { item: "Proteção Espiral", value: "", observation: "" },
  { item: "Cabo de Vida", value: "", observation: "" },
  { item: "Identificação", value: "", observation: "" },
  { item: "Pneumo", value: "", observation: "" },
  { item: "Exame visual - equip. elétrico", value: "", observation: "" },
  { item: "Teste de função - equip. elétrico", value: "", observation: "" },
  { item: "Teste de continuidade e resistência de cabos - equip. elétrico", value: "", observation: "" },
  { item: "Exame visual - mangueira", value: "", observation: "" },
  { item: "Teste vazamento pressão máxima - mangueira", value: "", observation: "" }
];



export default function CreateChecklist() {

  const{ data: session } = useSession({
      required: true,
      onUnauthenticated() {
        redirect("/api/auth/callback/credentials");
      }
    });

  const [formData, setFormData] = useState(initialChecklist);
  const [checklistData, setChecklistData] = useState<{ item: string; value: string; observation: string }[]>([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  
    if (name === "type") {
      if (value === "Compressor Diesel") {
        setChecklistData(compressorDieselChecklist);
      }
      if (value === "Umbilical de Mergulho") {
        setChecklistData(umbilicalMergulhoChecklist);
      } else {
        setChecklistData([]); // Caso queira resetar se outro tipo for escolhido
      }
    }
  };

  const handleDataChange = (index: number, field: "value" | "observation", newValue: string) => {
    const newData = [...checklistData];
    if (newData[index]) {
      newData[index][field] = newValue;
    }
    if (field === "value" && newValue === "conforme") {
      if (newData[index]) {
        newData[index]["observation"] = "";
      }
    }
    setChecklistData(newData);
  };


  return (
      
      <Box sx={{ padding: 3 }}>
      
      <form>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "type")}</InputLabel>
            <Select name="type" value={formData.type} onChange={handleChange} label={getTranslation(lang, "type")}>
              <MenuItem value="Compressor Diesel">Compressor Diesel</MenuItem>
              <MenuItem value="Umbilical de Mergulho">Umbilical de Mergulho</MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "certificate")}</InputLabel>
          <OutlinedInput name="certificate" value={formData.certificate} onChange={handleChange} label={getTranslation(lang, "certificate")} />
        </FormControl>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "equipmentId")}</InputLabel>
          <OutlinedInput name="equipmentId" value={formData.equipmentId} onChange={handleChange} label={getTranslation(lang, "equipmentId")} />
        </FormControl>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "equipmentName")}</InputLabel>
          <OutlinedInput name="equipmentName" value={formData.equipmentName} onChange={handleChange} label={getTranslation(lang, "equipmentName")} />
        </FormControl>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "quantityOfDaysBetweenMaintenance")}</InputLabel>
          <OutlinedInput name="quantityOfDaysBetweenMaintenance" type="number" label={getTranslation(lang, "quantityOfDaysBetweenMaintenance")} value={formData.quantityOfDaysBetweenMaintenance} onChange={handleChange}/>
        </FormControl>
      </form>

      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "activity")}</TableCell>
              <TableCell>{getTranslation(lang, "value")}</TableCell>
              <TableCell>{getTranslation(lang, "observation")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checklistData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.item}</TableCell>
                <TableCell>
                  <FormControl>
                    <RadioGroup
                      value={row.value}
                      onChange={(e) => handleDataChange(index, "value", e.target.value)}
                    >
                      <FormControlLabel value="conforme" control={<Radio />} label="conforme" />
                      <FormControlLabel value="inconforme" control={<Radio />} label="inconforme" />
                    </RadioGroup>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <OutlinedInput
                    value={row.observation}
                    onChange={(e) => handleDataChange(index, "observation", e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}