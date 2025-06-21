import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { options } from "@/api/auth/[...nextauth]/options";
import { prisma } from "@repo/db"

import type { Session } from "next-auth"; // 👈 importa o tipo

export async function POST(req: NextRequest) {
  const session: Session | null = await getServerSession(options); // 👈 força o tipo

  if (!session || !session.user?.id) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

  const body = await req.json();

  const {
    name,
    lastRepairDate,
    nextRepairDate,
    daysBetweenRepairs,
    equipmentData,
  } = body;

  if (!name || !Array.isArray(equipmentData)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const equipment = await prisma.equipment.create({
      data: {
        name,
        quantity: 0,
        lastRepairDate: lastRepairDate ? new Date(lastRepairDate) : undefined,
        nextRepairDate: nextRepairDate ? new Date(nextRepairDate) : undefined,
        daysBetweenRepairs,
        createdBy: session.user.id,
        EquipmentData: {
          create: equipmentData.map((item) => ({
            key: item.key,
            value: item.value,
          })),
        },
      },
    });

    return NextResponse.json({ equipment }, { status: 201 });
  } catch (error) {
    console.error("Error creating equipment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}