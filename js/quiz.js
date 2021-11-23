const quizForm = document.querySelector('.quiz-form');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

const correctAnswers = ['90°', 'right-angled', '60°', 'Scalene', 'Yes'];

const clickHandler = () => {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let entry of formResults.values()) {
        if(entry === correctAnswers[index]) {
            score++;
            index++;
        } else {
            index++;
        }
    }
    if(score > 0) {
        output.textContent = `Your score is ${score}`;
        output.classList.remove('hidden');
        output.classList.remove('wrong');
        output.classList.add('right');      
    } else {
        output.textContent = `Your score is ${score}`;
        output.classList.remove('hidden');
        output.classList.remove('right');
        output.classList.add('wrong');        
    }


}

btn.addEventListener('click', clickHandler);