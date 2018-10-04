const   eAudisisId = document.getElementById('js-emp-audisis-content'),
        eAudisisHeroId = document.getElementById('js-emp-audisis-hero'),
        eAudisisMenuId = document.getElementById('js-emp-audisis-menu'),
        eAudisisMenuContent = document.createElement('div'),
        eAudisisContainer = document.createElement('div')


if(eAudisisHeroId){
    const eAudisisHeroContent = document.createElement('div')
    const imageUrl = './../themes/contrib/basic/images/source/'
    const logo = new Image()
    logo.src = imageUrl + 'svg/logo-audisis.svg'

    eAudisisHeroContent.innerHTML = `
    <div class="flex-column-cc text-align-center padding-3-0 max-w-720">
        <img class="icon-bigger margin-bottom-2" src="${logo.src}" alt="Logo Audisisecom">
        <h1>Estamos comprometidos y enfocados en que nuestros clientes crezcan y rentabilicen sus negocios.</h1>
        <p>Apoyándolos con herramientas tecnológicas customizables para la toma de decisiones estratégicas. Innovando e integrando nuestras soluciones de inteligencia y servicios de tecnología a los procesos claves del negocio de nuestros clientes.</p>
    </div>
    `
    eAudisisHeroId.appendChild(eAudisisHeroContent)
}




if(eAudisisMenuId){
    eAudisisMenuContent.classList = "top-bar__content"
    eAudisisMenuContent.innerHTML = `
    <div class="flex-row-cse head-menu margin-bottom-2">
        <li onclick="selectTab(this)" class="js-capture-id" id="desarrollodesoftware"><p>Desarrollo de software</p></li>
        <li onclick="selectTab(this)" class="js-capture-id" id="bi"><p>BI</p></li>
        <li onclick="selectTab(this)" class="js-capture-id" id="aplicaciones"><p>Aplicaciones</p></li>
    </div>
    `
    eAudisisMenuId.appendChild(eAudisisMenuContent)

const   eAudisisImgTrade = new Image(),
        eAudisisImgSupply = new Image(),
        eAudisisImgAudisis = new Image()

const imageUrl = './../themes/contrib/basic/images/source/'

    eAudisisImgTrade.src = imageUrl + 'emp-audisis.jpg'
    eAudisisImgSupply.src = imageUrl + 'emp-audisis.jpg'
    eAudisisImgAudisis.src = imageUrl + 'emp-audisis.jpg'

const desarrollodeSoftwareInfo = `
    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eAudisisImgTrade.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>Desarrollo de software</h1>
            <h4>Se busca integrar de forma transversal la gestión del punto de venta en relación con la visibilidad de los resultados para la toma de decisiones, la comunicación con la fuerza de venta, capacitación directamente desde la aplicación móvil, logística y reportes de venta con ayuda de nuestro servicio de inteligencia de negocios y nuestra aplicación Audisis App.</h4>
        </div>
    </div>

    <div class="grid-2-no-gap">
        <div class="flex-col-sc padding-3-2">
            <h1>Servicio de extracción, transformación y carga de información comercio exterior.</h1>
            <h4>Panel de control online que despliega la información sobre importaciones y exportaciones de comercio exterior relacionados con el negocio del cliente y su competencia.</h4>
        </div>
        <div class="box-bg-img" style="background-image:url('${eAudisisImgTrade.src}');"></div>
    </div>
    `

const biInfo = `
    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eAudisisImgTrade.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>asdfasdf</h1>
            <h4>qwerqwerqwerqwer</h4>
        </div>
    </div>
    <div class="grid-2-no-gap">
        <div class="flex-col-sc padding-3-2">
            <h1>asdfasdfasdf</h1>
            <h4>qwerqwerqwerqwerwqre</h4>
        </div>
        <div class="box-bg-img" style="background-image:url('${eAudisisImgTrade.src}');"></div>
    </div>
    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eAudisisImgTrade.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>asdfasdfasdf</h1>
            <h4>asdfasw</h4>
        </div>
    </div>
    `
const aplicacionesInfo = `
<div class="grid-2-no-gap">
<div class="box-bg-img" style="background-image:url('${eAudisisImgTrade.src}');"></div>
<div class="flex-col-sc padding-3-2">
    <h1>CheckRoom</h1>
    <h4>Plataforma móvil y ambiente web para el cliente destinado a levantar desde terreno información y disponibilizarla en dashboards de control online para clientes de promotoría.</h4>
</div>
</div>
<div class="grid-2-no-gap">
<div class="flex-col-sc padding-3-2">
    <h1>Plataforma de gastos corporativos</h1>
    <h4>Servicio web que facilita, agiliza y hace más robusto el proceso de rendición de gastos en la empresa. Gestiona las rendiciones de gastos y automatiza la administración de estos.</h4>
</div>
<div class="box-bg-img" style="background-image:url('${eAudisisImgTrade.src}');"></div>
</div>
<div class="grid-2-no-gap">
<div class="box-bg-img" style="background-image:url('${eAudisisImgTrade.src}');"></div>
<div class="flex-col-sc padding-3-2">
    <h1>Desarrollo de aplicaciones web y móviles.</h1>
    <h4>okasodiajdaoksd</h4>
</div>
</div>
<div class="grid-2-no-gap">
<div class="flex-col-sc padding-3-2">
    <h1>Servicio de Nube corporativa para tu empresa.</h1>
    <h4>Disponibilizamos un drive administrable para las empresas y la posibilidad de compartir archivos directamente desde la nube.</h4>
</div>
<div class="box-bg-img" style="background-image:url('${eAudisisImgTrade.src}');"></div>
</div>
`
const callService = (event) => {
    event.preventDefault
    let description = [event.currentTarget.id]
    
    if(description == 'desarrollodesoftware'){
        eAudisisId.innerHTML = desarrollodeSoftwareInfo
    }else if(description == 'bi'){
        eAudisisId.innerHTML = biInfo
    }else if(description == 'aplicaciones'){
        eAudisisId.innerHTML = aplicacionesInfo
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

   eAudisisId.innerHTML = desarrollodeSoftwareInfo
}
