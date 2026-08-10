// Canvas Rendering Engine for HH Goa 2026 Frame, Builder Pass, and Team Frames (Clean Text-Wave Separation)

export interface RenderOptionsFormatA {
  image?: HTMLImageElement | HTMLCanvasElement;
  skin: "sunset" | "sand" | "ocean" | "palm";
  badgeText?: string;
  panX: number;
  panY: number;
  zoom: number;
}

export interface RenderOptionsFormatB {
  image?: HTMLImageElement | HTMLCanvasElement;
  name: string;
  role: string;
  title: string;
  skin: "sunset" | "sand" | "ocean" | "palm";
  qrCanvas?: HTMLCanvasElement;
  panX: number;
  panY: number;
  zoom: number;
}

export interface TeamMemberInput {
  image?: HTMLImageElement | HTMLCanvasElement;
  name: string;
  role: string;
}

export interface RenderOptionsFormatC {
  teamName: string;
  members: TeamMemberInput[];
  skin: "sunset" | "sand" | "ocean" | "palm";
}

// Draw crop image to canvas with cover/pan/zoom
function drawImageCoverPanZoom(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement | HTMLCanvasElement,
  dx: number,
  dy: number,
  dWidth: number,
  dHeight: number,
  panX = 0,
  panY = 0,
  zoom = 1
) {
  ctx.save();
  const imgWidth = img.width;
  const imgHeight = img.height;
  
  const scale = Math.max(dWidth / imgWidth, dHeight / imgHeight) * zoom;
  const scaledW = imgWidth * scale;
  const scaledH = imgHeight * scale;
  
  const offsetX = (dWidth - scaledW) / 2 + (panX / 100) * (dWidth / 2);
  const offsetY = (dHeight - scaledH) / 2 + (panY / 100) * (dHeight / 2);
  
  ctx.drawImage(img, dx + offsetX, dy + offsetY, scaledW, scaledH);
  ctx.restore();
}

// Draw Rich Multi-Layered Palm Tree Canopy with Coconuts & Swaying Fronds (Format A Benchmark)
function drawRichPalmCanopy(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale = 1,
  color = "#0F4C5C",
  flip = false
) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.translate(x, y);
  if (flip) ctx.scale(-scale, scale);
  else ctx.scale(scale, scale);

  // Curved Textured Trunk
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(-30, -60, -18, -140);
  ctx.quadraticCurveTo(-5, -65, 18, 0);
  ctx.closePath();
  ctx.fill();

  // Trunk Segment Rings
  ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
  ctx.lineWidth = 3;
  for (let i = -20; i > -120; i -= 20) {
    ctx.beginPath();
    ctx.arc(-10, i, 12, 0, Math.PI);
    ctx.stroke();
  }

  // Coconuts under canopy
  ctx.fillStyle = "#D9532F";
  ctx.beginPath();
  ctx.arc(-22, -135, 10, 0, Math.PI * 2);
  ctx.arc(-12, -142, 11, 0, Math.PI * 2);
  ctx.arc(-28, -144, 9, 0, Math.PI * 2);
  ctx.fill();

  // Spreading Layered Fronds
  ctx.fillStyle = color;
  const frondAngles = [-1.9, -1.3, -0.7, -0.1, 0.5, 1.1, 1.6];
  frondAngles.forEach((angle) => {
    ctx.save();
    ctx.translate(-18, -140);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(60, -35, 105, 30);
    ctx.quadraticCurveTo(45, 0, 0, 0);
    ctx.closePath();
    ctx.fill();

    // Leaf Rib
    ctx.strokeStyle = "#F2C063";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(55, -30, 95, 25);
    ctx.stroke();

    ctx.restore();
  });

  ctx.restore();
}

// Hand-Illustrated Goa Motif 1: Goa Beach Shack Umbrella & Sun Hat Silhouette
function drawBeachShackUmbrella(ctx: CanvasRenderingContext2D, x: number, y: number, scale = 1, opacity = 0.28) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.globalAlpha = opacity;
  ctx.fillStyle = "#D9532F";
  ctx.strokeStyle = "#D9532F";
  ctx.lineWidth = 2.5;

  // Umbrella Pole
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 45);
  ctx.stroke();

  // Umbrella Canopy Arc
  ctx.beginPath();
  ctx.arc(0, -5, 35, Math.PI, 0);
  ctx.closePath();
  ctx.fill();

  // Canopy Stripes
  ctx.fillStyle = "#FAF4E8";
  ctx.beginPath();
  ctx.arc(0, -5, 35, Math.PI * 1.2, Math.PI * 1.4);
  ctx.lineTo(0, -5);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(0, -5, 35, Math.PI * 1.6, Math.PI * 1.8);
  ctx.lineTo(0, -5);
  ctx.closePath();
  ctx.fill();

  // Sun Hat next to umbrella
  ctx.fillStyle = "#0F4C5C";
  ctx.beginPath();
  ctx.ellipse(22, 38, 16, 6, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(22, 35, 8, Math.PI, 0);
  ctx.fill();

  ctx.restore();
}

// Hand-Illustrated Goa Motif 2: Traditional Goa Fishing Boat (Ramponkar Boat) Silhouette
function drawFishingBoatSilhouette(ctx: CanvasRenderingContext2D, x: number, y: number, scale = 1, opacity = 0.28) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.globalAlpha = opacity;
  ctx.fillStyle = "#0F4C5C";
  ctx.strokeStyle = "#0F4C5C";
  ctx.lineWidth = 2.5;

  // Boat Hull Curved
  ctx.beginPath();
  ctx.moveTo(-45, 0);
  ctx.quadraticCurveTo(0, 22, 45, 0);
  ctx.quadraticCurveTo(0, 10, -45, 0);
  ctx.closePath();
  ctx.fill();

  // Sail Mast
  ctx.beginPath();
  ctx.moveTo(5, -5);
  ctx.lineTo(5, -45);
  ctx.stroke();

  // Triangular Sail
  ctx.fillStyle = "#D9532F";
  ctx.beginPath();
  ctx.moveTo(5, -42);
  ctx.lineTo(32, -15);
  ctx.lineTo(5, -10);
  ctx.closePath();
  ctx.fill();

  // Water Ripple Base
  ctx.beginPath();
  ctx.moveTo(-50, 18);
  ctx.quadraticCurveTo(-25, 24, 0, 18);
  ctx.quadraticCurveTo(25, 12, 50, 18);
  ctx.stroke();

  ctx.restore();
}

// Hand-Illustrated Goa Motif 3: Coconut Palm Cluster
function drawCoconutCluster(ctx: CanvasRenderingContext2D, x: number, y: number, scale = 1, opacity = 0.28) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.globalAlpha = opacity;

  // Coconuts
  ctx.fillStyle = "#D9532F";
  ctx.beginPath();
  ctx.arc(0, 0, 9, 0, Math.PI * 2);
  ctx.arc(10, -4, 8, 0, Math.PI * 2);
  ctx.arc(-8, 5, 8.5, 0, Math.PI * 2);
  ctx.fill();

  // Spreading Leaf Blades
  ctx.fillStyle = "#0F4C5C";
  const leafAngles = [-2.2, -1.4, -0.6, 0.2, 1.0, 1.8];
  leafAngles.forEach((angle) => {
    ctx.save();
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(35, -20, 60, 15);
    ctx.quadraticCurveTo(25, 0, 0, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  });

  ctx.restore();
}

// Format A Sunburst Rays (Benchmark Visual Richness)
function drawSunburstRays(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number, color = "rgba(217, 83, 47, 0.16)") {
  ctx.save();
  ctx.fillStyle = color;
  const rayCount = 18;
  const step = (Math.PI * 2) / rayCount;

  for (let i = 0; i < rayCount; i++) {
    const angle = i * step;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angle - step / 4, angle + step / 4);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

// Format B Credential Motif: Guilloché Security Pattern & Topographic Coastline Linework
function drawGuillocheSecurityPattern(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.save();
  
  // Guilloché Rosette Arcs
  ctx.lineWidth = 1.6;
  ctx.strokeStyle = "#D9532F";
  ctx.globalAlpha = 0.18;

  const centerX = width * 0.72;
  const centerY = height * 0.45;

  for (let r = 50; r <= 380; r += 28) {
    ctx.beginPath();
    for (let theta = 0; theta < Math.PI * 2; theta += 0.04) {
      const radius = r + Math.sin(theta * 8) * 14 + Math.cos(theta * 4) * 8;
      const x = centerX + radius * Math.cos(theta);
      const y = centerY + radius * Math.sin(theta);
      if (theta === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Topographic Coastline Contours
  ctx.strokeStyle = "#0F4C5C";
  ctx.globalAlpha = 0.15;
  ctx.lineWidth = 1.5;
  
  for (let offset = 0; offset < 4; offset++) {
    ctx.beginPath();
    ctx.moveTo(480, 80 + offset * 25);
    ctx.bezierCurveTo(620, 180 + offset * 15, 820, 100 + offset * 20, 1120, 220 + offset * 15);
    ctx.stroke();
  }

  ctx.restore();
}

// Format B Corner Brackets & Passport Security Details
function drawPassportCornerDetails(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.save();
  ctx.strokeStyle = "#D9532F";
  ctx.lineWidth = 3;
  ctx.globalAlpha = 0.7;

  const bracketSize = 24;
  const pad = 26;

  // Top-Left Bracket
  ctx.beginPath();
  ctx.moveTo(pad + bracketSize, pad);
  ctx.lineTo(pad, pad);
  ctx.lineTo(pad, pad + bracketSize);
  ctx.stroke();

  // Top-Right Bracket
  ctx.beginPath();
  ctx.moveTo(width - pad - bracketSize, pad);
  ctx.lineTo(width - pad, pad);
  ctx.lineTo(width - pad, pad + bracketSize);
  ctx.stroke();

  // Bottom-Left Bracket
  ctx.beginPath();
  ctx.moveTo(pad + bracketSize, height - pad);
  ctx.lineTo(pad, height - pad);
  ctx.lineTo(pad, height - pad - bracketSize);
  ctx.stroke();

  // Bottom-Right Bracket
  ctx.beginPath();
  ctx.moveTo(width - pad - bracketSize, height - pad);
  ctx.lineTo(width - pad, height - pad);
  ctx.lineTo(width - pad, height - pad - bracketSize);
  ctx.stroke();

  ctx.restore();
}

// Format C Team Pass Motif: Connected Route & Dotted Journey Path
function drawConnectedMemberRoutePath(
  ctx: CanvasRenderingContext2D,
  startX: number,
  cardY: number,
  cardWidth: number,
  count: number
) {
  ctx.save();
  ctx.strokeStyle = "#D9532F";
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 6]);
  ctx.globalAlpha = 0.6;

  const pathY = cardY + 160;

  ctx.beginPath();
  for (let i = 0; i < count; i++) {
    const cardCenterX = startX + i * (cardWidth + 35) + cardWidth / 2;
    if (i === 0) ctx.moveTo(cardCenterX, pathY);
    else ctx.lineTo(cardCenterX, pathY);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  // Waypoint Nodes
  for (let i = 0; i < count; i++) {
    const cardCenterX = startX + i * (cardWidth + 35) + cardWidth / 2;
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#D9532F";
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(cardCenterX, pathY, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#0F4C5C";
    ctx.beginPath();
    ctx.arc(cardCenterX, pathY, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

// Format C Corner Motif: Coastal Compass Rose Emblem
function drawCompassCornerRose(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = "#0F4C5C";
  ctx.fillStyle = "#D9532F";
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.45;

  ctx.beginPath();
  ctx.arc(0, 0, 22, 0, Math.PI * 2);
  ctx.stroke();

  // Compass Points
  const points = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
  points.forEach((angle) => {
    ctx.save();
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, -26);
    ctx.lineTo(5, -12);
    ctx.lineTo(-5, -12);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  });

  ctx.restore();
}

// Draw Layered Ocean Wave Ripples at Bottom (Positioned at exact bottom edge so no text overlaps)
function drawLayeredOceanWaves(ctx: CanvasRenderingContext2D, y: number, width: number, primaryColor = "#0F4C5C", secondaryColor = "#D9532F") {
  ctx.save();
  // Wave Layer 1
  ctx.strokeStyle = primaryColor;
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  for (let x = 0; x <= width; x += 50) {
    ctx.quadraticCurveTo(x + 25, y - 14, x + 50, y);
  }
  ctx.stroke();

  // Wave Layer 2
  ctx.strokeStyle = secondaryColor;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let x = 0; x <= width; x += 40) {
    ctx.quadraticCurveTo(x + 20, y - 8 + 10, x + 40, y + 10);
  }
  ctx.stroke();
  ctx.restore();
}

// ----------------------------------------------------
// FORMAT A: PFP FRAME / OVERLAY RENDERER (1000 x 1000 px)
// ----------------------------------------------------
export function renderFormatA(
  canvas: HTMLCanvasElement,
  options: RenderOptionsFormatA
) {
  const size = 1000;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, size, size);

  const centerX = size / 2;
  const centerY = size / 2 - 20;

  // Daylight Sunlit Sand Gradient Background
  const bgGrad = ctx.createRadialGradient(centerX, centerY, 80, centerX, centerY, 680);
  bgGrad.addColorStop(0, "#fff8ee");
  bgGrad.addColorStop(0.6, "#faf4e8");
  bgGrad.addColorStop(1, "#f5e8d0");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, size, size);

  // Format A Benchmark Motif: Radiating Sunburst Rays
  drawSunburstRays(ctx, centerX, centerY, 650, "rgba(217, 83, 47, 0.16)");

  // Photo Circle
  const photoRadius = 340;

  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, photoRadius, 0, Math.PI * 2);
  ctx.clip();

  // User Photo
  if (options.image) {
    drawImageCoverPanZoom(
      ctx,
      options.image,
      centerX - photoRadius,
      centerY - photoRadius,
      photoRadius * 2,
      photoRadius * 2,
      options.panX,
      options.panY,
      options.zoom
    );
  } else {
    ctx.fillStyle = "#fff8ee";
    ctx.fillRect(centerX - photoRadius, centerY - photoRadius, photoRadius * 2, photoRadius * 2);
    ctx.fillStyle = "#D9532F";
    ctx.font = "bold 32px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("DROP PHOTO HERE", centerX, centerY);
  }
  ctx.restore();

  // Branded Outer Ring
  ctx.save();
  const ringWidth = 26;
  ctx.lineWidth = ringWidth;

  const primaryColor = "#D9532F";
  const secondaryColor = "#0F4C5C";

  const ringGrad = ctx.createConicGradient(-Math.PI / 2, centerX, centerY);
  ringGrad.addColorStop(0, primaryColor);
  ringGrad.addColorStop(0.4, "#F2C063");
  ringGrad.addColorStop(0.7, secondaryColor);
  ringGrad.addColorStop(1, primaryColor);

  ctx.strokeStyle = ringGrad;
  ctx.shadowColor = "rgba(217, 83, 47, 0.3)";
  ctx.shadowBlur = 32;
  ctx.beginPath();
  ctx.arc(centerX, centerY, photoRadius + ringWidth / 2 + 4, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // Inner White Accent Ring
  ctx.save();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#ffffff";
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.arc(centerX, centerY, photoRadius - 3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // Draw Multi-Layered Palm Canopies on Corners (Format A Signature)
  drawRichPalmCanopy(ctx, 110, size - 15, 1.3, "#0F4C5C", false);
  drawRichPalmCanopy(ctx, size - 110, size - 15, 1.3, "#0F4C5C", true);
  drawRichPalmCanopy(ctx, 80, 140, 1.0, "#0F4C5C", false);
  drawRichPalmCanopy(ctx, size - 80, 140, 1.0, "#0F4C5C", true);

  // Draw Wave Ripples at Bottom Edge
  drawLayeredOceanWaves(ctx, size - 75, size, "#0F4C5C", "#D9532F");

  // Top Pill Header: "HackerHouse goa"
  ctx.save();
  const topPillW = 470;
  const topPillH = 70;
  const topPillX = centerX - topPillW / 2;
  const topPillY = centerY - photoRadius - 42;

  ctx.fillStyle = "rgba(255, 255, 255, 0.96)";
  ctx.strokeStyle = primaryColor;
  ctx.lineWidth = 3.5;
  ctx.shadowColor = "rgba(217, 83, 47, 0.2)";
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.roundRect(topPillX, topPillY, topPillW, topPillH, 35);
  ctx.fill();
  ctx.stroke();

  // Text inside top pill
  ctx.textBaseline = "middle";
  ctx.shadowBlur = 0;

  ctx.font = "800 28px Syne, Space Grotesk, sans-serif";
  const w1 = ctx.measureText("HackerHouse ").width;
  ctx.font = "800 32px Noto Sans Devanagari, sans-serif";
  const w2 = ctx.measureText("गोवा").width;
  const totalTextW = w1 + w2;
  const startX = centerX - totalTextW / 2;

  ctx.textAlign = "left";
  ctx.font = "800 28px Syne, Space Grotesk, sans-serif";
  ctx.fillStyle = "#1F2421";
  ctx.fillText("HackerHouse ", startX, topPillY + topPillH / 2);

  ctx.font = "800 32px Noto Sans Devanagari, sans-serif";
  ctx.fillStyle = primaryColor;
  ctx.fillText("गोवा", startX + w1, topPillY + topPillH / 2);
  ctx.restore();

  // Bottom Banner Bar: Dates & Location + #FrameInGoa
  ctx.save();
  const bottomBarW = 770;
  const bottomBarH = 116;
  const bottomBarX = centerX - bottomBarW / 2;
  const bottomBarY = centerY + photoRadius - 52;

  ctx.fillStyle = "rgba(255, 255, 255, 0.96)";
  ctx.strokeStyle = primaryColor;
  ctx.lineWidth = 3.5;
  ctx.shadowColor = "rgba(217, 83, 47, 0.2)";
  ctx.shadowBlur = 24;

  ctx.beginPath();
  ctx.roundRect(bottomBarX, bottomBarY, bottomBarW, bottomBarH, 24);
  ctx.fill();
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.shadowBlur = 0;

  ctx.font = "700 20px JetBrains Mono, monospace";
  ctx.fillStyle = "#0F4C5C";
  ctx.fillText("28–31 OCT 2026  •  GOA, INDIA", centerX, bottomBarY + 40);

  ctx.font = "800 26px Syne, Space Grotesk, sans-serif";
  ctx.fillStyle = primaryColor;
  ctx.fillText("#FrameInGoa", centerX, bottomBarY + 82);
  ctx.restore();

  // Optional Badge Tag
  if (options.badgeText) {
    ctx.save();
    ctx.translate(centerX, centerY - photoRadius + 30);
    ctx.fillStyle = primaryColor;
    ctx.shadowColor = primaryColor;
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.roundRect(-75, -18, 150, 36, 18);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 15px JetBrains Mono, monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowBlur = 0;
    ctx.fillText(options.badgeText.toUpperCase(), 0, 1);
    ctx.restore();
  }

  // Footer Watermark
  ctx.save();
  ctx.font = "700 15px JetBrains Mono, monospace";
  ctx.fillStyle = "#0F4C5C";
  ctx.textAlign = "center";
  ctx.fillText("2:47 PM Studio  •  BUILD · BEACH · BELONG", centerX, size - 25);
  ctx.restore();
}

// ----------------------------------------------------
// FORMAT B: BUILDER ID PASS RENDERER (1200 x 630 px) — Complete Wave-Text Separation
// ----------------------------------------------------
export function renderFormatB(
  canvas: HTMLCanvasElement,
  options: RenderOptionsFormatB
) {
  const width = 1200;
  const height = 630;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, width, height);

  // Background Base Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, "#faf4e8");
  bgGrad.addColorStop(0.5, "#fffbf5");
  bgGrad.addColorStop(1, "#f5e8d0");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Format B Official Credential Motif: Guilloché Security Pattern & Topographic Coastline
  drawGuillocheSecurityPattern(ctx, width, height);

  // Format B Scattered Goa Motifs
  drawBeachShackUmbrella(ctx, width - 110, 110, 1.1, 0.28);
  drawFishingBoatSilhouette(ctx, 110, height - 130, 1.2, 0.28);
  drawCoconutCluster(ctx, width - 140, height - 140, 1.0, 0.25);

  // Passport Corner Brackets & Details
  drawPassportCornerDetails(ctx, width, height);

  // Bottom Ocean Waves (Positioned at exact bottom edge `height - 20` so ZERO text overlaps)
  drawLayeredOceanWaves(ctx, height - 20, width, "#0F4C5C", "#D9532F");

  const accentColor = "#D9532F";

  // Card Outer Glow & Border
  ctx.save();
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 4;
  ctx.shadowColor = "rgba(217, 83, 47, 0.22)";
  ctx.shadowBlur = 25;
  ctx.beginPath();
  ctx.roundRect(20, 20, width - 40, height - 40, 24);
  ctx.stroke();
  ctx.restore();

  // Lanyard Slot Top Center
  ctx.save();
  ctx.fillStyle = "#faf4e8";
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(width / 2 - 45, 20, 90, 18, 9);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // Left Photo Frame
  const photoX = 65;
  const photoY = 85;
  const photoW = 410;
  const photoH = 460;

  ctx.save();
  ctx.fillStyle = "rgba(255, 255, 255, 0.96)";
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 3.5;
  ctx.shadowColor = "rgba(217, 83, 47, 0.18)";
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.roundRect(photoX, photoY, photoW, photoH, 20);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // Draw Photo
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(photoX + 6, photoY + 6, photoW - 12, photoH - 12, 16);
  ctx.clip();

  if (options.image) {
    drawImageCoverPanZoom(
      ctx,
      options.image,
      photoX + 6,
      photoY + 6,
      photoW - 12,
      photoH - 12,
      options.panX,
      options.panY,
      options.zoom
    );
  } else {
    ctx.fillStyle = "#fff8ee";
    ctx.fillRect(photoX + 6, photoY + 6, photoW - 12, photoH - 12);
    ctx.fillStyle = "#D9532F";
    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("PHOTO HERE", photoX + photoW / 2, photoY + photoH / 2);
  }
  ctx.restore();

  // Photo Tag Overlay
  ctx.save();
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  ctx.fillRect(photoX + 16, photoY + photoH - 45, photoW - 32, 32);
  ctx.fillStyle = accentColor;
  ctx.font = "bold 13px JetBrains Mono, monospace";
  ctx.textAlign = "center";
  ctx.fillText("VERIFIED BUILDER • HH GOA 2026", photoX + photoW / 2, photoY + photoH - 24);
  ctx.restore();

  // Right Content Area
  const contentX = 525;

  // Header Wordmark
  ctx.save();
  ctx.font = "800 36px Syne, Space Grotesk, sans-serif";
  ctx.fillStyle = "#1F2421";
  ctx.fillText("HackerHouse ", contentX, 115);

  const hhW = ctx.measureText("HackerHouse ").width;
  ctx.font = "800 38px Noto Sans Devanagari, sans-serif";
  ctx.fillStyle = accentColor;
  ctx.fillText("गोवा", contentX + hhW, 115);

  ctx.font = "700 15px JetBrains Mono, monospace";
  ctx.fillStyle = "#0F4C5C";
  ctx.fillText("28–31 OCT 2026  •  GOA, INDIA", contentX, 145);
  ctx.restore();

  // Divider Line
  ctx.save();
  ctx.strokeStyle = "rgba(217, 83, 47, 0.25)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(contentX, 165);
  ctx.lineTo(width - 65, 165);
  ctx.stroke();
  ctx.restore();

  // Name
  ctx.save();
  ctx.font = "700 14px JetBrains Mono, monospace";
  ctx.fillStyle = "#0F4C5C";
  ctx.fillText("// BUILDER NAME", contentX, 200);

  ctx.font = "800 38px Syne, Space Grotesk, sans-serif";
  ctx.fillStyle = "#1F2421";
  const displayName = options.name || "GOA BUILDER";
  ctx.fillText(displayName.toUpperCase(), contentX, 242);
  ctx.restore();

  // Stack Role Pill
  ctx.save();
  const roleText = (options.role || "FULL-STACK ENGINEER").toUpperCase();
  ctx.font = "bold 14px JetBrains Mono, monospace";
  const roleW = ctx.measureText(roleText).width + 32;

  ctx.fillStyle = "rgba(217, 83, 47, 0.15)";
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(contentX, 265, roleW, 36, 18);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = accentColor;
  ctx.fillText(roleText, contentX + 16, 288);
  ctx.restore();

  // Generated Fun Title
  ctx.save();
  ctx.font = "700 13px JetBrains Mono, monospace";
  ctx.fillStyle = "#0F4C5C";
  ctx.fillText("// DESIGNATION / TITLE", contentX, 335);

  ctx.font = "800 26px Syne, Space Grotesk, sans-serif";
  ctx.fillStyle = accentColor;
  ctx.fillText(options.title || "GOA SUNSET CODER", contentX, 368);
  ctx.restore();

  // QR Code & Specs
  const qrSize = 130;
  const qrX = width - 65 - qrSize;
  const qrY = 415;

  if (options.qrCanvas) {
    ctx.save();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(qrX - 6, qrY - 6, qrSize + 12, qrSize + 12);
    ctx.drawImage(options.qrCanvas, qrX, qrY, qrSize, qrSize);
    ctx.restore();
  }

  // Left Specs
  ctx.save();
  ctx.font = "700 12px JetBrains Mono, monospace";
  ctx.fillStyle = "#0F4C5C";
  ctx.fillText("CREDENTIAL ID:", contentX, 425);
  ctx.fillStyle = "#1F2421";
  ctx.font = "bold 14px JetBrains Mono, monospace";
  ctx.fillText(`HH2026-GOA-${Math.floor(1000 + Math.random() * 9000)}`, contentX, 443);

  ctx.font = "700 12px JetBrains Mono, monospace";
  ctx.fillStyle = "#0F4C5C";
  ctx.fillText("TAGLINE:", contentX, 475);
  ctx.fillStyle = accentColor;
  ctx.font = "bold 14px Syne, sans-serif";
  ctx.fillText("Less Noise. More Signal.", contentX, 493);

  ctx.fillStyle = accentColor;
  ctx.font = "800 15px JetBrains Mono, monospace";
  ctx.fillText("#FrameInGoa", contentX, 528);
  ctx.restore();

  // Studio Footer Watermark — Placed cleanly on solid cream background at `height - 45` ABOVE the wave lines!
  ctx.save();
  ctx.font = "700 13px JetBrains Mono, monospace";
  ctx.fillStyle = "#0F4C5C";
  ctx.fillText("2:47 PM Studio  •  OFFICIAL EVENT BADGE", contentX, 562);
  ctx.restore();
}

// ----------------------------------------------------
// FORMAT C: TEAM COMBINED FRAME RENDERER (1200 x 630 px) — Complete Wave-Text Separation
// ----------------------------------------------------
export function renderFormatC(
  canvas: HTMLCanvasElement,
  options: RenderOptionsFormatC
) {
  const width = 1200;
  const height = 630;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, width, height);

  // Sky-to-Sea Horizon Background Wash
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, "#faf4e8");
  bgGrad.addColorStop(0.55, "#e6f4f1");
  bgGrad.addColorStop(1, "#f5e8d0");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Format C Scattered Goa Motifs
  drawCoconutCluster(ctx, 90, 85, 1.1, 0.28);
  drawCompassCornerRose(ctx, width - 60, 60);
  drawBeachShackUmbrella(ctx, width - 110, height - 120, 1.1, 0.28);
  drawFishingBoatSilhouette(ctx, 120, height - 120, 1.1, 0.28);

  // Outer Border Glow
  ctx.save();
  ctx.strokeStyle = "#D9532F";
  ctx.lineWidth = 4;
  ctx.shadowColor = "rgba(217, 83, 47, 0.2)";
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.roundRect(20, 20, width - 40, height - 40, 24);
  ctx.stroke();
  ctx.restore();

  // Top Header Banner
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = "800 36px Syne, Space Grotesk, sans-serif";
  ctx.fillStyle = "#1F2421";
  ctx.fillText(options.teamName ? options.teamName.toUpperCase() : "TEAM HACKWAVE", width / 2, 75);

  ctx.font = "700 16px JetBrains Mono, monospace";
  ctx.fillStyle = "#D9532F";
  ctx.fillText("HackerHouse गोवा 2026  •  DELEGATION PASS  •  28–31 OCT 2026", width / 2, 108);
  ctx.restore();

  // Teammates Photo Cards (Max 3 Members Total)
  const members = options.members.slice(0, 3);
  const count = Math.max(members.length, 2);
  const cardWidth = Math.min(310, (width - 120 - (count - 1) * 35) / count);
  const cardHeight = 360;
  const totalW = count * cardWidth + (count - 1) * 35;
  const startX = (width - totalW) / 2;
  const cardY = 140;

  // Format C Togetherness Motif: Dotted Connected Journey Route Path
  drawConnectedMemberRoutePath(ctx, startX, cardY, cardWidth, count);

  // Member Cards
  members.forEach((m, idx) => {
    const x = startX + idx * (cardWidth + 35);

    ctx.save();
    ctx.fillStyle = "rgba(255, 255, 255, 0.96)";
    ctx.strokeStyle = "#D9532F";
    ctx.lineWidth = 3.5;
    ctx.shadowColor = "rgba(217, 83, 47, 0.18)";
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.roundRect(x, cardY, cardWidth, cardHeight, 20);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(x + 10, cardY + 10, cardWidth - 20, cardHeight - 90, 14);
    ctx.clip();

    if (m.image) {
      drawImageCoverPanZoom(
        ctx,
        m.image,
        x + 10,
        cardY + 10,
        cardWidth - 20,
        cardHeight - 90
      );
    } else {
      ctx.fillStyle = "#fff8ee";
      ctx.fillRect(x + 10, cardY + 10, cardWidth - 20, cardHeight - 90);
      ctx.fillStyle = "#D9532F";
      ctx.font = "bold 16px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`MEMBER #${idx + 1}`, x + cardWidth / 2, cardY + cardHeight / 2 - 30);
    }
    ctx.restore();

    ctx.save();
    ctx.textAlign = "center";
    ctx.font = "800 18px Syne, sans-serif";
    ctx.fillStyle = "#1F2421";
    ctx.fillText((m.name || `BUILDER ${idx + 1}`).toUpperCase(), x + cardWidth / 2, cardY + cardHeight - 50);

    ctx.font = "600 12px JetBrains Mono, monospace";
    ctx.fillStyle = "#D9532F";
    ctx.fillText((m.role || "BUILDER").toUpperCase(), x + cardWidth / 2, cardY + cardHeight - 24);
    ctx.restore();
  });

  // Ocean Wave Ripples Base (Positioned at exact bottom edge `height - 20` so ZERO text overlaps)
  drawLayeredOceanWaves(ctx, height - 20, width, "#0F4C5C", "#D9532F");

  // Footer Banner Text — Placed cleanly on clear background ABOVE the wave lines!
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = "800 22px Syne, sans-serif";
  ctx.fillStyle = "#D9532F";
  ctx.fillText("#FrameInGoa  •  2:47 PM Studio", width / 2, height - 68);

  ctx.font = "700 13px JetBrains Mono, monospace";
  ctx.fillStyle = "#0F4C5C";
  ctx.fillText("LESS NOISE. MORE SIGNAL.  •  BUILD · BEACH · BELONG", width / 2, height - 42);
  ctx.restore();
}
