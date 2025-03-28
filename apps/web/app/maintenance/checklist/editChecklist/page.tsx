"use client";

import { getTranslation } from "../../../../../../packages/i18n";
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Fab,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { Add, Delete, Save as SaveIcon, Edit as EditIcon } from "@mui/icons-material";
import ButtonLabelAndIcon from "@repo/ui/buttonLabelAndIcon";

const lang = "pt";

interface Checklist {
  id: string;
  type: string;
  certificate: string;
  equipmentId: string;
  equipmentName: string;
  checklistDate: string;
  quantityOfDaysBetweenMaintenance: number;
  status: string;
}

const initialChecklist: Checklist = {
  id: "C-001",
  type: "Compressor Diesel",
  certificate: "CSSM 19-030",
  equipmentId: "EQ-001",
  equipmentName: "Compressor X",
  checklistDate: "2025-03-01",
  quantityOfDaysBetweenMaintenance: 90,
  status: "Aberta",
};

export default function EditChecklist() {
  const [formData, setFormData] = useState(initialChecklist);
  
  const [checklistData, setChecklistData] = useState([
    { item: "Pressão do óleo", value: "conforme", observation: "" },
    { item: "Verificação vazamentos", value: "inconforme", observation: "Vazamento identificado na válvula principal" },
    { item: "Tensão nas Correias", value: "conforme", observation: "" },
    { item: "Correia sobressalente", value: "inconforme", observation: "Correia de reserva ausente" },
    { item: "Fixação no Skid", value: "conforme", observation: "" },
    { item: "Válvulas de Segurança", value: "conforme", observation: "" },
    { item: "Bico e Bomba Injetora", value: "inconforme", observation: "Bico injetor entupido" },
    { item: "Fixação do motor/compressor", value: "conforme", observation: "" },
    { item: "Filtros de Ar de aspiração", value: "conforme", observation: "" },
    { item: "Mangotes", value: "inconforme", observation: "Mangote apresentando rachaduras" },
    { item: "Serpentina", value: "conforme", observation: "" },
    { item: "Filtro de Combustível", value: "conforme", observation: "" },
    { item: "Filtro de Condensação", value: "inconforme", observation: "Filtro saturado, precisa ser trocado" },
    { item: "Comando elétrico e manual", value: "conforme", observation: "" },
    { item: "Horas Trabalhadas", value: "conforme", observation: "" },
    { item: "Plaqueta de identificação", value: "inconforme", observation: "Plaqueta desgastada, difícil de ler" },
    { item: "Exame Visual da Válvula de Alívio", value: "conforme", observation: "" },
    { item: "Teste de Função na Configuração de Alívio", value: "conforme", observation: "" },
    { item: "Teste das Tubulações", value: "conforme", observation: "" },
    { item: "Exame Visual das Tubulações", value: "inconforme", observation: "Pequenos pontos de corrosão detectados" },
    { item: "Teste de vazamento de gás", value: "inconforme", observation: "Detectado vazamento na conexão do cilindro" },
    { item: "Exame Visual Receptores", value: "conforme", observation: "" },
    { item: "Exame Visual Elétrica", value: "conforme", observation: "" },
    { item: "Exame Visual Operacional", value: "conforme", observation: "" },
    { item: "Taxa de Entrega e Pressão", value: "inconforme", observation: "Pressão abaixo do recomendado" },
    { item: "Pureza da Saída", value: "conforme", observation: "" },
  ]);


  const [isClosed, setIsClosed] = useState(false);
  const [isEditing, setIsEditing] = useState(true);
  const [isSigned, setIsSigned] = useState(false);

  const toggleClosed = () => {
    setIsClosed(!isClosed);
    setIsEditing(!isEditing);
  };

  const toggleSigned = () => {
    setIsEditing(false);
    setIsSigned(true);
    const today = new Date().toISOString().split("T")[0];
  
    //setOrder((prevOrder) => ({
    //  ...prevOrder,
    //  endDate: today || "", // Ensure endDate is always a string
    //}));
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDataChange = (index: number, field: "value" | "observation", newValue: string) => {
    const newData = [...checklistData];
    if (newData[index]) {
      newData[index][field] = newValue;
  
      // Se o valor for alterado para "conforme", limpa a observação
      if (field === "value" && newValue === "conforme") {
        newData[index]["observation"] = "";
      }
    }
    setChecklistData(newData);
  };


  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Fab color={isEditing ? "primary" : "secondary"} disabled={isSigned} onClick={toggleEdit} sx={{ position: "fixed", top: 80, right: 30 }}>
        {isEditing ? <SaveIcon /> : <EditIcon />}
      </Fab>
      <form>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "type")}</InputLabel>
          <OutlinedInput name="type" value={formData.type} onChange={handleChange} disabled={!isEditing} />
        </FormControl>
        
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "certificate")}</InputLabel>
          <OutlinedInput name="certificate" value={formData.certificate} onChange={handleChange} disabled={!isEditing} />
        </FormControl>

        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "equipmentId")}</InputLabel>
          <OutlinedInput name="equipmentId" value={formData.equipmentId} onChange={handleChange} disabled={!isEditing} />
        </FormControl>
        
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "equipmentName")}</InputLabel>
          <OutlinedInput name="equipmentName" value={formData.equipmentName} onChange={handleChange} disabled={!isEditing} />
        </FormControl>
        
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "quantityOfDaysBetweenMaintenance")}</InputLabel>
          <OutlinedInput name="quantityOfDaysBetweenMaintenance" type="number" value={formData.quantityOfDaysBetweenMaintenance} onChange={handleChange} disabled={!isEditing} />
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
                <TableCell>
                  {row.item}
                </TableCell>
                <TableCell>
                    <FormControl>
                    <RadioGroup
                      aria-labelledby={`${index}-radio-buttons-group`}
                      name={`${index}-radio-buttons-group`}
                      value={row.value}
                      onChange={(e) => handleDataChange(index, "value", e.target.value)}
                    >
                      <FormControlLabel disabled={!isEditing} value="conforme" control={<Radio />} label="conforme" />
                      <FormControlLabel disabled={!isEditing} value="inconforme" control={<Radio />} label="inconforme" />
                    </RadioGroup>
                    </FormControl>
                </TableCell>
                <TableCell>
                    <OutlinedInput
                    value={row.observation}
                    onChange={(e) => handleDataChange(index, "observation", e.target.value)}
                    disabled={!isEditing}
                    />
                </TableCell>
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
      <Button disabled={isClosed} onClick={toggleClosed} variant="contained" color="primary">
              Fechar Checklist
            </Button>
            <Button disabled={isSigned || !isClosed} onClick={toggleSigned} variant="contained" color="primary">
              {getTranslation(lang, "sign")}
            </Button>
      <ButtonLabelAndIcon disabled={!isSigned} icon="Print" text={String(getTranslation(lang, "print"))}  />
    </Box>
  );
}//onClick={downloadPDF}
