export interface SavedPass {
  id: string;
  format: "frame" | "pass" | "team";
  name: string;
  role?: string;
  title?: string;
  skin?: string;
  dataUrl: string; // PNG base64 string
  createdAt: number;
}

const STORAGE_KEY = "hh_goa_saved_passes_v1";

export function getSavedPasses(): SavedPass[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to load saved passes from localStorage:", err);
    return [];
  }
}

export function savePassToVault(pass: Omit<SavedPass, "createdAt">): SavedPass {
  const passes = getSavedPasses();
  const newPass: SavedPass = {
    ...pass,
    createdAt: Date.now(),
  };
  
  // Filter out duplicate IDs if updating
  const filtered = passes.filter((p) => p.id !== pass.id);
  const updated = [newPass, ...filtered];
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated.slice(0, 20))); // keep max 20
  } catch (err) {
    console.error("Failed to save pass to localStorage:", err);
  }
  
  return newPass;
}

export function deletePassFromVault(id: string): SavedPass[] {
  const passes = getSavedPasses();
  const updated = passes.filter((p) => p.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Failed to delete pass:", err);
  }
  return updated;
}
