import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} Open Graph image`;
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(180deg, rgba(245,241,232,1) 0%, rgba(252,250,246,1) 100%)",
          color: "#121417",
          padding: "64px",
          position: "relative",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "32px",
            borderRadius: "32px",
            border: "1px solid rgba(18,20,23,0.1)",
            background:
              "radial-gradient(circle at top left, rgba(15,107,115,0.12), transparent 28%), radial-gradient(circle at bottom right, rgba(180,125,74,0.14), transparent 30%), rgba(255,255,255,0.6)",
          }}
        />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                fontSize: "24px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "58px",
                  width: "58px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.88)",
                  border: "1px solid rgba(18,20,23,0.12)",
                  color: "#121417",
                  fontSize: "26px",
                  fontWeight: 700,
                  letterSpacing: "-0.08em",
                  lineHeight: 1,
                }}
              >
                CS
              </div>
              {siteConfig.name}
            </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "820px" }}>
            <div
              style={{
                fontSize: "76px",
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-0.05em",
              }}
            >
              Premium web products built for teams that need serious execution.
            </div>
            <div
              style={{
                fontSize: "28px",
                lineHeight: 1.4,
                color: "#5f6975",
                maxWidth: "760px",
              }}
            >
              SaaS platforms, dashboards, internal tools, automation systems, and
              conversion-focused product sites with the structure to scale.
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "24px", color: "#5f6975" }}>
            <div>{siteConfig.email}</div>
            <div>Next.js / TypeScript / Product-grade delivery</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
