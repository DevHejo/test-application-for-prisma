import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // prisma client queries
    // const user = await prisma.user.create({ data: { name: "kyle" } });
    // const user = await prisma.user.create({ data: { name: "sally" } });
    // const user = await prisma.user.create({ data: { name: "jhonothen" } });
    const user = await prisma.user.findMany();
    console.log(user);
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

export { prisma };
