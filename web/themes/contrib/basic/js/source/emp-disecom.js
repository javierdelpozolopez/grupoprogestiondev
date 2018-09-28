const   eDisecomId = document.getElementById('js-emp-disecom'),
        eDisecomContainer = document.createElement('div')

if(eDisecomId){
    const   eDisecomImgTrade = new Image(),
            eDisecomImgSupply = new Image(),
            eDisecomImgDiseno = new Image(),
            eDisecomIconTrade = new Image(),
            eDisecomIconSupply = new Image(),
            eDisecomIconDiseno = new Image()

const imageUrl = './../themes/contrib/basic/images/source/';

    eDisecomImgTrade.src = imageUrl + 'emp-disecom-bodega.jpg'
    eDisecomImgSupply.src = imageUrl + 'emp-disecom-bodega.jpg'
    eDisecomImgDiseno.src = imageUrl + 'name.jpg'
    eDisecomIconTrade.src = imageUrl + 'svg/name.svg'
    eDisecomIconSupply.src = imageUrl + 'svg/name.svg'
    eDisecomIconDiseno.src = imageUrl + 'svg/name.svg'

    const eDisecomServices = {
        'trade-marketing': {
            title: 'Trade Marketing',
            icon: '',
            img: eDisecomImgTrade,
            services: '<li>Implementación y Control de PDV.</li><li>Auditoria de PDV.</li><li>Equipos Swatt de reposición: realizan visitas según ruta logrando eficiencia en tiempo-recurso-cobertura.</li><li>Equipos Trade Marketing exclusivos y/o por evento.</li><li>Focus Group.</li><li>Inspector incógnito.</li><li>Levantamiento para generación de BBDD y estadística.</li><li>Levantamiento para generación de BBDD y estadística y Plan estratégico de visitas por zonas (Barrido).</li>'
        },
        'supply-chain-management': {
            title: 'Supply Chain Management',
            icon: '',
            img: eDisecomImgTrade,
            services: '<li>Maquila.</li><li>WMS y control on-line.</li><li>6.000 mts2.</li><li>Úbicadas dentro de Bodegas San Francisco, Puerto Madero.</li>'
        },
        'diseño-y-produccion': {
            title: 'Diseño y Producción',
            icon: '',
            img: '',
            services: '<li>Marketing BTL</li><li>Dirección de arte.</li><li>Branding e identidad de marca.</li><li>Digital, web y social media.</li><li>Producción y publicidad.</li><li>Activaciones y ferias.</li><li>Promotoría y Gestores de Venta.</li>'
        }
    }
    eDisecomContainer.innerHTML = `
    <div class="grid-emp__container-one">
        <div class="grid-emp__img" style="background-image:url('${eDisecomServices['trade-marketing'].img.src}');"></div>
        <div class="grid-emp__icon"></div>
        <div class="grid-emp__title"><h2>${eDisecomServices['trade-marketing'].title}</h2></div>
        <div class="grid-emp__box"><ul class="list-decorate">${eDisecomServices['trade-marketing'].services}</ul></div>
    </div>
    `
    eDisecomId.appendChild(eDisecomContainer)
}        

