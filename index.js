const boxs = document.querySelectorAll(".box");
const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  boxs.forEach((box) => {
    setInterval(() => {
      box.style.backgroundColor = randColor();
      document.querySelector('.boxes').style.backgroundColor = randColor();
    }, 1000);
  });
  button.disabled = true
});
const randColor = () => {
  const red = Math.ceil(0 + Math.random() * 255);
  const green = Math.ceil(0 + Math.random() * 255);
  const blue = Math.ceil(0 + Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};
