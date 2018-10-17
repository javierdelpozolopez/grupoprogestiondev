"use strict";var menuServicesId=document.getElementById("js-menu-services"),menuServicesContent=document.createElement("div"),servicesDataId=document.getElementById("js-services-data"),servicesHeroId=document.getElementById("js-services-hero"),serviceHeroContent=document.createElement("div"),serviceHeroLogo=new Image,serviceCreceImg=new Image,serviceProgestionImg=new Image,serviceEnstiImg=new Image,serviceDisecomImg=new Image,serviceAudisisImg=new Image;if(menuServicesId){servicesDataId.classList="padding-3-0",serviceHeroLogo.src=imageUrl+"svg/icon-360-blue.svg",serviceCreceImg.src=imageUrl+"emp-crece-650x260.jpg",serviceProgestionImg.src=imageUrl+"emp-progestion-650x260.jpg",serviceEnstiImg.src=imageUrl+"emp-ensti-650x260.jpg",serviceDisecomImg.src=imageUrl+"emp-disecom-650x260.jpg",serviceAudisisImg.src=imageUrl+"/emp-audisis-650x260.jpg",serviceHeroContent.innerHTML='\n    <div class="grid grid-2--20-80 padding-3-0">\n        <div class="">\n        <img class="icon-big" src="'+serviceHeroLogo.src+'" alt="logo 360">\n        </div>\n        <div class="flex-col-cc">\n            <h1 class="color-primary">Entregamos soluciones 360° en Marketing, Trade, Logística, Outsourcing, Tecnología y Capacitaciones.</h1>\n            <p>Ofrecemos soluciones a medida de nuestros clientes, nos hacemos responsables de un proceso completo, o de una parte de éste, siempre con excelencia e innovación.</p>\n        </div>\n    </div>\n    ',servicesHeroId&&servicesHeroId.appendChild(serviceHeroContent),menuServicesContent.innerHTML='\n    <ul class="services-menu__ul flex-col-ss" id="js-menu-services-action">\n    <li class="js-capture-id" id="disecom">Marketing,Trade y Bodegaje</li>\n    <li class="js-capture-id" id="progestion">Outsourcing y gestión integral</li>\n    <li class="js-capture-id" id="ensti">Servicios Transitorios</li>\n    <li class="js-capture-id" id="crece">Capacitaciones</li>\n    <li class="js-capture-id" id="audisis">Desarrollo de tecnología y BI</li>\n    <li class="js-capture-id" id="progestion">Facility Services</li>\n    </ul>\n    ',menuServicesId&&menuServicesId.appendChild(menuServicesContent);var servicesData={progestion:{logo:logoProgestion,img:serviceProgestionImg.src,title:"Outsourcing y Servicios Integrales con 20 años de experiencia",desc:"Entidad especializada en poner a disposición de nuestros clientes, personal calificado y capacitado, que permita alcanzar los objetivos comerciales y operacionales de las empresas. Los servicios de Outsourcing o tercerización son una creciente realidad a nivel mundial.",services:"<li>Outsourcing</li><li>Gestión Integral</li><li>Promotoría</li><li>Implementación</li><li>KAM</li>",url:"/progestion"},disecom:{logo:logoDisecom,img:serviceDisecomImg.src,title:"Trade Marketing, Diseño y Supply Chain Management",desc:"Disecom ofrece una amplia variedad de servicios enfocados al trade marketing, diseño, producción y distribución, pensados para potenciar el PDV en todos los canales, asi como eventos especiales como ferias o eventos nacionales e internacionales.",services:"<li>Diseño y Producción</li><li>Representantes de Marca</li><li>Diseño y producción de Stands</li><li>Diseño de Material POP</li><li>Marketing</li><li>Digital Media y Diseño web</li><li>Producción Audiovisual</li><li>Trade Marketing</li><li>Implementación y Control de PDV</li><li>Auditoría en el PDV</li><li>Equipos Swatt de reposición</li><li>Focus Group, Inspector incognito</li><li>Levantamiento de Información y BBDD con estadísticas</li>",url:"/disecom"},ensti:{logo:logoEnsti,img:serviceEnstiImg.src,title:"Servicios Transitorios",desc:"Para eventos o campañas con fechas de termino definidas, licencias o remplazos.",services:"<li>Selección de personal</li><li>Capacitaciones</li><li>Selección de personal</li><li>Seguimiento</li>",url:"/ensti"},crece:{logo:logoCrece,img:serviceCreceImg.src,title:"Centro de Capacitaciones",desc:"Nuestras capacitaciones entregan mejores oportunidades, condiciones de vida, de trabajo e incrementa la productividad. Tenemos capacitaciones por Código Sence y particulares.",services:"<li>Cursos por código Sence o Privados</li><li>Salas Propias</li><li>OTEC Certificada ISO 9.001</li>",url:"/crece"},audisis:{logo:logoAudisis,img:serviceAudisisImg.src,title:"Tecnología e inteligencia de negocios",desc:"En AUDISIS estamos comprometidos y enfocados en que nuestros clientes crezcan y rentabilicen sus negocios, apoyándolos con herramientas tecnológicas customizables para la toma de decisiones estratégicas. Innovando e integrando nuestras soluciones de inteligencia y servicios de tecnología a los procesos claves del negocio de nuestros clientes.",services:"<li>inteligencia de negocios, integración de datos y analytics</li><li>Extracción, transformación y carga de información comercio exterior</li><li>CheckRoom: Plataforma móvil y ambiente web para el cliente destinado a levantar desde terreno información y disponibilizarla en dashboards de control online para clientes de promotoría.</li><li>Plataforma de gastos corporativos: Servicio web que facilita, agiliza y hace más robusto el proceso de rendición de gastos en la empresa. Gestiona las rendiciones de gastos y automatiza la administración de estos.</li><li>Desarrollo de aplicaciones web y móviles.</li><li>Nube corporativa para tu empresa.</li>",url:"/audisis"}},callService=function(e){e.preventDefault;var i=servicesData[e.currentTarget.id],s='\n            <div class="service__emp">\n                <div class="flex-row-ssb padding-1-0-1-0">\n                    <img class="icon-normal" src="'+i.logo.src+'" alt="logo">\n                    <a class="btn btn__secondary" href="'+i.url+'">Ir al sitio</a>\n                </div>\n                <img class="img-100w border-radius-8" src="'+i.img+'" alt="img">\n                <h1 class="padding-1-0-1-0 color-primary">'+i.title+'</h1>\n                <ul class="list-decorate">'+i.services+"</ul>\n            </div>\n        ";servicesDataId&&(servicesDataId.innerHTML=s)},menuServicesCaptId=Array.from(document.getElementsByClassName("js-capture-id"));menuServicesCaptId.map(function(e){return e.addEventListener("click",callService,!0)})}
//# sourceMappingURL=servicios.js.map
