// Menu Responsivo - activación del hamburger menu.

const   hamburgerMenu = document.getElementById('js-hamburger-menu')
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
    // al pinchar el menú contextual se muestra el menú
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
        empBoxContent = document.createElement('div')

empBoxContainer.classList = 'sub-menu menu-float__container'
empBoxContent.classList = 'menu-float__content'

if(menuId){
    empBoxContent.innerHTML = `
    <div class="flex-row-ssb relative">
        <div class="icon-close absolute-top-right" id="js-close-menu-empresas"><img alt="Close" src="${iconClose.src}"/></div>
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
    const eToggle = document.getElementById('js-toggle'); 

    menuId.addEventListener('click', (e) => {
        e.preventDefault
        e.stopPropagation
        console.log('he pinchado aquí')
        if(eToggle.classList.contains('js-toggle')){
            eToggle.appendChild(empBoxContainer)
            eToggle.classList.replace('js-toggle','js-toggle-active')
            console.log('el menu empresas aparece')
        }else if(eToggle.classList.contains('js-toggle-active')){
            eToggle.removeChild(empBoxContainer)
            eToggle.classList.replace('js-toggle-active','js-toggle')
            console.log('el menu se borra')
        }
    })
    document.addEventListener('click', (e) => {
        var isClickInside = eToggle.contains(event.target);

        if (!isClickInside && eToggle.classList.contains('js-toggle-active')) {
            eToggle.removeChild(empBoxContainer)
            eToggle.classList.replace('js-toggle-active','js-toggle')
            console.log('el menu se borra')
        }
    })

    const jsCloseMenuEmp = document.getElementById('js-close-menu-empresas')
    if(jsCloseMenuEmp){
        jsCloseMenuEmp.addEventListener('click', (e) => {
            eToggle.removeChild(empBoxContainer)
            console.log('me fui')
        })
    }
}
