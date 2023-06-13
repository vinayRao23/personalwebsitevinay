import { useRouter } from "next/router";
import { Navigation } from "../components/Navigation";
import navbar from "../data/navbar";
import projectsTabData from "../data/projectsTabData";

const Projects = () => {
  const router = useRouter();

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#1A191E",
        overflowY: "scroll",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navigation navbar={navbar} />
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          className="gradient"
          style={{
            color: "#fff",
            zIndex: 200,
            fontFamily: "'Roboto Condensed', sans-serif",
            fontSize: "3.5vw",
          }}
        >
          My Projects
        </h1>
        <p
          style={{
            color: "#67D9EC",
            maxWidth: 700,
            textAlign: "center",
            fontSize: "1vw",
            fontFamily: "'Roboto Condensed', sans-serif",
            marginTop: -20,
          }}
        >
          Here are some of the projects I&apos;ve made over the years...
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            margin: 20,
            alignItems: "center",
          }}
        >
          {projectsTabData.map((p, idx) => (
            <div
              className="card"
              style={{
                zIndex: 200,
                backgroundColor: "#1A191D",
                marginTop: 50,
                marginLeft: 50,
                marginRight: 50,
              }}
              onClick={() => router.push(p.link)}
              key={idx}
            >
              <div className="container-card bg-green-box">
                <p
                  className="card-title"
                  style={{
                    fontFamily: "'Roboto Condensed', sans-serif",
                    textTransform: "uppercase",
                    borderBottom: "2px solid #E1068C",
                    marginBottom: 5,
                  }}
                >
                  {p.name}
                </p>
                <img
                  src={p.src}
                  alt=""
                  style={{
                    position: "absolute",
                    width: 50,
                    height: 50,
                    top: 20,
                    right: 20,
                  }}
                />
                <div style={{ zIndex: 200 }}>
                  <p
                    className="card-description"
                    style={{
                      color: "#fff",
                      fontFamily: "'Roboto Condensed', sans-serif",
                      maxWidth: "100%",
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
