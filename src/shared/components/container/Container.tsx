import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: "1500px",
        margin: "0 auto",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};
