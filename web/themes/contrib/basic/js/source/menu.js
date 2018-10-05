const hamburgerMenu = document.getElementById('js-hamburger-menu')
hamburgerMenu.classList = 'hamburger-menu'


const injectMenu = (innerWidth) => {
    if(innerWidth < 720){
        console.log('Se inyectó el menú xoro')
    }else {
        console.log('se borró')
    }
}

const callMenu = () => {
        const mainMenu = document.getElementById('js-main-menu')
        mainMenu.classList.toggle('main-menu__active')
}

if(hamburgerMenu){
    window.addEventListener('resize', e => {
        injectMenu(window.innerWidth)
    })
    hamburgerMenu.addEventListener('click', (e) =>{
        callMenu()
    })
}