const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");

let painting = false;

canvas.width = 700;
canvas.height = 700;

ctx.lineWidth = 2.5;
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

if (canvas) {
  canvas.addEventListener("mousedown", function () {
    painting = true;
    console.log(painting);
  });
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("mousemove", handleMouseMove);
}
