// index.ts

import { Dialect, Sequelize } from 'sequelize';
import UserModel from "@/app/model/User"
import { config } from 'dotenv';
import mysql2 from 'mysql2';

config();

// Use the variables
const dbHost: string = process.env.DB_HOST || '';
const dbUserName: string = process.env.DB_USERNAME || '';
const dbPassword: string = process.env.DB_PASSWORD || '';
const dbName: string = process.env.DB_NAME || '';
const dbDialect: string | undefined = process.env.DB_DIALECT;
const dbPort: string | undefined = process.env.DB_PORT;

console.log(dbHost, dbUserName, dbPassword, dbName, dbDialect);

// Create a Sequelize instance
export const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {
    host: dbHost,
    dialect: dbDialect as Dialect | undefined,
    port: dbPort ? parseInt(dbPort, 10) : undefined,
    dialectModule: mysql2,
});

// Define the User model using UserModel and pass the Sequelize instance
const User = UserModel(sequelize);
User.sync();

// Synchronize the model with the database
sequelize.sync() // { force: true } will drop the table if it exists
    .then(() => {
        console.log('Database Connected!');
    })
    .catch((err: Error) => {
        console.error('Error connecting database or creating tables:', err);
    });
