-- CreateTable
CREATE TABLE "DeliveryMan" (
    "id" TEXT NOT NULL,
    "usename" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "DeliveryMan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryMan_usename_key" ON "DeliveryMan"("usename");
