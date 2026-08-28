import React from "react";
import { Navigation } from "../components/Navigation";
import navbar from "../data/navbar";
import timelineData from "../data/timeline";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

const Timeline = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1A191E",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "80px",
      }}
    >
      <Navigation navbar={navbar} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px", width: "100%" }}>
        <ScrollFadeIn>
          <h1 className="section-title">Experience & Timeline</h1>
          <p className="timeline-subtitle">
            All of my engineering experience, projects, and milestones developed so far.
          </p>
        </ScrollFadeIn>

        {/* Custom Professional Timeline Tree */}
        <div style={{ position: "relative", width: "100%", margin: "0 auto", zIndex: 1 }} className="timeline-container">
          {/* Vertical Cyan-to-Pink Glowing Spine Line - strictly zIndex 0 behind nodes */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "3px",
              background: "linear-gradient(180deg, #67D9EC 0%, #e1068c 50%, #67D9EC 100%)",
              boxShadow: "0 0 10px rgba(103, 217, 236, 0.4)",
              borderRadius: "2px",
              zIndex: 0,
              pointerEvents: "none",
            }}
            className="timeline-spine"
          />

          {timelineData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <ScrollFadeIn key={idx} delay={Math.min(idx * 60, 300)} style={{ position: "relative", zIndex: 5 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: isEven ? "flex-start" : "flex-end",
                    alignItems: "center",
                    position: "relative",
                    marginBottom: "40px",
                    width: "100%",
                    zIndex: 5,
                  }}
                  className="timeline-row"
                >
                  {/* Central Node Circle - strictly zIndex 20 with opaque background */}
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "24px",
                      transform: "translate(-50%, -50%)",
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "#1A191E",
                      border: "2px solid #67D9EC",
                      boxShadow: "0 0 14px rgba(103, 217, 236, 0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 20,
                      transition: "transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                    className="timeline-node"
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        color: "#67D9EC",
                        position: "relative",
                        zIndex: 25,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Card Container */}
                  <div
                    style={{
                      width: "44%",
                      position: "relative",
                    }}
                    className="timeline-card-wrapper"
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(30, 29, 36, 0.9)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "16px",
                        padding: "24px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                        transition: "all 0.3s ease",
                        backdropFilter: "blur(10px)",
                      }}
                      className="pro-card timeline-card"
                    >
                      {/* Date Badge in Website Pink */}
                      <div
                        style={{
                          display: "inline-flex",
                          width: "fit-content",
                          backgroundColor: "rgba(225, 6, 140, 0.15)",
                          border: "1px solid rgba(225, 6, 140, 0.4)",
                          color: "#e1068c",
                          padding: "4px 14px",
                          borderRadius: "20px",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          marginBottom: "12px",
                        }}
                      >
                        {item.date}
                      </div>

                      {/* Item Name */}
                      <h3
                        style={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          margin: "0 0 10px 0",
                          lineHeight: "1.3",
                        }}
                      >
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          color: "#cbd5e0",
                          fontSize: "0.98rem",
                          lineHeight: "1.6",
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
