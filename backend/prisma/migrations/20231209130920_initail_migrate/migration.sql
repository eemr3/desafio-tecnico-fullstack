-- CreateTable
CREATE TABLE "TypeProfessional" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "isActived" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeProfessional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professional" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "isActived" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "typeProfessionalId" INTEGER NOT NULL,

    CONSTRAINT "Professional_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Professional_email_key" ON "Professional"("email");

-- AddForeignKey
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_typeProfessionalId_fkey" FOREIGN KEY ("typeProfessionalId") REFERENCES "TypeProfessional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
