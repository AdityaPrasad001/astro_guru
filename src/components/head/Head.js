import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Detail from "./details/Detail";

const Head = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Header />
      <Hero />
      <Detail />
    </div>
  );
};

export default Head;
