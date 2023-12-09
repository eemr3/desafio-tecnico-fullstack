/*
  Warnings:

  - You are about to drop the `Professional` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TypeProfessional` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Professional" DROP CONSTRAINT "Professional_typeProfessionalId_fkey";

-- DropTable
DROP TABLE "Professional";

-- DropTable
DROP TABLE "TypeProfessional";

-- CreateTable
CREATE TABLE "type_professional" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "is_actived" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "type_professional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professional" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "is_actived" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "type_professional_id" INTEGER NOT NULL,

    CONSTRAINT "professional_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "type_professional_type_key" ON "type_professional"("type");

-- CreateIndex
CREATE UNIQUE INDEX "professional_email_key" ON "professional"("email");

-- AddForeignKey
ALTER TABLE "professional" ADD CONSTRAINT "professional_type_professional_id_fkey" FOREIGN KEY ("type_professional_id") REFERENCES "type_professional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
