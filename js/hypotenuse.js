const inputs = document.querySelectorAll('input');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

const calcHypotenuse = (a, b) => {
    return Math.floor(Math.sqrt((a*a)+(b*b)));
}


const clickHandler = () => {
    let arr = [];
    inputs.forEach(input => arr.push(Number(input.value)))
    const hypotenuse = calcHypotenuse(...arr);
    output.textContent = `The HYPOTENUSE is ${hypotenuse}.`;
    output.classList.remove('hidden');
}

btn.addEventListener('click', clickHandler);