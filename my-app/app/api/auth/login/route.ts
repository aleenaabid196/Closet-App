import UserModel from "@/app/model/User";
// import { NextApiRequest, NextApiResponse } from "next";
import { sequelize } from '@/lib/database';
import { compare } from "bcrypt";
import { NextResponse } from "next/server";

// maybe NextRequest instead of Request
export async function POST(req: Request) {
    try {
        // Connect to database
        const user = UserModel(sequelize);
        const { email, password } = await req.json();
        console.log("Login API called");

        // is email and password valid?
        if (!email || !password) {
            // return NextResponse.badRequest("Email and password are required");
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // is user exist?
        const isExistingUser = await user.findOne({
            where: { email }
        });

        if (!isExistingUser) {
            return NextResponse.json(
                { error: "Email does not exist" },
                { status: 400 }
            );
        }

        // is password correct?
        // const isPasswordCorrect = await compare(password, isExistingUser.password);
        const isPasswordCorrect = password === isExistingUser.password;

        if (!isPasswordCorrect) {
            return NextResponse.json(
                { error: "Wrong Credentials" },
                { status: 400 }
            );
        }

        // return NextResponse.redirect("/dashboard");

        return NextResponse.json(
            { message: "Login Success", user: isExistingUser, success: true },
            { status: 200 }
        );

    } catch (error) {
        const result = error as Error;
        return NextResponse.json({ error: result.message }, { status: 400 });
    }
}