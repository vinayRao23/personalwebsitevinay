interface IProps {
  navbar: Array<{ number: string; tab: string; route: string }>;
}

export const Navigation = ({ navbar }: IProps) => {
  return (
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
                    href={n.route}
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
  );
};
