import { getOceanData } from "./oceanApi";

export interface OceanAnalysis {
  marineHealth: number;
  pollutionRisk: number;
  biodiversityScore: number;
  cleanupPriority: "Low" | "Medium" | "High" | "Critical";
  aiConfidence: number;
}

export async function analyzeOcean(): Promise<OceanAnalysis> {
  const ocean = await getOceanData();

  let marineHealth = 90;

  // Higher waves can indicate rough sea conditions
  marineHealth -= ocean.waveHeight * 4;

  // Strong winds increase floating debris spread
  marineHealth -= ocean.windSpeed * 0.3;

  // Extreme temperatures affect marine life
  if (ocean.temperature > 30) {
    marineHealth -= 10;
  }

  marineHealth = Math.max(0, Math.min(100, marineHealth));

  const pollutionRisk = Math.round(100 - marineHealth);

  const biodiversityScore = Math.round(
    marineHealth * 0.92
  );

  let cleanupPriority: OceanAnalysis["cleanupPriority"] =
    "Low";

  if (pollutionRisk > 80) cleanupPriority = "Critical";
  else if (pollutionRisk > 60) cleanupPriority = "High";
  else if (pollutionRisk > 40) cleanupPriority = "Medium";

  return {
    marineHealth: Math.round(marineHealth),
    pollutionRisk,
    biodiversityScore,
    cleanupPriority,
    aiConfidence: 96,
  };
}