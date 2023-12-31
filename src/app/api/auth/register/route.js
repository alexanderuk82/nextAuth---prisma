import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(request) {
	const data = await request.json();

	//Validate data for email uniqueness

	const userEmail = await prisma.user.findUnique({
		where: {
			email: data.email,
		},
	});

	if (userEmail) {
		return NextResponse.json(
			{
				message: "Email already exists",
			},
			{
				status: 400,
			}
		);
	}

	//Validate data for username uniqueness

	const userUsername = await prisma.user.findUnique({
		where: {
			username: data.username,
		},
	});

	if (userUsername) {
		return NextResponse.json(
			{
				message: "Username already exists",
			},
			{
				status: 400,
			}
		);
	}

	const newUser = await prisma.user.create({
		data,
	});

	return NextResponse.json(newUser);
}
