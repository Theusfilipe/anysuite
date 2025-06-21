import { NextResponse } from 'next/server'
import { prisma } from '@repo/db'

export async function GET() {
  try {
    const equipments = await prisma.equipment.findMany({
      select: {
        id: true,
        name: true,
        quantity: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(equipments, { status: 200 })
  } catch (error) {
    console.error('Erro ao buscar equipamentos:', error)
    return NextResponse.json({ message: 'Erro ao buscar equipamentos' }, { status: 500 })
  }
}
