import React from "react";
import Total from "./Total";
import Todos from "./Todos";

export default function Home() {
  return (
    <div>
      <Todos />
      <Total />
    </div>
  );
}
