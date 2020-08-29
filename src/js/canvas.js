const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");
const range = document.getElementById("js-brush-thickness");
const colorBtns = document.querySelectorAll("#js-color");
const changeMode = document.getElementById("js-button-changeMode");

let painting = false;
let mode = "PAINT";
let color;

const handleMouseMove = (event) => {
  let x = event.offsetX;
  let y = event.offsetY;
  if (painting !== true) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

const handleMouseUp = () => {
  painting = false;
  console.log(painting);
};

const handleThickness = () => {
  const thickness = range.value;
  ctx.lineWidth = thickness;
};

const handleColorChange = (event) => {
  event.preventDefault();
  const btnStyle = window.getComputedStyle(event.target);
  color = btnStyle.backgroundColor;
  ctx.strokeStyle = color;
};

const handleChangeMode = (event) => {
  event.preventDefault();
  mode = event.target.innerText;
  if (mode === "FILL") {
    event.target.innerText = "PAINT";
  } else {
    event.target.innerText = "FILL";
  }
};

const handleFill = () => {
  if (mode === "FILL") {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
};

const init = () => {
  canvas.addEventListener("click", handleFill);
  canvas.addEventListener("mousedown", function () {
    painting = true;
  });
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("mousemove", handleMouseMove);
  range.addEventListener("input", handleThickness);
  colorBtns.forEach((colorBtn) => {
    colorBtn.addEventListener("click", handleColorChange);
  });
  changeMode.addEventListener("click", handleChangeMode);
};

if (canvas) {
  init();
}
