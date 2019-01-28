const   eEnstiHeroId = document.getElementById('js-emp-ensti-hero')

if(eEnstiHeroId){
    const eEnstiHeroContent = document.createElement('div')

    eEnstiHeroContent.innerHTML = `
    <div class="hero__container" style="background-image: url(${empresas['ensti'].img.src});">
        <div class="padding-3-2 hero__content hero__content--ensti">
            <div data-aos="fade-in" class="flex-column-cc text-align-center padding-3-0 hero__box">
                <object class="hero__logo hero__logo--medium" data="${empresas['ensti'].logoWhite.src}" type="image/svg+xml"></object>
                <h2>Servicios Transitorios</h2>
                <p>Suministramos trabajadores para que cumplan una labor determinada de carácter transitorio o ocasional.</p>
            </div>
        </div>
    </div>
    `
    eEnstiHeroId.appendChild(eEnstiHeroContent)
}