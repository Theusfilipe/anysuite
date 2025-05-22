'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  FormControl
} from '@mui/material'

import { getTranslation } from '@repo/i18n/getTranslation'
import { get } from 'http'

const lang = 'pt'
const departments = ['Stockroom', 'Maintenance', 'Personnel']
const levels = ['NONE','READ_ONLY', 'READ_WRITE', 'SUPERVISOR', 'MANAGER', 'ADMIN']

const departmentsTranslated = {
  Stockroom: getTranslation(lang, 'stockroom'),
  Maintenance: getTranslation(lang, 'maintenance'),
  Personnel: getTranslation(lang, 'personelControl'),
}

const getDepartmentTranslation = (department: string) => {
  return departmentsTranslated[department as keyof typeof departmentsTranslated] || department
}

const levelsTranslated = {
    NONE: getTranslation(lang, 'noAccess'),
    READ_ONLY: getTranslation(lang, 'readOnly'),
    READ_WRITE: getTranslation(lang, 'readWrite'),
    SUPERVISOR: getTranslation(lang, 'supervisor'),
    MANAGER: getTranslation(lang, 'manager'),
    ADMIN: getTranslation(lang, 'admin')
  }
  const getLevelTranslation = (level: string) => {
    return levelsTranslated[level as keyof typeof levelsTranslated] || level
  }

export default function CreateAccountPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    access: Object.fromEntries(departments.map(dep => [dep, 'NONE'])) // Default VIEW for each department
  })

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleAccessChange = (dep: string, level: string) => {
    setFormData(prev => ({
      ...prev,
      access: {
        ...prev.access,
        [dep]: level
      }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const res = await fetch('/api/adm/user/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Something went wrong')

      setMessage(getTranslation(lang, 'accountCreatedSuccessfully'))
      setFormData({
        name: '',
        email: '',
        password: '',
        access: Object.fromEntries(departments.map(dep => [dep, 'READ_ONLY']))
      })
    } catch (err: any) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box maxWidth={500} mx="auto" mt={4} px={2}>
      <Typography variant="h5" gutterBottom>
        {getTranslation(lang, 'createNewUser')}
      </Typography>

      <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
        <TextField
          name="name"
          label={getTranslation(lang, 'fullName')}
          value={formData.name}
          onChange={handleFieldChange}
          required
        />
        <TextField
          name="email"
          label={getTranslation(lang, 'email')}
          type="email"
          value={formData.email}
          onChange={handleFieldChange}
          required
        />
        <TextField
          name="password"
          label={getTranslation(lang, 'password')}
          type="password"
          value={formData.password}
          onChange={handleFieldChange}
          required
        />

        {departments.map(dep => (
          <FormControl key={dep} fullWidth>
            <InputLabel id={`access-${dep}-label`}>
              {getDepartmentTranslation(dep)}
            </InputLabel>
            <Select
              labelId={`access-${dep}-label`}
              value={formData.access[dep]}
              onChange={e => handleAccessChange(dep, e.target.value)}
              label={getDepartmentTranslation(dep)}
            >
              {levels.map(lvl => (
                <MenuItem key={lvl} value={lvl}>
                  {getLevelTranslation(lvl)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}

        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? <CircularProgress size={24} color="inherit" /> : getTranslation(lang, 'createAccount')}
        </Button>

        {message && (
          <Typography variant="body2" color="primary">
            {message}
          </Typography>
        )}
      </Box>
    </Box>
  )
}