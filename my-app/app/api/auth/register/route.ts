import User from "@/app/model/User";
import { sequelize } from "@/lib/database";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { isEmailValid } from "@/lib/utils";

// register user
export async function POST(req: Request) {
    try {
        const user = User(sequelize);
        const { searchParams } = new URL(req.url);
        const step = searchParams.get("step");

        if (step === "1") {
            const { email } = await req.json();


            // No email?
            if (!email) {
                return NextResponse.json(
                    { error: "Email is required" },
                    { status: 400 }
                );
            }

            // is email valid?
            if (!isEmailValid(email)) {
                return NextResponse.json(
                    { error: "Email is not valid" },
                    { status: 400 }
                );
            }



            const isExistingUser = await user.findOne({
                where: { email }
            });

            if (isExistingUser) {
                return NextResponse.json(
                    { error: "Email already exist" },
                    { status: 400 }
                );
            }
            console.log("email", email);

            return NextResponse.json(
                { message: "Email is available", success: true },
                { status: 200 }
            );
        }
        else if (step === "2") {
            const { email, username, name, password } = await req.json();

            // No email?
            if (!email || !password) {
                return NextResponse.json(
                    { error: "Email and password are required" },
                    { status: 400 }
                );
            }

            // is email valid?
            if (!isEmailValid(email)) {
                return NextResponse.json(
                    { error: "Email is not valid" },
                    { status: 400 }
                );
            }

            const isExistingUser = await user.findOne({
                where: { email }
            });

            if (isExistingUser) {
                return NextResponse.json(
                    { error: "Email already exist" },
                    { status: 400 }
                );
            }
            // const hashedPassword = await hash(password, 10);

            const newUser = await user.create({
                email,
                username,
                name,
                password
            });

            console.log("User created")

            return NextResponse.json(
                { message: "Register Success", user: newUser, success: true },
                { status: 200 }
            );
        }
    }
    catch (error) {
        const result = error as Error;
        return NextResponse.json({ error: result.message }, { status: 400 });
    }

}