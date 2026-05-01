// app/api/entries/route.js
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, description, solution, severity, tags, userId } = body;

    // Create the entry and connect/create tags in one transaction
    const newEntry = await prisma.entry.create({
      data: {
        title,
        description,
        solution,
        severity,
        user: {
          connectOrCreate: {
            where: { id: userId },
            create: {
              id: userId,
              email: `dummy_${userId}@example.com`,
              name: "Dummy User"
            }
          }
        },
        tags: {
          connectOrCreate: tags.map((tag) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
      },
      include: { tags: true }, // Return the tags in the response
    });

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error("Error creating entry:", error);
    return NextResponse.json({ error: "Failed to log mistake" }, { status: 500 });
  }
}