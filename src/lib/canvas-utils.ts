// Canvas Rendering Engine for HH Goa 2026 — Goan Portuguese-Heritage Aesthetic

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

// Helper 1: Azulejo Ceramic Tile Corner Rosette Motif (Portuguese Blue & White Tile Art)
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

  // Outer Ceramic Tile Base
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = COLOR_AZULEJO;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.rect(0, 0, size, size);
  ctx.fill();
  ctx.stroke();

  // Inner Tile Grid Lines
  ctx.strokeStyle = "rgba(43, 76, 126, 0.3)";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size, size);
  ctx.moveTo(size, 0);
  ctx.lineTo(0, size);
  ctx.stroke();

  // Central Rosette Circle
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size * 0.32, 0, Math.PI * 2);
  ctx.stroke();

  // Laterite Red Accent Petals
  ctx.fillStyle = COLOR_LATERITE;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2 - size * 0.28, 4, 0, Math.PI * 2);
  ctx.arc(size / 2, size / 2 + size * 0.28, 4, 0, Math.PI * 2);
  ctx.arc(size / 2 - size * 0.28, size / 2, 4, 0, Math.PI * 2);
  ctx.arc(size / 2 + size * 0.28, size / 2, 4, 0, Math.PI * 2);
  ctx.fill();

  // Center Dot
  ctx.fillStyle = COLOR_INDIGO;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

// Helper 2: Carved Balcão Wooden Window & Whitewashed Church Arch Linework
function drawGoanBalcaoArchLinework(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number
) {
  ctx.save();
  ctx.translate(x, y);

  // Church Arch Linework
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 1.8;
  ctx.globalAlpha = 0.18;
  ctx.beginPath();
  ctx.moveTo(0, height);
  ctx.lineTo(0, height * 0.35);
  ctx.bezierCurveTo(0, 0, width, 0, width, height * 0.35);
  ctx.lineTo(width, height);
  ctx.stroke();

  // Inner Arch Parallel Line
  ctx.strokeStyle = COLOR_LATERITE;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.15;
  ctx.beginPath();
  ctx.moveTo(12, height);
  ctx.lineTo(12, height * 0.38);
  ctx.bezierCurveTo(12, 12, width - 12, 12, width - 12, height * 0.38);
  ctx.lineTo(width - 12, height);
  ctx.stroke();

  ctx.restore();
}

// Helper 3: Official Goan Heritage Stamp Seal
function drawGoanHeritageStampSeal(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.save();
  ctx.translate(x, y);

  ctx.strokeStyle = COLOR_LATERITE;
  ctx.lineWidth = 2.5;
  ctx.globalAlpha = 0.85;

  // Double Ring Seal
  ctx.beginPath();
  ctx.arc(0, 0, 36, 0, Math.PI * 2);
  ctx.stroke();

  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(0, 0, 30, 0, Math.PI * 2);
  ctx.stroke();

  // Seal Text & Center Rosette
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

// Helper 4: Azulejo Tile Border Line
function drawAzulejoTileBorderLine(ctx: CanvasRenderingContext2D, width: number, y: number) {
  ctx.save();
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(width, y);
  ctx.stroke();

  // Ceramic Rosette Points across border
  ctx.fillStyle = COLOR_LATERITE;
  for (let x = 30; x < width; x += 60) {
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = COLOR_AZULEJO;
    ctx.lineWidth = 1;
    ctx.strokeRect(x - 6, y - 6, 12, 12);
  }
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

  // Warm Whitewash Background Fill
  ctx.fillStyle = COLOR_WHITEWASH;
  ctx.fillRect(0, 0, size, size);

  // Background Carved Balcão Arch Linework
  drawGoanBalcaoArchLinework(ctx, 80, 80, 840, 840);

  // 4-Corner Azulejo Ceramic Rosette Tiles
  drawAzulejoCornerRosette(ctx, 30, 30, 80, false, false);
  drawAzulejoCornerRosette(ctx, size - 110, 30, 80, true, false);
  drawAzulejoCornerRosette(ctx, 30, size - 110, 80, false, true);
  drawAzulejoCornerRosette(ctx, size - 110, size - 110, 80, true, true);

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
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(centerX - photoRadius, centerY - photoRadius, photoRadius * 2, photoRadius * 2);
    ctx.fillStyle = COLOR_LATERITE;
    ctx.font = "bold 30px Playfair Display, serif";
    ctx.textAlign = "center";
    ctx.fillText("DROP PHOTO HERE", centerX, centerY);
  }
  ctx.restore();

  // Deep Indigo Branded Outer Ring with Azulejo Accent
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

  // Text inside top pill
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

  // Bottom Banner Bar: Dates & Location + #FrameInGoa
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

  // Primary Badge Line
  const userBadge = options.badgeText || "BUILDER • GOA 2026";
  ctx.textAlign = "center";
  ctx.font = "800 32px Playfair Display, serif";
  ctx.fillStyle = COLOR_LATERITE;
  ctx.fillText(userBadge, centerX, bottomBarY + 44);

  // Sub-Text Line
  ctx.font = "700 17px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.fillText("28–31 OCT 2026 • GOA, INDIA • #FrameInGoa", centerX, bottomBarY + 84);
  ctx.restore();

  // Azulejo Tile Bottom Border Line
  drawAzulejoTileBorderLine(ctx, size, size - 25);
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

  // Whitewash Background Fill
  ctx.fillStyle = COLOR_WHITEWASH;
  ctx.fillRect(0, 0, width, height);

  // Background Carved Balcão Arch Contour
  drawGoanBalcaoArchLinework(ctx, 40, 20, width - 80, height - 40);

  // Corner Azulejo Ceramic Tile Accents
  drawAzulejoCornerRosette(ctx, 20, 20, 50, false, false);
  drawAzulejoCornerRosette(ctx, width - 70, 20, 50, true, false);
  drawAzulejoCornerRosette(ctx, 20, height - 70, 50, false, true);
  drawAzulejoCornerRosette(ctx, width - 70, height - 70, 50, true, true);

  // Outer Card Border
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 3.5;
  ctx.strokeRect(18, 18, width - 36, height - 36);

  // Outer Inner Accent Line
  ctx.strokeStyle = COLOR_AZULEJO;
  ctx.lineWidth = 1.2;
  ctx.strokeRect(26, 26, width - 52, height - 52);

  // Left Photo Column (Square Frame)
  const photoSize = 360;
  const photoX = 65;
  const photoY = (height - photoSize) / 2 + 10;

  // Photo Outer Frame Panel
  ctx.save();
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(photoX - 8, photoY - 8, photoSize + 16, photoSize + 16, 24);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // Clip & Draw User Photo
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

  // Right Side Builder Information Panel
  const contentX = photoX + photoSize + 55;

  // Header Title: HackerHouse goa
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

  // Subheader Tagline
  ctx.font = "700 13px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.fillText("28–31 OCT 2026 • GOA, INDIA", contentX + w1 + w2 + 20, 68);
  ctx.restore();

  // Header Separator Line
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

  // Stack Role Pill
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

  // Designation / Fun Title
  ctx.save();
  ctx.font = "700 13px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.fillText("// DESIGNATION / TITLE", contentX, 292);

  ctx.font = "800 24px Playfair Display, serif";
  ctx.fillStyle = COLOR_LATERITE;
  ctx.fillText(options.title || "BUILDER TITLE", contentX, 324);
  ctx.restore();

  // QR Code & Goan Heritage Stamp Seal
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

  // Draw Official Goan Heritage Stamp Seal on Right Corner
  drawGoanHeritageStampSeal(ctx, width - 130, 420);

  // Footer Credit Line
  ctx.save();
  ctx.font = "700 14px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.textAlign = "center";
  ctx.fillText("2:47 PM Studio • OFFICIAL EVENT BADGE • #FrameInGoa", width / 2, height - 38);
  ctx.restore();

  // Bottom Azulejo Tile Line
  drawAzulejoTileBorderLine(ctx, width, height - 16);
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

  // Whitewash Background Fill
  ctx.fillStyle = COLOR_WHITEWASH;
  ctx.fillRect(0, 0, width, height);

  // Background Carved Balcão Arch Linework
  drawGoanBalcaoArchLinework(ctx, 40, 20, width - 80, height - 40);

  // Corner Azulejo Ceramic Rosettes
  drawAzulejoCornerRosette(ctx, 20, 20, 50, false, false);
  drawAzulejoCornerRosette(ctx, width - 70, 20, 50, true, false);
  drawAzulejoCornerRosette(ctx, 20, height - 70, 50, false, true);
  drawAzulejoCornerRosette(ctx, width - 70, height - 70, 50, true, true);

  // Outer Card Border
  ctx.strokeStyle = COLOR_INDIGO;
  ctx.lineWidth = 3.5;
  ctx.strokeRect(18, 18, width - 36, height - 36);

  // Top Header Banner
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

  // Render Team Members (2 or 3 Members)
  const memberCount = Math.min(Math.max(options.members.length, 2), 3);
  const cardWidth = memberCount === 2 ? 360 : 310;
  const cardHeight = 360;
  const startX = (width - (memberCount * cardWidth + (memberCount - 1) * 35)) / 2;
  const cardY = 160;

  options.members.slice(0, memberCount).forEach((m, idx) => {
    const cardX = startX + idx * (cardWidth + 35);

    // Member Frame Box
    ctx.save();
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = COLOR_INDIGO;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 20);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Member Photo Box
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

    // Member Name & Role
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

  // Footer Credit Line
  ctx.save();
  ctx.font = "700 14px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO;
  ctx.textAlign = "center";
  ctx.fillText("#FrameInGoa • 2:47 PM Studio • LESS NOISE. MORE SIGNAL.", width / 2, height - 38);
  ctx.restore();

  // Bottom Azulejo Border Line
  drawAzulejoTileBorderLine(ctx, width, height - 16);
}
