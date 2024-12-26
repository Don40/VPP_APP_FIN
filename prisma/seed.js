const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash('password123', 10);

    // Create a user
    await prisma.user.create({
      data: {
        username: 'testuser1',
        password: hashedPassword,
      },
    });

    console.log('Seed data created successfully.');
  } catch (error) {
    console.error('Error during seeding:', error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
