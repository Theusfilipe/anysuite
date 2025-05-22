// apps/web/app/api/adm/users/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@repo/db'

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        access: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(users, { status: 200 })
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
    return NextResponse.json({ message: 'Erro ao buscar usuários' }, { status: 500 })
  }
}