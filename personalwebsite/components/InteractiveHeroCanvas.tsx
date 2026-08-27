import React, { useState, useRef, useEffect } from "react";

// Individual Draggable Item wrapper with Mouse & Touch support
const DraggableItem = ({
  children,
  initialPos,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  initialPos: { x: number; y: number };
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [pos, setPos] = useState(initialPos);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const elementStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setPos(initialPos);
  }, [initialPos.x, initialPos.y]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    elementStart.current = { ...pos };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      setIsDragging(true);
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      elementStart.current = { ...pos };
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setPos({
        x: elementStart.current.x + dx,
        y: elementStart.current.y + dy,
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length === 0) return;
      const dx = e.touches[0].clientX - dragStart.current.x;
      const dy = e.touches[0].clientY - dragStart.current.y;
      setPos({
        x: elementStart.current.x + dx,
        y: elementStart.current.y + dy,
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className={`draggable-shape ${isDragging ? "is-dragging" : ""} ${className}`}
      style={{
        position: "absolute",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        touchAction: "none",
        zIndex: isDragging ? 50 : 5,
        transform: isDragging ? "scale(1.08)" : "scale(1)",
        transition: isDragging ? "none" : "transform 0.3s ease, filter 0.3s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Sharp, Defined Isometric Cube Component
const CrispIsometricCube = ({
  size = 180,
  idSuffix = "1",
  topGradient = ["#fef08a", "#f59e0b", "#7c2d12"],
  leftColor = "#2a3245",
  rightColor = "#181d29",
  glow = false,
}: {
  size?: number;
  idSuffix?: string;
  topGradient?: string[];
  leftColor?: string;
  rightColor?: string;
  glow?: boolean;
}) => (
  <svg
    width={size}
    height={size * 1.15}
    viewBox="0 0 100 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: glow
        ? "drop-shadow(0 15px 35px rgba(217, 119, 6, 0.45)) drop-shadow(0 0 20px rgba(245, 158, 11, 0.3))"
        : "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.65))",
    }}
  >
    <defs>
      <linearGradient id={`crisp-top-${idSuffix}`} x1="0" y1="0" x2="100" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor={topGradient[0]} />
        <stop offset="50%" stopColor={topGradient[1]} />
        <stop offset="100%" stopColor={topGradient[2]} />
      </linearGradient>
    </defs>
    <path d="M50 5 L95 31 L50 57 L5 31 Z" fill={`url(#crisp-top-${idSuffix})`} />
    <path d="M5 31 L50 57 L50 109 L5 83 Z" fill={leftColor} />
    <path d="M50 57 L95 31 L95 83 L50 109 Z" fill={rightColor} />
  </svg>
);

// Sharp Tilted Brown Stick / Rod Component
const CrispTiltedStick = ({
  width = 45,
  height = 130,
  angle = 20,
}: {
  width?: number;
  height?: number;
  angle?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 45 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: `rotate(${angle}deg)`,
      filter: "drop-shadow(0 12px 28px rgba(0, 0, 0, 0.8))",
    }}
  >
    <defs>
      <linearGradient id={`crisp-stick-${angle}`} x1="0" y1="0" x2="45" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ea580c" />
        <stop offset="50%" stopColor="#9a3412" />
        <stop offset="100%" stopColor="#270e04" />
      </linearGradient>
    </defs>
    <path
      d="M4 12 L4 118 C4 124 13 130 22.5 130 C32 130 41 124 41 118 L41 12 Z"
      fill={`url(#crisp-stick-${angle})`}
    />
    <ellipse cx="22.5" cy="12" rx="18.5" ry="10" fill="#f97316" />
  </svg>
);

// Sharp Shaded Cylinder Component
const CrispCylinder = ({
  width = 80,
  height = 130,
  topColor = "#374151",
  bodyColor = "#111827",
}: {
  width?: number;
  height?: number;
  topColor?: string;
  bodyColor?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 80 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: "drop-shadow(0 12px 30px rgba(0, 0, 0, 0.7))",
    }}
  >
    <defs>
      <linearGradient id={`crisp-cyl-${width}`} x1="0" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6b7280" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#1f2937" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <path
      d="M0 25 L0 115 C0 128.8 17.9 140 40 140 C62.1 140 80 128.8 80 115 L80 25 Z"
      fill={bodyColor}
    />
    <path
      d="M0 25 L0 115 C0 128.8 17.9 140 40 140 C62.1 140 80 128.8 80 115 L80 25 Z"
      fill={`url(#crisp-cyl-${width})`}
    />
    <ellipse cx="40" cy="25" rx="40" ry="25" fill={topColor} />
  </svg>
);

// Sharp Glowing Orb Component
const CrispGlowingOrb = ({ size = 22, color = "#fef08a" }: { size?: number; color?: string }) => (
  <div
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      background: `radial-gradient(circle, #ffffff 20%, ${color} 50%, #f59e0b 85%, rgba(245, 158, 11, 0) 100%)`,
      boxShadow: "0 0 20px 8px rgba(251, 191, 36, 0.95), 0 0 40px 14px rgba(245, 158, 11, 0.7)",
      animation: "pulseGlow 2.5s infinite alternate ease-in-out",
    }}
  />
);

export const InteractiveHeroCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 700 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const w = dimensions.width;
  const h = dimensions.height;

  // Clustered initial positions around center
  const centerX = w * 0.47;
  const centerY = h * 0.35;

  const shapePositions = {
    topCube: { x: centerX - 120, y: centerY - 90 },
    mainCube: { x: centerX - 45, y: centerY - 25 },
    topStick: { x: centerX + 115, y: centerY - 65 },
    orb: { x: centerX + 45, y: centerY - 38 },
    smallNodeRight: { x: centerX + 180, y: centerY - 20 },
    smallNodeLeft: { x: centerX - 180, y: centerY + 40 },
    bottomStick: { x: centerX - 35, y: centerY + 160 },
    bottomCube: { x: centerX + 25, y: centerY + 140 },
    cylinderLeft: { x: centerX - 140, y: centerY + 120 },
    cylinderRight: { x: centerX + 140, y: centerY + 80 },
    miniCubeTop: { x: centerX + 15, y: centerY - 140 },
    miniCubeBottom: { x: centerX - 110, y: centerY + 220 },
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "auto",
        backgroundColor: "#1A191E",
        zIndex: 0,
      }}
    >
      {/* 1. Far Top Mini Cube */}
      <DraggableItem initialPos={shapePositions.miniCubeTop} className="float-anim-1">
        <CrispIsometricCube size={85} idSuffix="mini1" topGradient={["#fef08a", "#b45309", "#451a03"]} />
      </DraggableItem>

      {/* 2. Top-Left Cube */}
      <DraggableItem initialPos={shapePositions.topCube} className="float-anim-1">
        <CrispIsometricCube size={145} idSuffix="top1" topGradient={["#fbbf24", "#b45309", "#451a03"]} />
      </DraggableItem>

      {/* 3. Top-Right Tilted Brown Stick */}
      <DraggableItem initialPos={shapePositions.topStick} className="float-anim-3">
        <CrispTiltedStick width={42} height={125} angle={24} />
      </DraggableItem>

      {/* 4. Main Center Glowing Cube */}
      <DraggableItem initialPos={shapePositions.mainCube} className="float-anim-2">
        <CrispIsometricCube size={195} idSuffix="main" glow={true} />
      </DraggableItem>

      {/* 5. Glowing Warm Apex Orb */}
      <DraggableItem initialPos={shapePositions.orb} className="float-anim-orb">
        <CrispGlowingOrb size={22} color="#fef08a" />
      </DraggableItem>

      {/* 6. Right Side Cyan Glowing Node */}
      <DraggableItem initialPos={shapePositions.smallNodeRight} className="float-anim-3">
        <CrispGlowingOrb size={16} color="#67d9ec" />
      </DraggableItem>

      {/* 7. Left Side Pink Glowing Node */}
      <DraggableItem initialPos={shapePositions.smallNodeLeft} className="float-anim-2">
        <CrispGlowingOrb size={18} color="#e1068c" />
      </DraggableItem>

      {/* 8. Left Side Cylinder */}
      <DraggableItem initialPos={shapePositions.cylinderLeft} className="float-anim-1">
        <CrispCylinder width={60} height={110} />
      </DraggableItem>

      {/* 9. Right Side Cylinder */}
      <DraggableItem initialPos={shapePositions.cylinderRight} className="float-anim-3">
        <CrispCylinder width={70} height={125} />
      </DraggableItem>

      {/* 10. Bottom Tilted Brown Stick */}
      <DraggableItem initialPos={shapePositions.bottomStick} className="float-anim-1">
        <CrispTiltedStick width={38} height={115} angle={-32} />
      </DraggableItem>

      {/* 11. Bottom-Right Dark Cube */}
      <DraggableItem initialPos={shapePositions.bottomCube} className="float-anim-2">
        <CrispIsometricCube size={155} idSuffix="bot1" topGradient={["#334155", "#1e293b", "#0f172a"]} />
      </DraggableItem>

      {/* 12. Bottom-Left Mini Cube */}
      <DraggableItem initialPos={shapePositions.miniCubeBottom} className="float-anim-3">
        <CrispIsometricCube size={95} idSuffix="mini2" topGradient={["#64748b", "#1e293b", "#0f172a"]} />
      </DraggableItem>
    </div>
  );
};
