window.addEventListener('DOMContentLoaded', function () {

    const btnPlus = document.querySelector('.counter__btn-plus');
    const btnMinus = document.querySelector('.counter__btn-minus');
    const counterNum = document.querySelector('.counter__num');

    btnPlus.addEventListener('click', function () {
        clickPlus()
    })
    btnMinus.addEventListener('click', function () {
        clickMinus()
    })
    function clickPlus() {
        let curentValue = parseInt(counterNum.textContent, 10)
        curentValue += 1
        counterNum.textContent = curentValue
    }
    function clickMinus() {
        let curentValue = parseInt(counterNum.textContent, 10)
        if (curentValue > 0) {
            curentValue -= 1
        }
        counterNum.textContent = curentValue
    }
})