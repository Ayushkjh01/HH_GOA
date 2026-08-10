// Canvas Rendering Engine for HH Goa 2026 — High-Vibrancy Social Media Export Artwork

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

// High-Vibrancy Canvas Export Color Palette
const COLOR_DEEP_BLUE = "#0D2B52";
const COLOR_AZULEJO_BLUE = "#163B70";
const COLOR_VIVID_RED = "#D84732";
const COLOR_SUN_GOLD = "#F5C242";
const COLOR_CHARCOAL = "#0B1426";
const COLOR_SAND_BG = "#FFF8EC";

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

// Helper 1: High-Contrast Fine Line-Art Coconut Palm Tree Canopy
function drawLineArtPalmCanopy(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale = 1,
  color = COLOR_DEEP_BLUE,
  flip = false
) {
  ctx.save();
  ctx.translate(x, y);
  if (flip) ctx.scale(-scale, scale);
  else ctx.scale(scale, scale);

  ctx.strokeStyle = color;
  ctx.lineWidth = 3;

  // Trunk
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(-25, -50, -15, -110);
  ctx.stroke();

  // Coconuts
  ctx.fillStyle = COLOR_VIVID_RED;
  ctx.beginPath();
  ctx.arc(-18, -105, 9, 0, Math.PI * 2);
  ctx.arc(-10, -110, 9.5, 0, Math.PI * 2);
  ctx.arc(-24, -112, 8.5, 0, Math.PI * 2);
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

    // Sun-Gold Rib Spines
    ctx.strokeStyle = COLOR_SUN_GOLD;
    ctx.lineWidth = 2;
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

// Helper 2: High-Vibrancy Azulejo Ceramic Rosette Motif
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
  ctx.strokeStyle = COLOR_DEEP_BLUE;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(0, 0, size, size);
  ctx.fill();
  ctx.stroke();

  // Inner Diagonal Grid
  ctx.strokeStyle = COLOR_AZULEJO_BLUE;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size, size);
  ctx.moveTo(size, 0);
  ctx.lineTo(0, size);
  ctx.stroke();

  // Central Rosette Circle
  ctx.strokeStyle = COLOR_DEEP_BLUE;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size * 0.34, 0, Math.PI * 2);
  ctx.stroke();

  // Laterite Red Petals
  ctx.fillStyle = COLOR_VIVID_RED;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2 - size * 0.28, 5, 0, Math.PI * 2);
  ctx.arc(size / 2, size / 2 + size * 0.28, 5, 0, Math.PI * 2);
  ctx.arc(size / 2 - size * 0.28, size / 2, 5, 0, Math.PI * 2);
  ctx.arc(size / 2 + size * 0.28, size / 2, 5, 0, Math.PI * 2);
  ctx.fill();

  // Sun-Gold Center Dot
  ctx.fillStyle = COLOR_SUN_GOLD;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

// Helper 3: Shoreline Waves Linework
function drawShorelineWaveLinework(ctx: CanvasRenderingContext2D, y: number, width: number) {
  ctx.save();
  ctx.strokeStyle = COLOR_DEEP_BLUE;
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  for (let x = 0; x <= width; x += 50) {
    ctx.quadraticCurveTo(x + 25, y - 12, x + 50, y);
  }
  ctx.stroke();

  ctx.strokeStyle = COLOR_VIVID_RED;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let x = 0; x <= width; x += 40) {
    ctx.quadraticCurveTo(x + 20, y + 8, x + 40, y + 16);
  }
  ctx.stroke();
  ctx.restore();
}

// Helper 4: Official Goan Heritage Stamp Seal
function drawGoanHeritageStampSeal(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.save();
  ctx.translate(x, y);

  ctx.strokeStyle = COLOR_VIVID_RED;
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.arc(0, 0, 38, 0, Math.PI * 2);
  ctx.stroke();

  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, 32, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = COLOR_DEEP_BLUE;
  ctx.font = "bold 9px JetBrains Mono, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("GOAN HERITAGE", 0, -18);

  ctx.font = "bold 12px Noto Sans Devanagari, sans-serif";
  ctx.fillStyle = COLOR_VIVID_RED;
  ctx.fillText("गोवा", 0, 0);

  ctx.font = "bold 9px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO_BLUE;
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

  // Rich Multi-Stage Warm Sand & Sun-Gold Background Radial Gradient
  const bgGrad = ctx.createRadialGradient(centerX, centerY, 100, centerX, centerY, 680);
  bgGrad.addColorStop(0, "#FFFDF7");
  bgGrad.addColorStop(0.6, "#F9EFD9");
  bgGrad.addColorStop(1, "#EED8AC");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, size, size);

  // 4-Corner Azulejo Ceramic Rosettes
  drawAzulejoCornerRosette(ctx, 25, 25, 80, false, false);
  drawAzulejoCornerRosette(ctx, size - 105, 25, 80, true, false);
  drawAzulejoCornerRosette(ctx, 25, size - 105, 80, false, true);
  drawAzulejoCornerRosette(ctx, size - 105, size - 105, 80, true, true);

  // Line-Art Coconut Palm Trees on Left & Right Corners
  drawLineArtPalmCanopy(ctx, 85, size - 40, 1.3, COLOR_DEEP_BLUE, false);
  drawLineArtPalmCanopy(ctx, size - 85, size - 40, 1.3, COLOR_DEEP_BLUE, true);

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
    ctx.fillStyle = COLOR_VIVID_RED;
    ctx.font = "bold 32px Playfair Display, serif";
    ctx.textAlign = "center";
    ctx.fillText("DROP PHOTO HERE", centerX, centerY);
  }
  ctx.restore();

  // High-Impact 3D Saturated Outer Ring (Vivid Red + Sun Gold + Ocean Blue Gradient)
  ctx.save();
  const ringWidth = 26;
  ctx.lineWidth = ringWidth;

  const ringGrad = ctx.createConicGradient(-Math.PI / 2, centerX, centerY);
  ringGrad.addColorStop(0, COLOR_VIVID_RED);
  ringGrad.addColorStop(0.35, COLOR_SUN_GOLD);
  ringGrad.addColorStop(0.7, COLOR_DEEP_BLUE);
  ringGrad.addColorStop(1, COLOR_VIVID_RED);

  ctx.strokeStyle = ringGrad;
  ctx.shadowColor = "rgba(13, 43, 82, 0.4)";
  ctx.shadowBlur = 32;
  ctx.beginPath();
  ctx.arc(centerX, centerY, photoRadius + ringWidth / 2 + 4, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // Inner Whitewash Ring
  ctx.save();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.arc(centerX, centerY, photoRadius - 2, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // Shoreline Waves Linework at Bottom Edge
  drawShorelineWaveLinework(ctx, size - 60, size);

  // Top Pill Header: "HackerHouse goa"
  ctx.save();
  const topPillW = 480;
  const topPillH = 72;
  const topPillX = centerX - topPillW / 2;
  const topPillY = centerY - photoRadius - 44;

  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = COLOR_DEEP_BLUE;
  ctx.lineWidth = 3.5;
  ctx.shadowColor = "rgba(13, 43, 82, 0.25)";
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.roundRect(topPillX, topPillY, topPillW, topPillH, 36);
  ctx.fill();
  ctx.stroke();

  ctx.textBaseline = "middle";
  ctx.shadowBlur = 0;

  ctx.font = "800 28px Playfair Display, serif";
  const w1 = ctx.measureText("HackerHouse ").width;
  ctx.font = "800 32px Noto Sans Devanagari, sans-serif";
  const w2 = ctx.measureText("गोवा").width;
  const totalTextW = w1 + w2;
  const startX = centerX - totalTextW / 2;

  ctx.textAlign = "left";
  ctx.font = "800 28px Playfair Display, serif";
  ctx.fillStyle = COLOR_CHARCOAL;
  ctx.fillText("HackerHouse ", startX, topPillY + topPillH / 2);

  ctx.font = "800 32px Noto Sans Devanagari, sans-serif";
  ctx.fillStyle = COLOR_VIVID_RED;
  ctx.fillText("गोवा", startX + w1, topPillY + topPillH / 2);
  ctx.restore();

  // Bottom Banner Bar
  ctx.save();
  const bottomBarW = 780;
  const bottomBarH = 114;
  const bottomBarX = centerX - bottomBarW / 2;
  const bottomBarY = centerY + photoRadius - 48;

  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = COLOR_DEEP_BLUE;
  ctx.lineWidth = 3.5;
  ctx.shadowColor = "rgba(13, 43, 82, 0.25)";
  ctx.shadowBlur = 24;
  ctx.beginPath();
  ctx.roundRect(bottomBarX, bottomBarY, bottomBarW, bottomBarH, 32);
  ctx.fill();
  ctx.stroke();

  const userBadge = options.badgeText || "BUILDER • GOA 2026";
  ctx.textAlign = "center";
  ctx.font = "900 34px Playfair Display, serif";
  ctx.fillStyle = COLOR_VIVID_RED;
  ctx.fillText(userBadge, centerX, bottomBarY + 46);

  ctx.font = "700 17px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO_BLUE;
  ctx.fillText("28–31 OCT 2026 • GOA, INDIA • #FrameInGoa", centerX, bottomBarY + 86);
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

  // Sand Background Fill
  ctx.fillStyle = COLOR_SAND_BG;
  ctx.fillRect(0, 0, width, height);

  // Top Deep Ocean Blue Header Hero Block
  const headerH = 115;
  const headGrad = ctx.createLinearGradient(0, 0, width, 0);
  headGrad.addColorStop(0, COLOR_DEEP_BLUE);
  headGrad.addColorStop(1, COLOR_AZULEJO_BLUE);
  ctx.fillStyle = headGrad;
  ctx.fillRect(0, 0, width, headerH);

  // Gold Header Border Line
  ctx.strokeStyle = COLOR_SUN_GOLD;
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.moveTo(0, headerH);
  ctx.lineTo(width, headerH);
  ctx.stroke();

  // Corner Azulejo Ceramic Tile Accents
  drawAzulejoCornerRosette(ctx, 20, 20, 50, false, false);
  drawAzulejoCornerRosette(ctx, width - 70, 20, 50, true, false);
  drawAzulejoCornerRosette(ctx, 20, height - 70, 50, false, true);
  drawAzulejoCornerRosette(ctx, width - 70, height - 70, 50, true, true);

  // Header Title Inside Blue Hero Bar
  ctx.save();
  ctx.textBaseline = "middle";
  ctx.font = "900 34px Playfair Display, serif";
  const w1 = ctx.measureText("HackerHouse ").width;

  ctx.textAlign = "left";
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("HackerHouse ", 85, headerH / 2);

  ctx.font = "900 38px Noto Sans Devanagari, sans-serif";
  ctx.fillStyle = COLOR_SUN_GOLD;
  ctx.fillText("गोवा", 85 + w1, headerH / 2);

  ctx.font = "700 14px JetBrains Mono, monospace";
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "right";
  ctx.fillText("28–31 OCT 2026 • GOA, INDIA", width - 85, headerH / 2);
  ctx.restore();

  // Outer Card Border
  ctx.strokeStyle = COLOR_DEEP_BLUE;
  ctx.lineWidth = 4;
  ctx.strokeRect(18, 18, width - 36, height - 36);

  // Photo Frame Box
  const photoSize = 360;
  const photoX = 65;
  const photoY = 145;

  ctx.save();
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = COLOR_VIVID_RED;
  ctx.lineWidth = 3.5;
  ctx.shadowColor = "rgba(13, 43, 82, 0.25)";
  ctx.shadowBlur = 18;
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
    ctx.fillStyle = "#FFFDF7";
    ctx.fillRect(photoX, photoY, photoSize, photoSize);
    ctx.fillStyle = COLOR_VIVID_RED;
    ctx.font = "bold 24px Playfair Display, serif";
    ctx.textAlign = "center";
    ctx.fillText("UPLOAD PHOTO", photoX + photoSize / 2, photoY + photoSize / 2);
  }
  ctx.restore();

  // Right Side Builder Info
  const contentX = photoX + photoSize + 55;

  // Builder Name
  ctx.save();
  ctx.font = "700 13px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO_BLUE;
  ctx.fillText("// BUILDER NAME", contentX, 170);

  ctx.font = "900 38px Playfair Display, serif";
  ctx.fillStyle = COLOR_CHARCOAL;
  const displayName = options.name || "YOUR NAME HERE";
  ctx.fillText(displayName.toUpperCase(), contentX, 212);
  ctx.restore();

  // Role Pill (Vivid Sun-Gold Fill with Red Border)
  ctx.save();
  const roleText = (options.role || "FULL-STACK ENGINEER").toUpperCase();
  ctx.font = "bold 14px JetBrains Mono, monospace";
  const roleW = ctx.measureText(roleText).width + 36;

  ctx.fillStyle = COLOR_SUN_GOLD;
  ctx.strokeStyle = COLOR_VIVID_RED;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(contentX, 240, roleW, 36, 18);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = COLOR_DEEP_BLUE;
  ctx.fillText(roleText, contentX + 18, 263);
  ctx.restore();

  // Title
  ctx.save();
  ctx.font = "700 13px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO_BLUE;
  ctx.fillText("// DESIGNATION / TITLE", contentX, 310);

  ctx.font = "800 26px Playfair Display, serif";
  ctx.fillStyle = COLOR_VIVID_RED;
  ctx.fillText(options.title || "BUILDER TITLE", contentX, 344);
  ctx.restore();

  // QR Code
  if (options.qrCanvas) {
    const qrSize = 110;
    const qrX = contentX;
    const qrY = 385;

    ctx.save();
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = COLOR_DEEP_BLUE;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(qrX - 6, qrY - 6, qrSize + 12, qrSize + 12, 14);
    ctx.fill();
    ctx.stroke();
    ctx.drawImage(options.qrCanvas, qrX, qrY, qrSize, qrSize);
    ctx.restore();

    ctx.save();
    ctx.font = "700 11px JetBrains Mono, monospace";
    ctx.fillStyle = COLOR_AZULEJO_BLUE;
    ctx.fillText("SCAN TO VERIFY", qrX, qrY + qrSize + 22);
    ctx.restore();
  }

  // Official Seal
  drawGoanHeritageStampSeal(ctx, width - 130, 435);

  // Shoreline Waves Linework at Bottom Edge
  drawShorelineWaveLinework(ctx, height - 28, width);

  // Footer Credit
  ctx.save();
  ctx.font = "700 14px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO_BLUE;
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

  // Sand Background Fill
  ctx.fillStyle = COLOR_SAND_BG;
  ctx.fillRect(0, 0, width, height);

  // Top Deep Ocean Blue Header Block
  const headerH = 120;
  const headGrad = ctx.createLinearGradient(0, 0, width, 0);
  headGrad.addColorStop(0, COLOR_DEEP_BLUE);
  headGrad.addColorStop(1, COLOR_AZULEJO_BLUE);
  ctx.fillStyle = headGrad;
  ctx.fillRect(0, 0, width, headerH);

  // Gold Line
  ctx.strokeStyle = COLOR_SUN_GOLD;
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.moveTo(0, headerH);
  ctx.lineTo(width, headerH);
  ctx.stroke();

  // Corner Azulejo Rosettes
  drawAzulejoCornerRosette(ctx, 20, 20, 50, false, false);
  drawAzulejoCornerRosette(ctx, width - 70, 20, 50, true, false);
  drawAzulejoCornerRosette(ctx, 20, height - 70, 50, false, true);
  drawAzulejoCornerRosette(ctx, width - 70, height - 70, 50, true, true);

  // Outer Card Border
  ctx.strokeStyle = COLOR_DEEP_BLUE;
  ctx.lineWidth = 4;
  ctx.strokeRect(18, 18, width - 36, height - 36);

  // Top Header Inside Blue Bar
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = "900 36px Playfair Display, serif";
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText(options.teamName ? options.teamName.toUpperCase() : "YOUR TEAM NAME", width / 2, 55);

  ctx.font = "700 15px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_SUN_GOLD;
  ctx.fillText("HackerHouse goa 2026 • DELEGATION PASS • 28–31 OCT 2026", width / 2, 92);
  ctx.restore();

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
    ctx.strokeStyle = COLOR_VIVID_RED;
    ctx.lineWidth = 3;
    ctx.shadowColor = "rgba(13, 43, 82, 0.2)";
    ctx.shadowBlur = 16;
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
      ctx.fillStyle = "#FFFDF7";
      ctx.fillRect(px, py, pSize, pSize);
      ctx.fillStyle = COLOR_VIVID_RED;
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

    // Role Pill (Sun-Gold Fill)
    const rText = (m.role || "DELEGATE").toUpperCase();
    ctx.font = "bold 12px JetBrains Mono, monospace";
    const rW = ctx.measureText(rText).width + 24;
    const rx = cardX + (cardWidth - rW) / 2;
    const ry = cardY + pSize + 68;

    ctx.fillStyle = COLOR_SUN_GOLD;
    ctx.strokeStyle = COLOR_DEEP_BLUE;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(rx, ry, rW, 26, 13);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = COLOR_DEEP_BLUE;
    ctx.fillText(rText, cardX + cardWidth / 2, ry + 17);
    ctx.restore();
  });

  // Shoreline Waves Linework at Bottom Edge
  drawShorelineWaveLinework(ctx, height - 28, width);

  // Footer Credit
  ctx.save();
  ctx.font = "700 14px JetBrains Mono, monospace";
  ctx.fillStyle = COLOR_AZULEJO_BLUE;
  ctx.textAlign = "center";
  ctx.fillText("#FrameInGoa • 2:47 PM Studio • LESS NOISE. MORE SIGNAL.", width / 2, height - 42);
  ctx.restore();
}
