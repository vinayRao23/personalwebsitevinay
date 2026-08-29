import React, { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  duration = 2400,
}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const nameLetters = "VINAY RAO".split("");

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, duration - 400);

    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  return (
    <div className={`splash-container ${isFadingOut ? "splash-fade-out" : ""}`}>
      <div className="splash-content">
        {/* Main Name Animation */}
        <h1 className="splash-name">
          {nameLetters.map((char, i) => (
            <span
              key={i}
              className="splash-letter"
              style={{
                animationDelay: `${0.15 + i * 0.08}s`,
                marginRight: char === " " ? "0.4em" : "0.02em",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

      <style jsx>{`
        .splash-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #000000;
          background: #000000;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), filter 0.5s ease;
          opacity: 1;
          transform: scale(1);
          filter: blur(0px);
        }

        .splash-fade-out {
          opacity: 0;
          transform: scale(1.05);
          filter: blur(8px);
          pointer-events: none;
        }

        .splash-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 20px;
          max-width: 800px;
        }

        .splash-name {
          font-size: clamp(3rem, 10vw, 6rem);
          font-weight: 800;
          letter-spacing: 0.14em;
          line-height: 1.1;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .splash-letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(40px) scale(0.9);
          filter: blur(12px);
          background: linear-gradient(135deg, #ffffff 20%, #67d9ec 65%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 30px rgba(103, 217, 236, 0.3);
          animation: revealLetter 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
        }

        @keyframes revealLetter {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
};
