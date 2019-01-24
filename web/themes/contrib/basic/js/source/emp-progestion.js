const   eProgestionId = document.getElementById('js-emp-progestion-content'),
        eProgestionHeroId = document.getElementById('js-emp-progestion-hero'),
        eProgestionMenuId = document.getElementById('js-emp-progestion-menu'),
        eProgestionMenuContent = document.createElement('div'),
        eProgestionContainer = document.createElement('div')


if(eProgestionHeroId){
    const eProgestionHeroContent = document.createElement('div')
    eProgestionHeroContent.innerHTML = `
    <div class="hero__container" style="background-image: url(${empresas['progestion'].img.src});">
        <div class="padding-3-2 hero__content hero__content--progestion">
            <div class="hero__box flex-col-cc">
                <object class="hero__logo" data="${empresas['progestion'].logoWhite.src}" type="image/svg+xml"></object>
                <h4>Líderes en gestión integral</h4>
                <p>Empresa Orientada a ser parte estratégica de cada cliente como un socio comercial en cada recurso contratado, profesionalizando sus roles y resultados todos enfocados en los KPI del cliente</p>
            </div>
        </div>
    </div>
    `
    eProgestionHeroId.appendChild(eProgestionHeroContent)
}

if(eProgestionMenuId){
    eProgestionMenuContent.classList = "sidebar_second"
    eProgestionMenuContent.innerHTML = `
    <div class="flex-col-ss">
        <li onclick="selectTab(this)" class="js-capture-id" id="service1"><p>Outsourcing</p></li>
        <li onclick="selectTab(this)" class="js-capture-id" id="service2"><p>Área Distribución</p></li>
        <li onclick="selectTab(this)" class="js-capture-id" id="service3"><p>Área salud</p></li>
    </div>
    `
    eProgestionMenuId.appendChild(eProgestionMenuContent)

const service1Info = `
    <div class="flex-col-ss">
        <h3>Nuestro Principal foco, es apoyar con la mayor eficiencia en diferente servicios a nuestros cliente</h3>
        <img class="width-100" src="${empresas['progestion'].img.src}" alt="imagen progestion">
        <p>Reposición, KAM -KAS, BI, vendedores, supervisores, jefaturas y mucho más.</p>
 
        <h5>Auditoría y toma de data en cada PDV</h5>
        <p>en base a necesidad y medida de cada cliente.</p>
       
        <h5>Personal exclusivo</h5>
        <p>Con cobertura en todo el país, ofrecemos personal exclusivo o compartido por cuenta según los requerimientos de cada cliente.</p>
        
        <h5>Mejoras continuas</h5>
        <p>Enfocadas en los RRHH, selección y escuelas de entrenamiento</p>
        
        <h5>Apoyo en TMKG y gestión BI</h5>
        <p>Reportes on-line en base a los KPI's definidos por el cliente</p>
        
    </div>
    `

    const service2Info = `
    <div class="flex-col-ss">
    <img class="width-100" src="${empresas['progestion'].img.src}" alt="imagen progestion">
        <h3>Cobertura nacional</h3>
        <p>contamos con cobertura total para todos los cargos</p>

        <h5>Supervisión constante</h5>
        <p>junto con apoyo del Área de Prevención de Riesgo y RRHH.</p>

        <h5>Cargos definidos</h5>
        <p>Bodegueros, manejadores de maquinaría yales, grúas etc. Supervisores, prevencionistas de riesgo, área de administración, jefaturas y más.</p>
    </div>
    `

const service3Info = `
    <div class="flex-col-ss">
        <img class="width-100" src="${empresas['progestion'].img.src}" alt="imagen progestion">

        <h3>Estamos en todos los centros médicos</h3>
        <p>Consultas, farmacias y laboratorios con distintos cargos y roles</p>

        <h5>Mejoras continuas y capacitaciones personalizadas</h5>
        <p>Enfocadas a potenciar las habilidades y mejorar la debilidades de los seleccionados</p>

        <h5>Con cargos definidos</h5>
        <p>Arsenaleras, asistentes quirúrgicos, matronas, visitantes médicos, nutricionistas, veterinarios, jefaturas, encargads de pabellón y más.</p>
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
