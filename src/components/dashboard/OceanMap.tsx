import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

import { pollutionLocations } from "../../data/dashboardData";

const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const center: LatLngExpression = [15.5, 78];

export default function OceanMap() {
  return (
    <MapContainer
      center={center}
      zoom={5}
      scrollWheelZoom
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "16px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {pollutionLocations.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          icon={markerIcon}
        >
          <Popup>
            <div className="space-y-2 min-w-[180px]">
              <h3 className="text-lg font-bold">{location.name}</h3>

              <p>
                <strong>Risk Level:</strong> {location.level}
              </p>

              <p>
                <strong>Plastic Waste:</strong> {location.waste}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {location.level === "High"
                  ? "⚠️ Immediate Attention"
                  : location.level === "Medium"
                  ? "🟡 Monitoring"
                  : "🟢 Stable"}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}