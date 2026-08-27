import { useRouter } from "next/router";
import { Navigation } from "../components/Navigation";
import navbar from "../data/navbar";
import projectsTabData from "../data/projectsTabData";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

const Projects = () => {
  const router = useRouter();

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
          <p
            style={{
              color: "#67D9EC",
              textAlign: "center",
              fontSize: "1.2rem",
              marginBottom: "40px",
            }}
          >
            A collection of software projects, applications, and research work I&apos;ve built.
          </p>
        </ScrollFadeIn>

        <div className="cards-grid">
          {projectsTabData.map((p, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 100}>
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
      </div>
    </div>
  );
};

export default Projects;
