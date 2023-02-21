function Home() {
    window.scroll(0,0)
}

function LadyGaga() {
    window.scroll(0,770)
}

function Options() {
    window.scroll(0,1680)
}

let menuMobile = document.querySelector('.menu--mobile')
let menuMobileItems = document.querySelector('.menu--mobile-items')

menuMobile.addEventListener('click', ()=>{
    if(menuMobileItems.style.display == 'block') {
        menuMobileItems.style.display = 'none'
    } else {
        menuMobileItems.style.display = 'block'
    }
})