import { useEffect, useState } from "react";
import textAnim from "../animations/text-anim";

export default function Start() {
  const anim1 = textAnim("Wake up, Neo...");
  const anim2 = textAnim("The Matrix has you...");
  const [anim1Index, setAnim1Index] = useState(0);
  useEffect(() => {
    const timer =
      anim1Index === anim1.length - 1
        ? setTimeout(() => {
            setAnim1Index((prevIndex) => (prevIndex + 1) % anim1.length);
          }, 2000)
        : setTimeout(() => {
            setAnim1Index((prevIndex) => (prevIndex + 1) % anim1.length);
          }, 30);
    return () => {
      clearTimeout(timer);
    };
  }, [anim1Index, anim1.length]);

  const [anim2Index, setAnim2Index] = useState(0);
  useEffect(() => {
    const timer =
      anim2Index === anim2.length - 1
        ? setTimeout(() => {
            setAnim2Index((prevIndex) => (prevIndex + 1) % anim2.length);
          }, 2000)
        : setTimeout(() => {
            setAnim2Index((prevIndex) => (prevIndex + 1) % anim2.length);
          }, 30);
    return () => {
      clearTimeout(timer);
    };
  }, [anim2Index, anim2.length]);
  return (
    <>
      <div className="anim">
        <div className="anim-title">{anim1[anim1Index]}</div>
        <div className="anim-post-title">{anim2[anim2Index]}</div>
      </div>

      <div className="start">
        <div>Follow the white rabbit.</div>
        <div>⬇</div>
      </div>
    </>
  );
}
