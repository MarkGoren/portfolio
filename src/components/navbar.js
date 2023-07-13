import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [cursor, setCursor] = useState("|");
  useEffect(() => {
    const interval = setInterval(() => {
      cursor === "|" ? setCursor("") : setCursor("|");
    }, 700);
    return () => clearInterval(interval);
  }, [cursor]);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        MG<span>{cursor}</span>
      </div>
      <div className="navbar-options">
        <div>{"</Work>"}</div>
        <div>{"</option2>"}</div>
        <div>{"</option3>"}</div>
      </div>
    </div>
  );
}
