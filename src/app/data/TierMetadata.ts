
export interface TierMeta {
  label: string;
  description: string;
  color: string;
}

const tierColors: Record<number, string> = {
  4: "#8515ea", // Purple
  3: "#ea1b15", // Red
  2: "#e6e600", // Yellow
  1: "#15e4ea", // Cyan
};

const tierDescriptions: Record<number, string> = {
  4: "Blocks OB fire",
  3: "Blocks CAS fire",
  2: "Blocks CAS signals, supply drops, fultoning, mortar fire",
  1: "Blocks mortar placement, lasing, medevac",
};

const weedkillerColors: Record<string, string> = {
  A: "#00ff00", // Green
  B: "#009900",
};

// Auto-generate ceiling tier metadata
const ceilingMetadata = [4, 3, 2, 1].reduce((acc, tier) => {
  acc[`overlay${tier}`] = {
    label: `Tier ${tier} Protection`,
    description: tierDescriptions[tier],
    color: tierColors[tier],
  };
  return acc;
}, {} as Record<string, TierMeta>);

// Auto-generate weedkiller metadata
const weedkillerMetadata = ["A", "B"].reduce((acc, tier) => {
  acc[`weedkiller${tier}`] = {
    label: `LZ${tier} Weedkiller Area`,
    description: "",
    color: weedkillerColors[tier],
  };
  return acc;
}, {} as Record<string, TierMeta>);

export const tierMetadata: Record<string, TierMeta> = {
  ...ceilingMetadata,
  ...weedkillerMetadata,
};

/**
 * Maps an overlay id (e.g. "Solaris-ceiling4", "Solaris-weedkiller1")
 * to the matching tierMetadata key ("overlay4", "weedkillerA").
 */
export function getMetadataKey(overlayId: string): string | undefined {
  if (overlayId.includes("ceiling")) {
    const tierNum = overlayId.slice(-1); 
    if (["1", "2", "3", "4"].includes(tierNum)) {
      return `overlay${tierNum}`;
    }
  }
  if (overlayId.includes("weedkiller")) {
    const suffix = overlayId.slice(-1);
    // Map '1' => 'A', '2' => 'B'
    if (suffix === "1") return "weedkillerA";
    if (suffix === "2") return "weedkillerB";
  }
  return undefined;
}
