
"use client";

interface ZoomControlsProps {
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}

export default function ZoomControls({
  zoomIn,
  zoomOut,
  resetZoom,
}: ZoomControlsProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 bg-black/60 backdrop-blur p-2 rounded-lg shadow-lg">
      <button
        onClick={zoomIn}
        className="text-white text-lg font-bold bg-gray-800 hover:bg-gray-700 rounded p-2"
        aria-label="Zoom in"
      >
        ＋
      </button>
      <button
        onClick={zoomOut}
        className="text-white text-lg font-bold bg-gray-800 hover:bg-gray-700 rounded p-2"
        aria-label="Zoom out"
      >
        －
      </button>
      <button
        onClick={resetZoom}
        className="text-white text-sm bg-gray-800 hover:bg-gray-700 rounded p-2"
        aria-label="Reset zoom"
      >
        ⟳
      </button>
    </div>
  );
}
