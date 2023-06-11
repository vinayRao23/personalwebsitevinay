import React from "react";
import { Navigation } from "../components/Navigation";
import { navbar } from "./data/navbar";
import { traits } from "./data/traits";

const about = () => {
  return (
    <div
      style={{
        backgroundColor: "#1A191E",
        height: "240vw",
      }}
    >
      <div
        style={{
          position: "relative",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          display: "flex",
        }}
      >
        <Navigation navbar={navbar} />
      </div>
      <div
        style={{
          alignItems: "flex-start",
          justifyContent: "flex-start",
          display: "flex",
          marginLeft: 400,
          marginTop: 50,
        }}
      >
        <img
          src="/pfp.jpeg"
          style={{
            width: 450,
            height: 600,
            borderRadius: 400,
            zIndex: 200,
            border: "5px solid #67D9EC",
          }}
          alt=""
          className="pfp"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 100,
            marginTop: 30,
          }}
        >
          <h1
            style={{
              color: "#fff",
              zIndex: 200,
              display: "inline-block",
              marginTop: 0,
              textAlign: "left",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4vw",
              fontFamily: "'Roboto Condensed', sans-serif",
              letterSpacing: 5,
              width: "100%",
            }}
          >
            I'm Vinay.
          </h1>
          <p
            style={{
              color: "#67D9EC",
              maxWidth: 650,
              textAlign: "left",
              fontSize: 20,
              marginTop: -30,
              fontFamily: "'Roboto Condensed', sans-serif",
            }}
          >
            I am a highschool student currently attending Dougherty Valley High,
            in California. I started coding during the COVID pandemic, and
            instantly loved it. My goal as a programmer is to have fun, and
            build apps for people all across the world to use. In my free time,
            my favorite hobbies include listening to music, playing basketball
            with my brothers, and trying new foods.
          </p>
          <p
            style={{
              color: "#67D9EC",
              maxWidth: 650,
              textAlign: "left",
              fontSize: 20,
              marginTop: 10,
              fontFamily: "'Roboto Condensed', sans-serif",
            }}
          >
            In terms of programming, my favorite coding language is Typescript,
            and my favorite type of development is definetely web development.
            Throughout the next years of my life my goal is to explore AI and
            machine learning.
          </p>
          <p
            style={{
              color: "#67D9EC",
              maxWidth: 800,
              textAlign: "left",
              fontSize: 20,
              marginTop: 10,
              fontFamily: "'Roboto Condensed', sans-serif",
            }}
          >
            If this is your first time on my website, check out who I am down
            below!
          </p>
        </div>
      </div>
      <div
        className="gridlayout"
        style={{ overflowY: "hidden", marginTop: 100 }}
      >
        {traits.map((t) => (
          <div
            style={{
              overflowX: "hidden",
              backgroundColor: "#310880",
              opacity: 0.8,
            }}
          >
            <div className="griditem">
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  width: "100vw",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40vw",
                  }}
                >
                  <div className="number" style={{ color: "#fff" }}>
                    {t.id}
                  </div>
                  <h3
                    style={{
                      color: "#fff",
                      fontFamily: "'Roboto Condensed', sans-serif",
                      fontSize: "2vw",
                    }}
                  >
                    {t.name}
                  </h3>
                  <p
                    className="description"
                    style={{
                      maxWidth: "30vw",
                      color: "#fff",
                      fontFamily: "'Roboto Condensed', sans-serif",
                    }}
                  >
                    {t.description}
                  </p>
                </div>
                <img
                  src={t.img}
                  style={{
                    width: 400,
                    height: 600,
                    borderRadius: 25,
                    marginLeft: 20,
                    border: "5px solid #fff",
                    objectFit: "cover",
                  }}
                  className="about"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default about;
