import type { NextPage } from "next";
import navbar from "../data/navbar";
import Typed from "react-typed";
import Lottie from "lottie-react";
import loader from "../public/loader.json";
import languages from "../public/languages.json";
import { useState } from "react";
import homePageProjects from "../data/homePageProjects";
import experience from "../data/experience";
import { useRouter } from "next/router";
import { Navigation } from "../components/Navigation";

const Home: NextPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const router = useRouter();

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
          <Navigation navbar={navbar} />
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
              {homePageProjects.map((p, idx) => (
                <div
                  className="card"
                  style={{ zIndex: 200, backgroundColor: "#1A191D" }}
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
            onClick={() => router.push("/projects")}
          >
            More Projects <i className="fa fa-arrow-right" />
          </button>
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
              My Experience
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",

                marginTop: 20,
              }}
            >
              <div
                style={{
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  marginRight: -200,
                }}
              >
                <Lottie
                  animationData={languages}
                  style={{
                    width: "60%",
                    height: "60%",
                    position: "relative",
                    left: 100,
                  }}
                />
              </div>
              <div
                style={{
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  display: "flex",
                  position: "relative",
                  flexDirection: "column",
                  right: 100,
                  bottom: 50,
                }}
              >
                <h1
                  style={{
                    fontSize: "5vw",
                    color: "#fff",
                    fontFamily: "'Roboto Condensed', sans-serif",
                    letterSpacing: 5,
                    textTransform: "uppercase",
                  }}
                >
                  Knowledge In...
                </h1>
                <ul
                  style={{
                    listStyleType: "circle",
                    maxWidth: 700,
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                    position: "relative",
                    left: 60,
                    marginTop: -20,
                  }}
                >
                  {experience.map((e, idx) => (
                    <div style={{ display: "flex" }} key={idx}>
                      <li
                        style={{
                          color: "#fff",
                          fontSize: 23,
                          listStyleType: "circle",
                          marginBottom: 20,
                          fontFamily: "'Roboto Condensed', sans-serif",
                        }}
                      >
                        {e}
                      </li>
                    </div>
                  ))}
                  <p
                    style={{
                      marginTop: 0,
                      color: "#67D9EC",
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontFamily: "'Roboto Condensed', sans-serif",
                    }}
                    onClick={() => router.push("/timeline")}
                  >
                    View more in timeline
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <footer
            style={{
              backgroundColor: "#692A99",
              width: "100%",
              marginTop: 200,
              height: "35vh",
            }}
          >
            <section className="footer__top">
              <div
                className="footer__inner"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  className="text--small"
                  style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
                >
                  Want to get in touch?
                </p>
                <h2
                  className="section__title"
                  style={{
                    width: 500,
                    marginTop: 10,
                  }}
                >
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLPsFFcMKrKkxjfGmTksMKRMwxTwXlGnFLQFBdgDjHSQrBDzNFkmBLmgMzjrJbKllzQDfr"
                    className="email"
                  >
                    Email me here
                  </a>
                </h2>
              </div>
            </section>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
