// Canvas Rendering Engine for HH Goa 2026 — Goan Portuguese-Heritage & Coastal Line-Art Fusion

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

// Design System Constants: Goan Portuguese Heritage Palette
const COLOR_WHITEWASH = "#FDFBF7";
const COLOR_INDIGO = "#1B2A4A";
const COLOR_LATERITE = "#A63A2B";
const COLOR_AZULEJO = "#2B4C7E";
const COLOR_CHARCOAL = "#121B2D";

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

// Helper 1: Fine Line-Art Coconut Palm Tree Canopy (Brand Color Linework)
function drawLineArtPalmCanopy(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale = 1,
  color = COLOR_INDIGO,
  flip = false
) {
  ctx.save();
  ctx.translate(x, y);
  if (flip) ctx.scale(-scale, scale);
  else ctx.scale(scale, scale);

  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;

  // Trunk
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(-25, -50, -15, -110);
  ctx.stroke();

  // Coconuts
  ctx.fillStyle = COLOR_LATERITE;
  ctx.beginPath();
  ctx.arc(-18, -105, 8, 0, Math.PI * 2);
  ctx.arc(-10, -110, 8.5, 0, Math.PI * 2);
  ctx.arc(-24, -112, 7.5, 0, Math.PI * 2);
  ctx.fill();

  // Spreading Fronds
  ctx.fillStyle = "none";
  const frondAngles = [-1.8, -1.2, -0.6, 0, 0.6, 1.2];
  frondAngles.forEach((angle) => {
    ctx.save();
    ctx.translate(-15, -110);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(45, -25, 80, 20);
    ctx.stroke();

    // Rib Frond Spines
    ctx.strokeStyle = COLOR_LATERITE;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(30, -5);
    ctx.lineTo(35, 3);
    ctx.moveTo(50, 0);
    ctx.lineTo(56, 10);
    ctx.stroke();
    ctx.restore();
  });

  ctx.restore();
}

// Helper 2: Fine Line-Art Beach Umbrella
function drawLineArtBeachUmbrella(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale = 1,
  color = COLOR_INDIGO
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.strokeStyle = color;
  ctx.lineWidth = 2.2;

  // Pole
  ctx.beginPath();
  ctx.moveTo(0, -30);
  ctx.lineTo(0, 30);
  ctx.stroke();

  // Canopy Fill & Outline
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.moveTo(-35, -30);
  ctx.quadraticCurveTo(0, -65, 35, -30);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Canopy Ribs
  ctx.strokeStyle = COLOR_LATERITE;
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(0, -58);
  ctx.lineTo(0, -30);
  ctx.moveTo(-18, -48);
  ctx.quadraticCurveTo(-14, -38, -16, -30);
  ctx.moveTo(18, -48);
  ctx.quadraticCurveTo(14, -38, 16, -30);
  ctx.stroke();

  ctx.restore();
}

// Helper 3: Fine Line-Art Straw Sun Hat Accent
function drawLineArtSunHat(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale = 1,
  color = COLOR_LATERITE
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.fillStyle = "#FFFFFF";

  // Brim
  ctx.beginPath();
  ctx.ellipse(0, 5, 28, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Crown
  ctx.beginPath();
  ctx.arc(0, 0, 14, Math.PI, 0);
  ctx.fill();
  ctx.stroke();

  // Ribbon
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 3, 14, Math.PI * 0.8, Math.PI * 0.2, true);
  ctx.stroke();

  ctx.restore();
}

// Helper 4: Azulejo Corner Tile Rosette Motif
function drawAzulejoCornerRosette(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size = 70,
  flipX = false,
  flipY = false
) {
  ctx.save();
  ctx.translate(x, y);
  if (flipX || flipY) ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);

  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = COLOR_AZULEJO;
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.rect(0, 0, size, size);
  ctx.fill();
  ctx.stroke();

  ctx.strokeStyle = "rgba(43, 76, 126, 0.3)";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size, size);
  ctx.moveTo(size, 0);
  ctx.lineTo(0, size);
  ctx.stroke();

  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size * 0.32, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = COLOR_LATERITE;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2 - size * 0.28, 4, 0, Math.PI * 2);
  ctx.arc(size / 2, size / 2 + size * 0.28, 4, 0, Math.PI * 2);
  ctx.arc(size / 2 - size * 0.28, size / 2, 4, 0, Math.PI * 2);
  ctx.arc(size / 2 + size * 0.28, size / 2, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = COLOR_INDIGO;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

// Helper 5: Shoreline Waves Linework at Bottom Edge
function drawShorelineWaveLinework(ctx: CanvasRenderingContext2D, y: number, width: number) {
  ctx.save();
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let x = 0; x <= width; x += 50) {
    ctx.quadraticCurveTo(x + 25, y - 10, x + 50, y);
  }
  ctx.stroke();

  ctx.strokeStyle = COLOR_LATERITE;
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  for (let x = 0; x <= width; x += 40) {
    ctx.quadraticCurveTo(x + 20, y + 6, x + 40, y + 14);
  }
  ctx.stroke();
  ctx.restore();
}

// Helper 6: Official Goan Heritage Stamp Seal
function drawGoanHeritageStampSeal(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.save();
  ctx.translate(x, y);

  ctx.strokeStyle = COLOR_LATERITE;
  ctx.lineWidth = 2.5;
  ctx.globalAlpha = 0.85;

  ctx.beginPath();
  ctx.arc(0, 0, 36, 0, Math.PI * 2);
  ctx.stroke();

  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(0, 0, 30, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = COLOR_INDIGO;
  ctx.font = "bold 9px JetBrains Mono, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("GOAN HERITAGE", 0, -18);

  ctx.font = "bold 11px Noto Sans Devanagari, sans-serif";
  ctx.fillStyle = COLOR_LATERITE;
  ctx.fillText("गोवा", 0, 0);

  ctx.font = "bold 8px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.fillText("★ 2026 ★", 0, 18);

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

  // Background Fill
  ctx.fillStyle = COLOR_WHITEWASH;
  ctx.fillRect(0, 0, size, size);

  // 4-Corner Azulejo Ceramic Rosettes
  drawAzulejoCornerRosette(ctx, 25, 25, 75, false, false);
  drawAzulejoCornerRosette(ctx, size - 100, 25, 75, true, false);
  drawAzulejoCornerRosette(ctx, 25, size - 100, 75, false, true);
  drawAzulejoCornerRosette(ctx, size - 100, size - 100, 75, true, true);

  // Line-Art Coconut Palm Trees on Left & Right Corners (Format A Benchmark)
  drawLineArtPalmCanopy(ctx, 80, size - 40, 1.2, COLOR_INDIGO, false);
  drawLineArtPalmCanopy(ctx, size - 80, size - 40, 1.2, COLOR_INDIGO, true);

  // Photo Circle
  const photoRadius = 340;

  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, photoRadius, 0, Math.PI * 2);
  ctx.clip();

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
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(centerX - photoRadius, centerY - photoRadius, photoRadius * 2, photoRadius * 2);
    ctx.fillStyle = COLOR_LATERITE;
    ctx.font = "bold 30px Playfair Display, serif";
    ctx.textAlign = "center";
    ctx.fillText("DROP PHOTO HERE", centerX, centerY);
  }
  ctx.restore();

  // Deep Indigo Branded Outer Ring
  ctx.save();
  const ringWidth = 24;
  ctx.lineWidth = ringWidth;
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.shadowColor = "rgba(27, 42, 74, 0.25)";
  ctx.shadowBlur = 24;
  ctx.beginPath();
  ctx.arc(centerX, centerY, photoRadius + ringWidth / 2 + 4, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // Inner Whitewash Accent Ring
  ctx.save();
  ctx.lineWidth = 3.5;
  ctx.strokeStyle = COLOR_WHITEWASH;
  ctx.beginPath();
  ctx.arc(centerX, centerY, photoRadius - 2, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // Shoreline Waves Linework at Bottom Edge
  drawShorelineWaveLinework(ctx, size - 60, size);

  // Top Pill Header: "HackerHouse goa"
  ctx.save();
  const topPillW = 460;
  const topPillH = 68;
  const topPillX = centerX - topPillW / 2;
  const topPillY = centerY - photoRadius - 42;

  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 3;
  ctx.shadowColor = "rgba(27, 42, 74, 0.15)";
  ctx.shadowBlur = 18;
  ctx.beginPath();
  ctx.roundRect(topPillX, topPillY, topPillW, topPillH, 34);
  ctx.fill();
  ctx.stroke();

  ctx.textBaseline = "middle";
  ctx.shadowBlur = 0;

  ctx.font = "800 26px Playfair Display, serif";
  const w1 = ctx.measureText("HackerHouse ").width;
  ctx.font = "800 30px Noto Sans Devanagari, sans-serif";
  const w2 = ctx.measureText("गोवा").width;
  const totalTextW = w1 + w2;
  const startX = centerX - totalTextW / 2;

  ctx.textAlign = "left";
  ctx.font = "800 26px Playfair Display, serif";
  ctx.fillStyle = COLOR_CHARCOAL;
  ctx.fillText("HackerHouse ", startX, topPillY + topPillH / 2);

  ctx.font = "800 30px Noto Sans Devanagari, sans-serif";
  ctx.fillStyle = COLOR_LATERITE;
  ctx.fillText("गोवा", startX + w1, topPillY + topPillH / 2);
  ctx.restore();

  // Bottom Banner Bar
  ctx.save();
  const bottomBarW = 760;
  const bottomBarH = 110;
  const bottomBarX = centerX - bottomBarW / 2;
  const bottomBarY = centerY + photoRadius - 50;

  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 3;
  ctx.shadowColor = "rgba(27, 42, 74, 0.15)";
  ctx.shadowBlur = 24;
  ctx.beginPath();
  ctx.roundRect(bottomBarX, bottomBarY, bottomBarW, bottomBarH, 30);
  ctx.fill();
  ctx.stroke();

  const userBadge = options.badgeText || "BUILDER • GOA 2026";
  ctx.textAlign = "center";
  ctx.font = "800 32px Playfair Display, serif";
  ctx.fillStyle = COLOR_LATERITE;
  ctx.fillText(userBadge, centerX, bottomBarY + 44);

  ctx.font = "700 17px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.fillText("28–31 OCT 2026 • GOA, INDIA • #FrameInGoa", centerX, bottomBarY + 84);
  ctx.restore();
}

// ----------------------------------------------------
// FORMAT B: BUILDER ID CARD RENDERER (1200 x 630 px)
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

  // Background Fill
  ctx.fillStyle = COLOR_WHITEWASH;
  ctx.fillRect(0, 0, width, height);

  // Corner Azulejo Ceramic Tile Accents
  drawAzulejoCornerRosette(ctx, 20, 20, 50, false, false);
  drawAzulejoCornerRosette(ctx, width - 70, 20, 50, true, false);
  drawAzulejoCornerRosette(ctx, 20, height - 70, 50, false, true);
  drawAzulejoCornerRosette(ctx, width - 70, height - 70, 50, true, true);

  // Fine Line-Art Beach Umbrella Silhouette on Right Side
  drawLineArtBeachUmbrella(ctx, width - 110, 140, 1.1, COLOR_INDIGO);

  // Outer Card Border
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 3.5;
  ctx.strokeRect(18, 18, width - 36, height - 36);

  // Photo Frame Box
  const photoSize = 360;
  const photoX = 65;
  const photoY = (height - photoSize) / 2 + 10;

  ctx.save();
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(photoX - 8, photoY - 8, photoSize + 16, photoSize + 16, 24);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // User Photo
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(photoX, photoY, photoSize, photoSize, 18);
  ctx.clip();

  if (options.image) {
    drawImageCoverPanZoom(
      ctx,
      options.image,
      photoX,
      photoY,
      photoSize,
      photoSize,
      options.panX,
      options.panY,
      options.zoom
    );
  } else {
    ctx.fillStyle = "#FDFBF7";
    ctx.fillRect(photoX, photoY, photoSize, photoSize);
    ctx.fillStyle = COLOR_LATERITE;
    ctx.font = "bold 24px Playfair Display, serif";
    ctx.textAlign = "center";
    ctx.fillText("UPLOAD PHOTO", photoX + photoSize / 2, photoY + photoSize / 2);
  }
  ctx.restore();

  // Right Side Builder Info
  const contentX = photoX + photoSize + 55;

  // Header Title
  ctx.save();
  ctx.textBaseline = "top";
  ctx.font = "800 32px Playfair Display, serif";
  const w1 = ctx.measureText("HackerHouse ").width;
  ctx.font = "800 36px Noto Sans Devanagari, sans-serif";
  const w2 = ctx.measureText("गोवा").width;

  ctx.textAlign = "left";
  ctx.font = "800 32px Playfair Display, serif";
  ctx.fillStyle = COLOR_CHARCOAL;
  ctx.fillText("HackerHouse ", contentX, 60);

  ctx.font = "800 36px Noto Sans Devanagari, sans-serif";
  ctx.fillStyle = COLOR_LATERITE;
  ctx.fillText("गोवा", contentX + w1, 56);

  ctx.font = "700 13px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.fillText("28–31 OCT 2026 • GOA, INDIA", contentX + w1 + w2 + 20, 68);
  ctx.restore();

  // Separator Line
  ctx.strokeStyle = "rgba(27, 42, 74, 0.2)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(contentX, 115);
  ctx.lineTo(width - 65, 115);
  ctx.stroke();

  // Builder Name
  ctx.save();
  ctx.font = "700 13px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.fillText("// BUILDER NAME", contentX, 155);

  ctx.font = "900 36px Playfair Display, serif";
  ctx.fillStyle = COLOR_CHARCOAL;
  const displayName = options.name || "YOUR NAME HERE";
  ctx.fillText(displayName.toUpperCase(), contentX, 196);
  ctx.restore();

  // Role Pill
  ctx.save();
  const roleText = (options.role || "FULL-STACK ENGINEER").toUpperCase();
  ctx.font = "bold 13px JetBrains Mono, monospace";
  const roleW = ctx.measureText(roleText).width + 32;

  ctx.fillStyle = "rgba(166, 58, 43, 0.12)";
  ctx.strokeStyle = COLOR_LATERITE;
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.roundRect(contentX, 224, roleW, 34, 17);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = COLOR_LATERITE;
  ctx.fillText(roleText, contentX + 16, 246);
  ctx.restore();

  // Title
  ctx.save();
  ctx.font = "700 13px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.fillText("// DESIGNATION / TITLE", contentX, 292);

  ctx.font = "800 24px Playfair Display, serif";
  ctx.fillStyle = COLOR_LATERITE;
  ctx.fillText(options.title || "BUILDER TITLE", contentX, 324);
  ctx.restore();

  // QR Code
  if (options.qrCanvas) {
    const qrSize = 110;
    const qrX = contentX;
    const qrY = 365;

    ctx.save();
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = COLOR_INDIGO;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(qrX - 6, qrY - 6, qrSize + 12, qrSize + 12, 14);
    ctx.fill();
    ctx.stroke();
    ctx.drawImage(options.qrCanvas, qrX, qrY, qrSize, qrSize);
    ctx.restore();

    ctx.save();
    ctx.font = "700 11px JetBrains Mono, monospace";
    ctx.fillStyle = COLOR_AZULEJO;
    ctx.fillText("SCAN TO VERIFY", qrX, qrY + qrSize + 22);
    ctx.restore();
  }

  // Official Seal
  drawGoanHeritageStampSeal(ctx, width - 130, 420);

  // Shoreline Waves Linework at Bottom Edge
  drawShorelineWaveLinework(ctx, height - 28, width);

  // Footer Credit
  ctx.save();
  ctx.font = "700 14px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.textAlign = "center";
  ctx.fillText("2:47 PM Studio • OFFICIAL EVENT BADGE • #FrameInGoa", width / 2, height - 42);
  ctx.restore();
}

// ----------------------------------------------------
// FORMAT C: TEAM COMBINED FRAME RENDERER (1200 x 630 px)
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

  // Background Fill
  ctx.fillStyle = COLOR_WHITEWASH;
  ctx.fillRect(0, 0, width, height);

  // Corner Azulejo Rosettes
  drawAzulejoCornerRosette(ctx, 20, 20, 50, false, false);
  drawAzulejoCornerRosette(ctx, width - 70, 20, 50, true, false);
  drawAzulejoCornerRosette(ctx, 20, height - 70, 50, false, true);
  drawAzulejoCornerRosette(ctx, width - 70, height - 70, 50, true, true);

  // Straw Sun Hat Line-Art Accent Icon Top Right
  drawLineArtSunHat(ctx, width - 130, 80, 0.9, COLOR_LATERITE);

  // Outer Card Border
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 3.5;
  ctx.strokeRect(18, 18, width - 36, height - 36);

  // Top Header
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = "900 36px Playfair Display, serif";
  ctx.fillStyle = COLOR_CHARCOAL;
  ctx.fillText(options.teamName ? options.teamName.toUpperCase() : "YOUR TEAM NAME", width / 2, 75);

  ctx.font = "700 15px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_LATERITE;
  ctx.fillText("HackerHouse goa 2026 • DELEGATION PASS • 28–31 OCT 2026", width / 2, 110);
  ctx.restore();

  // Header Divider
  ctx.strokeStyle = "rgba(27, 42, 74, 0.2)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(80, 130);
  ctx.lineTo(width - 80, 130);
  ctx.stroke();

  // Render Team Members
  const memberCount = Math.min(Math.max(options.members.length, 2), 3);
  const cardWidth = memberCount === 2 ? 360 : 310;
  const cardHeight = 360;
  const startX = (width - (memberCount * cardWidth + (memberCount - 1) * 35)) / 2;
  const cardY = 160;

  options.members.slice(0, memberCount).forEach((m, idx) => {
    const cardX = startX + idx * (cardWidth + 35);

    ctx.save();
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = COLOR_INDIGO;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 20);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    const pSize = memberCount === 2 ? 220 : 190;
    const px = cardX + (cardWidth - pSize) / 2;
    const py = cardY + 20;

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(px, py, pSize, pSize, 14);
    ctx.clip();

    if (m.image) {
      drawImageCoverPanZoom(ctx, m.image, px, py, pSize, pSize, 0, 0, 1);
    } else {
      ctx.fillStyle = "#FDFBF7";
      ctx.fillRect(px, py, pSize, pSize);
      ctx.fillStyle = COLOR_LATERITE;
      ctx.font = "bold 16px JetBrains Mono, monospace";
      ctx.textAlign = "center";
      ctx.fillText(`MEMBER #${idx + 1}`, px + pSize / 2, py + pSize / 2);
    }
    ctx.restore();

    ctx.save();
    ctx.textAlign = "center";
    ctx.font = "800 20px Playfair Display, serif";
    ctx.fillStyle = COLOR_CHARCOAL;
    ctx.fillText((m.name || `MEMBER #${idx + 1}`).toUpperCase(), cardX + cardWidth / 2, cardY + pSize + 55);

    ctx.font = "700 12px JetBrains Mono, monospace";
    ctx.fillStyle = COLOR_LATERITE;
    ctx.fillText((m.role || "DELEGATE").toUpperCase(), cardX + cardWidth / 2, cardY + pSize + 82);
    ctx.restore();
  });

  // Shoreline Waves Linework at Bottom Edge
  drawShorelineWaveLinework(ctx, height - 28, width);

  // Footer Credit
  ctx.save();
  ctx.font = "700 14px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.textAlign = "center";
  ctx.fillText("#FrameInGoa • 2:47 PM Studio • LESS NOISE. MORE SIGNAL.", width / 2, height - 42);
  ctx.restore();
}
