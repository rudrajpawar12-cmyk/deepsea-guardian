const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

export async function askGemini(prompt: string): Promise<string> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `
You are Ocean AI, an environmental intelligence assistant.

Your job is to help marine researchers.

You specialize in:

• Ocean Pollution
• Plastic Waste
• Marine Ecosystems
• Climate Change
• Water Quality
• Marine Biodiversity
• Cleanup Recommendations

Always answer professionally.

Question:

${prompt}
`,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Gemini API request failed.");
    }

    const data = await response.json();

    return (
      data.candidates?.[0]?.content?.parts?.[0]?.text ??
      "No response generated."
    );
  } catch (error) {
    console.error(error);

    return "Unable to contact Ocean AI at the moment.";
  }
}