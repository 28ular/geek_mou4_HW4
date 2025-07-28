const track = document.querySelector('.slider-track');
const btnLeft = document.querySelector('.slider-btn.left');
const btnRight = document.querySelector('.slider-btn.right');

btnLeft.onclick = () => {
    track.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
};

btnRight.onclick = () => {
    track.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
};
