import React, { useState } from "react";
import { useRouter } from "next/router";
import { Navigation } from "../components/Navigation";
import navbar from "../data/navbar";
import projectsTabData from "../data/projectsTabData";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

const Projects = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsTabData.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.src && p.src.toLowerCase().includes(q))
    );
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1A191E",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "60px",
      }}
    >
      <Navigation navbar={navbar} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", width: "100%" }}>
        <ScrollFadeIn>
          <h1 className="section-title">My Projects</h1>
          <p className="projects-subtitle">
            A collection of software projects, applications, and research work I&apos;ve built.
          </p>

          {/* Search Bar Container */}
          <div className="search-bar-wrap">
            <div className="search-input-container">
              <img
                src="/okk.png"
                alt="Search"
                className="search-icon-img"
                style={{
                  position: "absolute",
                  left: "18px",
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                  pointerEvents: "none",
                  opacity: 0.9,
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by title, description, or technology..."
                className="search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="search-clear-btn"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="search-count-label">
              Showing {filteredProjects.length} of {projectsTabData.length} projects
            </div>
          </div>
        </ScrollFadeIn>

        {filteredProjects.length === 0 ? (
          <div className="no-results-box">
            <h3>No projects found</h3>
            <p>No projects match &quot;{searchQuery}&quot;. Try searching for something else like &quot;React&quot;, &quot;Python&quot;, or &quot;AI&quot;.</p>
            <button className="pro-btn" onClick={() => setSearchQuery("")}>
              Clear Search
            </button>
          </div>
        ) : (
          <div className="cards-grid">
            {filteredProjects.map((p, idx) => (
              <ScrollFadeIn key={p.name} delay={(idx % 6) * 80}>
                <div
                  className="pro-card"
                  style={{ cursor: p.link ? "pointer" : "default", height: "100%" }}
                  onClick={() => p.link && window.open(p.link, "_blank")}
                >
                  <div>
                    <div className="pro-card-header">
                      <h3 className="pro-card-title">{p.name}</h3>
                      {p.src && (
                        <img
                          src={p.src}
                          alt={p.name}
                          className="pro-card-icon"
                          style={{ width: "36px", height: "36px", objectFit: "contain", borderRadius: "6px" }}
                        />
                      )}
                    </div>
                    <p className="pro-card-desc">{p.description}</p>
                  </div>
                  {p.link && (
                    <div className="pro-card-link">
                      <span>View Project Repository →</span>
                    </div>
                  )}
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .search-bar-wrap {
          margin: 30px 0 40px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .search-input-container {
          position: relative;
          width: 100%;
          max-width: 640px;
          display: flex;
          align-items: center;
        }

        .search-icon-svg {
          position: absolute;
          left: 18px;
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 14px 45px 14px 48px;
          background: rgba(12, 18, 26, 0.8);
          border: 1.5px solid rgba(103, 217, 236, 0.2);
          border-radius: 24px;
          color: #ffffff;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }

        .search-input:focus {
          border-color: #67d9ec;
          box-shadow: 0 0 20px rgba(103, 217, 236, 0.35);
          background: rgba(16, 25, 38, 0.95);
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }

        .search-clear-btn {
          position: absolute;
          right: 15px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #e2e8f0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.2s ease;
        }

        .search-clear-btn:hover {
          background: rgba(239, 68, 68, 0.6);
          color: white;
        }

        .search-count-label {
          font-family: 'Roboto Mono', monospace;
          font-size: 0.85rem;
          color: rgba(103, 217, 236, 0.8);
          letter-spacing: 0.5px;
        }

        .no-results-box {
          text-align: center;
          padding: 60px 20px;
          background: rgba(12, 18, 26, 0.8);
          border: 1px dashed rgba(103, 217, 236, 0.3);
          border-radius: 20px;
          margin-top: 20px;
          color: #e2e8f0;
        }

        .no-results-box h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #67d9ec;
        }

        .no-results-box p {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 24px;
        }
      `}</style>
    </div>
  );
};

export default Projects;
