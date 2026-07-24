import { useState } from "react";
import { askGemini } from "../services/gemini";

export function useGemini() {
  const [loading, setLoading] = useState(false);

  async function send(prompt: string) {
    setLoading(true);

    const response = await askGemini(prompt);

    setLoading(false);

    return response;
  }

  return {
    send,
    loading,
  };
}