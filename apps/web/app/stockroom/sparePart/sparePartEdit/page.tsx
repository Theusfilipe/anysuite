"use client";

import { getCurrency, getTranslation } from "../../../../../../packages/i18n/index";
import { useState } from "react";
import { Box, Paper, Button, TextField, Typography, FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

const lang = "pt";
const currency = "brReal";

const sparePart = {
    id: "SP-001",
    name: "Bolt",
    weight: 0.1,
    material: "Steel",
    unitaryCost: "2,50",
    quantity: 20,
};

export default function SparePartPage() {
    const [formData, setFormData] = useState({
        name: sparePart.name,
        weight: sparePart.weight,
        material: sparePart.material,
        unitaryCost: sparePart.unitaryCost,
        quantity: sparePart.quantity,
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
            <Typography variant="h4">{getTranslation(lang, "sparePartDetails")}</Typography>
            <Paper sx={{ padding: 3, marginTop: 2 }}>
                <form>
                    <TextField
                        fullWidth
                        margin="normal"
                        label={getTranslation(lang, "id")}
                        name="id"
                        value={sparePart.id}
                        disabled
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label={getTranslation(lang, "name")}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        margin="normal"
                        label={getTranslation(lang, "material")}
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
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
                        margin="normal"
                        label={getTranslation(lang, "quantity")}
                        name="quantity"
                        type="number"
                        value={formData.quantity}
                        onChange={handleLeftZeros}
                    />
                    <Box sx={{ marginTop: 2 }}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            {getTranslation(lang, "save")}
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}