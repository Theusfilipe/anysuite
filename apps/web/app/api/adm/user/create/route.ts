import { NextResponse } from 'next/server'
import { prisma } from "@repo/db"
import bcrypt from 'bcrypt'

const departments = ['Stockroom', 'Maintenance', 'Personnel'] as const
const levels = ['NONE', 'READ_ONLY', 'READ_WRITE', 'SUPERVISOR', 'MANAGER', 'ADMIN'] as const

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, password, access } = body

    // Validação básica
    if (
      typeof name !== 'string' || name.trim().length < 2 ||
      typeof email !== 'string' || !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(email) ||
      typeof password !== 'string' || password.length < 8 ||
      typeof access !== 'object'
    ) {
      return NextResponse.json({ message: 'Dados inválidos.' }, { status: 400 })
    }

    // Verificar se os níveis de acesso são válidos
    for (const dep of departments) {
      const level = access[dep]
      if (!levels.includes(level)) {
        return NextResponse.json({ message: `Nível de acesso inválido para ${dep}` }, { status: 400 })
      }
    }

    // Verifica se o e-mail já está em uso
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ message: 'E-mail já está em uso.' }, { status: 409 })
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10)

    // Criação do usuário com acessos
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        access: {
          create: departments.map(dep => ({// dentro de um unico user.create garante atomicidade da transação
            department: dep,
            level: access[dep],
          })),
        }
      },
      include: {
        access: true
      }
    })

    return NextResponse.json({
      message: 'Conta criada com sucesso!',
      userId: newUser.id,
    }, { status: 201 })

  } catch (error) {
    console.error('Erro no POST /api/adm/createAccount:', error)
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 })
  }
}