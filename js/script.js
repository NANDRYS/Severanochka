// BEM 5
document.addEventListener("click", (e) => {
  if (
    e.target.matches(".counter__btn-plus") ||
    e.target.matches(".counter__btn-minus")
  ) {
    const counter = e.target.closest(".counter");
    const counterNum = counter.querySelector(".counter__num");
    let currentValue = parseInt(counterNum.textContent, 10);

    if (e.target.matches(".counter__btn-plus")) {
      currentValue += 1;
    } else if (e.target.matches(".counter__btn-minus") && currentValue > 0) {
      currentValue -= 1;
    }

    counterNum.textContent = currentValue;
  }
});
