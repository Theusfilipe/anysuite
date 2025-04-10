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
} from "@mui/material";
import { Add, Delete, Save as SaveIcon, Edit as EditIcon } from "@mui/icons-material";
import { Certificate } from "crypto";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const lang = "pt";



const initialChecklist = {
  
  type: "",
  
  
  quantityOfDaysBetweenMaintenance: 90,
};



export default function NewChecklistTemplate() {

  const{ data: session } = useSession({
      required: true,
      onUnauthenticated() {
        redirect("/api/auth/callback/credentials");
      }
    });

  const [formData, setFormData] = useState(initialChecklist);


  const [checklistData, setChecklistData] = useState([
    { item: "" },
    
  ]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDataChange = (index: number, value: string) => {
    const newData = [...checklistData];
    if (newData[index]) {
      newData[index]["item"] = value;
    }
    setChecklistData(newData);
  };

  const addRow = () => {
    setChecklistData([...checklistData, { item: "" }]);
  };

  const deleteRow = (index: number) => {
    setChecklistData(checklistData.filter((_, i) => i !== index));
  };


  //<FormControl fullWidth sx={{ marginBottom: 2 }}>
  //        <InputLabel htmlFor="equipment-code">{getTranslation(lang, "equipmentCode")}</InputLabel>
  //        <Select id="equipment-code" label={getTranslation(lang,"equipmentCode")} value={formData.equipmentCode} name="equipmentCode" onChange={handleChange}>
  //            {equipments.map((equipment) => (
  //              <MenuItem key={equipment.id} value={equipment.id}>
   //               {`${equipment.id} - ${equipment.name}`}
  //            </MenuItem>
  //            ))}
  //        </Select>
  //      </FormControl>

  return (
    <Box sx={{ padding: 3 }}>
      
      <form>
      
        


        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "type")}</InputLabel>
          <OutlinedInput name="type" value={formData.type} label={getTranslation(lang, "type")}  />
        </FormControl>
        
        
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>{getTranslation(lang, "quantityOfDaysBetweenMaintenance")}</InputLabel>
          <OutlinedInput name="quantityOfDaysBetweenMaintenance" type="number" value={formData.quantityOfDaysBetweenMaintenance} onChange={handleChange} label={getTranslation(lang, "quantityOfDaysBetweenMaintenance")} />
        </FormControl>
        
        
      </form>
      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "activity")}</TableCell>
              
              <TableCell>{getTranslation(lang, "action")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checklistData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <OutlinedInput value={row.item} onChange={(e) => handleDataChange(index, e.target.value)}  />
                </TableCell>

                <TableCell>
                  <IconButton onClick={() => deleteRow(index)} ><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            
            <TableRow>
              <TableCell colSpan={3} align="center">
                <Button onClick={addRow} startIcon={<Add />}>{getTranslation(lang, "addActivity")}</Button>
              </TableCell>
            </TableRow>
            
          </TableBody>
        </Table>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>{getTranslation(lang, "addNewChecklistTemplate")}</Button>
      </TableContainer>
    </Box>
  );
}