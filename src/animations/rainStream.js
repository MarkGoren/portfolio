import { useEffect, useState } from "react";

export default function RainStream() {
  const chars =
    "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  const minChars = 15;
  const maxChars = 35;
  function getRandRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function randomChar() {
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }
  function getRandStream() {
    return new Array(getRandRange(minChars, maxChars))
      .fill()
      .map((_) => randomChar());
  }

  const randStream = getRandStream();

  const [topMargin, setTopMargin] = useState(-44);

  //   useEffect(() => {
  //     if (topMargin > window.innerHeight) {
  //       setTopMargin(0);
  //     }
  //     const interval = setInterval(() => {
  //       setTopMargin(topMargin + 44);
  //     }, 80);
  //     return () => clearInterval(interval);
  //   }, [topMargin]);
  return (
    <div className="rain-stream" style={{ marginTop: topMargin }}>
      {randStream.map((char, index) => (
        <span
          key={index}
          style={{
            color: index === randStream.length - 1 ? "white" : "#008f11",
            textShadow:
              index === randStream.length - 1
                ? "0px 0px 1rem aqua"
                : "0px 0px 8px #00ff41",

            opacity: 0.01 + index * 0.05,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
