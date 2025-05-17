const R2_BASE = "https://pub-0daf5fb5f44d4fcebdfabb8a6612f4a6.r2.dev";

export interface Overlay {
  id: string;
  src: string;
  type: "ceiling" | "weedkiller";
}

export interface MapData {
  displayName: string;
  base: string;
  overlays: Overlay[];
}

export const maps: Record<string, MapData> = {
  Solaris: {
    displayName: "Solaris Ridge",
    base: `${R2_BASE}/Solaris/Solaris-base.webp`,
    overlays: [
      {
        id: "Solaris-ceiling4",
        src: `${R2_BASE}/Solaris/Solaris-ceiling4.webp`,
        type: "ceiling",
      },
      {
        id: "Solaris-ceiling3",
        src: `${R2_BASE}/Solaris/Solaris-ceiling3.webp`,
        type: "ceiling",
      },
      {
        id: "Solaris-ceiling2",
        src: `${R2_BASE}/Solaris/Solaris-ceiling2.webp`,
        type: "ceiling",
      },
      {
        id: "Solaris-ceiling1",
        src: `${R2_BASE}/Solaris/Solaris-ceiling1.webp`,
        type: "ceiling",
      },
      {
        id: "Solaris-weedkiller1",
        src: `${R2_BASE}/Solaris/Solaris-weedkiller1.webp`,
        type: "weedkiller",
      },
      {
        id: "Solaris-weedkiller2",
        src: `${R2_BASE}/Solaris/Solaris-weedkiller2.webp`,
        type: "weedkiller",
      },
    ],
  },
  LV624: {
    displayName: "LV-624",
    base: `${R2_BASE}/LV624/LV624-base.webp`,
    overlays: [
      {
        id: "LV624-ceiling4",
        src: `${R2_BASE}/LV624/LV624-ceiling4.webp`,
        type: "ceiling",
      },
      {
        id: "LV624-ceiling3",
        src: `${R2_BASE}/LV624/LV624-ceiling3.webp`,
        type: "ceiling",
      },
      {
        id: "LV624-ceiling2",
        src: `${R2_BASE}/LV624/LV624-ceiling2.webp`,
        type: "ceiling",
      },
      {
        id: "LV624-ceiling1",
        src: `${R2_BASE}/LV624/LV624-ceiling1.webp`,
        type: "ceiling",
      },
      {
        id: "LV624-weedkiller1",
        src: `${R2_BASE}/LV624/LV624-weedkiller1.webp`,
        type: "weedkiller",
      },
      {
        id: "LV624-weedkiller2",
        src: `${R2_BASE}/LV624/LV624-weedkiller2.webp`,
        type: "weedkiller",
      },
    ],
  },
  "Chances-Claim": {
    displayName: "Chance's Claim",
    base: `${R2_BASE}/Chances-Claim/Chances-Claim-base.webp`,
    overlays: [
      {
        id: "Chances-Claim-ceiling4",
        src: `${R2_BASE}/Chances-Claim/Chances-Claim-ceiling4.webp`,
        type: "ceiling",
      },
      {
        id: "Chances-Claim-ceiling3",
        src: `${R2_BASE}/Chances-Claim/Chances-Claim-ceiling3.webp`,
        type: "ceiling",
      },
      {
        id: "Chances-Claim-ceiling2",
        src: `${R2_BASE}/Chances-Claim/Chances-Claim-ceiling2.webp`,
        type: "ceiling",
      },
      {
        id: "Chances-Claim-ceiling1",
        src: `${R2_BASE}/Chances-Claim/Chances-Claim-ceiling1.webp`,
        type: "ceiling",
      },
      {
        id: "Chances-Claim-weedkiller2",
        src: `${R2_BASE}/Chances-Claim/Chances-Claim-lz1.webp`,
        type: "weedkiller",
      },
      {
        id: "Chances-Claim-weedkiller2",
        src: `${R2_BASE}/Chances-Claim/Chances-Claim-lz2.webp`,
        type: "weedkiller",
      },
    ],
  },
  Fiorina: {
    displayName: "Fiorina Science Annex",
    base: `${R2_BASE}/Fiorina/Fiorina-Science-Annex-base.webp`,
    overlays: [
      {
        id: "Fiorina-ceiling4",
        src: `${R2_BASE}/Fiorina/Fiorina-Science-Annex-ceiling4.webp`,
        type: "ceiling",
      },
      {
        id: "Fiorina-ceiling3",
        src: `${R2_BASE}/Fiorina/Fiorina-Science-Annex-ceiling3.webp`,
        type: "ceiling",
      },
      {
        id: "Fiorina-ceiling2",
        src: `${R2_BASE}/Fiorina/Fiorina-Science-Annex-ceiling2.webp`,
        type: "ceiling",
      },
      {
        id: "Fiorina-ceiling1",
        src: `${R2_BASE}/Fiorina/Fiorina-Science-Annex-ceiling1.webp`,
        type: "ceiling",
      },
      {
        id: "Fiorina-weedkiller1",
        src: `${R2_BASE}/Fiorina/Fiorina-Science-Annex-lz1.webp`,
        type: "weedkiller",
      },
      {
        id: "Fiorina-weedkiller2",
        src: `${R2_BASE}/Fiorina/Fiorina-Science-Annex-lz2.webp`,
        type: "weedkiller",
      },
    ],
  },
  "Hybrisa-Prospera": {
    displayName: "Hybrisa Prospera",
    base: `${R2_BASE}/Hybrisa-Prospera/Hybrisa-Prospera-base.webp`,
    overlays: [
      {
        id: "Hybrisa-Prospera-ceiling4",
        src: `${R2_BASE}/Hybrisa-Prospera/Hybrisa-Prospera-ceiling4.webp`,
        type: "ceiling",
      },
      {
        id: "Hybrisa-Prospera-ceiling3",
        src: `${R2_BASE}/Hybrisa-Prospera/Hybrisa-Prospera-ceiling3.webp`,
        type: "ceiling",
      },
      {
        id: "Hybrisa-Prospera-ceiling2",
        src: `${R2_BASE}/Hybrisa-Prospera/Hybrisa-Prospera-ceiling2.webp`,
        type: "ceiling",
      },
      {
        id: "Hybrisa-Prospera-ceiling1",
        src: `${R2_BASE}/Hybrisa-Prospera/Hybrisa-Prospera-ceiling1.webp`,
        type: "ceiling",
      },
      {
        id: "Hybrisa-Prospera-weedkiller1",
        src: `${R2_BASE}/Hybrisa-Prospera/Hybrisa-Prospera-lz1.webp`,
        type: "weedkiller",
      },
      {
        id: "Hybrisa-Prospera-weedkiller2",
        src: `${R2_BASE}/Hybrisa-Prospera/Hybrisa-Prospera-lz2.webp`,
        type: "weedkiller",
      },
    ],
  },
  Kutjevo: {
    displayName: "Kutjevo Refinery",
    base: `${R2_BASE}/Kutjevo/Kutjevo-Refinery-base.webp`,
    overlays: [
      {
        id: "Kutjevo-ceiling4",
        src: `${R2_BASE}/Kutjevo/Kutjevo-Refinery-ceiling4.webp`,
        type: "ceiling",
      },
      {
        id: "Kutjevo-ceiling3",
        src: `${R2_BASE}/Kutjevo/Kutjevo-Refinery-ceiling3.webp`,
        type: "ceiling",
      },
      {
        id: "Kutjevo-ceiling2",
        src: `${R2_BASE}/Kutjevo/Kutjevo-Refinery-ceiling2.webp`,
        type: "ceiling",
      },
      {
        id: "Kutjevo-ceiling1",
        src: `${R2_BASE}/Kutjevo/Kutjevo-Refinery-ceiling1.webp`,
        type: "ceiling",
      },
      {
        id: "Kutjevo-weedkiller1",
        src: `${R2_BASE}/Kutjevo/Kutjevo-Refinery-lz1.webp`,
        type: "weedkiller",
      },
      {
        id: "Kutjevo-weedkiller2",
        src: `${R2_BASE}/Kutjevo/Kutjevo-Refinery-lz2.webp`,
        type: "weedkiller",
      },
    ],
  },
  "New-Varadero": {
    displayName: "New Varadero",
    base: `${R2_BASE}/New-Varadero/New-Varadero-base.webp`,
    overlays: [
      {
        id: "New-Varadero-ceiling4",
        src: `${R2_BASE}/New-Varadero/New-Varadero-ceiling4.webp`,
        type: "ceiling",
      },
      {
        id: "New-Varadero-ceiling3",
        src: `${R2_BASE}/New-Varadero/New-Varadero-ceiling3.webp`,
        type: "ceiling",
      },
      {
        id: "New-Varadero-ceiling2",
        src: `${R2_BASE}/New-Varadero/New-Varadero-ceiling2.webp`,
        type: "ceiling",
      },
      {
        id: "New-Varadero-ceiling1",
        src: `${R2_BASE}/New-Varadero/New-Varadero-ceiling1.webp`,
        type: "ceiling",
      },
      {
        id: "New-Varadero-weedkiller1",
        src: `${R2_BASE}/New-Varadero/New-Varadero-lz1.webp`,
        type: "weedkiller",
      },
      {
        id: "New-Varadero-weedkiller2",
        src: `${R2_BASE}/New-Varadero/New-Varadero-lz2.webp`,
        type: "weedkiller",
      },
    ],
  },
  "Shivas-Snowball": {
    displayName: "Shiva's Snowball",
    base: `${R2_BASE}/Shivas-Snowball/Shivas-Snowball-base.webp`,
    overlays: [
      {
        id: "Shivas-Snowball-ceiling4",
        src: `${R2_BASE}/Shivas-Snowball/Shivas-Snowball-ceiling4.webp`,
        type: "ceiling",
      },
      {
        id: "Shivas-Snowball-ceiling3",
        src: `${R2_BASE}/Shivas-Snowball/Shivas-Snowball-ceiling3.webp`,
        type: "ceiling",
      },
      {
        id: "Shivas-Snowball-ceiling2",
        src: `${R2_BASE}/Shivas-Snowball/Shivas-Snowball-ceiling2.webp`,
        type: "ceiling",
      },
      {
        id: "Shivas-Snowball-ceiling1",
        src: `${R2_BASE}/Shivas-Snowball/Shivas-Snowball-ceiling1.webp`,
        type: "ceiling",
      },
      {
        id: "Shivas-Snowball-weedkiller1",
        src: `${R2_BASE}/Shivas-Snowball/Shivas-Snowball-lz1.webp`,
        type: "weedkiller",
      },
      {
        id: "Shivas-Snowball-weedkiller2",
        src: `${R2_BASE}/Shivas-Snowball/Shivas-Snowball-lz2.webp`,
        type: "weedkiller",
      },
    ],
  },
  "Sorokyne-Strata": {
    displayName: "Sorokyne Strata",
    base: `${R2_BASE}/Sorokyne-Strata/Sorokyne-Strata-base.webp`,
    overlays: [
      {
        id: "Sorokyne-Strata-ceiling4",
        src: `${R2_BASE}/Sorokyne-Strata/Sorokyne-Strata-ceiling4.webp`,
        type: "ceiling",
      },
      {
        id: "Sorokyne-Strata-ceiling3",
        src: `${R2_BASE}/Sorokyne-Strata/Sorokyne-Strata-ceiling3.webp`,
        type: "ceiling",
      },
      {
        id: "Sorokyne-Strata-ceiling2",
        src: `${R2_BASE}/Sorokyne-Strata/Sorokyne-Strata-ceiling2.webp`,
        type: "ceiling",
      },
      {
        id: "Sorokyne-Strata-ceiling1",
        src: `${R2_BASE}/Sorokyne-Strata/Sorokyne-Strata-ceiling1.webp`,
        type: "ceiling",
      },
      {
        id: "Sorokyne-Strata-weedkiller1",
        src: `${R2_BASE}/Sorokyne-Strata/Sorokyne-Strata-lz1.webp`,
        type: "weedkiller",
      },
      {
        id: "Sorokyne-Strata-weedkiller2",
        src: `${R2_BASE}/Sorokyne-Strata/Sorokyne-Strata-lz2.webp`,
        type: "weedkiller",
      },
    ],
  },
  "Trijent-Dam": {
    displayName: "Trijent Dam",
    base: `${R2_BASE}/Trijent-Dam/Trijent-Dam-base.webp`,
    overlays: [
      {
        id: "Trijent-Dam-ceiling4",
        src: `${R2_BASE}/Trijent-Dam/Trijent-Dam-ceiling4.webp`,
        type: "ceiling",
      },
      {
        id: "Trijent-Dam-ceiling3",
        src: `${R2_BASE}/Trijent-Dam/Trijent-Dam-ceiling3.webp`,
        type: "ceiling",
      },
      {
        id: "Trijent-Dam-ceiling2",
        src: `${R2_BASE}/Trijent-Dam/Trijent-Dam-ceiling2.webp`,
        type: "ceiling",
      },
      {
        id: "Trijent-Dam-ceiling1",
        src: `${R2_BASE}/Trijent-Dam/Trijent-Dam-ceiling1.webp`,
        type: "ceiling",
      },
      {
        id: "Trijent-Dam-weedkiller1",
        src: `${R2_BASE}/Trijent-Dam/Trijent-Dam-lz1.webp`,
        type: "weedkiller",
      },
      {
        id: "Trijent-Dam-weedkiller2",
        src: `${R2_BASE}/Trijent-Dam/Trijent-Dam-lz2.webp`,
        type: "weedkiller",
      },
    ],
  },
};
