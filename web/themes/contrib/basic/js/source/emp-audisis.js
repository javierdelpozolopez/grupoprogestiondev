const   eAudisisId = document.getElementById('js-emp-audisis-content'),
        eAudisisHeroId = document.getElementById('js-emp-audisis-hero'),
        eAudisisContainer = document.createElement('div')

if(eAudisisId){
    const imageUrl = './../themes/contrib/basic/images/source/'
    const   imgOne = new Image(),
            imgTwo = new Image(),
            imgTree = new Image()

    imgOne.src = imageUrl + 'audisis/audisis-1.jpg'
    imgTwo.src = imageUrl + 'audisis/audisis-2.jpg'
    imgTree.src = imageUrl + 'audisis/audisis-3.jpg'

    const sSoftware = document.createElement('div')
    sSoftware.innerHTML = `
    <div class="grid grid-service audisis-service-1 padding-1-0-1-0">
    <div data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000" class="grid-image-one">
        <img src="${imgOne.src}" alt="Imagen Desarrollo de Software">
    </div>   
    <div data-aos="fade-up" data-aos-delay="140" data-aos-duration="1400" class="grid-box-one box box__audisis flex-col-ss">
        <pre>Tecnología</pre>
        <h4>Desarrollo de software</h4>
        <p>Se busca integrar de forma transversal la gestión del punto de venta en relación con la visibilidad de los resultados para la toma de decisiones, la comunicación con la fuerza de venta, capacitación directamente desde la aplicación móvil, logística y reportes.</p>
        <a href="#">SABER MÁS</a>
    </div>
    </div>
    `
    const sBi = document.createElement('div')
    sBi.innerHTML = `
    <div class="grid grid-service audisis-service-1 padding-3-0-3-0">
        <div data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000" class="grid-image-two">
            <img src="${imgTwo.src}" alt="Imagen Business Inteligence">
        </div>   
        <div data-aos="fade-up" data-aos-delay="140" data-aos-duration="1400" class="grid-box-two box box__audisis flex-col-ss">
            <pre>Inteligencia</pre>
            <h4>Business Inteligence</h4>
            <p>Se busca integrar de forma transversal la gestión del punto de venta en relación con la visibilidad de los resultados para la toma de decisiones, la comunicación con la fuerza de venta, capacitación directamente desde la aplicación móvil.</p>
            <a href="#">SABER MÁS</a>
        </div>
    </div>
    `


    eAudisisId.appendChild(sSoftware)
    eAudisisId.appendChild(sBi)
};