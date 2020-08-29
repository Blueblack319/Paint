const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");
const range = document.getElementById("js-brush-thickness");
const colorBtns = document.querySelectorAll("#js-color");
const changeModeBtn = document.getElementById("js-button-changeMode");
const saveBtn = document.getElementById("js-button-save");
const saveLink = document.getElementById("js-link-save");

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

const handleSave = (event) => {
  event.preventDefault();
  saveLink.setAttribute("download", "CrazyPaper.png");
  saveLink.setAttribute(
    "href",
    canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
  );
  saveLink.click();
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
  changeModeBtn.addEventListener("click", handleChangeMode);
  saveBtn.addEventListener("click", handleSave);
};

if (canvas) {
  init();
}
