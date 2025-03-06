"use client";

import { getCurrency, getTranslation } from "./../../../../../packages/i18n/index";
import { useState } from "react";
import { Box, TextField, Button, InputAdornment, FormControl, InputLabel, Input, OutlinedInput } from "@mui/material";

const lang = "pt";
const currency = "brReal";

export default function StockroomNewSparePart() {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    material: "",
    unitaryCost: "0,00",
    quantity: "",
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
      unitaryCost: formattedValue,
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
      <h2>{getTranslation(lang, "newSparePart")}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label={getTranslation(lang, "sparePartName")}
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        <FormControl fullWidth sx={{ marginBottom: 2 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-weight" variant="outlined" >{getTranslation(lang, "weight")}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-weight"
            name="weight"
            type="number"
            value={formData.weight}
            onChange={handleLeftZeros}
            label={getTranslation(lang, "weight")}
            endAdornment={<InputAdornment position="end">{getTranslation(lang, "weightAdornmentKG")}</InputAdornment>}
          />
        </FormControl>

        <TextField
          fullWidth
          label={getTranslation(lang, "material")}
          name="material"
          value={formData.material}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />


        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel htmlFor="outlined-adornment-amount">{getTranslation(lang, "unitaryCost")}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            name="unitaryCost"
            value={formData.unitaryCost}
            onChange={handleUnitaryCostChange}
            label={getTranslation(lang, "unitaryCost")}
            startAdornment={<InputAdornment position="start">{getCurrency(currency)}</InputAdornment>}
          />
        </FormControl>

        <TextField
          fullWidth
          label={getTranslation(lang, "quantity")}
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleLeftZeros}
          sx={{ marginBottom: 2 }}
        />

        <Button type="submit" variant="contained" color="primary">
          {getTranslation(lang, "addSparePart")}
        </Button>
      </form>
    </Box>
  );
}