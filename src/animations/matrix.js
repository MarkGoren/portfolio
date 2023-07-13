// import RainStream from "./rainStream";

// export default function MatrixAnimation() {
//   return (
//     <div className="matrix-anim">
//       <RainStream></RainStream>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let fontSize = 10;
    let columns = document.body.clientWidth / fontSize;
    let letters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    letters = letters.split("");
    let drops = [];

    const initializeDrops = () => {
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#0f0";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      draw();
    };

    const handleResize = () => {
      canvas.width = document.body.clientWidth;
      canvas.height = window.innerHeight;
      columns = canvas.width / fontSize;
      initializeDrops();
    };

    // Initialize drops and add event listener for resizing
    initializeDrops();
    window.addEventListener("resize", handleResize);

    // Start the animation on component mount
    handleResize();
    animate();

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} style={{}} className="matrix-anim" />;
};

export default MatrixRain;
