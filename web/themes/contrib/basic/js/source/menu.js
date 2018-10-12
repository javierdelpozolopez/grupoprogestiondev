const hamburgerMenu = document.getElementById('js-hamburger-menu')
hamburgerMenu.classList = 'hamburger-menu'


const injectMenu = innerWidth => {
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

const   menuId = document.getElementById('js-main-menu-empresas'),
        empBoxContainer = document.createElement('div'),
        empBoxContent = document.createElement('div')

menuId.classList = 'menu-emp__active'
empBoxContainer.classList = 'menu-emp__container'
empBoxContent.classList = 'menu-emp__content'

if(menuId.textContent = 'empresas'){
    logoEnsti.src = imageUrl + 'svg/logo-ensti.svg';
    logoAudisis.src = imageUrl + 'svg/logo-audisis.svg';
    logoCrece.src = imageUrl + 'svg/logo-crece.svg';
    logoDisecom.src = imageUrl + 'svg/logo-disecom.svg';
    logoProgestion.src = imageUrl + 'svg/logo-progestion.svg';

    empBoxContent.innerHTML = `
    <div class="flex-row-ssb">
        <div class="icon-close" id="js-close-menu-empresas"></div>
        <h1>Todas nuestras empresas forman parte de nuestra visión 360.</h1>
    </div>
    <div class="grid grid-3">
        <div class="flex-col-ss padding-1-5rem">
            <img class="logo" src="${logoProgestion.src}" alt="logo progestion">
            <h3>Outsourcing, selección y gestión integral.</h3>
            <a href="">Más información</a>
        </div>
        <div class="flex-col-ss padding-1-5rem">
            <img class="logo" src="${logoEnsti.src}" alt="logo ensti">
            <h3>Servicios Transitorios y subcontratación.</h3>
            <a href="">Más información</a>
        </div>
        <div class="flex-col-ss padding-1-5rem">
            <img class="logo" src="${logoAudisis.src}" alt="logo audisis">
            <h3>Desarrollo de tecnología e inteligencia de negocios.</h3>
            <a href="">Más información</a>
        </div>
        <div class="flex-col-ss padding-1-5rem">
            <img class="logo" src="${logoCrece.src}" alt="logo crece">
            <h3>Capacitaciones por código Sence o privadas.</h3>
            <a href="">Más información</a>
        </div>
        <div class="flex-col-ss padding-1-5rem">
            <img class="logo" src="${logoDisecom.src}" alt="logo disecom">
            <h3>Outsourcing, selección y gestión integral</h3>
            <a href="">Más información</a>
        </div>
        <div class="flex-col-ss padding-1-5rem">
            <img class="logo" src="" alt="logo facility services">
            <h3>Compra reservas y cotizaciones</h3>
            <a href="">Más información</a>
        </div>
    </div>
    `
    empBoxContainer.appendChild(empBoxContent)

    menuId.addEventListener('mouseover', (e) => {
        e.stopPropagation
        e.preventDefault
        var validator = false
        if(validator == false){
            menuId.appendChild(empBoxContainer)
        var validator = true;
            console.log('el menu empresas aparece')
        }else {
            console.log('ya se imprimió el menú')
            var validator = false
        }
    })

    empBoxContainer.addEventListener('mouseleave', (e) => {
        e.preventDefault
        setTimeout(menuId.removeChild(empBoxContainer),2000)
        console.log('el menu empresas desaparece')
    })
}
