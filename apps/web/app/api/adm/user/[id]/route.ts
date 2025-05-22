import { prisma } from '@repo/db'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcrypt'

const departments = ['Stockroom', 'Maintenance', 'Personnel'] as const
const levels = ['NONE', 'READ_ONLY', 'READ_WRITE', 'SUPERVISOR', 'MANAGER', 'ADMIN'] as const

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  try {
    const { id } = await context.params

    const user = await prisma.user.findUnique({
      where: { id },
      include: { access: true }
    })

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 })
    }

    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    console.error('Erro ao buscar usuário:', error)
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 })
  }
}


export async function PUT(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const id = url.pathname.split('/').pop() // Extrai o ID da URL

    if (!id) {
      return NextResponse.json({ message: 'ID não fornecido na URL' }, { status: 400 })
    }

    const body = await req.json()
    const { name, password, access } = body

    if (!name || typeof access !== 'object') {
      return NextResponse.json({ message: 'Dados inválidos' }, { status: 400 })
    }

    for (const dep of departments) {
      const level = access[dep]
      if (!levels.includes(level)) {
        return NextResponse.json({ message: `Nível inválido para ${dep}` }, { status: 400 })
      }
    }

    const existingUser = await prisma.user.findUnique({ where: { id } })
    if (!existingUser) {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 })
    }

    const updates = []

    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined

    updates.push(
      prisma.user.update({
        where: { id },
        data: {
          name,
          ...(hashedPassword && { password: hashedPassword })
        }
      })
    )

    for (const dep of departments) {
      updates.push(
        prisma.access.upsert({
          where: {
            userId_department: {
              userId: id,
              department: dep
            }
          },
          update: {
            level: access[dep]
          },
          create: {
            userId: id,
            department: dep,
            level: access[dep]
          }
        })
      )
    }

    await prisma.$transaction(updates)

    return NextResponse.json({ message: 'Usuário atualizado com sucesso' }, { status: 200 })
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error)
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 })
  }
}