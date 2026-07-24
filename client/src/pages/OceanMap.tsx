/*
 * Ocean Map Page - DeepSea Guardian
 * Design: Abyssal Interface - Interactive map with filter sidebar
 */
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  MapPin, AlertTriangle, Droplets, Shield, Bot,
  Filter, Search, Layers
} from "lucide-react";
import AppLayout from "@/components/AppLayout";
import { MapView } from "@/components/Map";
import { mapLocations } from "@/data/mockData";

const locationTypes = [
  { key: "all", label: "All Types", icon: Layers, color: "#00D9FF" },
  { key: "plastic", label: "Plastic Pollution", icon: Droplets, color: "#00D9FF" },
  { key: "oil", label: "Oil Spill", icon: AlertTriangle, color: "#FF6B6B" },
  { key: "net", label: "Ghost Nets", icon: Filter, color: "#FFD93D" },
  { key: "coral", label: "Coral Bleaching", icon: MapPin, color: "#14F1D9" },
  { key: "dumping", label: "Illegal Dumping", icon: AlertTriangle, color: "#FF6B6B" },
  { key: "station", label: "Research Stations", icon: Shield, color: "#6FE7FF" },
  { key: "protected", label: "Protected Areas", icon: Shield, color: "#18E299" },
  { key: "drone", label: "Active Drones", icon: Bot, color: "#00D9FF" },
];

export default function OceanMap() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<typeof mapLocations[0] | null>(null);

  const filteredLocations = activeFilter === "all"
    ? mapLocations
    : mapLocations.filter((l) => l.type === activeFilter);

  const handleMapReady = useCallback((gMap: google.maps.Map) => {
    setMap(gMap);
    addMarkers(gMap, filteredLocations);
  }, [filteredLocations]);

  const addMarkers = (gMap: google.maps.Map, locations: typeof mapLocations) => {
    // Remove existing markers
    markers.forEach((m) => m.setMap(null));

    const newMarkers = locations.map((loc) => {
      const typeColor = locationTypes.find((t) => t.key === loc.type)?.color || "#00D9FF";
      const svgMarker = `
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" fill="${typeColor}" opacity="0.2" stroke="${typeColor}" stroke-width="1.5"/>
          <circle cx="16" cy="16" r="6" fill="${typeColor}" opacity="0.8"/>
        </svg>
      `;
      const icon = {
        url: `data:image/svg+xml,${encodeURIComponent(svgMarker)}`,
        scaledSize: new google.maps.Size(32, 32),
      };

      const marker = new google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map: gMap,
        icon,
        title: loc.name,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="background: rgba(7,28,52,0.95); border: 1px solid rgba(0,217,255,0.2); border-radius: 12px; padding: 16px; color: #fff; max-width: 280px; font-family: Inter, sans-serif;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <div style="width: 10px; height: 10px; border-radius: 50%; background: ${typeColor}; box-shadow: 0 0 8px ${typeColor};"></div>
              <span style="font-weight: 600; font-size: 14px;">${loc.name}</span>
            </div>
            <p style="font-size: 12px; color: rgba(255,255,255,0.6); margin-bottom: 8px;">${loc.description}</p>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 11px; padding: 2px 8px; border-radius: 4px; background: ${typeColor}20; color: ${typeColor};">
                ${loc.severity === "none" ? "Normal" : loc.severity.toUpperCase()}
              </span>
              <span style="font-size: 11px; color: rgba(255,255,255,0.4);">${loc.lat.toFixed(1)}°, ${loc.lng.toFixed(1)}°</span>
            </div>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(gMap, marker);
        setSelectedLocation(loc);
      });

      return marker;
    });

    setMarkers(newMarkers);
  };

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
    if (map) {
      const filtered = key === "all" ? mapLocations : mapLocations.filter((l) => l.type === key);
      addMarkers(map, filtered);
    }
  };

  return (
    <AppLayout>
      <div className="container pb-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">Ocean Map</h1>
          <p className="text-sm text-white/40 mt-1">Interactive monitoring of ocean events and assets</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Filter Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:w-64 shrink-0"
          >
            <div className="glass rounded-xl p-4 sticky top-24">
              <h3 className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#00D9FF]" />
                Filter Locations
              </h3>
              <div className="space-y-1">
                {locationTypes.map((type) => {
                  const Icon = type.icon;
                  const count = type.key === "all"
                    ? mapLocations.length
                    : mapLocations.filter((l) => l.type === type.key).length;
                  return (
                    <button
                      key={type.key}
                      onClick={() => handleFilterChange(type.key)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                        activeFilter === type.key
                          ? "bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/20"
                          : "text-white/50 hover:text-white/80 hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="flex-1 text-left">{type.label}</span>
                      <span className="text-xs text-white/30">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.aside>

          {/* Map */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl overflow-hidden"
              style={{ height: "calc(100vh - 180px)", minHeight: 500 }}
            >
              <MapView
                onMapReady={handleMapReady}
                initialCenter={{ lat: 20, lng: 0 }}
                initialZoom={2}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
