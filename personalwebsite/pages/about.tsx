import React from "react";
import { Navigation } from "../components/Navigation";
import navbar from "../data/navbar";
import traits from "../data/traits";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

const TraitCard = ({ t, idx }: { t: any; idx: number }) => {
  const isEven = idx % 2 === 0;
  return (
    <div className="trait-card">
      {t.img && !isEven && (
        <div className="trait-card-img-wrapper">
          <img
            src={t.img}
            alt={t.name}
            className="trait-card-img"
            style={{
              objectPosition: t.objectPosition || "center",
            }}
          />
        </div>
      )}

      <div className="trait-card-body">
        <span className="trait-id">{t.id}</span>
        <h3 className="trait-name">{t.name}</h3>
        <p className="trait-desc">{t.description}</p>
      </div>

      {t.img && isEven && (
        <div className="trait-card-img-wrapper">
          <img
            src={t.img}
            alt={t.name}
            className="trait-card-img"
            style={{
              objectPosition: t.objectPosition || "center",
            }}
          />
        </div>
      )}
    </div>
  );
};

const About = () => {
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
                My primary technical focus areas include Full-Stack Web Development (TypeScript, Next.js, React, Node.js), Mobile App Development (SwiftUI, React Native), Cloud Infrastructure (AWS, Azure, GCP, Firebase, Supabase), and LLM / AI Systems Research.
              </p>
              <p className="profile-bio-secondary">
                Outside of engineering, I enjoy listening to music, playing basketball, mentoring aspiring programmers, and exploring new culinary spots.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        <div className="traits-section-wrap">
          <h2 className="section-title">What Defines Me</h2>
          
          <div className="traits-grid">
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
