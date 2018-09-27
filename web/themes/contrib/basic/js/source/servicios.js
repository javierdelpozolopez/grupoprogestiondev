const   menuServicesId = document.getElementById('js-menu-services'),
        menuServicesContent = document.createElement('div'),
        servicesDataId = document.getElementById('js-services-data'),
        servicesHeroId = document.getElementById('js-services-hero'),
        serviceHeroContent = document.createElement('div'),
        serviceHeroLogo = new Image(),
        serviceCreceImg = new Image(),
        serviceProgestionImg = new Image(),
        serviceEnstiImg = new Image(),
        serviceDisecomImg = new Image(),
        serviceAudisisImg = new Image();

servicesDataId.classList = 'padding-3-0rem';
serviceHeroLogo.src = imageUrl + 'svg/icon-360-blue.svg';
serviceCreceImg.src = imageUrl + 'emp-crece-650x260.jpg';
serviceProgestionImg.src = imageUrl + 'emp-progestion-650x260.jpg';
serviceEnstiImg.src = imageUrl + 'emp-ensti-650x260.jpg';
serviceDisecomImg.src = imageUrl + 'emp-disecom-650x260.jpg';
serviceAudisisImg.src = imageUrl + '/emp-audisis-650x260.jpg';

serviceHeroContent.innerHTML = `
<div class="grid grid-2--20-80 padding-3-0rem">
    <div class="">
    <img class="icon-big" src="${serviceHeroLogo.src}" alt="logo 360">
    </div>
    <div class="flex-col-cc">
        <h1 class="color-primary">Entregamos soluciones 360° en Marketing, Trade, Logística, Outsourcing, Tecnología y Capacitaciones.</h1>
        <p>Ofrecemos soluciones a medida de nuestros clientes, nos hacemos responsables de un proceso completo, o de una parte de éste, siempre con excelencia e innovación.</p>
    </div>
</div>
`

if(servicesHeroId){
    servicesHeroId.appendChild(serviceHeroContent)
}

menuServicesContent.innerHTML = `
<ul class="services-menu__ul flex-col-ss" id="js-menu-services-action">
<li class="js-capture-id" id="disecom">Marketing,Trade y Bodegaje</li>
<li class="js-capture-id" id="progestion">Outsourcing y gestión integral</li>
<li class="js-capture-id" id="ensti">Servicios Transitorios</li>
<li class="js-capture-id" id="crece">Capacitaciones</li>
<li class="js-capture-id" id="audisis">Desarrollo de tecnología y BI</li>
<li class="js-capture-id" id="progestion">Facility Services</li>
</ul>
`
if(menuServicesId){
    menuServicesId.appendChild(menuServicesContent)    
}


const servicesData = {
    'progestion':{
        logo: logoProgestion,
        img: serviceProgestionImg.src,
        title: 'Outsourcing y Servicios Integrales con 20 años de experiencia',
        desc: 'Entidad especializada en poner a disposición de nuestros clientes, personal calificado y capacitado, que permita alcanzar los objetivos comerciales y operacionales de las empresas. Los servicios de Outsourcing o tercerización son una creciente realidad a nivel mundial.',
        services: '<li>Outsourcing</li><li>Gestión Integral</li><li>Promotoría</li><li>Implementación</li><li>KAM</li>',
        url: '/progestion'
    },
    'disecom':{
        logo: logoDisecom,
        img: serviceDisecomImg.src,
        title: 'Trade Marketing, Diseño y Supply Chain Management',
        desc: 'Disecom ofrece una amplia variedad de servicios enfocados al trade marketing, diseño, producción y distribución, pensados para potenciar el PDV en todos los canales, asi como eventos especiales como ferias o eventos nacionales e internacionales.',
        services: '<li>Diseño y Producción</li><li>Representantes de Marca</li><li>Diseño y producción de Stands</li><li>Diseño de Material POP</li><li>Marketing</li><li>Digital Media y Diseño web</li><li>Producción Audiovisual</li><li>Trade Marketing</li><li>Implementación y Control de PDV</li><li>Auditoría en el PDV</li><li>Equipos Swatt de reposición</li><li>Focus Group, Inspector incognito</li><li>Levantamiento de Información y BBDD con estadísticas</li>',
        url: '/disecom'
    },
    'ensti':{
        logo: logoEnsti,
        img: serviceEnstiImg.src,
        title: 'Servicios Transitorios',
        desc: 'Para eventos o campañas con fechas de termino definidas, licencias o remplazos.',
        services: '<li>Selección de personal</li><li>Capacitaciones</li><li>Selección de personal</li><li>Seguimiento</li>',
        url: '/ensti'
    },
    'crece':{
        logo: logoCrece,
        img: serviceCreceImg.src,
        title: 'Centro de Capacitaciones',
        desc: 'Nuestras capacitaciones entregan mejores oportunidades, condiciones de vida, de trabajo e incrementa la productividad. Tenemos capacitaciones por Código Sence y particulares.',
        services: '<li>Cursos por código Sence o Privados</li><li>Salas Propias</li><li>OTEC Certificada ISO 9.001</li>',
        url: '/crece'
    },
    'audisis':{
        logo: logoAudisis,
        img: serviceAudisisImg.src,
        title: 'Tecnología e inteligencia de negocios',
        desc: 'En AUDISIS estamos comprometidos y enfocados en que nuestros clientes crezcan y rentabilicen sus negocios, apoyándolos con herramientas tecnológicas customizables para la toma de decisiones estratégicas. Innovando e integrando nuestras soluciones de inteligencia y servicios de tecnología a los procesos claves del negocio de nuestros clientes.',
        services: '<li>inteligencia de negocios, integración de datos y analytics</li><li>Extracción, transformación y carga de información comercio exterior</li><li>CheckRoom: Plataforma móvil y ambiente web para el cliente destinado a levantar desde terreno información y disponibilizarla en dashboards de control online para clientes de promotoría.</li><li>Plataforma de gastos corporativos: Servicio web que facilita, agiliza y hace más robusto el proceso de rendición de gastos en la empresa. Gestiona las rendiciones de gastos y automatiza la administración de estos.</li><li>Desarrollo de aplicaciones web y móviles.</li><li>Nube corporativa para tu empresa.</li>',
        url: '/audisis'
    }
}

const callService = (event) => {
    event.preventDefault
    let description = servicesData[event.currentTarget.id]
    const info = `
        <div class="service__emp">
            <div class="flex-row-ssb padding-1-0-1-0">
                <img class="icon-normal" src="${description.logo.src}" alt="logo">
                <a class="btn btn__secondary" href="${description.url}">Ir al sitio</a>
            </div>
            <img class="img-100w border-radius-8" src="${description.img}" alt="img">
            <h1 class="padding-1-0-1-0 color-primary">${description.title}</h1>
            <ul class="list-decorate">${description.services}</ul>
        </div>
    `
    if(servicesDataId){
        servicesDataId.innerHTML = info
    }
}

const menuServicesCaptId = Array.from(document.getElementsByClassName('js-capture-id'))

menuServicesCaptId.map((s) => s.addEventListener('click', callService, true))