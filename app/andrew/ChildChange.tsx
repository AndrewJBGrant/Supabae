"use client";

import ColorNav from "../ColorNav";
import { ColorContext } from "../colorContext";
import { MyComponent } from "./MyComponent";
import { useState, useEffect } from "react";

// export type ThemeContextType = "bg-teal-500" | "bg-purple-600" | "bg-yellow-600";

export type ColorContextType =
  | "bg-teal-500"
  | "bg-purple-600"
  | "bg-yellow-600";

export interface Color {
  color: string;
}

const defaultColor = "bg-teal-500";

const getInitialState = () => {
  if (typeof window !== "undefined") {
    const color = localStorage.getItem("color");
    return color ? JSON.parse(color) : defaultColor;
  }
};

const ChildChange = () => {
  const [color, setColor] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("color", JSON.stringify(color));
  }, [color]);

  return (
    <ColorContext.Provider value={color}>
      <MyComponent />
      <ColorNav />

      <h2>State:{color}</h2>

      <div className={`flex flex-col font-extrabold ${color}`}>
        <button
          onClick={() => {
            setColor("bg-teal-500");
          }}
        >
          Happy 😆
        </button>

        <button
          onClick={() => {
            setColor("bg-purple-600");
          }}
        >
          Angry 😡
        </button>

        <button
          onClick={() => {
            setColor("bg-yellow-600");
          }}
        >
          Sad 🥲
        </button>
      </div>
    </ColorContext.Provider>
  );
};

export default ChildChange;
