// app/api/insights/route.js
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const prisma = new PrismaClient();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function GET(request) {
  // In a real app, extract userId from the session/auth token
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  try {
    // 1. Fetch the last 20 mistakes
    const recentMistakes = await prisma.entry.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: { tags: true }
    });

    if (recentMistakes.length === 0) {
      return NextResponse.json({ insight: "Log your first mistake to get AI insights!" });
    }

    // 2. Format the data for the AI
    const promptData = recentMistakes.map(m =>
      `Issue: ${m.title} | Tags: ${m.tags.map(t => t.name).join(', ')} | Description: ${m.description}`
    ).join('\n\n');

    // 3. Call Groq
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are an expert technical mentor. Review the user's recent logged mistakes. Identify recurring patterns, cognitive blind spots, or provide specific advice for the individual mistake if only a few are provided. Provide a concise, actionable piece of advice to help them improve. Be encouraging but direct."
        },
        {
          role: "user",
          content: `Here are my recent mistakes:\n\n${promptData}`
        }
      ],
      model: "openai/gpt-oss-120b",
    });

    console.log("Insights API hit at:", new Date().toISOString());

    return NextResponse.json({ insight: completion.choices[0]?.message?.content || "No insights generated." }, { status: 200 });

  } catch (error) {
    console.error("AI Insight Error:", error);
    return NextResponse.json({ error: "Failed to generate insights. Check the server logs." }, { status: 500 });
  }
}