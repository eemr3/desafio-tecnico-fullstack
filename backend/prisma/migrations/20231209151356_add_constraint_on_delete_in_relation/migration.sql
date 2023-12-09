-- DropForeignKey
ALTER TABLE "professional" DROP CONSTRAINT "professional_type_professional_id_fkey";

-- AddForeignKey
ALTER TABLE "professional" ADD CONSTRAINT "professional_type_professional_id_fkey" FOREIGN KEY ("type_professional_id") REFERENCES "type_professional"("id") ON DELETE CASCADE ON UPDATE CASCADE;
