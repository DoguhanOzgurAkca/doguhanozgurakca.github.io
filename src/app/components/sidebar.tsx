"use client";

import { useState } from "react";
import HelpPanel from "./Faq";
import { Overlay } from "../data/mapList";
import { tierMetadata, getMetadataKey } from "../data/TierMetadata";
import { maps } from "../data/mapList";
interface SidebarProps {
  overlays: Overlay[];
  visibleOverlays: string[];
  toggleOverlay: (id: string) => void;
  disableAllOfType: (type: "ceiling" | "weedkiller") => void;
  switchMap: (id: string) => void; 
  isLoading: boolean;
  mapKeys: string[];
  currentMapId: string; 
}

export default function Sidebar({
  overlays,
  visibleOverlays,
  toggleOverlay,
  disableAllOfType,
  switchMap,
  isLoading,
  currentMapId,   
  mapKeys,      

}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [helpOpen, setHelpOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"ceiling" | "weedkiller">(
    "ceiling"
  );

  const filteredOverlays = overlays.filter((o) => o.type === activeTab);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        className={`fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none shadow-lg transition-all ${
          isOpen ? "left-52" : "left-4"
        }`}
      >
        {isOpen ? (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      <aside
        className={`fixed top-0 left-0 rounded-r-lg h-auto max-h-screen w-56 bg-gray-900/50 text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4">
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setActiveTab("ceiling")}
              className={`flex-1 py-2 rounded-t-md font-semibold text-sm ${
                activeTab === "ceiling"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              Ceiling Protection
            </button>
            <button
              onClick={() => setActiveTab("weedkiller")}
              className={`flex-1 py-2 rounded-t-md font-semibold text-sm ${
                activeTab === "weedkiller"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              Weedkiller Parts
            </button>
          </div>

          <button
            onClick={() => disableAllOfType(activeTab)}
            className="w-full mb-4 px-4 py-2 bg-red-800 hover:bg-red-900 text-white rounded text-sm"
          >
            Disable All {activeTab === "ceiling" ? "Ceiling" : "Weedkiller"}
          </button>

          <ul className="space-y-2">
            {filteredOverlays.map((overlay) => {
              const metaKey = getMetadataKey(overlay.id);
              const meta = metaKey ? tierMetadata[metaKey] : undefined;
              if (!meta) return null;

              const active = visibleOverlays.includes(overlay.id);
              return (
                <li
                  key={overlay.id}
                  onClick={() => toggleOverlay(overlay.id)}
                  className="cursor-pointer rounded-md p-3 transition-all text-xs drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] border border-white/10 shadow-sm"
                  style={{
                    backgroundColor: meta.color + (active ? "CC" : "33"),
                    outline: active ? "2px solid white" : "none",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <p className="font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                    {meta.label}
                  </p>
                  <p className="text-white/90 text-[11px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                    {meta.description}
                  </p>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setHelpOpen(true)}
            className="w-full text-left mt-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm"
          >
            Help & FAQ
          </button>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-gray-300">
              Current Map
            </label>
            <select
              value={currentMapId}
              onChange={(e) => switchMap(e.target.value)}
              disabled={isLoading}
              className="w-full text-sm p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {mapKeys.map((key) => (
                <option key={key} value={key}>
                  {maps[key].displayName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </aside>

      {helpOpen && <HelpPanel onClose={() => setHelpOpen(false)} />}
    </>
  );
}
