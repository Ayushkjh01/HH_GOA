import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#D9532F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
        }}
      >
        <svg
          viewBox="0 0 36 36"
          width="130"
          height="130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 20C8 13.3726 13.3726 8 20 8C26.6274 8 32 13.3726 32 20H8Z"
            fill="#FAF4E8"
          />
          <path
            d="M4 22C10 26 16 18 22 22C28 26 32 20 36 22"
            stroke="#0F4C5C"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
