require('dotenv').config();
const app = require('./app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Fonction utilitaire pour faire une pause
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Vérifie et attend la connexion à la DB avant de démarrer le serveur
async function start() {
    let connected = false;
    while (!connected) {
        try {
            await prisma.$connect();
            console.log('PostgreSQL connecté via Prisma');
            connected = true;
        } catch (err) {
            console.error('DNS non joignable (db:5432) ou DB non prête, nouvelle tentative dans 2s...');
            await wait(2000);
        }
    }
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

start();