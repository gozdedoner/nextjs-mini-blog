"use client";
import { useEffect, useState } from "react";

export default function QuotePage() {
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    fetch("/api/quotes")
      .then(r => r.json())
      .then(data => setQuote(data.quote))
      .catch(() => setQuote("(failed to load quote)"));
  }, []);

  return (
    <div className="card">
      <h1>API Demo</h1>
      <p>Random quote from a Next.js API Route:</p>
      <blockquote>“{quote || "..."}”</blockquote>
      <button onClick={() => window.location.reload()}>New Quote</button>
    </div>
  );
}