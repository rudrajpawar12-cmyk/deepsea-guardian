export interface OceanData {
  marineHealth: number;
  pollutionIndex: number;
  plasticWaste: number;
  activeAlerts: number;
}

export interface PredictionResult {
  risk: "Low" | "Medium" | "High" | "Critical";
  confidence: number;
  prediction: string;
  recommendation: string;
  color: string;
}

export function predictPollution(
  data: OceanData
): PredictionResult {
  const score =
    data.pollutionIndex * 0.4 +
    data.plasticWaste * 0.3 +
    (100 - data.marineHealth) * 0.2 +
    data.activeAlerts * 2;

  if (score >= 80) {
    return {
      risk: "Critical",
      confidence: 97,
      color: "text-red-400",
      prediction:
        "Severe pollution escalation expected within the next 24 hours.",
      recommendation:
        "Immediately deploy cleanup vessels and issue environmental alerts.",
    };
  }

  if (score >= 60) {
    return {
      risk: "High",
      confidence: 93,
      color: "text-orange-400",
      prediction:
        "Pollution is likely to increase significantly within 48 hours.",
      recommendation:
        "Deploy autonomous cleanup drones and increase monitoring frequency.",
    };
  }

  if (score >= 40) {
    return {
      risk: "Medium",
      confidence: 88,
      color: "text-yellow-400",
      prediction:
        "Moderate pollution growth is expected over the next 72 hours.",
      recommendation:
        "Monitor affected areas and prepare response teams.",
    };
  }

  return {
    risk: "Low",
    confidence: 96,
    color: "text-green-400",
    prediction:
      "Marine ecosystem is expected to remain stable.",
    recommendation:
      "Continue routine monitoring and preventive cleanup operations.",
  };
}