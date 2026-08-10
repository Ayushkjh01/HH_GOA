import { ImageResponse } from "next/og";
import { decodePayload } from "@/lib/share-utils";


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const data = searchParams.get("data");

    let name = "GOA BUILDER";
    let role = "FULL-STACK ENGINEER";
    let title = "GOA SUNSET CODER";

    if (data) {
      const decoded = decodePayload(data);
      if (decoded) {
        name = decoded.n || name;
        role = decoded.r || role;
        title = decoded.t || title;
      }
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#faf4e8",
            padding: "40px",
            border: "4px solid #e66c37",
            borderRadius: "24px",
            color: "#1c1917",
            fontFamily: "sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#1c1917",
                }}
              >
                HackerHouse <span style={{ color: "#e66c37" }}>गोवा</span>
              </div>
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#0d4a3a",
                letterSpacing: "1px",
              }}
            >
              28–31 OCT 2026 • GOA, INDIA
            </div>
          </div>

          {/* Middle Body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                color: "#0d4a3a",
                letterSpacing: "2px",
                fontWeight: "bold",
              }}
            >
              VERIFIED EVENT CREDENTIAL
            </div>
            <div
              style={{
                fontSize: "56px",
                fontWeight: "900",
                color: "#1c1917",
                textTransform: "uppercase",
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#e66c37",
                backgroundColor: "rgba(230, 108, 55, 0.12)",
                padding: "8px 24px",
                borderRadius: "20px",
                border: "1px solid #e66c37",
              }}
            >
              {title}
            </div>
            <div style={{ fontSize: "18px", color: "#0d4a3a", fontWeight: "bold" }}>{role}</div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              color: "#0d4a3a",
              fontWeight: "bold",
            }}
          >
            <div>Less Noise. More Signal.</div>
            <div style={{ color: "#e66c37", fontWeight: "bold" }}>#FrameInGoa</div>
            <div>2:47 PM Studio</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(`OG image generation error: ${e.message}`);
    return new Response(`Failed to generate the OG image`, {
      status: 500,
    });
  }
}
