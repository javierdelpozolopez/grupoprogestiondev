const   anivId = document.getElementById('js-anos'),
        anivContent = document.createElement('div'),
        anivImg = new Image()

anivContent.classList = 'grid-col-6 padding-1-0-1-0'
anivImg.src = imageUrl + 'svg/icon-20-anos.svg'

anivContent.innerHTML = `
<div class="aniv__img">
<img class="icon-bigger" src="${anivImg.src}" alt="20 Años de experiencia">
</div>
<div class="aniv__text flex-col-ss">
<h2 class="color-primary">La confianza de nuestros clientes nos hace ser diferentes</h2>
<p>Llevamos 20 años liderando el mercado internacional, ampliando nuestros servicios y profesionalizando diariamente a nuestro personal, este logro se debe al esfuerzo constante por innovar y la confianza que depositamos en nuetros colaboradores, además de la satisfación de nuetros clientes por los resultados obtenidos a lo largo del tiempo.</p>
</div>
`
if(anivId){
    anivId.appendChild(anivContent)
}

const   misionVisionId = document.getElementById('js-mision-vision'),
        misionVisionContent = document.createElement('div')

misionVisionContent.classList = 'grid-col-6 padding-1-0-1-0'

misionVisionContent.innerHTML = `
<div class="mision-vision__hero flex-col-ss">
    <h2 class="color-primary">Quienes somos</h2>
    <h5>Grupo Progestion, nace con el objetivo de entregar un servicio de alto valor y lograr sobre pasar las expectativas de nuestros Socios Comerciales, todo esto con innovación y mejora continua, incorporando tecnología en todos nuestros servicios.</h5>
</div>
<div class="mision-vision__text flex-col-ss">
    <h3 class="color-primary">Misión</h3>
    <p>Proveer servicios, productos y tecnologías con calidad internacional, bajo un enfoque de mejora y desarrollo de condiciones competitivas que nos fortalezcan en los mercados actuales y futuros, a través de un personal competente y comprometido.</p>
    <h3 class="color-primary">Visión</h3>
    <p>Consolidarnos como proveedores líderes de servicios integrales en los mercados que participamos, convirtiéndonos en una empresa reconocida por su prestigio internacional como una empresa innovadora, socialmente responsable y de vanguardia.</p>
</div>
`
if(misionVisionId){
    misionVisionId.appendChild(misionVisionContent)
}

const   valoresMainId = document.getElementById('js-valores-main'),
        valoresMainContent = document.createElement('div'),
        valoresIcon = new Image()

valoresIcon.src = imageUrl + 'svg/icon-copa.svg'
valoresMainContent.className = 'grid-col-8 valores__container'

valoresMainContent.innerHTML = `
<div class="valores-main flex-col-cc text-align-center">
<img class="icon-big" alt="Copa" src="${valoresIcon.src}"/>
<h2 class="color-primary">Nuestros Valores nos hacen diferentes</h2>
<p>Somos una empresa seria, profesional y humana en sus tratos y con su entorno, respetamos el medio ambiente en cada acto que realizamos y mantenemos relaciones duraderas y responsables con todos nuestros clientes.</p>
</div>
`

if(valoresMainId){
    valoresMainId.appendChild(valoresMainContent)
}

const   valoresCardsId = document.getElementById('js-valores-cards'),
        valoresCardContent = document.createElement('div'),
        fomentoImg = new Image(),
        valRespetoImg = new Image(),
        valSatisfaccionImg = new Image(),
        valCumplimientoImg = new Image()

fomentoImg.src = imageUrl + 'svg/icon-capacitaciones.svg'
valRespetoImg.src = imageUrl + 'svg/icon-hand.svg'
valSatisfaccionImg.src = imageUrl + 'svg/icon-satisfaccion.svg'
valCumplimientoImg.src = imageUrl + 'svg/icon-primeros.svg'

valoresCardContent.className = 'grid-col-4 padding__2'

valoresCardContent.innerHTML = `
<div class="card card__bg-blue flex-col-cc text-align-center padding__2">
    <img class="card__icon-60px" src="${fomentoImg.src}" alt="icon"/>
    <p class="text__white">El fomento al desarrollo profesional</p>
</div>

<div class="card card__bg-blue flex-col-cc text-align-center padding__2">
    <img class="card__icon-60px" src="${valRespetoImg.src}" alt="icon"/>
    <p class="text__white">El respeto a nuestros clientes y compañeros</p>
</div>

<div class="card card__bg-blue flex-col-cc text-align-center padding__2">
    <img class="card__icon-60px" src="${valSatisfaccionImg.src}" alt="icon"/>
    <p class="text__white">La satisfacción de nuestros clientes</p>
</div>

<div class="card card__bg-blue flex-col-cc text-align-center padding__2">
    <img class="card__icon-60px" src="${valCumplimientoImg.src}" alt="icon"/>
    <p class="text__white">El cumplimiento de nuetros compromisos</p>
</div>
`

if(valoresCardsId){
    valoresCardsId.appendChild(valoresCardContent) 
}
