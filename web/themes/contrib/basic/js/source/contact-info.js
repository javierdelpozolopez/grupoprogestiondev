const   contactInfoContainer = document.getElementById('js-contactcontainer'),
        contactInfoContent = document.createElement('div'),
        contactInfoImgPhone = new Image(),
        contactInfoImgMail = new Image(),
        contactInfoImgChile = new Image(),
        contactInfoImgPeru = new Image()


contactInfoContent.className = 'contact-info__content'
contactInfoImgPhone.src = imageUrl + 'svg/icon-phone.svg'
contactInfoImgMail.src = imageUrl + 'svg/icon-mail.svg'
contactInfoImgChile.src = imageUrl + 'bandera-chile.png'
contactInfoImgPeru.src = imageUrl + 'bandera-peru.png'

contactInfoContent.innerHTML = `
<div class="contact-info__title"><h1 class="text__white">CONTÁCTANOS A:</h1></div>

<div class="contact-info__content-box grid contact-info-grid">
    <div class="contact-info__box icon-mail">
        <img class="contact-info__icon" src="${contactInfoImgMail.src}" alt="icon mail">
    </div>
    <div class="contact-info__box chile-bandera">
        <img class="contact-info__bandera" src="${contactInfoImgChile.src}" alt="Bandera Chile">
    </div>
    <div class="contact-info__box chile-correo">
        <h4>comercial.chile@grupoprogestion.com</h4>
    </div>
    <div class="contact-info__box chile-bandera">
        <img class="contact-info__bandera" src="${contactInfoImgChile.src}" alt="Bandera Chile">
    </div>
    <div class="contact-info__box icon-phone">
        <img class="contact-info__icon" src="${contactInfoImgPhone.src}" alt="icon phone">
    </div>

    <div class="contact-info__box chile-telefono">
        <h4>Tel: (+56 2) 2433 6500</h4>
    </div>

    <div class="contact-info__box peru-bandera">
        <img class="contact-info__bandera" src="${contactInfoImgPeru.src}" alt="Bandera Peru">
    </div>
    <div class="contact-info__box peru-correo">
        <h4>comercial.peru@grupoprogestion.com</h4>
    </div>
    <div class="contact-info__box peru-bandera">
        <img class="contact-info__bandera" src="${contactInfoImgPeru.src}" alt="Bandera Peru">
    </div>
    <div class="contact-info__box peru-telefono">
        <h4>Tel: (+52) 55 5250 4056</h4>
    </div>
</div>
`;

if(contactInfoContainer){
    contactInfoContainer.appendChild(contactInfoContent)
}