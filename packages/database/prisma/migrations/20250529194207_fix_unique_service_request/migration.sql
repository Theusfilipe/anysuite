-- CreateTable
CREATE TABLE "Equipment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastRepairDate" TIMESTAMP(3),
    "nextRepairDate" TIMESTAMP(3),
    "daysBetweenRepairs" INTEGER,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SparePart" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "material" TEXT NOT NULL,
    "unitCost" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SparePart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceRequest" (
    "id" TEXT NOT NULL,
    "requesterId" TEXT NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL,
    "requestDate" TIMESTAMP(3) NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceOrder" (
    "id" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    "equipmentId" TEXT NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "totalCost" DOUBLE PRECISION NOT NULL,
    "type" BOOLEAN NOT NULL,
    "notes" TEXT,
    "isOpen" BOOLEAN NOT NULL,
    "isOperational" BOOLEAN NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepairService" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "usedEquipmentId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "cost" DOUBLE PRECISION NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RepairService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Checklist" (
    "id" TEXT NOT NULL,
    "equipmentId" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Checklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChecklistTask" (
    "id" TEXT NOT NULL,
    "checklistId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChecklistTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChecklistResult" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "instance" INTEGER NOT NULL,
    "repairId" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChecklistResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InspectionSchedule" (
    "id" TEXT NOT NULL,
    "equipmentId" TEXT NOT NULL,
    "checklistId" TEXT NOT NULL,
    "lastOrderId" TEXT,
    "orderDate" TIMESTAMP(3) NOT NULL,
    "validityDays" INTEGER NOT NULL,
    "nextDate" TIMESTAMP(3),
    "seen" BOOLEAN NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InspectionSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PartsUsed" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PartsUsed_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceOrder_requestId_key" ON "ServiceOrder"("requestId");

-- CreateIndex
CREATE INDEX "_PartsUsed_B_index" ON "_PartsUsed"("B");

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SparePart" ADD CONSTRAINT "SparePart_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRequest" ADD CONSTRAINT "ServiceRequest_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRequest" ADD CONSTRAINT "ServiceRequest_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceOrder" ADD CONSTRAINT "ServiceOrder_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "ServiceRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceOrder" ADD CONSTRAINT "ServiceOrder_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceOrder" ADD CONSTRAINT "ServiceOrder_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepairService" ADD CONSTRAINT "RepairService_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepairService" ADD CONSTRAINT "RepairService_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ServiceOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepairService" ADD CONSTRAINT "RepairService_usedEquipmentId_fkey" FOREIGN KEY ("usedEquipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepairService" ADD CONSTRAINT "RepairService_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Checklist" ADD CONSTRAINT "Checklist_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Checklist" ADD CONSTRAINT "Checklist_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChecklistTask" ADD CONSTRAINT "ChecklistTask_checklistId_fkey" FOREIGN KEY ("checklistId") REFERENCES "Checklist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChecklistTask" ADD CONSTRAINT "ChecklistTask_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChecklistResult" ADD CONSTRAINT "ChecklistResult_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "ChecklistTask"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChecklistResult" ADD CONSTRAINT "ChecklistResult_repairId_fkey" FOREIGN KEY ("repairId") REFERENCES "RepairService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChecklistResult" ADD CONSTRAINT "ChecklistResult_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InspectionSchedule" ADD CONSTRAINT "InspectionSchedule_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InspectionSchedule" ADD CONSTRAINT "InspectionSchedule_checklistId_fkey" FOREIGN KEY ("checklistId") REFERENCES "Checklist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InspectionSchedule" ADD CONSTRAINT "InspectionSchedule_lastOrderId_fkey" FOREIGN KEY ("lastOrderId") REFERENCES "ServiceOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InspectionSchedule" ADD CONSTRAINT "InspectionSchedule_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartsUsed" ADD CONSTRAINT "_PartsUsed_A_fkey" FOREIGN KEY ("A") REFERENCES "RepairService"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartsUsed" ADD CONSTRAINT "_PartsUsed_B_fkey" FOREIGN KEY ("B") REFERENCES "SparePart"("id") ON DELETE CASCADE ON UPDATE CASCADE;
