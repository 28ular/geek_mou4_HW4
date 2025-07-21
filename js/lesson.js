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

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const euroInput = document.querySelector('#eur')


somInput.oninput = () => {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', '../data/converter.json');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send()
    xhr.onload = () => {


        const vashe = JSON.parse(xhr.response);
        usdInput.value = (somInput.value / vashe.usd ).toFixed(2)
    }
}

const conveter = (element) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET','../data/converter.json');
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send()

        xhr.onload = () => {
            const vashe = JSON.parse(xhr.response);
            if (element.id === 'som') {
                usdInput.value =  (element.value / vashe.usd).toFixed(2)
                euroInput.value = (element.value / vashe.euro).toFixed(2)
            }
            if (element.id === 'usd') {
                somInput.value =  (element.value * vashe.usd).toFixed(2)
                euroInput.value = (element.value  * vashe.usd / vashe.euro).toFixed(2)
            }if (element.id === 'eur') {
                somInput.value = (element.value * vashe.euro).toFixed(2)
                usdInput.value = (element.value * vashe.usd / vashe.euro).toFixed(2)
            }
            if (element.value === '') {
                somInput.value = ''
                usdInput.value = ''
                euroInput.value = ''
            }
        }
    }

}

// console.log(usdInput.value/)
conveter(somInput)
conveter(usdInput)
conveter(euroInput)
//  DRY  -   don`t repeat yourself














//  KISS - keep it simple , stupid

//  SOLID-

//  BEM -


//FSD MVC. MVP. .MWV
