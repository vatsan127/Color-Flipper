// import "./style.css";
// import "bootstrap/dist/css/bootstrap.css";

const colors = ["orange", "pink", "black", "blue", "green", "red", "gold"];
const color = document.getElementById("content-color");
const btn = document.getElementById("btn-clickhere");

btn.addEventListener("click", function () {
  const randumNumber = getRandumNumber();
  console.log(randumNumber, colors[randumNumber]);
  document.body.style.backgroundColor = colors[randumNumber];
  color.textContent = colors[randumNumber];
});

function getRandumNumber() {
  return Math.floor(Math.random() * colors.length);
}
