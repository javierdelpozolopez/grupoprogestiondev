const   eCreceHeroId = document.getElementById('js-emp-crece-hero')

if(eCreceHeroId){
    const eCreceHeroContent = document.createElement('div')

    eCreceHeroContent.innerHTML = `
    <div class="hero__container" style="background-image: url(${empresas['crece'].img.src});">
    <div class="padding-3-2 hero__content hero__content--crece">
        <div data-aos="fade-in" class="flex-column-cc text-align-center padding-3-0 hero__box">
        <object class="hero__logo hero__logo--medium" data="${empresas['crece'].logoWhite.src}" type="image/svg+xml"></object>
        <h4>Otec certificada ISO 9000:1</h4>
        </div>
    </div>
    </div>
    `
    eCreceHeroId.appendChild(eCreceHeroContent)
}