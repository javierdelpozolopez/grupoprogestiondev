const   imgEnsti = new Image(),
        imgAudisis = new Image(),
        imgCrece = new Image(),
        imgDisecom = new Image(),
        imgProgestion = new Image(),
        logoEnsti = new Image(),
        logoAudisis = new Image(),
        logoCrece = new Image(),
        logoDisecom = new Image(),
        logoProgestion = new Image()

const imageUrl = './../web/themes/contrib/basic/images/source/'

imgEnsti.src = imageUrl + 'emp-ensti.jpg'
imgAudisis.src = imageUrl + 'emp-audisis.jpg'
imgCrece.src = imageUrl + 'emp-crece.jpg'
imgDisecom.src = imageUrl + 'emp-disecom.jpg'
imgProgestion.src = imageUrl + 'emp-progestion.jpg'

logoEnsti.src = imageUrl + 'svg/logo-ensti.svg'
logoAudisis.src = imageUrl + 'svg/logo-audisis.svg'
logoCrece.src = imageUrl + 'svg/logo-crece.svg'
logoDisecom.src = imageUrl + 'svg/logo-disecom.svg'
logoProgestion.src = imageUrl + 'svg/logo-progestion.svg'


const empresas = {
    'ensti': {
        img: imgEnsti,
        logo: logoEnsti,
        desc: 'Reclutamiento, selección y contratación de personal.',
        link: '/empresas#ensti'
    },
    'audisis': {
        img: imgAudisis,
        logo: logoAudisis,
        desc: 'Desarrollo de tecnología e inteligencia de negocios.',
        link: '/empresas#audisis'
    },
    'crece': {
        img: imgCrece,
        logo: logoCrece,
        desc: 'Capacitaciones por código Sence o privadas.',
        link: '/empresas#crece'
    },
    'disecom': {
        img: imgDisecom,
        logo: logoDisecom,
        desc: 'Diseño, trade, marketing y producción',
        link: '/empresas#disecom'
    },
    'progestion':{
        img: imgProgestion,
        logo: logoProgestion,
        desc: 'Outsourcing y gestión integral',
        link: '/empresas#progestion'
    }
}

const empContainer = document.getElementById('js-emp')
const empGrid3col = document.createElement('div')
const empGrid2col = document.createElement('div')

empGrid3col.className = 'grid grid-3'
empGrid2col.className = 'grid grid-2 margin-top-10'

empGrid3col.innerHTML = `
    <div class="card flex-start-start">
        <div class="card__img" style="background-image:url('${empresas['ensti'].img.src}');"></div>
        <div class="card__info-area">
            <img class="card__logo" src="${empresas['ensti'].logo.src}" alt="logo ensti">
            <h3>${empresas['ensti'].desc}</h3>
        </div>
        <div class="card__actions">
            <a class="btn btn__secondary" href="${empresas['ensti'].link}">Ver más</a>
        </div>
    </div>

    <div class="card flex-start-start">
        <div class="card__img" style="background-image:url('${empresas['audisis'].img.src}');"></div>
        <div class="card__info-area">
            <img class="card__logo" src="${empresas['audisis'].logo.src}" alt="logo audisis">
            <h3>${empresas['audisis'].desc}</h3>
        </div>
        <div class="card__actions">
        <a class="btn btn__secondary" href="${empresas['audisis'].link}">Ver más</a>
        </div>
    </div>

    <div class="card flex-start-start">
        <div class="card__img" style="background-image:url('${empresas['crece'].img.src}');"></div> 
        <div class="card__info-area">
            <img class="card__logo" src="${empresas['crece'].logo.src}" alt="logo crece">
            <h3>${empresas['crece'].desc}</h3>
        </div>
        <div class="card__actions">
            <a class="btn btn__secondary" href="${empresas['crece'].link}">Ver más</a>
        </div>
    </div>
`
empGrid2col.innerHTML = `
<div class="card flex-start-start">
    <div class="card__img" style="background-image:url('${empresas['disecom'].img.src}');"></div>
 
    <div class="card__info-area">
        <img class="card__logo" src="${empresas['disecom'].logo.src}" alt="logo disecom">
        <h3>${empresas['disecom'].desc}</h3>
    </div>
    <div class="card__actions">
        <a class="btn btn__secondary" href="${empresas['disecom'].link}">Ver más</a>
    </div>
</div>
<div class="card flex-start-start">
    <div class="card__img" style="background-image:url('${empresas['progestion'].img.src}');"></div>
    <div class="card__info-area">
        <img class="card__logo" src="${empresas['progestion'].logo.src}" alt="logo progestion">
        <h3>${empresas['progestion'].desc}</h3>
    </div>
    <div class="card__actions">
        <a class="btn btn__secondary" href="${empresas['progestion'].link}">Ver más</a>
    </div>
</div>
`

empContainer.appendChild(empGrid3col)
empContainer.appendChild(empGrid2col)