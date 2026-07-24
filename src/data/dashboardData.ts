export const stats = [
  {
    title: "Marine Health",
    value: "82%",
    color: "text-green-400",
  },
  {
    title: "Pollution Index",
    value: "63",
    color: "text-yellow-400",
  },
  {
    title: "Plastic Waste",
    value: "1,248 kg",
    color: "text-cyan-400",
  },
  {
    title: "Active Alerts",
    value: "7",
    color: "text-red-400",
  },
];

export const pollutionLocations = [
  {
    id: 1,
    name: "Arabian Sea",
    lat: 19.076,
    lng: 72.8777,
    level: "High",
    waste: "480 kg",
  },
  {
    id: 2,
    name: "Bay of Bengal",
    lat: 13.0827,
    lng: 80.2707,
    level: "Medium",
    waste: "210 kg",
  },
  {
    id: 3,
    name: "Indian Ocean",
    lat: 8.0883,
    lng: 77.5385,
    level: "Low",
    waste: "70 kg",
  },
];

export const alerts = [
  {
    id: 1,
    severity: "High",
    message: "Plastic accumulation detected.",
    time: "10 min ago",
  },
  {
    id: 2,
    severity: "Medium",
    message: "Water quality declining.",
    time: "32 min ago",
  },
  {
    id: 3,
    severity: "Low",
    message: "Normal monitoring update.",
    time: "1 hour ago",
  },
];
export const pollutionTrend = [
  { month: "Jan", pollution: 42 },
  { month: "Feb", pollution: 47 },
  { month: "Mar", pollution: 55 },
  { month: "Apr", pollution: 60 },
  { month: "May", pollution: 66 },
  { month: "Jun", pollution: 63 },
];

export const wasteDistribution = [
  { name: "Plastic", value: 55 },
  { name: "Oil", value: 18 },
  { name: "Chemical", value: 15 },
  { name: "Other", value: 12 },
];