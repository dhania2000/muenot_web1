"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// A spread of market hubs shown as pulsing points on the map.
const markers: { name: string; coordinates: [number, number] }[] = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "São Paulo", coordinates: [-46.6333, -23.5505] },
  { name: "London", coordinates: [-0.1276, 51.5074] },
  { name: "Berlin", coordinates: [13.405, 52.52] },
  { name: "Cairo", coordinates: [31.2357, 30.0444] },
  { name: "Dubai", coordinates: [55.2708, 25.2048] },
  { name: "Mumbai", coordinates: [72.8777, 19.076] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
];

export function WorldMap() {
  return (
    <div className="relative w-full" aria-hidden="true">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 155 }}
        width={800}
        height={400}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="var(--color-primary)"
                stroke="var(--color-primary)"
                strokeWidth={0.4}
                style={{
                  default: { fillOpacity: 0.08, strokeOpacity: 0.25, outline: "none" },
                  hover: { fillOpacity: 0.14, strokeOpacity: 0.35, outline: "none" },
                  pressed: { fillOpacity: 0.14, outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map(({ name, coordinates }, index) => (
          <Marker key={name} coordinates={coordinates}>
            <circle
              r={9}
              fill="var(--color-accent)"
              opacity={0.18}
              style={{
                animation: "wm-pulse 2.6s ease-out infinite",
                animationDelay: `${index * 0.25}s`,
                transformOrigin: "center",
              }}
            />
            <circle r={2.6} fill="var(--color-accent)" />
          </Marker>
        ))}
      </ComposableMap>

      <style>{`
        @keyframes wm-pulse {
          0% { transform: scale(0.6); opacity: 0.35; }
          70% { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
