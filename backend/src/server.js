require('dotenv').config();
const app = require('./app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function start() {
    let connected = false;
    while (!connected) {
        try {
            await prisma.$connect();
            console.log('MySQL connecté via Prisma');
            connected = true;
        } catch (err) {
            console.error('MySQL non joignable (mysql-docker:3306) ou DB non prête, nouvelle tentative dans 2s...');
            await wait(2000);
        }
    }

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

start();