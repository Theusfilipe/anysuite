'use client'

import {
  Box,
  Typography,
  CircularProgress,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

const departments = ['Stockroom', 'Maintenance', 'Personnel']
const levels = ['NONE', 'READ_ONLY', 'READ_WRITE', 'SUPERVISOR', 'MANAGER', 'ADMIN']

export default function EditUserPage() {
  const { id } = useParams()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    access: {} as Record<string, string>
  })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/adm/user/${id}`)
        const data = await res.json()

        const accessMap = Object.fromEntries(
          data.access.map((a: any) => [a.department, a.level])
        )

        setUser(data)
        setFormData({
          name: data.name,
          password: '',
          access: accessMap
        })
      } catch (err) {
        console.error('Erro ao buscar usuário:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])

  const handleAccessChange = (dep: string, level: string) => {
    setFormData(prev => ({
      ...prev,
      access: {
        ...prev.access,
        [dep]: level
      }
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`/api/adm/user/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Erro ao atualizar usuário')

      //alert('Usuário atualizado com sucesso')
      router.push('/adm/user/list') // Redireciona para a listagem  
    } catch (err: any) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <Box p={4}>
        <Typography>Usuário não encontrado.</Typography>
      </Box>
    )
  }

  return (
    <Box p={4} maxWidth={600} mx="auto">
      <Typography variant="h5" gutterBottom>
        Editar Usuário: {user.email}
      </Typography>

      <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
        <TextField
          name="name"
          label="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <TextField
          name="password"
          label="Nova Senha (opcional)"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        {departments.map(dep => (
          <FormControl key={dep} fullWidth>
            <InputLabel>{dep}</InputLabel>
            <Select
              value={formData.access[dep] || 'NONE'}
              onChange={e => handleAccessChange(dep, e.target.value)}
            >
              {levels.map(lvl => (
                <MenuItem key={lvl} value={lvl}>
                  {lvl}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}

        <Button type="submit" variant="contained">
          Salvar Alterações
        </Button>
      </Box>
    </Box>
  )
}