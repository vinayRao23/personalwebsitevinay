import type { NextPage } from "next";
import { navbar } from "./data/navbar";
import Typed from "react-typed";
import Lottie from "lottie-react";
import loader from "../public/loader.json";
import { useEffect, useState } from "react";
import { homePageProjects } from "./data/homepageprojects";

const Home: NextPage = () => {
  const options = {
    animationData: loader,
  };
  const [showTransition, setShowTransition] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  setTimeout(() => {
    setShowContent(true);
  }, 5000);

  setTimeout(() => {
    setStartAnimation(true);
  }, 3000);

  return (
    <>
      <div
        style={{
          backgroundImage: "url(/bg.png)",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {!showContent && (
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              backgroundColor: "#081A26",
              overflowY: "hidden",
              flexDirection: "column",
              position: "absolute",
              width: "100vw",
              height: "100vh",
              zIndex: 200,
            }}
            className={startAnimation ? "center fadeoutLeft" : "center"}
          >
            <Lottie
              loop={false}
              animationData={loader}
              style={{
                width: "100vw",
                height: "100vh",
              }}
            />
          </div>
        )}
        <div>
          <nav
            style={{
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div>
              <div>
                <div>
                  <ul>
                    {navbar.map((n) => (
                      <li style={{ color: "#000" }}>
                        <a
                          href=""
                          style={{
                            color: "#000",
                            margin: 20,
                            fontFamily: "'Roboto Condensed', sans-serif",
                          }}
                        >
                          / /
                          <p style={{ position: "relative", left: "20%" }}>
                            {n.tab}
                            <sup
                              style={{
                                color: "#fff",
                                fontSize: "1rem",
                                marginLeft: 5,
                                marginTop: -20,
                              }}
                            >
                              {n.number}
                            </sup>
                          </p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <h1
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            fontSize: "12vw",
            color: "#fff",
            fontFamily: "'Roboto Condensed', sans-serif",
            letterSpacing: 5,
            width: "100%",
            textTransform: "uppercase",
            zIndex: 1,
          }}
        >
          Vinay Rao
        </h1>
        <Typed
          strings={[
            "Full Stack Developer.",
            "Highschool Student.",
            "Music Enthusiast.",
          ]}
          typeSpeed={75}
          backSpeed={70}
          loop
          style={{
            color: "#67D9EC",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            fontSize: "2vw",
            fontFamily: "'Roboto Condensed', sans-serif",
            width: "100%",
            textTransform: "uppercase",
            zIndex: 1,
            top: -140,
            position: "relative",
          }}
        />
      </div>
      <div
        style={{
          width: "100vw",
          backgroundColor: "#1A191E",
          height: "100%",
          overflow: "hidden",
          marginTop: -10,
          display: showContent ? "" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "10vw",
              color: "#fff",
              fontFamily: "'Roboto Condensed', sans-serif",
              letterSpacing: 5,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            My Projects
          </h1>
          <div className="container" style={{ width: "100%" }}>
            <div className="gradient-cards">
              {homePageProjects.map((p) => (
                <div
                  className="card"
                  style={{ zIndex: 200, backgroundColor: "#1A191D" }}
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
          <button
            style={{
              marginTop: 20,
              backgroundColor: "#E1068C",
              border: "2px solid #E1068C",
              height: 70,
              width: 350,
              fontSize: 35,
              borderRadius: 100,
              fontFamily: "'Roboto Condensed', sans-serif",
              cursor: "pointer",
            }}
          >
            More Projects <i className="fa fa-arrow-right" />
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Home;
