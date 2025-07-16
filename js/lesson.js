// PHONE BLOCK
// TAP SLIDER

const tab_content_blocks = document.querySelectorAll('.tab_content_block');
console.log(tab_content_blocks);
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


