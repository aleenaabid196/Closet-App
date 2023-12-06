import { AuthOptions } from "next-auth";
import { sequelize } from '@/lib/database';
import UserModel from '@/app/model/User';
import jwt from 'jsonwebtoken'

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// config and import .env
import { config } from 'dotenv';
config();

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const User = UserModel(sequelize);
                const user = await User.findOne({
                    where: { email: credentials?.email }
                });
                if (user && user.password === credentials?.password) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID!,
        //     clientSecret: process.env.GITHUB_SECRET!,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    callbacks: {
        async session({ session }: any) {
            await sequelize.sync();
            const User = UserModel(sequelize);
            const ExistingUser = await User.findOne({
                where: { email: session.user.email }
            });

            if (!ExistingUser) {
                const newUser = await User.create({
                    email: session.user.email,
                    name: session.user.name,
                    profileImage: session.user.image,
                });

                session.currentUser = newUser;
            }

            session.currentUser = ExistingUser;

            return session;

        },
    },
    session: { strategy: 'jwt' },
    jwt: { secret: process.env.NEXTAUTH_JWT_SECRET! },
    secret: process.env.NEXTAUTH_SECRET!,

};