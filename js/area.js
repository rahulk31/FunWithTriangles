const inputs = document.querySelectorAll('input');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

const calcArea = (a, b) => {
    return Math.floor(1/2 * (a*b));
}


const clickHandler = () => {
    let arr = [];
    inputs.forEach(input => arr.push(Number(input.value)))
    const area = calcArea(...arr);
    output.textContent = `The AREA is ${area}.`;
    output.classList.remove('hidden');
}

btn.addEventListener('click', clickHandler);