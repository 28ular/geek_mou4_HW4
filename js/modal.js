document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal')
    const modalOpenBtn = document.querySelector('#btn-get');
    const modalCloseBtn = document.querySelector('.modal_close');

    const ticket = document.querySelector('#block_buy_ticket')
    const buyTickets = document.querySelector('#header_1')

    const vipTicket = document.querySelector('#vip_tickets')
    const basicTicket = document.querySelector('#basic_tickets')
    const vip_or_basic = document.querySelector('.vip_or_basic')
    const match_card_vip = document.querySelectorAll('.match-card_vip')
    const match_card_basic = document.querySelectorAll('.match-card')

    const open = () => {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }
    const close = () => {
        modal.style.display = 'none'
        document.body.style.overflow = ''
    }

    modalCloseBtn.onclick = () => close()
    modalOpenBtn.onclick = () => open()

    modal.onclick = (event) => {
        if (event.target === modal) close()
    }

    function onScroll() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight - 5) {
            open();
            window.removeEventListener('scroll', onScroll);
        }
    }
    window.addEventListener('scroll', onScroll)

    let hideTimeout;

    if (buyTickets && ticket) {
        buyTickets.onmouseenter = () => {
            clearTimeout(hideTimeout);
            ticket.classList.add('active');
        }

        buyTickets.onmouseleave = () => {
            hideTimeout = setTimeout(() => {
                ticket.classList.remove('active');
            }, 100);
        }

        ticket.onmouseenter = () => {
            clearTimeout(hideTimeout);
        }
        ticket.onmouseleave = () => {
            ticket.classList.remove('active');
            match_card_vip.forEach(card => {
                card.style.display = 'none';
            })
            match_card_basic.forEach(card => {
                card.style.display = 'none'
            })
            vip_or_basic.style.display = 'block';
        }

        vipTicket.onclick = () => {
            vip_or_basic.style.display = 'none'
            match_card_vip.forEach(card => {
                card.style.display = 'block';
            })
        }

        basicTicket.onclick = () => {
            vip_or_basic.style.display = 'none'
            match_card_basic.forEach(card => {
                card.style.display = 'block';
            })
        }
    }
})
