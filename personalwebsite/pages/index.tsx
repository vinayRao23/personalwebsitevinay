import type { NextPage } from "next";
import { navbar } from "./data/navbar";

const Home: NextPage = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#131D25" }}>
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
          zIndex: 2000,
          position: "absolute",
          width: "100%",
        }}
        className="center"
      >
        Vinay Rao
      </h1>
    </div>
  );
};

export default Home;
