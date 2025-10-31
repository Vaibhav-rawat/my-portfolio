"use client";
import React, { useEffect, useState } from "react";
import { Coolshape } from "coolshapes-react";

const shapes = [
  { name: "star", count: 13 },
  { name: "polygon", count: 8 },
  { name: "flower", count: 16 },
  { name: "wheel", count: 7 },
] as const;

type ShapeType = (typeof shapes)[number]["name"];

interface ShapePosition {
  x: number;
  y: number;
  type: ShapeType;
  index: number;
}

const RandomShapes: React.FC = () => {
  const [positions, setPositions] = useState<ShapePosition[]>([]);
  const shapeSize = 80; // approximate bounding box of each shape
  const minDistance = 100; // minimum distance between shapes (tweak this)

  const generatePositions = () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.scrollHeight;
    const newShapes: ShapePosition[] = [];

    const isOverlapping = (x: number, y: number) => {
      return newShapes.some(
        (shape) => Math.hypot(shape.x - x, shape.y - y) < minDistance // Euclidean distance check
      );
    };

    let safetyCounter = 0;
    while (newShapes.length < 20 && safetyCounter < 1000) {
      safetyCounter++;
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const x = Math.random() * (width - shapeSize);
      const y = Math.random() * (height - shapeSize);

      if (!isOverlapping(x, y)) {
        newShapes.push({
          x,
          y,
          type: shape.name,
          index: Math.floor(Math.random() * shape.count),
        });
      }
    }

    setPositions(newShapes);
  };

  useEffect(() => {
    generatePositions();
    window.addEventListener("resize", generatePositions);
    return () => window.removeEventListener("resize", generatePositions);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {positions.map((shape, i) => (
        <div
          key={i}
          style={{
            left: `${shape.x}px`,
            top: `${shape.y}px`,
          }}
          className="cool-shape"
        >
          <Coolshape
            type={shape.type}
            index={shape.index}
            size={60}
            noise={true}
          />
        </div>
      ))}
    </div>
  );
};

export default RandomShapes;
