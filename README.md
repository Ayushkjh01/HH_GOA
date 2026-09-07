<div align="center">

  <h1>🌴 HackerHouse Goa — Frame in Goa 🌊</h1>

  <p><b>"Less Noise. More Signal."</b></p>

  <p>
    An ultra-premium, high-performance web suite for generating official event profile avatar overlays, high-resolution Builder ID Cards with dynamic QR codes, and Team Delegation Passes for <b>HackerHouse Goa (गोवा)</b>.
  </p>

  <p>
    <a href="https://hh-goa.vercel.app" target="_blank"><img src="https://img.shields.io/badge/🌐_Live_Website-hh--goa.vercel.app-A63A2B?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Website" /></a>
  </p>

  <p>
    <a href="https://github.com/Ayushkjh01/HH_GOA/stargazers"><img src="https://img.shields.io/github/stars/Ayushkjh01/HH_GOA?style=for-the-badge&color=A63A2B" alt="Stars" /></a>
    <a href="https://github.com/Ayushkjh01/HH_GOA/network/members"><img src="https://img.shields.io/github/forks/Ayushkjh01/HH_GOA?style=for-the-badge&color=2B4C7E" alt="Forks" /></a>
    <a href="https://github.com/Ayushkjh01/HH_GOA/issues"><img src="https://img.shields.io/github/issues/Ayushkjh01/HH_GOA?style=for-the-badge&color=1B2A4A" alt="Issues" /></a>
    <a href="https://github.com/Ayushkjh01/HH_GOA/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Ayushkjh01/HH_GOA?style=for-the-badge&color=121B2D" alt="License" /></a>
  </p>

  <p>
    <a href="https://hh-goa.vercel.app"><b>🚀 Open Live Web App</b></a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-formats--tools">Formats & Tools</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-local-development">Local Setup</a>
  </p>

  ---
</div>

## 🌐 Live Web Access

You do **not** need to install or run anything locally to use the app! You can launch and use the live web application directly in your browser:

👉 **[Launch HackerHouse Goa Web App (hh-goa.vercel.app)](https://hh-goa.vercel.app)**

---

## 🎨 Overview

**HackerHouse Goa (गोवा)** combines Goan heritage aesthetics—*Portuguese Azulejo ceramic tiles, Balcão porch architecture, and vibrant coastal beach life*—with a modern developer toolset. 

Drop your photo to instantly generate pixel-perfect event passes, profile overlays, and team graphics rendered 100% client-side with dynamic shareable URLs and instant HD exports.

---

## ✨ Key Features

- 📸 **PFP Overlay Generator (Format A)**: Instant profile photo frame customization with Goan beach & heritage watermarks.
- 🆔 **Builder ID Card (Format B)**: Official builder pass featuring custom role badges, dynamic QR codes, and unique builder IDs.
- 👥 **Team Delegation Pass (Format C)**: Contingent pass generator designed for teams attending HackerHouse Goa together.
- 🖼️ **Dynamic Open Graph API (`/api/og`)**: Serverless social cards generated automatically for shareable builder profile links.
- 📱 **HEIC & Mobile Camera Support**: Native conversion of iPhone `.heic`/`.heif` formats on the fly using `heic2any`.
- ⚡ **Client-Side High-Res Canvas Rendering**: Export 100% crisp PNG/PDF graphics without server delays.
- 🎯 **Goan Design System**: Custom Azulejo tile borders, Balcão linework, beach life watermarks, and curated HSL color palettes.

---

## 🛠️ Formats & Tools

| Format | Page Route | Description |
| :--- | :--- | :--- |
| **Format A** | `/frame` | **PFP Avatar Overlay**: Upload photo, adjust zoom & position, download HD social profile badge. |
| **Format B** | `/builder/[id]` | **Builder ID Card**: High-res ID card with QR code verification and personal shareable link. |
| **Format C** | `/pass` / `/team` | **Team Delegation Pass**: Generate team passes for hacker contingents & project groups. |
| **Dashboard** | `/dashboard` | **Builder Hub**: Overview of created passes, quick actions, and downloadable assets. |
| **OG API** | `/api/og` | **Dynamic Social Cards**: Generates rich twitter/link preview cards on the fly. |

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router + Turbopack)
- **Library**: [React 19](https://react.dev/) + TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom HSL Design Tokens
- **Icons & Graphics**: [Lucide React](https://lucide.dev/) + Custom Goan Heritage SVGs
- **Utilities**:
  - `qrcode.react` & `qrcode` — Dynamic QR Code generation
  - `canvas-confetti` — Celebration effects upon export
  - `jspdf` — PDF export support
  - `heic2any` — Mobile HEIC image conversion

---

## 📦 Project Structure

```text
HH_GOA/
├── src/
│   ├── app/
│   │   ├── api/og/        # Dynamic Open Graph image generation endpoint
│   │   ├── builder/[id]/   # Builder ID Pass page
│   │   ├── dashboard/      # Builder dashboard & hub
│   │   ├── frame/          # Profile Overlay Generator (Format A)
│   │   ├── pass/           # Team Pass Generator (Format C)
│   │   ├── team/           # Team delegation view
│   │   ├── layout.tsx      # Root layout & providers
│   │   └── page.tsx        # Hero landing page
│   ├── components/         # Goan Heritage Motifs, Icons, & Canvas Editors
│   └── lib/                # Utilities & title generators
├── public/                 # Static assets & illustrations
└── package.json
```

---

## 💻 Local Development (Optional)

If you are a developer looking to contribute or run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ayushkjh01/HH_GOA.git
   cd HH_GOA
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Visit `http://localhost:3000` to view the app locally.

---

<div align="center">
  <sub>Built with ❤️ for <b>HackerHouse Goa (गोवा)</b></sub>
</div>
