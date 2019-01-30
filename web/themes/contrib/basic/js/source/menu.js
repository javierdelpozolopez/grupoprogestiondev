// Menu Responsivo - activación del hamburger menu.

const   hamburgerMenu = document.getElementById('js-hamburger-menu')
hamburgerMenu.classList = 'hamburger-menu'

// Injecta el menu solo si el viewport es menor a 720px
const injectMenu = innerWidth => {
    if(innerWidth < 720){
        console.log('Se inyectó el menú')
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
    // al pinchar el menú consecondaryual se muestra el menú
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
<li><a href="/inicio">Inicio</a></li>
<li class="relative js-toggle" id="js-toggle"><a id="js-main-menu-empresas" href="javascript:void(0)" role="button">Empresas</a></li>
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
        empBoxContent = document.createElement('div'),
        empBoxEffect = document.createElement('div')

empBoxContainer.classList = 'sub-menu menu-float__container flex-col-cc'
empBoxContent.classList = 'menu-float__content'
empBoxEffect.classList = 'menu-float__effect'

if(menuId){
    empBoxEffect.innerHTML = `<div class="menu-float__effect blur" id="js-blur-effect"></div>`
}

if(menuId){
    empBoxContent.innerHTML = `
    <div class="grid grid-auto-48px relative">
        <h3>Todas nuestras empresas forman parte de nuestra visión 360.</h3>
        <div id="js-close-popup" class="flex-col-ss"><img src="${svgClose.src}" alt="cerrar"></div>
    </div>
    <div class="grid-col-3-movile-2">
        <div class="flex-col-ss padding-1-5rem sub-menu-box">
            <img src="${logoProgestion.src}" alt="logo progestion">
            <p class="sub-menu-box__p">Outsourcing, selección y gestión integral.</p>
            <a class="btn btn--outlined" href="${empresas['progestion'].link}">saber más</a>
        </div>
        <div class="flex-col-ss padding-1-5rem sub-menu-box">
            <img src="${logoEnsti.src}" alt="logo ensti">
            <p class="sub-menu-box__p">Servicios Transitorios y subcontratación.</p>
            <a class="btn btn--outlined" href="${empresas['ensti'].link}">saber más</a>
        </div>
        <div class="flex-col-ss padding-1-5rem sub-menu-box">
            <img src="${logoAudisis.src}" alt="logo audisis">
            <p class="sub-menu-box__p">Desarrollo de tecnología e inteligencia de negocios.</p>
            <a class="btn btn--outlined" href="${empresas['audisis'].link}">saber más</a>
        </div>
        <div class="flex-col-ss padding-1-5rem sub-menu-box">
            <img src="${logoCrece.src}" alt="logo crece">
            <p class="sub-menu-box__p">Capacitaciones por código Sence o privadas.</p>
            <a class="btn btn--outlined" href="${empresas['crece'].link}">saber más</a>
        </div>
        <div class="flex-col-ss padding-1-5rem sub-menu-box">
            <img src="${logoDisecom.src}" alt="logo disecom">
            <p class="sub-menu-box__p">Outsourcing, selección y gestión integral</p>
            <a class="btn btn--outlined" href="${empresas['disecom'].link}">saber más</a>
        </div>
        <div class="flex-col-ss padding-1-5rem sub-menu-box">
            <img src="" alt="logo facility services">
            <p class="sub-menu-box__p">Compra reservas y cotizaciones</p>
            <a class="btn btn--outlined" href="">saber más</a>
        </div>
    </div>
    `
    empBoxContainer.appendChild(empBoxContent)
    empBoxContainer.appendChild(empBoxEffect)
    const eToggle = document.getElementById('js-toggle');
    const popUp = document.getElementById('js-pop-up');
    

    menuId.addEventListener('click', (e) => {
        e.preventDefault
        e.stopPropagation
        if(eToggle.classList.contains('js-toggle')){
            popUp.appendChild(empBoxContainer)
            eToggle.classList.replace('js-toggle','js-toggle-active')

        }else if(eToggle.classList.contains('js-toggle-active')){
            popUp.removeChild(empBoxContainer)
            eToggle.classList.replace('js-toggle-active','js-toggle')
        }
        const closePopUp = document.getElementById('js-close-popup');

        closePopUp.addEventListener('click', (e) => {
            var isClickInside = eToggle.contains(event.target);
    
            if (!isClickInside && eToggle.classList.contains('js-toggle-active')) {
                popUp.removeChild(empBoxContainer)
                eToggle.classList.replace('js-toggle-active','js-toggle')
            }
        })
    })
}
