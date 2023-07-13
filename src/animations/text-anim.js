export default function textAnim(text) {
  const lettersAndNums = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%$#@!*";
  const anim = [];
  for (let i = 0; i <= text.length; i++) {
    if (i === text.length) {
      anim.push(text);
      return anim;
    }
    for (let j = 0; j <= 4; j++) {
      const randChar =
        lettersAndNums[Math.floor(Math.random() * lettersAndNums.length)];
      const newText = text.substring(0, i) + randChar;
      anim.push(newText);
    }
  }
}
