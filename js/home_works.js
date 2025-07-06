
const writter = document.querySelector('#gmail_input');
const button = document.querySelector('#gmail_button');
const result = document.querySelector('#gmail_result');
const block = document.querySelector('.child_block');

button.onclick = () => {
    const value = writter.value;
    const rexExp = /^[a-z0-9A-Z_+%]+@gmail.com/
    if (rexExp.test(value)) {
        result.textContent = 'операция прошла успешно!'
        result.style.color = 'green'
    } else {
        result.textContent = 'ошибка: не корректный email';
        result.style.color = 'red'
    }
}

let position = 0;

function moveRight() {
    if (position <= 450) {
        block.style.left = position + 'px';
        position += 2;
        requestAnimationFrame(moveRight);
    }
}

moveRight();

