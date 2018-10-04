const   eProgestionId = document.getElementById('js-emp-progestion-content'),
        eProgestionHeroId = document.getElementById('js-emp-progestion-hero'),
        eProgestionMenuId = document.getElementById('js-emp-progestion-menu'),
        eProgestionMenuContent = document.createElement('div'),
        eProgestionContainer = document.createElement('div')


if(eProgestionHeroId){
    const eProgestionHeroContent = document.createElement('div')
    const imageUrl = './../themes/contrib/basic/images/source/'
    const logo = new Image()
    logo.src = imageUrl + 'svg/logo-progestion.svg'

    eProgestionHeroContent.innerHTML = `
    <div class="flex-column-cc text-align-center padding-3-0 max-w-720">
        <img class="icon-bigger margin-bottom-2" src="${logo.src}" alt="Logo Progestion">
        <h1>Líderes en gestión integral</h1>
        <p>Empresa Orientada a ser parte estratégica de cada cliente como un socio comercial en cada recurso contratado , profesionalizando sus roles y resultados todos enfocados en los KPI del cliente</p>
    </div>
    `
    eProgestionHeroId.appendChild(eProgestionHeroContent)
}




if(eProgestionMenuId){
    eProgestionMenuContent.classList = "top-bar__content"
    eProgestionMenuContent.innerHTML = `
    <div class="flex-row-cse head-menu margin-bottom-2">
        <li onclick="selectTab(this)" class="js-capture-id" id="service1"><p>Outsourcing</p></li>
        <li onclick="selectTab(this)" class="js-capture-id" id="service2"><p>Área Distribución</p></li>
        <li onclick="selectTab(this)" class="js-capture-id" id="service3"><p>Área salud</p></li>
    </div>
    `
    eProgestionMenuId.appendChild(eProgestionMenuContent)

const  eProgestionImg = new Image()

const imageUrl = './../themes/contrib/basic/images/source/'

    eProgestionImg.src = imageUrl + 'emp-progestion.jpg'

const service1Info = `
    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eProgestionImg.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>Nuestro Principal foco, es apoyar con la mayor eficiencia en diferente servicios a nuestros cliente</h1>
            <h4>Reposición, KAM -KAS, BI, vendedores, supervisores, jefaturas y mucho más.</h4>
        </div>
    </div>

    <div class="grid-2-no-gap">
        <div class="flex-col-sc padding-3-2">
            <h1>Auditoría y toma de data en cada PDV</h1>
            <h4>en base a necesidad y medida de cada cliente.</h4>
        </div>
        <div class="box-bg-img" style="background-image:url('${eProgestionImg.src}');"></div>
    </div>

    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eProgestionImg.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>Personal exclusivo</h1>
            <h4>Con cobertura en todo el país, ofrecemos personal exclusivo o compartido por cuenta según los requerimientos de cada cliente.</h4>
        </div>
    </div>

    <div class="grid-2-no-gap">
        <div class="flex-col-sc padding-3-2">
            <h1>Mejoras continuas</h1>
            <h4>Enfocadas en los RRHH, selección y escuelas de entrenamiento</h4>
        </div>
        <div class="box-bg-img" style="background-image:url('${eProgestionImg.src}');"></div>
    </div>

    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eProgestionImg.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>Apoyo en TMKG y gestión BI</h1>
            <h4>Reportes on-line en base a los KPI's definidos por el cliente</h4>
        </div>
    </div>
    `
    const service2Info = `
    <div class="grid-2-no-gap">
    <div class="box-bg-img" style="background-image:url('${eProgestionImg.src}');"></div>
    <div class="flex-col-sc padding-3-2">
        <h1>Cobertura nacional</h1>
        <h4>contamos con cobertura total para todos los cargos</h4>
    </div>
    </div>
    <div class="grid-2-no-gap">
    <div class="flex-col-sc padding-3-2">
        <h1>Supervisión constante</h1>
        <h4>junto con apoyo del Área de Prevención de Riesgo y RRHH.</h4>
    </div>
    <div class="box-bg-img" style="background-image:url('${eProgestionImg.src}');"></div>
    </div>
    <div class="grid-2-no-gap">
    <div class="box-bg-img" style="background-image:url('${eProgestionImg.src}');"></div>
    <div class="flex-col-sc padding-3-2">
        <h1>Cargos definidos</h1>
        <h4>Bodegueros, manejadores de maquinaría yales, grúas etc. Supervisores, prevencionistas de riesgo, área de administración, jefaturas y más.</h4>
    </div>
    </div>
    `

const service3Info = `
    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eProgestionImg.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>Estamos en todos los centros médicos</h1>
            <h4>Consultas, farmacias y laboratorios con distintos cargos y roles</h4>
        </div>
    </div>
    <div class="grid-2-no-gap">
        <div class="flex-col-sc padding-3-2">
            <h1>Mejoras continuas y capacitaciones personalizadas</h1>
            <h4>Enfocadas a potenciar las habilidades y mejorar la debilidades de los seleccionados</h4>
        </div>
        <div class="box-bg-img" style="background-image:url('${eProgestionImg.src}');"></div>
    </div>
    <div class="grid-2-no-gap">
        <div class="box-bg-img" style="background-image:url('${eProgestionImg.src}');"></div>
        <div class="flex-col-sc padding-3-2">
            <h1>Con cargos definidos</h1>
            <h4>Arsenaleras, asistentes quirúrgicos, matronas, visitantes médicos, nutricionistas, veterinarios, jefaturas, encargads de pabellón y más.</h4>
        </div>
    </div>
    `

const callService = (event) => {
    event.preventDefault
    let description = [event.currentTarget.id]
    
    if(description == 'service1'){
        eProgestionId.innerHTML = service1Info
    }else if(description == 'service2'){
        eProgestionId.innerHTML = service2Info
    }else if(description == 'service3'){
        eProgestionId.innerHTML = service3Info
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

   eProgestionId.innerHTML = service1Info
}
