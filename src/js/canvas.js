const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");

let painting = false;

const handleMouseMove = (event) => {
  if (painting === true) {
    console.log(event);
  }
};

if (canvas) {
  canvas.addEventListener("mousedown", function () {
    painting = true;
    console.log(painting);
  });
  canvas.addEventListener("mouseup", function () {
    painting = false;
    console.log(painting);
  });
  canvas.addEventListener("mousemove", handleMouseMove);
}
