import React from "react";
import { Navigation } from "../components/Navigation";
import navbar from "../data/navbar";
import traits from "../data/traits";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

const TraitCard = ({ t, idx }: { t: any; idx: number }) => {
  const isEven = idx % 2 === 0;
  return (
    <div
      className="trait-card"
      style={{
        background: "rgba(30, 29, 36, 0.85)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "24px",
        padding: "36px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
        backdropFilter: "blur(10px)",
      }}
    >
      {t.img && !isEven && (
        <div style={{ flexShrink: 0 }}>
          <img
            src={t.img}
            alt={t.name}
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "20px",
              objectFit: "cover",
              objectPosition: t.objectPosition || "center",
              border: "3px solid rgba(103, 217, 236, 0.4)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      )}

      <div style={{ flex: 1 }}>
        <span
          style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            color: "#e1068c",
            display: "block",
            marginBottom: "8px",
          }}
        >
          {t.id}
        </span>
        <h3
          style={{
            color: "#67D9EC",
            fontSize: "1.8rem",
            fontWeight: 700,
            margin: "0 0 14px 0",
          }}
        >
          {t.name}
        </h3>
        <p
          style={{
            color: "#cbd5e0",
            fontSize: "1.1rem",
            lineHeight: "1.7",
            margin: 0,
          }}
        >
          {t.description}
        </p>
      </div>

      {t.img && isEven && (
        <div style={{ flexShrink: 0 }}>
          <img
            src={t.img}
            alt={t.name}
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "20px",
              objectFit: "cover",
              objectPosition: t.objectPosition || "center",
              border: "3px solid rgba(103, 217, 236, 0.4)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      )}
    </div>
  );
};

const About = () => {
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
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", width: "100%" }}>
        <ScrollFadeIn>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "50px",
              marginTop: "20px",
            }}
          >
            <div style={{ flexShrink: 0 }}>
              <img
                src="/3.jpg"
                alt="Vinay Rao Profile"
                className="pfp"
                style={{
                  width: "320px",
                  height: "320px",
                  borderRadius: "50%",
                  border: "4px solid #67D9EC",
                  objectFit: "cover",
                  boxShadow: "0 10px 30px rgba(103, 217, 236, 0.2)",
                }}
              />
            </div>

            <div style={{ maxWidth: "680px", flex: 1, minWidth: "300px" }}>
              <h1
                className="title-hover"
                style={{
                  color: "#ffffff",
                  fontSize: "3rem",
                  fontWeight: 800,
                  margin: "0 0 16px 0",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                I&apos;m Vinay.
              </h1>
              <p
                style={{
                  color: "#67D9EC",
                  fontSize: "1.15rem",
                  lineHeight: "1.7",
                  marginBottom: "16px",
                }}
              >
                I am a Student at UC Berkeley studying EECS.
                I started coding during the COVID pandemic and instantly loved it. My goal as a software engineer is to build impactful applications and research cutting-edge AI technology for people all across the world.
              </p>
              <p
                style={{
                  color: "#cbd5e0",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "16px",
                }}
              >
                My primary technical focus areas include Full-Stack Web Development (TypeScript, Next.js, React, Node.js), Mobile App Development (SwiftUI, React Native), Cloud Infrastructure (AWS, Azure, GCP, Firebase, Supabase), and LLM / AI Systems Research.
              </p>
              <p
                style={{
                  color: "#a0aec0",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Outside of engineering, I enjoy listening to music, playing basketball, mentoring aspiring programmers, and exploring new culinary spots.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        <div style={{ marginTop: "100px" }}>
          <h2 className="section-title">What Defines Me</h2>
          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              marginTop: "40px",
              padding: "10px",
            }}
          >
            {traits.map((t, idx) => (
              <TraitCard key={idx} t={t} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
