const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
const writter = document.querySelector('#gmail_input');
const button = document.querySelector('#gmail_button');
const result = document.querySelector('#gmail_result');
const parent = document.querySelector('.parent_block');


button.onclick = () => {
    const value = writter.value;
    const rexExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (rexExp.test(value)) {
        celebrate3sec();
        result.textContent = 'Операция прошла успешно!';
        result.style.color = 'gold';
        parent.style.display = 'block';
    } else {
        result.textContent = 'Ошибка: некорректный email';
        result.style.color = '';
        parent.style.display = 'none';

    }

    function celebrate3sec() {
        const duration = 3 * 1000; // 3 секунды

        const end = Date.now() + duration;
        (function frame() {
            confetti({
                particleCount: 7,
                angle: 60,
                spread: 70,
                origin: {x: 0},
                colors: ['#A50044', '#004D98', '#FDB913'] // Барса стиль
            });
            confetti({
                particleCount: 7,
                angle: 120,
                spread: 70,
                origin: {x: 1},
                colors: ['#A50044', '#004D98', '#FDB913']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();


    }

// MOVE BLOCK
    const block = document.querySelector('.child_block');

    const parentOFwidht = parent.clientWidth - block.offsetWidth;
    const parentOFheight = parent.clientHeight - block.offsetHeight;

    let positionX = 0;
    let positionY = 0;
    let naprovlenie = 'right';

    function moveRight() {
        if (naprovlenie === 'right') {
            if (positionX < parentOFwidht) {
                positionX++;
            } else {
                naprovlenie = 'down';
            }
        }

        if (naprovlenie === 'down') {
            if (positionY < parentOFheight) {
                positionY++;
            } else {
                naprovlenie = 'left';
            }
        }

        if (naprovlenie === 'left') {
            if (positionX > 0) {
                positionX--;
            } else {
                naprovlenie = 'up';
            }
        }

        if (naprovlenie === 'up') {
            if (positionY > 0) {
                positionY--;
            } else {
                naprovlenie = 'right';
            }
        }

        block.style.left = `${positionX}px`;
        block.style.top = `${positionY}px`;

        requestAnimationFrame(moveRight);
    }
    moveRight();
}



//_TIMER_
//
//     const btnStart = document.querySelector('#start');
//     const btnStop = document.querySelector('#stop');
//     const btnReset = document.querySelector('#reset');
//     const seconds = document.querySelector('#seconds');
//
//     let sec = 0;
//     let timerId = null;
//
//     btnStart.onclick = () => {
//         if (timerId !== null) return;
//         timerId = setInterval(() => {
//             sec++;
//             seconds.textContent = sec;
//             console.log('ok')
//         }, 1000)
//     }
//     btnStop.onclick = () => {
//         clearInterval(timerId);
//         timerId = null;
//     }
//     btnReset.onclick = () => {
//         sec = 0;
//     }
// }




// characters.json
const parant = document.querySelector('.characters-list');


const characters_1 =
    new XMLHttpRequest()
    characters_1.open('GET', '../data/characters.json', );
    characters_1.setRequestHeader('content-type','application/json');
    characters_1.onload = () => {

        if (characters_1.status === 200) {
            const characters = JSON.parse(characters_1.responseText);
            characters.forEach(character => {

                const block = document.createElement('div')
                block.classList.add('character-card')
                parant.append(block);

                block.innerHTML =
                    `
                    <h2>${character.name}</h2>
                    <h3>${character.old.age}</h3>
                    <img class="character-photo" src="${character.photo.url}" alt="icon">
                    `
                ;
            });

        }

    }
characters_1.send();






const any =
    new XMLHttpRequest()
    any.open('GET', '../data/any.json', );
    any.setRequestHeader('content-type', 'application/json');
    any.send();

    any.onload = () => {
        console.log(any.response)
    }