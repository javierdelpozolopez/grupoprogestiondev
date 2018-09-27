const   rrssContainer = document.getElementById('js-rrss__container'),
        rrssContent = document.createElement('div'),
        iconFacebook = new Image(),
        iconInstagram = new Image(),
        iconTwitter = new Image(),
        iconLinkedin = new Image()

iconFacebook.src = imageUrl + 'svg/icon-facebook.svg',
iconInstagram.src = imageUrl + 'svg/icon-instagram.svg',
iconTwitter.src = imageUrl + 'svg/icon-twitter.svg',
iconLinkedin.src = imageUrl + 'svg/icon-linkedin.svg',

rrssContent.className = 'rrss__content'

rrssContent.innerHTML = `
    <a href="https://www.facebook.com/GrupoProgestionChile/"><img class="icon" src="${iconFacebook.src}"/></a>
    <a href="https://www.instagram.com/grupoprogestionchile/"><img class="icon" src="${iconInstagram.src}"/></a>
    <a href="https://twitter.com/Progestion_com?lang=es"><img class="icon" src="${iconTwitter.src}"/></a>
    <a href="https://www.linkedin.com/company/grupo-progestion/"><img class="icon" src="${iconLinkedin.src}"/></a>
`

if(rrssContainer){
    rrssContainer.appendChild(rrssContent)
}
