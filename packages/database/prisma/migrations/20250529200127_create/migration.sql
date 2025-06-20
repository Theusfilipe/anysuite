-- CreateTable
CREATE TABLE "EquipmentData" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "equipmentId" TEXT NOT NULL,

    CONSTRAINT "EquipmentData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EquipmentData" ADD CONSTRAINT "EquipmentData_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
