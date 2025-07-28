const parant_tovar = document.querySelector('.card_item');
const API = 'https://68874fac071f195ca9803309.mockapi.io/barsa_tovar';

const getAllTovar = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();

        parant_tovar.innerHTML = '';

        data.forEach(item => {
            const tovar_block = document.createElement('div');
            tovar_block.classList.add('card_block');

            const imgUrl = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;

            tovar_block.innerHTML = `
        <img src="${imgUrl}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.info_tovara}</p>
        <span class="price">${item.price} сом</span>
      `;

            parant_tovar.append(tovar_block);
        });
    } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
    }
};

getAllTovar();
