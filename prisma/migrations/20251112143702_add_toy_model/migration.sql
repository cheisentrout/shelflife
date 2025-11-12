-- CreateEnum
CREATE TYPE "ToyCondition" AS ENUM ('LIKE_NEW', 'EXCELLENT', 'GOOD', 'FAIR', 'WELL_LOVED');

-- CreateEnum
CREATE TYPE "DevelopmentalDomain" AS ENUM ('FINE_MOTOR', 'GROSS_MOTOR', 'COGNITIVE', 'LANGUAGE', 'SOCIAL_EMOTIONAL', 'SENSORY', 'PRACTICAL_LIFE', 'CREATIVE');

-- CreateTable
CREATE TABLE "Toy" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "brand" TEXT,
    "condition" "ToyCondition" NOT NULL,
    "photos" TEXT[],
    "developmentalDomains" "DevelopmentalDomain"[],
    "ageRangeMin" INTEGER NOT NULL,
    "ageRangeMax" INTEGER,
    "materials" TEXT,
    "zipCode" TEXT NOT NULL,
    "city" TEXT,
    "state" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "userId" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Toy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Toy" ADD CONSTRAINT "Toy_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
