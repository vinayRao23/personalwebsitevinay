import { Navigation } from "../components/Navigation";
import navbar from "../data/navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import timelineData from "../data/timeline";

const Timeline = () => {
  return (
    <div
      style={{
        height: "100%",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          className="gradient"
          style={{
            color: "#fff",
            zIndex: 200,
            fontFamily: "'Roboto Condensed', sans-serif",
            fontSize: "3vw",
          }}
        >
          My Timeline
        </h1>
        <p
          style={{
            color: "#67D9EC",
            maxWidth: 700,
            textAlign: "center",
            fontSize: "1vw",
            fontFamily: "'Roboto Condensed', sans-serif",
          }}
        >
          All of my experience and projects that I have developed so far. Scroll
          below to see how it all happened. My story is still in progress...
        </p>
      </div>
      <div
        className="animatein"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 0,
        }}
      >
        <VerticalTimeline>
          {timelineData.map((t, idx) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#310880", opacity: 0.8 }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date={t.date}
              iconStyle={{
                background: "#310880",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.9,
              }}
              icon={<i className={t.icon} />}
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                color: "#fff",
              }}
              key={idx}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
              >
                {t.name}
              </h3>

              <p
                style={{
                  color: "#A9C3B9",
                  fontFamily: "'Roboto Condensed', sans-serif",
                }}
              >
                {t.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
