"use client";

import { getTranslation } from "../../../../../../packages/i18n/index";
import { useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const lang = "pt";

const sparePart = {
  id: "SP-001",
  name: "Bolt",
  weight: "0.1kg",
  material: "Steel",
  unitaryCost: "R$ 2,50",
  quantity: 20,
};

export default function SparePartPage() {
  const [quantity, setQuantity] = useState(sparePart.quantity);
  const [open, setOpen] = useState(false);
  const [newQuantity, setNewQuantity] = useState(sparePart.quantity);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    setQuantity(newQuantity);
    handleClose();
  };

  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "sparePartDetails")}</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "name")}</TableCell>
              <TableCell>{getTranslation(lang, "weight")}</TableCell>
              <TableCell>{getTranslation(lang, "material")}</TableCell>
              <TableCell>{getTranslation(lang, "unitaryCost")}</TableCell>
              <TableCell>{getTranslation(lang, "quantity")}</TableCell>
              <TableCell>{getTranslation(lang, "actions")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{sparePart.name}</TableCell>
              <TableCell>{sparePart.weight}</TableCell>
              <TableCell>{sparePart.material}</TableCell>
              <TableCell>{sparePart.unitaryCost}</TableCell>
              <TableCell>
                {quantity} 
                <Button variant="contained" size="small" onClick={handleOpen} sx={{ marginLeft: 1 }}>
                  {getTranslation(lang, "editQuantity")}
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => window.location.href = `/stockroom/sparePart/sparePartEdit`}> 
                  {getTranslation(lang, "edit")}
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{getTranslation(lang, "editQuantity")}</DialogTitle>
        <DialogContent>
          <TextField 
            fullWidth 
            type="number" 
            value={newQuantity} 
            onChange={(e) => setNewQuantity(Number(e.target.value))} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">{getTranslation(lang, "cancel")}</Button>
          <Button onClick={handleSave} color="primary">{getTranslation(lang, "save")}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
