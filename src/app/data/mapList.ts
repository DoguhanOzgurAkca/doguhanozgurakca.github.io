const R2_BASE = "https://pub-0daf5fb5f44d4fcebdfabb8a6612f4a6.r2.dev";

export interface Overlay {
  id: string;
  src: string;
  type: "ceiling" | "weedkiller";
}

export interface MapData {
  base: string;
  overlays: Overlay[];
}

export const maps: Record<string, MapData> = {
  Solaris: {
    base: `${R2_BASE}/Solaris/Solaris-base.png`,
    overlays: [
      {
        id: "Solaris-ceiling4",
        src: `${R2_BASE}/Solaris/Solaris-ceiling4.png`,
        type: "ceiling",
      },
      {
        id: "Solaris-ceiling3",
        src: `${R2_BASE}/Solaris/Solaris-ceiling3.png`,
        type: "ceiling",
      },
      {
        id: "Solaris-ceiling2",
        src: `${R2_BASE}/Solaris/Solaris-ceiling2.png`,
        type: "ceiling",
      },
      {
        id: "Solaris-ceiling1",
        src: `${R2_BASE}/Solaris/Solaris-ceiling1.png`,
        type: "ceiling",
      },
      {
        id: "Solaris-weedkiller1",
        src: `${R2_BASE}/Solaris/Solaris-weedkiller1.png`,
        type: "weedkiller",
      },
      {
        id: "Solaris-weedkiller2",
        src: `${R2_BASE}/Solaris/Solaris-weedkiller2.png`,
        type: "weedkiller",
      },
    ],
  },
  LV624: {
    base: `${R2_BASE}/LV624/LV624-base.png`,
    overlays: [
      {
        id: "LV624-ceiling4",
        src: `${R2_BASE}/LV624/LV624-ceiling4.png`,
        type: "ceiling",
      },
      {
        id: "LV624-ceiling3",
        src: `${R2_BASE}/LV624/LV624-ceiling3.png`,
        type: "ceiling",
      },
      {
        id: "LV624-ceiling2",
        src: `${R2_BASE}/LV624/LV624-ceiling2.png`,
        type: "ceiling",
      },
      {
        id: "LV624-ceiling1",
        src: `${R2_BASE}/LV624/LV624-ceiling1.png`,
        type: "ceiling",
      },
      {
        id: "LV624-weedkiller1",
        src: `${R2_BASE}/LV624/LV624-weedkiller1.png`,
        type: "weedkiller",
      },
      {
        id: "LV624-weedkiller2",
        src: `${R2_BASE}/LV624/LV624-weedkiller2.png`,
        type: "weedkiller",
      },
    ],
  },
  // Add more maps...
};
