-- CreateTable
CREATE TABLE "Meetup" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "locationName" TEXT,
    "address" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "organizerId" TEXT NOT NULL,
    "maxAttendees" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meetup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetupAttendee" (
    "id" TEXT NOT NULL,
    "meetupId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MeetupAttendee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MeetupAttendee_meetupId_userId_key" ON "MeetupAttendee"("meetupId", "userId");

-- AddForeignKey
ALTER TABLE "Meetup" ADD CONSTRAINT "Meetup_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetupAttendee" ADD CONSTRAINT "MeetupAttendee_meetupId_fkey" FOREIGN KEY ("meetupId") REFERENCES "Meetup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetupAttendee" ADD CONSTRAINT "MeetupAttendee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
