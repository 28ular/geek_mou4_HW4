// PHONE BLOCK
// TAP SLIDER

const tab_content_blocks = document.querySelectorAll('.tab_content_block');
const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tapParent = document.querySelector('.tab_content_items');

const HideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (i) => {
    tabContentBlocks[i].style.display = 'block';
    tabs[i].classList.add('tab_content_item_active');
};

HideTabContent();
showTabContent(0);

tapParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, i) => {
            if (event.target === tab) {
                HideTabContent();
                showTabContent(i);
            }
        });
    }

    const autoSlider = (i = 0) => {
        HideTabContent();
        showTabContent(i);

        setInterval(() => {
            i++
            if (i > tabContentBlocks.length - 1) {
                i = 0
            }
            HideTabContent();
            showTabContent(i);
        }, 3000)

    }
    autoSlider()
}

// converter
//
// const somInput = document.querySelector('#som')
// const usdInput = document.querySelector('#usd')
// const euroInput = document.querySelector('#eur')
//
//
// somInput.oninput = () => {
//
//     const xhr = new XMLHttpRequest();
//
//     xhr.open('GET', '../data/converter.json');
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.send()
//     xhr.onload = () => {
//
//
//         const vashe = JSON.parse(xhr.response);
//         usdInput.value = (somInput.value / vashe.usd ).toFixed(2)
//     }
// }
//
// const conveter = (element) => {
//     element.oninput = () => {
//         const xhr = new XMLHttpRequest();
//
//         xhr.open('GET','../data/converter.json');
//         xhr.setRequestHeader('Content-type', 'application/json');
//         xhr.send()
//
//         xhr.onload = () => {
//             const vashe = JSON.parse(xhr.response);
//             if (element.id === 'som') {
//                 usdInput.value =  (element.value / vashe.usd).toFixed(2)
//                 euroInput.value = (element.value / vashe.euro).toFixed(2)
//             }
//             if (element.id === 'usd') {
//                 somInput.value =  (element.value * vashe.usd).toFixed(2)
//                 euroInput.value = (element.value  * vashe.usd / vashe.euro).toFixed(2)
//             }if (element.id === 'eur') {
//                 somInput.value = (element.value * vashe.euro).toFixed(2)
//                 usdInput.value = (element.value * vashe.usd / vashe.euro).toFixed(2)
//             }
//             if (element.value === '') {
//                 somInput.value = ''
//                 usdInput.value = ''
//                 euroInput.value = ''
//             }
//         }
//     }
//
// }
//
// // console.log(usdInput.value/)
// conveter(somInput)
// conveter(usdInput)
// conveter(euroInput)
//  DRY  -   don`t repeat yourself














//  KISS - keep it simple , stupid

//  SOLID-

//  BEM -


//FSD MVC. MVP. .MWV


// CARD SWITCHER


// card switcher
//
// const cardBlock = document.querySelector('.card')
// const btnNext = document.querySelector('#btn-next')
// const btnPrev = document.querySelector('#btn-prev')
//
// let numId = 1 //
//
// btnNext.onclick = () => {
//     numId++
//     if (numId === 200) {
//         numId = 0
//     }
//     fetch(`https://jsonplaceholder.typicode.com/todos/${numId}`)
//         .then(response => response.json())
//         .then(data => {
//             const {title , id , completed} = data
//             cardBlock.style.borderColor = completed ? 'green' : 'red'
//             cardBlock.innerHTML = `
//                     <p>${title}</p>
//                     <p style ="color: ${completed ? 'green' : 'red'}  ">${completed}</p>
//                     <span>${id}</span>
//                `
//
//         })
// }
//
// btnPrev.onclick = () => {
//     numId--
//     if (numId === 0) {
//         numId = 200
//     }
//
//
//     fetch(`https://jsonplaceholder.typicode.com/todos/${numId}`)
//         .then(response => response.json())
//         .then(data => {
//             const {title , id , completed} = data
//             cardBlock.style.borderColor = completed ? 'green' : 'red'
//             cardBlock.innerHTML = `
//                     <p>${title}</p>
//                     <p style ="color: ${completed ? 'green' : 'red'}  ">${completed}</p>
//                     <span>${id}</span>
//                `
//
//         })
// }
// window.addEventListener('DOMContentLoaded', () => {
//     btnNext.dispatchEvent(new Event ('click'));
// })

// fetch('https://jsonplaceholder.typicode.com/posts')
//    .then(info  => {
//        console.log(info)
//
// })

// // CITY WINTER
//
//
//
// const searchInput = document.querySelector('.cityName')
// const searchbutton = document.querySelector('#search')
// const city = document.querySelector('.city')
// const temp = document.querySelector('.temp')
//
// // https://www.google.com/search?q=javascript&oq=javascript
// //API key
// //query params - параметры запроса
//
//
// const API = 'https://api.openweathermap.org/data/2.5/weather'
// const API_KEY ='e417df62e04d3b1b111abeab19cea714'
//
// searchbutton.onclick = () => {
//     if (searchInput.value === '') {
//         city.innerHTML = 'Введите название города'
//     } else {
//         fetch(`${API}?q=${searchInput.value}&appid=${API_KEY}&units=metric&lang=ru`)
//             .then(response => response.json())
//             .then((data) => {
//                 console.log(data.name || 'город не найден', data.main.temp)
//                 city.innerHTML = data.name
//                 temp.innerHTML = data.main?.temp?  Math.round(data.main?.temp) + '&deg;C' : ''
//             })
//         searchInput.value = ''
//     }
//     }
//
//
//
//     // optional chaining = опциональная цепочка
//     // ?.
//
//     const info = {
//     adres: {
//         street:'ibraimova'
//     },
//         id:'0'
//     }
// console.log(info.adres?.street)
//

//shop





//
// if (getAllTovar.status === 200) {
//     const tovar = await JSON.parse(getAllTovar.responseText);
//     tovar.forEach((item) => {
//         const tovar_block = document.createElement('div');
//         tovar_block.classList.add('card_block');
//         tovar_block.append(parant_tovar)
//         tovar.innerHTML = `
//             <img src="" alt="">
//             <p></p>
//             <span></span>
//             <span class="info_span"></span>
//
//         `
//
//     })

// }


//
// characters_1.onload = () => {
//
//     if (characters_1.status === 200) {
//         const characters = JSON.parse(characters_1.responseText);
//         characters.forEach(character => {
//
//             const block = document.createElement('div')
//             block.classList.add('character-card')
//             parant.append(block);
//
//             block.innerHTML =
//                 `
//                     <h2>${character.name}</h2>
//                     <h3>${character.old.age}</h3>
//                     <img class="character-photo" src="${character.photo.url}" alt="icon">
//                     `
//             ;
//         });


