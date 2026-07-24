/// <reference types="@types/google.maps" />

import { useEffect, useRef } from "react";
import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    google?: typeof google;
  }
}

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function loadMapScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Google Maps already loaded
    if (window.google?.maps) {
      resolve();
      return;
    }

    // API key missing
    if (!API_KEY) {
      reject(new Error("Missing VITE_GOOGLE_MAPS_API_KEY"));
      return;
    }

    // Script already exists
    const existingScript = document.querySelector(
      'script[src*="maps.googleapis.com/maps/api/js"]'
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve());
      existingScript.addEventListener("error", () =>
        reject(new Error("Failed to load Google Maps"))
      );
      return;
    }

    // Create script
    const script = document.createElement("script");

    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=weekly&libraries=marker,places,geometry`;

    script.async = true;
    script.defer = true;

    script.onload = () => resolve();

    script.onerror = () =>
      reject(new Error("Failed to load Google Maps"));

    document.head.appendChild(script);
  });
}

interface MapViewProps {
  className?: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  onMapReady?: (map: google.maps.Map) => void;
}

export function MapView({
  className,
  initialCenter = { lat: 20, lng: 0 },
  initialZoom = 2,
  onMapReady,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const init = usePersistFn(async () => {
    try {
      await loadMapScript();

      if (!mapContainer.current) return;

      // Prevent creating the map twice
      if (mapRef.current) return;

      mapRef.current = new window.google!.maps.Map(mapContainer.current, {
        center: initialCenter,
        zoom: initialZoom,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
        streetViewControl: true,
        mapId: "DEMO_MAP_ID",
      });

      onMapReady?.(mapRef.current);
    } catch (err) {
      console.error(err);

      if (mapContainer.current) {
        mapContainer.current.innerHTML = `
          <div style="
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            background:#071c34;
            text-align:center;
            padding:24px;
            font-family:sans-serif;
          ">
            <div>
              <h3>Google Maps failed to load</h3>
              <p>Please check your API key configuration.</p>
            </div>
          </div>
        `;
      }
    }
  });

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div
      ref={mapContainer}
      className={cn("w-full h-[500px]", className)}
    />
  );
}