import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        maxWidth: "1500px",
        width: "100%",
        margin: "0 auto",
        height: "100%",
        padding: "0 10px",
      }}
    >
      {children}
    </div>
  );
};
