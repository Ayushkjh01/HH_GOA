export interface BuilderPayload {
  f: "A" | "B" | "C"; // Format A (Frame), B (Pass), C (Team)
  n: string; // Name
  r?: string; // Role / Stack
  t?: string; // Title
  s?: string; // Skin theme
  tn?: string; // Team Name (for Format C)
  badge?: string; // Selected Badge
}

// Encode payload to URL safe base64
export function encodePayload(payload: BuilderPayload): string {
  try {
    const json = JSON.stringify(payload);
    if (typeof window !== "undefined" && window.btoa) {
      return encodeURIComponent(window.btoa(json));
    }
    return encodeURIComponent(Buffer.from(json).toString("base64"));
  } catch (e) {
    console.error("Encoding error:", e);
    return "demo";
  }
}

// Decode payload from URL safe base64 string
export function decodePayload(encoded: string): BuilderPayload | null {
  try {
    const rawBase64 = decodeURIComponent(encoded);
    let json = "";
    if (typeof window !== "undefined" && window.atob) {
      json = window.atob(rawBase64);
    } else {
      json = Buffer.from(rawBase64, "base64").toString("utf-8");
    }
    return JSON.parse(json) as BuilderPayload;
  } catch (e) {
    console.error("Decoding payload error:", e);
    return null;
  }
}

// Generate shareable X (Twitter) intent link
export function getTwitterShareUrl(builderId: string, name?: string): string {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://frameingoa.com";
  const shareUrl = `${origin}/builder/${builderId}`;
  
  const text = name 
    ? `I'm attending Hacker House Goa 2026! 🌴 Check out my official builder credential. Less Noise. More Signal. #FrameInGoa @HackerHouseGoa`
    : `Got my official Hacker House Goa 2026 builder credential! 🌴 Build · Beach · Belong. #FrameInGoa @HackerHouseGoa`;
    
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
}

// Native Web Share API helper
export async function shareNative(data: { title: string; text: string; url: string; file?: File }) {
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      const shareData: ShareData = {
        title: data.title,
        text: data.text,
        url: data.url,
      };
      
      if (data.file && navigator.canShare && navigator.canShare({ files: [data.file] })) {
        shareData.files = [data.file];
      }
      
      await navigator.share(shareData);
      return true;
    } catch (err) {
      // User cancelled or error
      if ((err as Error).name !== "AbortError") {
        console.warn("Native share error:", err);
      }
    }
  }
  return false;
}
