// Menu Responsivo - activación del hamburger menu.

const hamburgerMenu = document.getElementById('js-hamburger-menu')
hamburgerMenu.classList = 'hamburger-menu'

// Injecta el menu solo si el viewport es menor a 720px
const injectMenu = innerWidth => {
    if(innerWidth < 720){
        console.log('Se inyectó el menú xoro')
    }else {
        console.log('se borró')
    }
}
// Función para llamar al menú
const callMenu = () => {
        const mainMenu = document.getElementById('js-main-menu')
        mainMenu.classList.toggle('main-menu__active')
}
// Si el viewport es agrandado o achicado, eliminina el menu.
if(hamburgerMenu){
    window.addEventListener('resize', e => {
        injectMenu(window.innerWidth)
    })
    hamburgerMenu.addEventListener('click', (e) =>{
        callMenu()
    })
}


// Imprime el Main Menu y lo inyecta en el HTML
const   mainMenuContainerId = document.getElementById('js-main-menu'),
        mainMenuContent = document.createElement('div')

mainMenuContent.classList = 'menu--main__content'

mainMenuContent.innerHTML = `
<ul>
<li><a href="/inicio">Home</a></li>
<li><a href="" id="js-main-menu-empresas">Empresas</a></li>
<li><a href="/servicios">Servicios</a></li>
<li><a href="/nosotros">Nosotros</a></li>
<li><a href="/blog">Blog</a></li>
<li><a href="/trabaja-con-nosotros">Cantidatos</a></li>
<li><a href="/contacto">Contacto</a></li>
</ul>
`

if(mainMenuContainerId){
    mainMenuContainerId.appendChild(mainMenuContent)
}



// Float Menu para las Empresas.
const   menuId = document.getElementById('js-main-menu-empresas'),
        empBoxContainer = document.createElement('div'),
        empBoxContent = document.createElement('div')

menuId.classList = 'menu-float__active'
empBoxContainer.classList = 'menu-float__container'
empBoxContent.classList = 'menu-float__content'

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
            <h4>Outsourcing, selección y gestión integral.</h4>
            <a href="">Más información</a>
        </div>
        <div class="flex-col-ss padding-1-5rem">
            <img class="logo" src="${logoEnsti.src}" alt="logo ensti">
            <h4>Servicios Transitorios y subcontratación.</h4>
            <a href="">Más información</a>
        </div>
        <div class="flex-col-ss padding-1-5rem">
            <img class="logo" src="${logoAudisis.src}" alt="logo audisis">
            <h4>Desarrollo de tecnología e inteligencia de negocios.</h4>
            <a href="">Más información</a>
        </div>
        <div class="flex-col-ss padding-1-5rem">
            <img class="logo" src="${logoCrece.src}" alt="logo crece">
            <h4>Capacitaciones por código Sence o privadas.</h4>
            <a href="">Más información</a>
        </div>
        <div class="flex-col-ss padding-1-5rem">
            <img class="logo" src="${logoDisecom.src}" alt="logo disecom">
            <h4>Outsourcing, selección y gestión integral</h4>
            <a href="">Más información</a>
        </div>
        <div class="flex-col-ss padding-1-5rem">
            <img class="logo" src="" alt="logo facility services">
            <h4>Compra reservas y cotizaciones</h4>
            <a href="">Más información</a>
        </div>
    </div>
    `
    empBoxContainer.appendChild(empBoxContent)

    menuId.addEventListener('click', (e) => {
        e.preventDefault
        e.stopPropagation
        var validator = false
        console.log('he pinchado aquí')
        if(validator == false){
            menuId.appendChild(empBoxContainer)
        var validator = true;
            console.log('el menu empresas aparece')
        }else {
            menuId.removeChild(empBoxContainer)
            console.log('el menu se borra')
            var validator = false
        }
    })

    empBoxContainer.addEventListener('mouseleave', (e) => {
        e.preventDefault
        setTimeout(menuId.removeChild(empBoxContainer),2000)
        console.log('el menu empresas desaparece')
    })
}
