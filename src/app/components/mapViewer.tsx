"use client";

import { useEffect, useRef, useCallback } from "react";
import { Overlay } from "../data/mapList";
import ZoomControls from "./ZoomControl";
 
interface MapViewerProps {
  overlays: Overlay[];
  visibleOverlays: string[];
  mapSrc: string;
  isLoading: boolean;
  onMapLoaded: () => void;
}

export default function MapViewer({
  overlays,
  visibleOverlays,
  mapSrc,
  isLoading,
  onMapLoaded,
}: MapViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const scaleRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const applyTransform = () => {
    if (mapRef.current) {
      const { x, y } = offsetRef.current;
      const scale = scaleRef.current;
      mapRef.current.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    }
  };

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(() => {
        applyTransform();
        rafRef.current = null;
      });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scaleAmount = -e.deltaY * 0.0025;
      let newScale = scaleRef.current + scaleAmount;
      newScale = Math.min(Math.max(0.5, newScale), 5);

      const rect = container.getBoundingClientRect();
      const dx = e.clientX - rect.left - offsetRef.current.x;
      const dy = e.clientY - rect.top - offsetRef.current.y;

      const newOffset = {
        x:
          offsetRef.current.x -
          (dx * (newScale - scaleRef.current)) / scaleRef.current,
        y:
          offsetRef.current.y -
          (dy * (newScale - scaleRef.current)) / scaleRef.current,
      };

      scaleRef.current = newScale;
      offsetRef.current = newOffset;

      scheduleUpdate();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [scheduleUpdate]);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = {
      x: e.clientX - offsetRef.current.x,
      y: e.clientY - offsetRef.current.y,
    };
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    offsetRef.current = {
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    };
    scheduleUpdate();
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.cursor = "grab";
  };

  useEffect(() => {
    applyTransform();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 bg-zinc-800 overflow-hidden cursor-grab"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div
        ref={mapRef}
        className="absolute top-0 left-0"
        style={{
          transformOrigin: "top left",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={mapSrc}
          alt="Base Map"
          draggable={false}
          onLoad={() => {
            // Ensure delay so React has applied loading state
            setTimeout(onMapLoaded, 10);
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* Show overlays only after base map loaded */}
        {!isLoading &&
          overlays.map(
            (overlay) =>
              visibleOverlays.includes(overlay.id) && (
                <img
                  key={overlay.id}
                  src={overlay.src}
                  alt={`${overlay.id} overlay`}
                  draggable={false}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
              )
          )}
      </div>
      {
        <ZoomControls
          zoomIn={() => {
            scaleRef.current = Math.min(scaleRef.current + 0.5, 5);
            scheduleUpdate();
          }}
          zoomOut={() => {
            scaleRef.current = Math.max(scaleRef.current - 0.5, 0.5);
            scheduleUpdate();
          }}
          resetZoom={() => {
            scaleRef.current = 1;
            offsetRef.current = { x: 0, y: 0 };
            scheduleUpdate();
          }}
        />
      }
    </div>
  );
}
