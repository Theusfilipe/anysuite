import { NextResponse } from 'next/server'
import { prisma } from '@repo/db'

export async function GET() {
  try {
    const equipments = await prisma.equipment.findMany({
      select: { id: true, name: true, quantity: true },
      orderBy: { createdAt: 'desc' },
    })

    const spareParts = await prisma.sparePart.findMany({
      select: { id: true, name: true, quantity: true },
      orderBy: { createdAt: 'desc' },
    })

    const inventory = [
      ...equipments.map((e) => ({ ...e, isEquipment: true })),
      ...spareParts.map((s) => ({ ...s, isEquipment: false })),
    ]

    return NextResponse.json(inventory, { status: 200 })
  } catch (error) {
    console.error('Erro ao buscar inventário:', error)
    return NextResponse.json({ message: 'Erro ao buscar inventário' }, { status: 500 })
  }
}
