const button = document.querySelector('.button')
const tugma = document.querySelector('.tugma')
const header = document.querySelector('.header')
const navbarTitle = document.querySelector('.navbar-title')
const headerNavbar = document.querySelector('.header-navbar')
const navbarFollow = document.querySelector('.navbar-folow')
const dark = document.querySelector('.dark-light')
const card = [...document.querySelectorAll('.card-bg')]
const numberbg = [...document.querySelectorAll('.number-bg')]



const smallCard = document.querySelector('.small-card')

button.addEventListener('click',() =>{
    navbarTitle.classList.toggle('active')
    header.classList.toggle('active')
    headerNavbar.classList.toggle('active')
    navbarFollow.classList.toggle('active')
    dark.classList.toggle('active')
    if (dark.innerHTML == 'Dark Mode') {
        dark.innerHTML = 'Light Mode'
    }else{
        dark.innerHTML = 'Dark Mode'
    }
    button.classList.toggle('active')
    tugma.classList.toggle('active')
    for (let i = 0; i <= card.length; i++) {
        card[i].classList.toggle('active')
        numberbg[i].classList.toggle('active')
    }
})

