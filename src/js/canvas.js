const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");
const range = document.getElementById("js-brush-thickness");

let painting = false;

ctx.strokeStyle = "black";

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

if (canvas) {
  canvas.addEventListener("mousedown", function () {
    painting = true;
    console.log(painting);
  });
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("mousemove", handleMouseMove);
  range.addEventListener("input", handleThickness);
}
