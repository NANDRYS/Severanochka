const counter = document.querySelector(".counter");
const counterNum = document.querySelector(".counter__num");
let curentValue = parseInt(counterNum.textContent, 10);

counter.addEventListener("click", (e) => {
  if (e.target.matches(".counter__btn-plus")) {
    curentValue += 1;
    counterNum.textContent = curentValue;
  } else if (e.target.matches(".counter__btn-minus")) {
    if (curentValue > 0) {
      curentValue -= 1;
    }
    counterNum.textContent = curentValue;
  }
});