const   eEnstiId = document.getElementById('js-emp-ensti-content'),
        eEnstiHeroId = document.getElementById('js-emp-ensti-hero'),
        eEnstiContainer = document.createElement('div')


if(eEnstiHeroId){
    const eEnstiHeroContent = document.createElement('div')
    const imageUrl = './../themes/contrib/basic/images/source/'
    const logo = new Image()
    logo.src = imageUrl + 'svg/logo-ensti.svg'

    eEnstiHeroContent.innerHTML = `
    <div class="flex-column-cc text-align-center padding-3-0 max-w-720">
        <img class="icon-bigger margin-bottom-2" src="${logo.src}" alt="Logo Enstiecom">
        <h2>Servicios Transitorios</h2>
        <p>Suministramos trabajadores para que cumplan una labor determinada de carácter transitorio o ocasional.</p>
    </div>
    `
    eEnstiHeroId.appendChild(eEnstiHeroContent)
}




if(eEnstiId){

const   eEnstiImgTrade = new Image(),
        eEnstiImgSupply = new Image(),
        eEnstiImgEnsti = new Image()

const imageUrl = './../themes/contrib/basic/images/source/'

    eEnstiImgTrade.src = imageUrl + 'emp-ensti.jpg'
    eEnstiImgSupply.src = imageUrl + 'emp-ensti.jpg'
    eEnstiImgEnsti.src = imageUrl + 'emp-ensti.jpg'

const enstiInfo = `
    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eEnstiImgTrade.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h3>Desarrollo de software</h3>
            <h5>Se busca integrar de forma transversal la gestión del punto de venta en relación con la visibilidad de los resultados para la toma de decisiones, la comunicación con la fuerza de venta, capacitación directamente desde la aplicación móvil, logística y reportes de venta con ayuda de nuestro servicio de inteligencia de negocios y nuestra aplicación Ensti App.</h5>
        </div>
    </div>

    <div class="grid-2-no-gap">
        <div class="flex-col-sc padding-3-2">
            <h3>Servicio de extracción, transformación y carga de información comercio exterior.</h3>
            <h5>Panel de control online que despliega la información sobre importaciones y exportaciones de comercio exterior relacionados con el negocio del cliente y su competencia.</h5>
        </div>
        <div class="box-bg-img" style="background-image:url('${eEnstiImgTrade.src}');"></div>
    </div>
    `
eEnstiId.innerHTML = enstiInfo
}
