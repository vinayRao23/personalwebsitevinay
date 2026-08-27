import type { NextPage } from "next";
import dynamic from "next/dynamic";
import navbar from "../data/navbar";
const Typed = dynamic(() => import("react-typed"), { ssr: false });
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import loader from "../public/loader.json";
import languages from "../public/languages.json";
import React, { useState, useEffect } from "react";
import homePageProjects from "../data/homePageProjects";
import experience from "../data/experience";
import { useRouter } from "next/router";
import { Navigation } from "../components/Navigation";
import { ScrollFadeIn } from "../components/ScrollFadeIn";
import { InteractiveHeroCanvas } from "../components/InteractiveHeroCanvas";

const Home: NextPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [shouldPlayLoader, setShouldPlayLoader] = useState(false);
  const router = useRouter();

  const [emailTab, setEmailTab] = useState<"personal" | "school">("personal");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasLoadedOnce = sessionStorage.getItem("hasLoadedRocketOnce");
      if (hasLoadedOnce) {
        setShowContent(true);
        setShouldPlayLoader(false);
      } else {
        setShouldPlayLoader(true);
        const timer1 = setTimeout(() => {
          setStartAnimation(true);
        }, 3000);

        const timer2 = setTimeout(() => {
          setShowContent(true);
          sessionStorage.setItem("hasLoadedRocketOnce", "true");
        }, 5000);

        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    }
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
      >
        <InteractiveHeroCanvas />

        {shouldPlayLoader && !showContent && (
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              backgroundColor: "#081A26",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 999,
            }}
            className={startAnimation ? "fadeoutLeft" : ""}
          >
            <Lottie
              loop={false}
              animationData={loader}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        )}

        <div style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <Navigation navbar={navbar} />
        </div>

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", marginTop: "12vh", padding: "0 20px", width: "100%" }}>
          <ScrollFadeIn>
            <h1 className="hero-title">Vinay Rao</h1>
            <div style={{ marginTop: "20px" }}>
              <Typed
                strings={[
                  "Full Stack Developer.",
                  "Student at UC Berkeley.",
                  "LLM Researcher.",
                  "Music Enthusiast.",
                ]}
                typeSpeed={75}
                backSpeed={70}
                loop
                style={{
                  color: "#67D9EC",
                  fontSize: "1.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#1A191E",
          padding: "60px 20px",
          display: showContent ? "block" : "none",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <ScrollFadeIn>
            <h2 className="section-title">Featured Projects</h2>
          </ScrollFadeIn>

          <div className="cards-grid">
            {homePageProjects.slice(0, 3).map((p, idx) => (
              <ScrollFadeIn key={idx} delay={idx * 120}>
                <div
                  className="pro-card"
                  style={{ cursor: p.link ? "pointer" : "default", height: "100%" }}
                  onClick={() => p.link && window.open(p.link, "_blank")}
                >
                  <div className="pro-card-header">
                    <h3 className="pro-card-title">{p.name}</h3>
                    {p.src && <img src={p.src} alt={p.name} className="pro-card-icon" style={{ width: "36px", height: "36px", objectFit: "contain", borderRadius: "6px" }} />}
                  </div>
                  <p className="pro-card-desc">{p.description}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn delay={200}>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <button
                className="pro-btn"
                onClick={() => router.push("/projects")}
              >
                Explore All Projects →
              </button>
            </div>
          </ScrollFadeIn>

          <div style={{ marginTop: "100px" }}>
            <ScrollFadeIn>
              <h2 className="section-title">Technical Experience</h2>
            </ScrollFadeIn>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "40px",
                marginTop: "40px",
              }}
            >
              <ScrollFadeIn delay={100} style={{ flex: "1 1 300px", maxWidth: "480px" }}>
                <div style={{ width: "100%", margin: "0 auto" }}>
                  <Lottie
                    animationData={languages}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn delay={150} style={{ flex: "1 1 300px", maxWidth: "620px" }}>
                <div>
                  <h3
                    style={{
                      fontSize: "1.8rem",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      marginBottom: "24px",
                    }}
                  >
                    Key Highlights & Skills
                  </h3>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    {experience.map((e, idx) => (
                      <li
                        key={idx}
                        style={{
                          color: "#e2e8f0",
                          fontSize: "1.05rem",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          lineHeight: "1.5",
                        }}
                      >
                        <span style={{ color: "#67D9EC", fontSize: "1.2rem", fontWeight: 700, lineHeight: "1.2" }}>→</span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>

                  <p
                    style={{
                      marginTop: "24px",
                      color: "#67D9EC",
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                    }}
                    onClick={() => router.push("/timeline")}
                  >
                    View full experience timeline →
                  </p>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>

        <ScrollFadeIn delay={200}>
          <footer
            style={{
              backgroundColor: "#16151a",
              borderRadius: "28px",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "50px 24px",
              marginTop: "100px",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            <p style={{ fontSize: "1.25rem", color: "#a0aec0", margin: "0 0 24px 0", fontWeight: 500 }}>
              Interested in collaborating or getting in touch?
            </p>

            {/* Toggle Switch */}
            <div
              style={{
                display: "inline-flex",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                padding: "6px",
                borderRadius: "50px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                marginBottom: "28px",
                gap: "8px",
              }}
            >
              <button
                type="button"
                onClick={() => setEmailTab("personal")}
                style={{
                  background: emailTab === "personal" ? "#67D9EC" : "transparent",
                  color: emailTab === "personal" ? "#1A191E" : "#a0aec0",
                  border: "none",
                  borderRadius: "40px",
                  padding: "10px 24px",
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: emailTab === "personal" ? "0 4px 18px rgba(103, 217, 236, 0.45)" : "none",
                }}
              >
                Personal Email
              </button>

              <button
                type="button"
                onClick={() => setEmailTab("school")}
                style={{
                  background: emailTab === "school" ? "#67D9EC" : "transparent",
                  color: emailTab === "school" ? "#1A191E" : "#a0aec0",
                  border: "none",
                  borderRadius: "40px",
                  padding: "10px 24px",
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: emailTab === "school" ? "0 4px 18px rgba(103, 217, 236, 0.45)" : "none",
                }}
              >
                School Email (UC Berkeley)
              </button>
            </div>

            {/* Email Address Display */}
            <div style={{ minHeight: "55px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {emailTab === "personal" ? (
                <div>
                  <span
                    style={{
                      display: "block",
                      color: "#67D9EC",
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      marginBottom: "6px",
                      fontWeight: 700,
                    }}
                  >
                    Primary Personal Address
                  </span>
                  <a
                    href="mailto:vinay23.rao@gmail.com"
                    style={{
                      color: "#ffffff",
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    className="email-link"
                  >
                    vinay23.rao@gmail.com
                  </a>
                </div>
              ) : (
                <div>
                  <span
                    style={{
                      display: "block",
                      color: "#67D9EC",
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      marginBottom: "6px",
                      fontWeight: 700,
                    }}
                  >
                    Official Student Address
                  </span>
                  <a
                    href="mailto:vinay23_rao@berkeley.edu"
                    style={{
                      color: "#ffffff",
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    className="email-link"
                  >
                    vinay23_rao@berkeley.edu
                  </a>
                </div>
              )}
            </div>
          </footer>
        </ScrollFadeIn>
      </div>
    </>
  );
};

export default Home;
