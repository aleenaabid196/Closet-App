import { NextRequest, NextResponse } from "next/server";
import { config } from "dotenv";

config();

export async function POST(req: NextRequest) {
    try {
        const { city } = await req.json();

        if (!city) {
            return NextResponse.json(
                { error: "City is required" },
                { status: 400 }
            );
        }

        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${process.env.weather_api_key}&q=${city}&days=4&aqi=no&alerts=no`
        );

        const data = await response.json();

        if (data.code != "200") {
            return NextResponse.json(
                { error: "weather api error" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "Success", data, success: true },
            { status: 200 }
        );

    } catch (error) {
        const result = error as Error;
        return NextResponse.json({ error: result.message }, { status: 400 });
    }
}