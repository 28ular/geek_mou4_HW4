// modal
const modal = document.querySelector('.modal')
const modalOpenBtn = document.querySelector('#btn-get');
const modalCloseBtn = document.querySelector('.modal_close');

const open =  () => {
    modal.style.display ='block'
    document.body.style.overflow ='hidden'
}
const close = () => {
    modal.style.display ='none'
    document.body.style.overflow =''
}
modalCloseBtn.onclick = () => {
    close()
}
modalOpenBtn.onclick = () => {
    open()
}
modal.onclick = (event) => {
    if (event.target === modal) {
        close()
    }
}


setInterval(() => {
    open()
},10000)

function onScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 5) {
        open();
        window.removeEventListener('scroll', onScroll);
    }
}

window.addEventListener('scroll', onScroll);

