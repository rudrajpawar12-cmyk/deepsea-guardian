import type { Incident } from "../context/CommandCenterContext";

export const incidents: Incident[] = [
  {
    id: 1,
    title: "Mumbai Oil Spill",
    location: "Mumbai Coast",
    severity: "Critical",
    latitude: 18.943,
    longitude: 72.835,
    status: "Response Active",
    description:
      "Satellite imagery detected a rapidly expanding oil spill near Mumbai Port.",
  },

  {
    id: 2,
    title: "Arabian Sea Plastic Accumulation",
    location: "Arabian Sea",
    severity: "High",
    latitude: 18.2,
    longitude: 69.8,
    status: "Monitoring",
    description:
      "Large floating plastic accumulation identified using AI image analysis.",
  },

  {
    id: 3,
    title: "Goa Chemical Leakage",
    location: "Goa",
    severity: "Medium",
    latitude: 15.48,
    longitude: 73.82,
    status: "Verification",
    description:
      "Possible industrial discharge detected near coastal waters.",
  },

  {
    id: 4,
    title: "Chennai Algal Bloom",
    location: "Bay of Bengal",
    severity: "High",
    latitude: 13.08,
    longitude: 80.27,
    status: "Monitoring",
    description:
      "AI predicts harmful algal bloom expansion during the next 18 hours.",
  },

  {
    id: 5,
    title: "Andaman Floating Debris",
    location: "Andaman Sea",
    severity: "Low",
    latitude: 11.62,
    longitude: 92.73,
    status: "Observed",
    description:
      "Marine debris field identified through satellite surveillance.",
  },

  {
    id: 6,
    title: "Lakshadweep Coral Threat",
    location: "Lakshadweep",
    severity: "Critical",
    latitude: 10.56,
    longitude: 72.64,
    status: "Emergency",
    description:
      "Temperature anomaly threatens coral reef ecosystem.",
  },
];