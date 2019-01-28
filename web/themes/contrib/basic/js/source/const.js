const   imgEnsti = new Image(),
        imgAudisis = new Image(),
        imgCrece = new Image(),
        imgDisecom = new Image(),
        imgProgestion = new Image(),

        logoEnsti = new Image(),
        logoEnstiWhite = new Image(),
        logoAudisis = new Image(),
        logoAudisisWhite = new Image(),
        logoCrece = new Image(),
        logoCreceWhite = new Image(),
        logoDisecom = new Image(),
        logoDisecomWhite = new Image(),
        logoProgestion = new Image(),
        logoProgestionWhite = new Image(),

        svgClose = new Image(),

        imageUrl = '../themes/contrib/basic/images/source/';

imgEnsti.src = imageUrl + 'emp-ensti.jpg';
imgAudisis.src = imageUrl + 'emp-audisis.jpg';
imgCrece.src = imageUrl + 'emp-crece.jpg';
imgDisecom.src = imageUrl + 'emp-disecom.jpg';
imgProgestion.src = imageUrl + 'emp-progestion.jpg';

logoEnsti.src = imageUrl + 'svg/logo-ensti.svg';
logoEnstiWhite.src = imageUrl + 'svg/logo-ensti-white.svg';
logoAudisis.src = imageUrl + 'svg/logo-audisis.svg';
logoAudisisWhite.src = imageUrl + 'svg/logo-audisis-white.svg';
logoCrece.src = imageUrl + 'svg/logo-crece.svg';
logoCreceWhite.src = imageUrl + 'svg/logo-crece-white.svg';
logoDisecom.src = imageUrl + 'svg/logo-disecom.svg';
logoDisecomWhite.src = imageUrl + 'svg/logo-disecom-white.svg';
logoProgestion.src = imageUrl + 'svg/logo-progestion.svg';
logoProgestionWhite.src = imageUrl + 'svg/logo-progestion-white.svg';

svgClose.src = imageUrl + 'svg/icon-close.svg';

const empresas = {
    'ensti': {
        img: imgEnsti,
        logo: logoEnsti,
        logoWhite: logoEnstiWhite,
        desc: 'Reclutamiento, selección y contratación de personal.',
        link: '/empresas/ensti'
    },
    'audisis': {
        img: imgAudisis,
        logo: logoAudisis,
        logoWhite: logoAudisisWhite,
        desc: 'Desarrollo de tecnología e inteligencia de negocios.',
        link: '/empresas/audisis'
    },
    'crece': {
        img: imgCrece,
        logo: logoCrece,
        logoWhite: logoCreceWhite,
        desc: 'Capacitaciones por código Sence o privadas.',
        link: '/empresas/crece'
    },
    'disecom': {
        img: imgDisecom,
        logo: logoDisecom,
        logoWhite: logoDisecomWhite,
        desc: 'Diseño, trade, marketing y producción',
        link: '/empresas/disecom'
    },
    'progestion':{
        img: imgProgestion,
        logo: logoProgestion,
        logoWhite: logoProgestionWhite,
        desc: 'Outsourcing y gestión integral',
        link: '/empresas/progestion'
    }
}