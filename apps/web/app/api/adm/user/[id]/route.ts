import { prisma } from '@repo/db'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

const departments = ['Stockroom', 'Maintenance', 'Personnel'] as const
const levels = ['NONE', 'READ_ONLY', 'READ_WRITE', 'SUPERVISOR', 'MANAGER', 'ADMIN'] as const

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      include: { access: true }
    })

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 })
    }

    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    console.error('Erro ao buscar usuário:', error)
    return NextResponse.json({ message: 'Erro interno' }, { status: 500 })
  }
}


export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const userId = params.id
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

    const existingUser = await prisma.user.findUnique({ where: { id: userId } })
    if (!existingUser) {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 })
    }

    const updates = []

    // Prepara update de usuário (sem await!)
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined

    updates.push(
      prisma.user.update({
        where: { id: userId },
        data: {
          name,
          ...(hashedPassword && { password: hashedPassword })
        }
      })
    )

    // Prepara updates de acesso (também como promessas Prisma)
    for (const dep of departments) {
      updates.push(
        prisma.access.upsert({
          where: {
            userId_department: {
              userId,
              department: dep
            }
          },
          update: {
            level: access[dep]
          },
          create: {
            userId,
            department: dep,
            level: access[dep]
          }
        })
      )
    }

    // Executa tudo em uma transação atômica
    await prisma.$transaction(updates)

    return NextResponse.json({ message: 'Usuário atualizado com sucesso' }, { status: 200 })
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error)
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 })
  }
}