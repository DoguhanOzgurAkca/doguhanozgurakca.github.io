"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import MapViewer from "./components/mapViewer";
import { maps } from "./data/mapList";

export default function Page() {
  const mapKeys = Object.keys(maps);
  const [selectedMap, setSelectedMap] = useState<string>(mapKeys[0]);
  const [isLoading, setIsLoading] = useState(false);

  const currentMap = maps[selectedMap];
  const [mapSrc, setMapSrc] = useState(currentMap.base);

  // Split overlays by type
  const ceilingOverlays = currentMap.overlays.filter(
    (o) => o.type === "ceiling"
  );
  

  // Default visibility: ceiling ON, weedkiller OFF
  const initialVisible = ceilingOverlays.map((o) => o.id);
  const [visibleOverlays, setVisibleOverlays] =
    useState<string[]>(initialVisible);

  // When map changes, update base and overlays
  useEffect(() => {
    const nextMap = maps[selectedMap];
    setIsLoading(true);
    setMapSrc(nextMap.base);

    const ceiling = nextMap.overlays
      .filter((o) => o.type === "ceiling")
      .map((o) => o.id);
    setVisibleOverlays(ceiling);
  }, [selectedMap]);

  const toggleOverlay = (id: string) => {
    setVisibleOverlays((prev) =>
      prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id]
    );
  };

  const disableAllOfType = (type: "ceiling" | "weedkiller") => {
    const idsToRemove = currentMap.overlays
      .filter((o) => o.type === type)
      .map((o) => o.id);
    setVisibleOverlays((prev) =>
      prev.filter((id) => !idsToRemove.includes(id))
    );
  };


  return (
    <div className="relative w-screen h-screen">
      <Sidebar
        overlays={currentMap.overlays}
        visibleOverlays={visibleOverlays}
        toggleOverlay={toggleOverlay}
        disableAllOfType={disableAllOfType}
        switchMap={(id) => setSelectedMap(id)}
        isLoading={isLoading}
        mapKeys={mapKeys} 
        currentMapId={selectedMap} 
      />

      {isLoading && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <MapViewer
        mapSrc={mapSrc}
        overlays={currentMap.overlays}
        visibleOverlays={visibleOverlays}
        isLoading={isLoading}
        onMapLoaded={() => setIsLoading(false)}
      />
    </div>
  );
}
