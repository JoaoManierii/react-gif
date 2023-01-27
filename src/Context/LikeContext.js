import React, { createContext, useState, useContext } from "react";

const LikeContext = createContext();

export const likes = {
  curtir: {
    colors: {
      background: "white",
      text: "black"
    }
  },
  descurtir: {
    colors: {
      background: "red",
      text: "white"
    }
  }
};

export default function LikeProvider({ children }) {
  const [like, setLike] = useState([]);

  return (
    <LikeContext.Provider value={{ like, setLike }}>
      {children}
    </LikeContext.Provider>
  );
}

export function useLike() {
  const context = useContext(LikeContext);
  if (!context) throw new Error("uselike must be used within a likeProvider");
  const { like, setLike } = context;
  return { like, setLike };
}