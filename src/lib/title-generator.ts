// Fun Builder Title auto-generator with warm Goa coastal & dev word banks

const PREFIXES = [
  "Goa",
  "Sunset",
  "Ocean",
  "Shack",
  "Palm",
  "Wave",
  "Full-Stack",
  "Frontend",
  "Solidity",
  "Rust",
  "AI/ML",
  "DeFi",
  "Zero-Knowledge",
  "Protocol",
  "Async",
  "Midnight",
];

const NOUNS = [
  "Sunset Coder",
  "Wave Rider",
  "Shack Architect",
  "Palm Pioneer",
  "Code Surfer",
  "Tide Breaker",
  "Signal Finder",
  "Lagoon Wizard",
  "Beach Architect",
  "Coast Commander",
  "Coconut Strategist",
  "Curry Crafter",
  "Sunbather Coder",
];

const ROLES = [
  "Full-Stack Engineer",
  "Smart Contract Dev",
  "AI / LLM Researcher",
  "Product Designer",
  "DeFi Architect",
  "Frontend Craftsman",
  "Systems Programmer",
  "Growth Strategist",
  "Community Lead",
  "Founder & Builder",
  "Security Researcher",
  "Infra Architect",
];

export function generateRandomTitle(userRole?: string): string {
  const prefix = PREFIXES[Math.floor(Math.random() * PREFIXES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  
  if (userRole && Math.random() < 0.3) {
    const roleWord = userRole.split(" ")[0];
    return `${roleWord} ${noun}`;
  }
  
  return `${prefix} ${noun}`;
}

export function getDefaultRoles(): string[] {
  return ROLES;
}
