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

        <div className="hero-content-wrap">
          <ScrollFadeIn>
            <h1 className="hero-title">Vinay Rao</h1>
            <div className="typed-text-wrap">
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
                className="hero-typed-text"
              />
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      <div
        className="home-sections-wrap"
        style={{
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

          <div className="tech-exp-section">
            <ScrollFadeIn>
              <h2 className="section-title">Technical Experience</h2>
            </ScrollFadeIn>

            <div className="tech-exp-container">
              <ScrollFadeIn delay={100} className="tech-exp-lottie-col">
                <div style={{ width: "100%", margin: "0 auto" }}>
                  <Lottie
                    animationData={languages}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn delay={150} className="tech-exp-text-col">
                <div>
                  <h3 className="tech-exp-title">
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
          <footer className="footer-container">
            <p className="footer-subtitle">
              Interested in collaborating or getting in touch?
            </p>

            {/* Toggle Switch */}
            <div className="email-toggle-container">
              <button
                type="button"
                onClick={() => setEmailTab("personal")}
                className={`email-toggle-btn ${emailTab === "personal" ? "active" : ""}`}
              >
                Personal Email
              </button>

              <button
                type="button"
                onClick={() => setEmailTab("school")}
                className={`email-toggle-btn ${emailTab === "school" ? "active" : ""}`}
              >
                School Email (UC Berkeley)
              </button>
            </div>

            {/* Email Address Display */}
            <div className="email-display-container">
              {emailTab === "personal" ? (
                <div>
                  <span className="email-label">
                    Primary Personal Address
                  </span>
                  <a
                    href="mailto:vinay23.rao@gmail.com"
                    className="email-link"
                  >
                    vinay23.rao@gmail.com
                  </a>
                </div>
              ) : (
                <div>
                  <span className="email-label">
                    Official Student Address
                  </span>
                  <a
                    href="mailto:vinay23_rao@berkeley.edu"
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
