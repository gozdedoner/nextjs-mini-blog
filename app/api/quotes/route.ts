import { NextResponse } from "next/server";

const QUOTES = [
  "Ship small, ship often.",
  "Performance is a feature.",
  "Accessibility is for everyone.",
  "Great DX -> great UX.",
  "Types are a superpower."
];

export async function GET() {
  const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  return NextResponse.json({ quote: q });
}