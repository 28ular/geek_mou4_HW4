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
    };





    // tickets buy

const seats = document.querySelectorAll('.checkler');
const corzinaItem = document.querySelector('.indicator_ticket span'); // Изменил селектор
const btn_oformlenie = document.querySelector('#oformlenie')
const set_parent = document.querySelector('.container_your_set')
const form_parent = document.querySelector('.card_form_container')
const exit = document.querySelector('.close')
const inputUser = document.querySelector('#username')
// indicator pay

const indicatorPay = document.querySelector('#indi');
const payerBtn  = document.querySelector('#payer');
const p = document.querySelector('#p_paer')
let tickets_len = 0;



seats.forEach((seat) => {
    seat.onclick = () => {
        if (seat.classList.contains('checked')) {
            seat.classList.remove('checked');
            tickets_len--;
        } else {
            seat.classList.add('checked');
            tickets_len++;
        }
        corzinaItem.innerText = tickets_len;
        ubdatePrice()
    }
})
console.log()
function ubdatePrice () {

    if (tickets_len === 1) {
        indicatorPay.innerText = '340'
    } else if (tickets_len === 2) {
        indicatorPay.innerText = '340' * 2
    } else if (tickets_len === 3) {
        indicatorPay.innerText = '340' * 3
    }else if (tickets_len === 4) {
        indicatorPay.innerText = '340' * 4
    }else if (tickets_len === 5) {
        indicatorPay.innerText = '340' * 5
    }else if (tickets_len === 6) {
        indicatorPay.innerText = '340' * 6
    }else if (tickets_len === 7) {
        indicatorPay.innerText = '340' * 7
    }else if (tickets_len === 8) {
        indicatorPay.innerText = '340' * 8
    }else if (tickets_len === 9) {
        indicatorPay.innerText = '340' * 9
    }else if (tickets_len === 10) {
        indicatorPay.innerText = '340' * 10
    }else if (tickets_len === 11) {
        indicatorPay.innerText = '340' * 11
    }else if (tickets_len === 12) {
        indicatorPay.innerText = '340' * 12
    }else if (tickets_len === 13) {
        indicatorPay.innerText = '340' * 13
    }else if (tickets_len === 14) {
        indicatorPay.innerText = '340' * 14
    }else if (tickets_len === 15) {
        indicatorPay.innerText = '340' * 15
    }else if (tickets_len === 16) {
        indicatorPay.innerText = '340' * 16
    }else if (tickets_len === 17) {
        indicatorPay.innerText = '340' * 17
    }else if (tickets_len === 18) {
        indicatorPay.innerText = '340' * 18
    }else if (tickets_len === 19) {
        indicatorPay.innerText = '340' * 19
    }else if (tickets_len === 20) {
        indicatorPay.innerText = '340' * 20
    }else if (tickets_len === 21) {
        indicatorPay.innerText = '340' * 21
    }else if (tickets_len === 22) {
        indicatorPay.innerText = '340' * 22
    }else if (tickets_len === 23) {
        indicatorPay.innerText = '340' * 23
    }else if (tickets_len === 24) {
        indicatorPay.innerText = '340' * 24
    }else if (tickets_len === 25) {
        indicatorPay.innerText = '340' * 25
    }else if (tickets_len === 26) {
        indicatorPay.innerText = '340' * 26
    }else if (tickets_len === 27) {
        indicatorPay.innerText = '340' * 27
    }else if (tickets_len === 28) {
        indicatorPay.innerText = '340' * 28
    }else if (tickets_len === 29) {
        indicatorPay.innerText = '340' * 29
    }else if (tickets_len === 30) {
        indicatorPay.innerText = '340' * 30
    }else if (tickets_len === 31) {
        indicatorPay.innerText = '340' * 31
    }else if (tickets_len === 32) {
        indicatorPay.innerText = '340' * 32
    }else if (tickets_len === 33) {
        indicatorPay.innerText = '340' * 33
    }else if (tickets_len === 34) {
        indicatorPay.innerText = '340' * 34
    }else if (tickets_len === 35) {
        indicatorPay.innerText = '340' * 35
    }else if (tickets_len === 36) {
        indicatorPay.innerText = '340' * 36
    }else if (tickets_len === 37) {
        indicatorPay.innerText = '340' * 37
    }else if (tickets_len === 38) {
        indicatorPay.innerText = '340' * 38
    }
}










//
// payerBtn.onclick = () => {
//     alert('clicked');
//     indicatorPay.innerText = 'успешно!'
//     p.innerText = ''
//     if (indicatorPay.innerText === 'успешно!') {
//         seats.forEach((seat) => {
//             seat.classList.remove('checked');
//             corzinaItem.innerText = '0'
//         })
//
//
//     }
//
// }
console.log(payerBtn)

btn_oformlenie.onclick = () => {
    seats.forEach((seat) => {
        seat.style.display = 'none';
        set_parent.style.display = 'none';
        form_parent.style.display = 'flex';
    })
}


exit.onclick = () => {
    seats.forEach((seat) => {
        seat.style.display = 'flex';
        set_parent.style.display = 'flex';
        form_parent.style.display = 'none';
    })
}


payerBtn.onclick = (e) => {
    const userValue = inputUser.value.trim()
    const rexExp = /[A-Za-z]/
    if (rexExp.test(userValue)) {
        payerBtn.innerText = 'успешно!'
        alert('благодарим за покупку!')
        setTimeout(() => {
            form_parent.style.display = 'none';
        },1500)
    } else {
        alert('fill in correctly!')
        // payerBtn.innerText = 'оплатить:'
    }
}


// payerBtn.onclick = (e) => {
//     const userValue = inputUser.value.trim()
//     const regExp = /[A-Za-z]/
//
//     if (regExp.test(userValue)) {
//         payerBtn.innerText = 'Успешно'
//         alert('Благодарим за покупку')
//     } else {
//         alert('Ошибка: введите имя латиницей')
//         payerBtn.innerText = 'Оплатить'
//     }
// }