/*
 * Mock Data - DeepSea Guardian
 * Central data source for all pages and components.
 */

// ============================================================
// HOME PAGE
// ============================================================

export const homeStats = [
  { label: "Ocean Area Monitored (km²)", value: "361,000,000", suffix: "" },
  { label: "Active Sensors", value: "48,200", suffix: "+" },
  { label: "Autonomous Drones", value: "127", suffix: "" },
  { label: "Species Tracked", value: "3,400", suffix: "+" },
];

export const features = [
  {
    icon: "brain",
    title: "AI-Powered Analysis",
    description: "Deep learning models process millions of data points daily to detect anomalies and predict ecological threats before they escalate.",
  },
  {
    icon: "drone",
    title: "Autonomous Drones",
    description: "A fleet of AUVs patrols ocean depths up to 6,000 meters, capturing sonar, visual, and chemical data around the clock.",
  },
  {
    icon: "sensor",
    title: "IoT Sensor Network",
    description: "Thousands of connected buoys and seabed sensors stream real-time temperature, salinity, and pollution readings.",
  },
  {
    icon: "satellite",
    title: "Satellite Imagery",
    description: "Integration with multiple satellite constellations tracks surface conditions, vessel activity, and sea temperature globally.",
  },
  {
    icon: "chart",
    title: "Predictive Analytics",
    description: "Forecast coral bleaching, algal blooms, and pollution spread weeks in advance with 94% model accuracy.",
  },
  {
    icon: "alert",
    title: "Real-Time Alerts",
    description: "Instant notifications for illegal fishing, oil spills, and other critical events, routed directly to response teams.",
  },
];

export const timeline = [
  { year: "2020", title: "Founded", description: "DeepSea Guardian launched with a small team of oceanographers and engineers in San Francisco." },
  { year: "2021", title: "First Sensor Network", description: "Deployed our first array of 500 IoT sensors across the Pacific Ocean basin." },
  { year: "2022", title: "AI Platform Launch", description: "Released our machine learning platform for real-time pollution and biodiversity monitoring." },
  { year: "2023", title: "Drone Fleet Expansion", description: "Scaled our autonomous underwater vehicle fleet to over 100 units across five ocean regions." },
  { year: "2024", title: "Global Coverage", description: "Achieved monitoring coverage across 361 million square kilometers of ocean surface and depths." },
];

export const testimonials = [
  {
    name: "Dr. Elena Ramirez",
    role: "Marine Biologist, NOAA",
    quote: "DeepSea Guardian's predictive models gave us a two-week head start on a coral bleaching event we would have otherwise missed.",
  },
  {
    name: "James Okafor",
    role: "Director, Ocean Conservation Trust",
    quote: "The real-time alert system has transformed how quickly we can respond to illegal fishing activity in protected waters.",
  },
  {
    name: "Dr. Priya Nair",
    role: "Climate Researcher, University of Auckland",
    quote: "Having access to this level of granular water quality data across so many regions is unprecedented for our research.",
  },
];

export const faqs = [
  {
    question: "How does DeepSea Guardian collect ocean data?",
    answer: "We combine autonomous underwater drones, a global network of IoT sensors and buoys, and satellite imagery to continuously gather data on water quality, biodiversity, and pollution across the world's oceans.",
  },
  {
    question: "Who uses this platform?",
    answer: "Our platform is used by government agencies, research institutions, and conservation organizations to monitor ocean health and coordinate rapid responses to environmental threats.",
  },
  {
    question: "How accurate are the AI predictions?",
    answer: "Our machine learning models currently operate at approximately 94% accuracy for predictive tasks like coral bleaching forecasts and pollution spread modeling, and are continuously retrained on new data.",
  },
  {
    question: "Can I access this data for my own research?",
    answer: "Yes. We offer API access and data partnerships for verified research institutions and government agencies. Reach out through our contact page to learn more.",
  },
  {
    question: "How is DeepSea Guardian funded?",
    answer: "We operate through a combination of research grants, government contracts, and partnerships with conservation nonprofits committed to ocean protection.",
  },
];

export const oceanFacts = [
  { stat: "71%", label: "Of Earth's surface is ocean" },
  { stat: "6,000m", label: "Max drone monitoring depth" },
  { stat: "3.4K+", label: "Species tracked globally" },
  { stat: "94%", label: "AI prediction accuracy" },
];

// ============================================================
// DASHBOARD PAGE
// ============================================================

export const dashboardStats = {
  oceanHealthScore: 72,
  pollutionIndex: 58,
  marineSpecies: 3421,
  connectedSensors: 48200,
  activeDrones: 127,
  riskLevel: "Moderate" as "Low" | "Moderate" | "High",
};

export const oceanHealthTrend = [
  { month: "Feb", score: 69 },
  { month: "Mar", score: 70 },
  { month: "Apr", score: 68 },
  { month: "May", score: 71 },
  { month: "Jun", score: 73 },
  { month: "Jul", score: 72 },
];

export const pollutionByType = [
  { name: "Plastic", value: 42, color: "#00D9FF" },
  { name: "Oil", value: 18, color: "#FF6B6B" },
  { name: "Chemical", value: 22, color: "#FFD93D" },
  { name: "Sewage", value: 12, color: "#14F1D9" },
  { name: "Other", value: 6, color: "#6FE7FF" },
];

export const sensorActivity = [
  { day: "Mon", active: 46200, inactive: 2000 },
  { day: "Tue", active: 46800, inactive: 1400 },
  { day: "Wed", active: 47100, inactive: 1100 },
  { day: "Thu", active: 47600, inactive: 600 },
  { day: "Fri", active: 47950, inactive: 250 },
  { day: "Sat", active: 48100, inactive: 100 },
  { day: "Sun", active: 48200, inactive: 0 },
];

export const waterQualityData = [
  { region: "Pacific", ph: 8.2, dissolved: 6.8, turbidity: 2.1 },
  { region: "Atlantic", ph: 8.1, dissolved: 6.5, turbidity: 2.6 },
  { region: "Indian", ph: 7.9, dissolved: 6.1, turbidity: 3.4 },
  { region: "Arctic", ph: 8.3, dissolved: 7.2, turbidity: 1.5 },
  { region: "Southern", ph: 8.0, dissolved: 6.6, turbidity: 2.8 },
];

export const recentAlerts = [
  { id: 1, severity: "critical" as const, title: "Major oil sheen detected near shipping lane", location: "Gulf of Mexico", time: "12m ago" },
  { id: 2, severity: "high" as const, title: "Unusual coral bleaching pattern identified", location: "Great Barrier Reef", time: "48m ago" },
  { id: 3, severity: "medium" as const, title: "Sensor buoy offline for 6 hours", location: "North Atlantic", time: "2h ago" },
  { id: 4, severity: "low" as const, title: "Minor plastic debris accumulation", location: "Bay of Bengal", time: "5h ago" },
  { id: 5, severity: "medium" as const, title: "Vessel activity flagged near protected zone", location: "Coral Triangle", time: "7h ago" },
];

export const recentActivities = [
  { id: 1, action: "Drone AUV-14 completed seabed survey", location: "Mariana Trench", time: "3m ago" },
  { id: 2, action: "New sensor cluster deployed", location: "Coral Triangle", time: "22m ago" },
  { id: 3, action: "AI model retrained on latest pollution data", location: "Global", time: "1h ago" },
  { id: 4, action: "Report generated for weekly review", location: "Pacific Basin", time: "3h ago" },
  { id: 5, action: "Satellite pass captured new imagery", location: "Southern Ocean", time: "6h ago" },
];

export const weatherData = {
  temperature: 24,
  condition: "Partly Cloudy",
  humidity: 78,
  windSpeed: 18,
  waveHeight: 1.4,
};

// ============================================================
// CONTACT PAGE
// ============================================================

export const offices = [
  { city: "San Francisco", country: "USA", address: "525 Market St, Suite 800, CA 94105", email: "sf@deepseaguardian.org" },
  { city: "Lisbon", country: "Portugal", address: "Av. da Liberdade 110, 1250-146", email: "lisbon@deepseaguardian.org" },
  { city: "Singapore", country: "Singapore", address: "1 Marina Blvd, #28-00, 018989", email: "singapore@deepseaguardian.org" },
];

// ============================================================
// POLLUTION PAGE
// ============================================================

export const plasticPollutionData = [
  { year: "2018", amount: 8.4 },
  { year: "2019", amount: 9.1 },
  { year: "2020", amount: 9.8 },
  { year: "2021", amount: 10.6 },
  { year: "2022", amount: 11.4 },
  { year: "2023", amount: 12.1 },
  { year: "2024", amount: 12.8 },
];

export const oilSpillData = [
  { year: "2018", incidents: 14, volume: 32 },
  { year: "2019", incidents: 12, volume: 28 },
  { year: "2020", incidents: 9, volume: 21 },
  { year: "2021", incidents: 11, volume: 24 },
  { year: "2022", incidents: 8, volume: 18 },
  { year: "2023", incidents: 9, volume: 19 },
  { year: "2024", incidents: 6, volume: 12 },
];

export const waterTemperatureData = [
  { month: "Jan", surface: 18.2, deep: 4.1 },
  { month: "Feb", surface: 18.5, deep: 4.1 },
  { month: "Mar", surface: 19.1, deep: 4.2 },
  { month: "Apr", surface: 20.4, deep: 4.2 },
  { month: "May", surface: 21.8, deep: 4.3 },
  { month: "Jun", surface: 23.2, deep: 4.3 },
  { month: "Jul", surface: 24.6, deep: 4.4 },
];

export const microplasticData = [
  { region: "Pacific Gyre", concentration: 892, trend: "increasing" as const },
  { region: "North Atlantic", concentration: 654, trend: "increasing" as const },
  { region: "Mediterranean", concentration: 731, trend: "stable" as const },
  { region: "Indian Ocean", concentration: 512, trend: "decreasing" as const },
  { region: "Arctic Sea", concentration: 218, trend: "increasing" as const },
  { region: "Southern Ocean", concentration: 176, trend: "stable" as const },
];

// ============================================================
// ABOUT PAGE
// ============================================================

export const teamMembers = [
  { name: "Dr. Sarah Chen", role: "Founder & CEO", specialty: "Marine Biology & AI" },
  { name: "Marcus Webb", role: "CTO", specialty: "Autonomous Systems" },
  { name: "Dr. Amara Diallo", role: "Head of Research", specialty: "Oceanography" },
  { name: "Liam Fitzgerald", role: "Lead Data Scientist", specialty: "Predictive Modeling" },
  { name: "Dr. Yuki Tanaka", role: "Robotics Engineer", specialty: "Underwater Drones" },
  { name: "Nadia Petrova", role: "Head of Partnerships", specialty: "Conservation Policy" },
];

// ============================================================
// BIODIVERSITY PAGE
// ============================================================

export const marineSpecies = [
  {
    id: 1,
    name: "Blue Whale",
    description: "The largest animal known to have ever existed.",
    threatLevel: "Endangered" as const,
    population: "10,000-25,000",
    habitat: "All oceans except Arctic",
    healthScore: 58,
    trend: [52, 54, 55, 56, 57, 58],
    conservationStatus: "Protected under the International Whaling Commission moratorium since 1966.",
  },
  {
    id: 2,
    name: "Sea Turtle",
    description: "Ancient mariners navigating oceans for over 100 million years.",
    threatLevel: "Vulnerable" as const,
    population: "~6.5 million",
    habitat: "Tropical and subtropical waters",
    healthScore: 64,
    trend: [60, 61, 63, 62, 64, 64],
    conservationStatus: "Six of seven species listed as threatened or endangered under CITES.",
  },
  {
    id: 3,
    name: "Great White Shark",
    description: "Apex predator crucial to maintaining marine ecosystem balance.",
    threatLevel: "Vulnerable" as const,
    population: "~3,500",
    habitat: "Coastal and offshore temperate waters",
    healthScore: 49,
    trend: [55, 53, 51, 50, 49, 49],
    conservationStatus: "Protected in many regions; population continues to decline from bycatch.",
  },
  {
    id: 4,
    name: "Bottlenose Dolphin",
    description: "Highly intelligent and social marine mammal found worldwide.",
    threatLevel: "Least Concern" as const,
    population: "~600,000",
    habitat: "Temperate and tropical waters globally",
    healthScore: 81,
    trend: [76, 77, 78, 79, 80, 81],
    conservationStatus: "Stable populations, though localized threats from pollution persist.",
  },
  {
    id: 5,
    name: "Coral Reef",
    description: "Vital ecosystems supporting a quarter of all marine species.",
    threatLevel: "Endangered" as const,
    population: "~284,300 km²",
    habitat: "Shallow tropical and subtropical waters",
    healthScore: 41,
    trend: [50, 47, 45, 43, 42, 41],
    conservationStatus: "Rapid decline due to ocean warming and acidification-driven bleaching.",
  },
  {
    id: 6,
    name: "Giant Pacific Octopus",
    description: "The largest octopus species, known for remarkable intelligence.",
    threatLevel: "Least Concern" as const,
    population: "Data deficient",
    habitat: "North Pacific coastal waters",
    healthScore: 73,
    trend: [70, 71, 70, 72, 72, 73],
    conservationStatus: "No major population concerns identified at this time.",
  },
];

// ============================================================
// INSIGHTS PAGE
// ============================================================

export const aiInsights = [
  {
    id: 1,
    type: "coral-bleaching" as const,
    title: "Elevated Coral Bleaching Risk in Coral Triangle",
    riskScore: 78,
    timeline: "Next 3-4 weeks",
    description: "Sea surface temperatures have risen 1.8°C above seasonal average, creating conditions consistent with previous major bleaching events in the region.",
    recommendedAction: "Deploy additional monitoring drones and alert regional marine park authorities.",
    confidence: 91,
  },
  {
    id: 2,
    type: "pollution-spread" as const,
    title: "Plastic Debris Convergence Forecast",
    riskScore: 64,
    timeline: "Next 10 days",
    description: "Ocean current modeling predicts a significant plastic debris field converging near a major shipping route within the Pacific Gyre.",
    recommendedAction: "Coordinate cleanup vessel deployment and notify maritime traffic control.",
    confidence: 85,
  },
  {
    id: 3,
    type: "illegal-fishing" as const,
    title: "Suspicious Vessel Activity Near Protected Zone",
    riskScore: 88,
    timeline: "Immediate",
    description: "Satellite tracking identified three vessels operating with disabled AIS transponders near a marine protected area boundary.",
    recommendedAction: "Alert coast guard and cross-reference vessel identifiers with registry databases.",
    confidence: 79,
  },
  {
    id: 4,
    type: "species-migration" as const,
    title: "Unexpected Blue Whale Migration Shift",
    riskScore: 35,
    timeline: "Ongoing",
    description: "Acoustic monitoring data shows blue whale pods migrating further north than historical patterns, likely linked to shifting krill populations.",
    recommendedAction: "Update shipping lane advisories to reduce vessel strike risk in new migration corridor.",
    confidence: 82,
  },
  {
    id: 5,
    type: "water-quality" as const,
    title: "Declining Dissolved Oxygen Levels",
    riskScore: 57,
    timeline: "Next 2 months",
    description: "Water quality sensors in the Indian Ocean region show a gradual decline in dissolved oxygen, a leading indicator of potential dead zone formation.",
    recommendedAction: "Increase sensor sampling frequency and notify regional fisheries management.",
    confidence: 88,
  },
];

// ============================================================
// REPORTS PAGE
// ============================================================

export const reports = [
  {
    id: 1,
    title: "Weekly Ocean Health Summary",
    date: "Jul 21, 2026",
    period: "Jul 14 - Jul 20, 2026",
    type: "weekly" as const,
    summary: "Overall ocean health remained stable this week with a slight improvement in the Pacific basin, offset by rising pollution indicators in the Indian Ocean.",
    highlights: ["3 new sensors deployed", "1 oil spill contained", "94% AI uptime", "2 species surveys completed"],
    environmentalScore: 72,
  },
  {
    id: 2,
    title: "Monthly Biodiversity Assessment",
    date: "Jul 1, 2026",
    period: "June 2026",
    type: "monthly" as const,
    summary: "Marine biodiversity tracking shows continued decline in coral reef health, while marine mammal populations remain broadly stable across monitored regions.",
    highlights: ["3,421 species tracked", "6 threatened species flagged", "12 reef sites surveyed", "127 drones active"],
    environmentalScore: 68,
  },
  {
    id: 3,
    title: "Quarterly Pollution Impact Report",
    date: "Jun 30, 2026",
    period: "Q2 2026",
    type: "monthly" as const,
    summary: "Plastic pollution levels rose 5.6% quarter-over-quarter, while oil spill incidents dropped significantly following improved shipping lane monitoring.",
    highlights: ["12.8M tons plastic tracked", "33% fewer oil incidents", "48,200 sensors online", "5 regions analyzed"],
    environmentalScore: 61,
  },
];

// ============================================================
// OCEAN MAP PAGE
// ============================================================

export const mapLocations = [
  { id: 1, name: "Great Pacific Garbage Patch", lat: 32.0, lng: -145.0, type: "plastic", description: "Large accumulation of marine plastic debris in the North Pacific gyre.", severity: "high" as const },
  { id: 2, name: "Gulf of Mexico Oil Sheen", lat: 27.5, lng: -90.2, type: "oil", description: "Recently detected oil sheen near an active shipping corridor.", severity: "critical" as const },
  { id: 3, name: "North Sea Ghost Net Cluster", lat: 56.3, lng: 3.1, type: "net", description: "Abandoned fishing nets entangling local marine wildlife.", severity: "medium" as const },
  { id: 4, name: "Great Barrier Reef Bleaching Zone", lat: -18.3, lng: 147.7, type: "coral", description: "Coral bleaching event linked to elevated sea surface temperatures.", severity: "high" as const },
  { id: 5, name: "Java Sea Illegal Dumping Site", lat: -5.9, lng: 110.4, type: "dumping", description: "Suspected illegal chemical waste dumping detected by satellite imagery.", severity: "critical" as const },
  { id: 6, name: "Woods Hole Research Station", lat: 41.5, lng: -70.7, type: "station", description: "Primary Atlantic research and data relay station.", severity: "none" as const },
  { id: 7, name: "Coral Triangle Protected Area", lat: 0.5, lng: 122.0, type: "protected", description: "Marine protected area supporting exceptional biodiversity.", severity: "none" as const },
  { id: 8, name: "AUV-14 Patrol Route", lat: 11.3, lng: 142.2, type: "drone", description: "Autonomous drone conducting seabed survey near the Mariana Trench.", severity: "none" as const },
  { id: 9, name: "Bay of Bengal Debris Field", lat: 15.8, lng: 88.5, type: "plastic", description: "Growing accumulation of plastic debris carried by monsoon currents.", severity: "medium" as const },
  { id: 10, name: "North Atlantic Sensor Buoy Outage", lat: 45.2, lng: -35.6, type: "station", description: "Sensor buoy offline, awaiting maintenance drone dispatch.", severity: "low" as const },
  { id: 11, name: "Southern Ocean Research Outpost", lat: -55.0, lng: 45.0, type: "station", description: "Remote research station monitoring Antarctic circumpolar current.", severity: "none" as const },
  { id: 12, name: "Coral Triangle Drone Patrol", lat: 2.1, lng: 125.4, type: "drone", description: "Autonomous drone patrolling protected coral habitats.", severity: "none" as const },
];