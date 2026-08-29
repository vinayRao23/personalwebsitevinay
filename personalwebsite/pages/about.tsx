import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import navbar from "../data/navbar";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

const filterCategories = ["All", "Languages", "Frameworks & Libraries", "Cloud"];

const allSkills = [
  { name: "Python", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "C / C++", category: "Languages" },
  { name: "Swift", category: "Languages" },
  { name: "SQL", category: "Languages" },

  { name: "Next.js", category: "Frameworks & Libraries" },
  { name: "React", category: "Frameworks & Libraries" },
  { name: "React Native", category: "Frameworks & Libraries" },
  { name: "SwiftUI", category: "Frameworks & Libraries" },
  { name: "Node.js", category: "Frameworks & Libraries" },
  { name: "GraphQL", category: "Frameworks & Libraries" },
  { name: "CoreML", category: "Frameworks & Libraries" },

  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Firebase", category: "Cloud" },
  { name: "Supabase", category: "Cloud" },
  { name: "PostgreSQL", category: "Cloud" },
  { name: "LLM & AI Research", category: "Cloud" },
];

const galleryPhotos = [
  { id: 1, image: "/1.jpg" },
  { id: 2, image: "/2.jpg" },
  { id: 3, image: "/4.jpg" },
  { id: 4, image: "/5.jpg" },
];

const About = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const displayedSkills =
    activeFilter === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeFilter);

  return (
    <div className="page-wrapper">
      <Navigation navbar={navbar} />
      
      <div className="page-container">
        <ScrollFadeIn>
          <div className="profile-header-wrap">
            <div className="profile-img-col">
              <img
                src="/3.jpg"
                alt="Vinay Rao Profile"
                className="pfp profile-img"
              />
            </div>

            <div className="profile-text-col">
              <h1 className="title-hover profile-title">
                I&apos;m Vinay.
              </h1>
              <p className="profile-bio-highlight">
                I am a Student at UC Berkeley studying EECS.
                I started coding during the COVID pandemic and instantly loved it. My goal as a software engineer is to build impactful applications and research cutting-edge AI technology for people all across the world.
              </p>
              <p className="profile-bio-primary">
                My primary technical focus areas span Full-Stack Web Development, Mobile App Development, Cloud Infrastructure, and LLM / AI Systems Research.
              </p>
              <p className="profile-bio-secondary">
                Outside of engineering, I enjoy listening to music, playing basketball, mentoring aspiring programmers, and exploring new culinary spots.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Skills & Technologies Section */}
        <div className="skills-section-wrap">
          <ScrollFadeIn>
            <h2 className="section-title">Skills &amp; Technologies</h2>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            {/* Single Unified Skills Rectangle Box */}
            <div className="skills-main-box">
              {/* Filter Tabs Header */}
              <div className="skills-filter-wrap">
                <span className="skills-filter-label">Filter by type:</span>
                <div className="skills-filter-bar">
                  {filterCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveFilter(cat)}
                      className={`skills-filter-btn ${activeFilter === cat ? "active" : ""}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills Cards Grid */}
              <div className="skills-grid">
                {displayedSkills.map((s, idx) => (
                  <div key={idx} className="skill-card">
                    <span className="skill-dot"></span>
                    <span className="skill-name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Photo Gallery Section */}
        <div className="gallery-section-wrap">
          <ScrollFadeIn>
            <h2 className="section-title">Photo Gallery</h2>
          </ScrollFadeIn>

          <div className="gallery-grid">
            {galleryPhotos.map((photo, idx) => (
              <ScrollFadeIn key={idx} delay={(idx % 4) * 100}>
                <div
                  className="gallery-card"
                  onClick={() => setSelectedPhoto(photo.image)}
                >
                  <img
                    src={photo.image}
                    alt={`Gallery Photo ${photo.id}`}
                    className="gallery-img"
                  />
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-backdrop" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selectedPhoto}
              alt="Enlarged photo"
              className="lightbox-img"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .skills-section-wrap {
          margin: 60px 0;
        }

        .skills-subtitle {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
          margin-top: -20px;
          margin-bottom: 40px;
        }

        .skills-main-box {
          background: linear-gradient(180deg, rgba(14, 20, 28, 0.85) 0%, rgba(8, 12, 18, 0.95) 100%);
          border: 1.5px solid rgba(103, 217, 236, 0.18);
          border-radius: 28px;
          padding: 36px 40px;
          backdrop-filter: blur(14px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .skills-filter-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .skills-filter-label {
          font-family: 'Roboto Mono', monospace;
          font-size: 0.85rem;
          color: rgba(103, 217, 236, 0.85);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .skills-filter-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skills-filter-btn {
          padding: 8px 18px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          outline: none;
        }

        .skills-filter-btn:hover {
          background: rgba(103, 217, 236, 0.15);
          color: #67d9ec;
          border-color: #67d9ec;
          box-shadow: 0 0 16px rgba(103, 217, 236, 0.5) !important;
        }

        .skills-filter-btn.active {
          background: #67d9ec;
          color: #060d14;
          border-color: #67d9ec;
          box-shadow: 0 0 16px rgba(103, 217, 236, 0.5) !important;
          font-weight: 700;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .skill-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 22px;
          background: rgba(6, 14, 22, 0.75);
          border: 1.5px solid rgba(103, 217, 236, 0.2);
          border-radius: 20px;
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 600;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
        }

        .skill-card:hover {
          transform: translateY(-3px);
          border-color: #67d9ec;
          background: rgba(13, 28, 42, 0.9);
          box-shadow: 0 8px 24px rgba(103, 217, 236, 0.35);
          color: #67d9ec;
        }

        .skill-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #67d9ec;
          box-shadow: 0 0 8px #67d9ec;
          flex-shrink: 0;
          display: inline-block;
        }

        .skill-name {
          letter-spacing: 0.3px;
        }

        /* Photo Gallery Styling */
        .gallery-section-wrap {
          margin: 70px 0 40px 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          align-items: center;
        }

        .gallery-card {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: transparent;
          border: none;
          box-shadow: none;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .gallery-card:hover {
          transform: translateY(-6px);
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          border: none;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.04);
          box-shadow: 0 16px 36px rgba(103, 217, 236, 0.35);
        }

        /* Lightbox Modal */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(12px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease;
        }

        .lightbox-content {
          position: relative;
          background: rgba(9, 18, 26, 0.95);
          border: 1.5px solid rgba(103, 217, 236, 0.3);
          border-radius: 24px;
          max-width: 90vw;
          max-height: 85vh;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .lightbox-close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.1rem;
          z-index: 20;
          transition: all 0.2s ease;
        }

        .lightbox-close-btn:hover {
          background: rgba(239, 68, 68, 0.8);
          border-color: transparent;
        }

        .lightbox-img {
          max-width: 85vw;
          max-height: 78vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 14px;
        }

        @media (max-width: 768px) {
          .skills-main-box {
            padding: 24px 20px;
          }
          .skills-filter-wrap {
            flex-direction: column;
            align-items: flex-start;
          }
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-card {
            height: 320px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
