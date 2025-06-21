"use client";

import { getTranslation } from "@repo/i18n/getTranslation";

import { useEffect, useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, CircularProgress } from "@mui/material";

const lang = "pt";

type InventoryItem = {
  id: string;
  name: string;
  quantity: number;
  isEquipment: boolean;
};

export default function StockroomInventory() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch('/api/stockroom/inventory');
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error('Erro ao buscar inventário:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);
  return (
    <Box sx={{ padding: 3 }}>
      <h2>{getTranslation(lang, "inventory")}</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{getTranslation(lang, "nameOfEquipment")}</TableCell>
              <TableCell>{getTranslation(lang, "quantity")}</TableCell>
              <TableCell>{getTranslation(lang, "actions")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : (
                items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => window.location.href = item.isEquipment ? '/stockroom/equipment/equipmentEdit/' : '/stockroom/sparePart/sparePartEdit/'}
                    >
                      {getTranslation(lang, "moreInfo")}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
