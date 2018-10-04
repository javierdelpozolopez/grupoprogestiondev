const   eDisId = document.getElementById('js-emp-disecom'),
        eDisHeroId = document.getElementById('js-emp-disecom-hero'),
        eDisMenuId = document.getElementById('js-emp-disecom-menu'),
        eDisMenuContent = document.createElement('div'),
        eDisContainer = document.createElement('div')


if(eDisHeroId){
    const eDisHeroContent = document.createElement('div')
    const imageUrl = './../themes/contrib/basic/images/source/'
    const logo = new Image()
    logo.src = imageUrl + 'svg/logo-disecom.svg'

    eDisHeroContent.innerHTML = `
    <div class="flex-column-cc text-align-center padding-3-0">
        <img class="icon-bigger" src="${logo.src}" alt="Logo Disecom">
        <h1>Marketing, Trade y Logística a tu servicio.</h1>
        <p>¡Lleva tu estrategia comercial al PDV!</p>
    </div>
    `
    eDisHeroId.appendChild(eDisHeroContent)
}




if(eDisMenuId){
    eDisMenuContent.classList = "top-bar__content"
    eDisMenuContent.innerHTML = `
    <div class="flex-row-cse head-menu margin-bottom-2">
        <li onclick="selectTab(this)" class="js-capture-id" id="trademarketing"><p>Trade Marketing</p></li>
        <li onclick="selectTab(this)" class="js-capture-id" id="supplychainmanagement"><p>Supply Chain Management</p></li>
        <li onclick="selectTab(this)" class="js-capture-id" id="disenoyproduccion"><p>Diseño y Producción</p></li>
    </div>
    `
    eDisMenuId.appendChild(eDisMenuContent)

const   eDisImgTrade = new Image(),
        eDisImgSupply = new Image(),
        eDisImgDiseno = new Image(),
        eDisIconTrade = new Image(),
        eDisIconSupply = new Image(),
        eDisIconDiseno = new Image()

const imageUrl = './../themes/contrib/basic/images/source/';

    eDisImgTrade.src = imageUrl + 'emp-disecom-bodega.jpg'
    eDisImgSupply.src = imageUrl + 'emp-disecom-bodega.jpg'
    eDisImgDiseno.src = imageUrl + 'emp-disecom-bodega.jpg'
    eDisIconTrade.src = imageUrl + 'svg/name.svg'
    eDisIconSupply.src = imageUrl + 'svg/name.svg'
    eDisIconDiseno.src = imageUrl + 'svg/name.svg'

const tradeMarketingInfo = `
    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>Implementación y Control de PDV</h1>
            <h4>junto con auditorías y Equipos Swatt de posición, realizamos visitas según ruta logrando eficiencia en tiempo-recurso y cobertura.</h4>
        </div>
    </div>

    <div class="grid-2-no-gap">
        <div class="flex-col-sc padding-3-2">
            <h1>Equipos Trade Marketing exclusivos y/o por evento.</h1>
            <h4>Llevamos acabo tu campaña con equipos capacitados</h4>
        </div>
        <div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
    </div>

    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>Levantamiento para generación de BBDD y estadística.</h1>
            <h4>Levantamiento para generación de BBDD y estadística y Plan estratégico de visitas por zonas (Barrido).</h4>
        </div>
    </div>

    <div class="grid-2-no-gap">
        <div class="flex-col-sc padding-3-2">
            <h1>Focus Group e Inspector incógnito</h1>
            <h4>Descubre lo que realmente pasa en el PDV</h4>
        </div>
        <div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
    </div>
    `

const supplyChainManagementInfo = `
    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>Almacenamiento</h1>
            <h4>Nuestro Centro de Distribución se encuentra dentro del Centro Logístico de Puerto Madero (Bodegas San Francisco). El punto ideal para atender redes de distribución con acceso directo a la Ruta 68, Alameda, Américo Vespucio y Costanera Norte. Cuenta con 4.600 mt² con Almacenamiento tipo Rack y a Piso para cargas sobredimensionadas.</h4>
        </div>
    </div>
    <div class="grid-2-no-gap">
        <div class="flex-col-sc padding-3-2">
            <h1>Logística de despacho.</h1>
            <h4>Cuenta con amplia diversidad de para su Logística de despachos, de acuerdo a tus necesidades (Motos, Camionetas, Camiones, etc.). A nivel nacional tenemos alianza con nuestra Empresa Interna TRANSPRO, como también con importantes Courier a nivel nacional.</h4>
        </div>
        <div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
    </div>
    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>Maquila</h1>
            <h4>Servicio destinado a la preparación, transformación, elaboración o reparación de mercancías. Esta área se enfoca en entregar valor agregado a los procesos logísticos de nuestros Clientes. Disecom cuenta con procesos estructurados para cada necesidad de los servicios.</h4>
        </div>
    </div>
    <div class="grid-2-no-gap">
        <div class="flex-col-sc padding-3-2">
            <h1>Reportes on-line y trazabilidad.</h1>
            <h4>Sistema de gestión logístico WMS, cuenta con: Control de Stock On Line, Apertura de control de Stock por (Propietario, Categoría, Familia, SKU, Ficha técnica, Valorización, etc.), Control de fecha vencimiento o permanencia de Productos, Muebles, POP.</h4>
        </div>
        <div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
    </div>
    `
const disenoyProduccionInfo = `
<div class="grid-2-no-gap">
<div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
<div class="flex-col-sc padding-3-2">
    <h1>Diseño y Producción.</h1>
    <h4>Adaptamos y creamos piezas gráficas para variedad de soportes comerciales.</h4>
</div>
</div>
<div class="grid-2-no-gap">
<div class="flex-col-sc padding-3-2">
    <h1>Promotoría y gestores de venta</h1>
    <h4>Potencia tus ventas en el PDV con la mejor seleccion de gestores de venta.</h4>
</div>
<div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
</div>
<div class="grid-2-no-gap">
<div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
<div class="flex-col-sc padding-3-2">
    <h1>Stands y Eventos</h1>
    <h4>Diseño de stands y producción de eventos con anfitriones de marca, dínamicas, sampling y reportes audiovisuales.</h4>
</div>
</div>
<div class="grid-2-no-gap">
<div class="flex-col-sc padding-3-2">
    <h1>Social media y Web</h1>
    <h4>Diseño de campañas para RRSS, Landing Pages y sitios escalables y auto-administrables.</h4>
</div>
<div class="box-bg-img" style="background-image:url('${eDisImgTrade.src}');"></div>
</div>
`
const callService = (event) => {
    event.preventDefault
    let description = [event.currentTarget.id]
    
    if(description == 'trademarketing'){
        eDisId.innerHTML = tradeMarketingInfo
    }else if(description == 'supplychainmanagement'){
        eDisId.innerHTML = supplyChainManagementInfo
    }else if(description == 'disenoyproduccion'){
        eDisId.innerHTML = disenoyProduccionInfo
    }

}
const menuServicesCaptId = Array.from(document.getElementsByClassName('js-capture-id'))
menuServicesCaptId.map((s) => s.addEventListener('click', callService, true))

    var selectedTab = null;
   function selectTab(tab) {
     if (selectedTab) { selectedTab.className = 'js-capture-id' }
     tab.className = 'btn__deploy';
     selectedTab = tab;
   }

   eDisId.innerHTML = tradeMarketingInfo
}
