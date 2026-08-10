import { ImageResponse } from "next/og";


export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <svg
          viewBox="0 0 36 36"
          width="28"
          height="28"
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
