import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      email: "test@test.com",
      name: "test",
    },
  });

  await prisma.exchangeRate.upsert({
    where: {
      currency_toCurrency: { currency: "Euro", toCurrency: "ETH" },
    },
    create: {
      currency: "Euro",
      toCurrency: "ETH",
      rate: 0.045,
    },
    update: {},
  });

  await prisma.exchangeRate.upsert({
    where: {
      currency_toCurrency: {
        currency: "US Dollar",
        toCurrency: "ETH",
      },
    },
    create: {
      currency: "US Dollar",
      toCurrency: "ETH",
      rate: 0.035,
    },
    update: {},
  });
}

main()
  .then(async () => {
    console.log("Done seeding the database!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
