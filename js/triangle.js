const inputs = document.querySelectorAll('input');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

const checkTriangle = (a, b, c) => {
    return a+b+c === 180 ? true : false;
}


const clickHandler = () => {
    let arr = [];
    inputs.forEach(input => arr.push(Number(input.value)))
    if(checkTriangle(...arr)) {
        output.textContent = "This is a Triangle.";
        output.classList.remove('hidden');
        output.classList.remove('wrong');
        output.classList.add('right');      
    } else {
        output.textContent = "This is not a Triangle.";
        output.classList.remove('hidden');
        output.classList.remove('right');
        output.classList.add('wrong');        
    }
}

btn.addEventListener('click', clickHandler);