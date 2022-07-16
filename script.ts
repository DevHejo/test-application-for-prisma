import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// async function main() {
//     // prisma client queries
//     // const user = await prisma.user.create({ data: { name: "kyle" } });
//     // const user = await prisma.user.create({ data: { name: "sally" } });
//     // const user = await prisma.user.create({ data: { name: "jhonothen" } });
//     // const user = await prisma.user.findMany();
//     await prisma.user.deleteMany();
//     // console.log(user);
// }

async function main() {
    // delete all the previous users. since saving each time now is runnig the app and trying to add data into the db.
    await prisma.user
        .deleteMany()
        .then(() => {
            console.log("\nAll users deleted\n");
        })
        .catch((e) => {
            console.log("Error while deleting users");
            console.error(e);
        });

    // create a user
    const user = await prisma.user.create({
        data: {
            name: "kyle",
            email: "kyle@test.com",
            age: 27,
        },
    });

    console.log(user);
    console.log("\n");
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

export { prisma };
