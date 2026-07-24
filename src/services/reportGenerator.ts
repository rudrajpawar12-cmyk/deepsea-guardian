import { askGemini } from "./gemini";

export async function generateOceanReport(data: {
  marineHealth: number;
  pollutionIndex: number;
  plasticWaste: number;
  activeAlerts: number;
}) {
  const prompt = `
You are Ocean AI.

Generate a professional marine environmental report.

Current Data

Marine Health: ${data.marineHealth}%

Pollution Index: ${data.pollutionIndex}

Plastic Waste: ${data.plasticWaste}

Active Alerts: ${data.activeAlerts}

Return your answer using these headings:

# Executive Summary

# Current Situation

# Environmental Risk

# Recommended Actions

# 48 Hour Prediction

# Long-Term Recommendation

Keep it concise and professional.
`;

  return await askGemini(prompt);
}