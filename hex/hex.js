// import "./hex.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";

const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
const color = document.getElementById("content-color");
const btn = document.getElementById("btn-clickhere");

btn.addEventListener("click", function () {
  let Color = randomColorgenerator();
  console.log(Color);
  document.body.style.backgroundColor = Color;
  color.textContent = Color;
});

function randomColorgenerator() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += characters[Math.floor(Math.random() * characters.length)];
    // console.log(randomColor);
  }
  return randomColor;
}
