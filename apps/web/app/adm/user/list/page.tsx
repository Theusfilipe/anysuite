'use client'

import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material'
import { useRouter } from 'next/navigation'

type Access = {
  id: string
  department: string
  level: string
}

type User = {
  id: string
  name: string
  email: string
  access: Access[]
}

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/adm/user/list')
        const data = await res.json()
        setUsers(data)
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const handleEdit = (userId: string) => {
    router.push(`/adm/user/${userId}/edit`)
  }

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Lista de Usuários
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Acessos</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.access.map((a) => `${a.department}: ${a.level}`).join(', ')}
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => handleEdit(user.id)}>
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  )
}