import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMap,
} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import { incidents } from "../../data/incidents";
import { useCommandCenter } from "../../context/CommandCenterContext";

// Fix Leaflet marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function FlyToIncident() {
  const map = useMap();

  const { selectedIncident } = useCommandCenter();

  useEffect(() => {
    if (!selectedIncident) return;

    map.flyTo(
      [
        selectedIncident.latitude,
        selectedIncident.longitude,
      ],
      8,
      {
        duration: 2,
      }
    );
  }, [selectedIncident, map]);

  return null;
}

export default function OceanMap() {
  const { selectedIncident } = useCommandCenter();

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      scrollWheelZoom
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FlyToIncident />

      {incidents.map((incident) => (
        <Marker
          key={incident.id}
          position={[
            incident.latitude,
            incident.longitude,
          ]}
        >
          <Popup>

            <div className="space-y-2">

              <h3 className="font-bold">

                {incident.title}

              </h3>

              <p>

                {incident.location}

              </p>

              <p>

                Severity: {incident.severity}

              </p>

              <p>

                {incident.description}

              </p>

            </div>

          </Popup>
        </Marker>
      ))}

      {selectedIncident && (
        <Circle
          center={[
            selectedIncident.latitude,
            selectedIncident.longitude,
          ]}
          radius={12000}
          pathOptions={{
            color: "#22d3ee",
            fillColor: "#22d3ee",
            fillOpacity: 0.2,
          }}
        />
      )}
    </MapContainer>
  );
}