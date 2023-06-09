import type { NextPage } from "next";
import { navbar } from "./data/navbar";
import Typed from "react-typed";
import Lottie from "lottie-react";
import loader from "../public/loader.json";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const options = {
    animationData: loader,
  };
  const [showTransition, setShowTransition] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    const show = localStorage.getItem("showContent");
    setTimeout(() => {
      if (!show) setShowTransition(true);
    }, 5500);
  }, []);

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
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "#141A25",
          overflowY: "hidden",
          zIndex: showContent ? -200 : 200,
          height: "100vh",
          position: "absolute",
          width: "100vw",
          flexDirection: "column",
        }}
        className={startAnimation ? "fadeoutLeft" : ""}
      >
        <Lottie
          loop={false}
          animationData={loader}
          style={{
            width: "100%",
            height: "100vh",
          }}
        />
      </div>
      <div style={{ height: "100vh", backgroundColor: "#131D25", zIndex: -1 }}>
        <nav
          style={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            height: "10vh",
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
        <img
          src="/bg.png"
          alt=""
          style={{ position: "absolute", zIndex: 1, zoom: 1, marginTop: 50 }}
          className="center"
        />
        <h1
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            marginTop: -20,
            fontSize: "12vw",
            color: "#fff",
            fontFamily: "'Roboto Condensed', sans-serif",
            letterSpacing: 5,
            position: "absolute",
            width: "100%",
            textTransform: "uppercase",
            zIndex: 1,
          }}
          className="center"
        >
          Vinay Rao
        </h1>
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            marginTop: 470,
            fontSize: "1.5vw",
            color: "#fff",
            fontFamily: "'Roboto Condensed', sans-serif",
            position: "absolute",
            width: "100%",
            textTransform: "uppercase",
            zIndex: 1,
          }}
        >
          <Typed
            strings={[
              "Full Stack Developer.",
              "Highschool Student.",
              "Music Enthusiast.",
            ]}
            className="gradient"
            typeSpeed={75}
            backSpeed={70}
            loop
            style={{ color: "#67D9EC" }}
          />
        </p>
      </div>
    </>
  );
};

export default Home;
