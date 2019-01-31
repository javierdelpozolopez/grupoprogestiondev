const empContainer = document.getElementById('js-emp')

if(empContainer){

    const empTitle = document.createElement('div')
    const empGrid3col = document.createElement('div')
    const empGrid2col = document.createElement('div')
    
    empGrid3col.className = 'grid-col-3'
    empGrid2col.className = 'grid-col-2 margin-top-10'
    
    empTitle.innerHTML = `
    <h5>Conoce nuestras áreas especializadas</h5>
    `
    empGrid3col.innerHTML = `
        <div class="card flex-start-start">
            <div class="card__img card__img-bg" style="background-image:url('${empresas['ensti'].img.src}');"></div>
            <div class="card__info-area">
                <img class="card__logo" src="${empresas['ensti'].logo.src}" alt="logo ensti">
                <h6>${empresas['ensti'].desc}</h6>
            </div>
            <div class="card__actions">
                <a class="btn btn--outlined" href="${empresas['ensti'].link}">Ver más</a>
            </div>
        </div>
    
        <div class="card flex-start-start">
            <div class="card__img card__img-bg" style="background-image:url('${empresas['audisis'].img.src}');"></div>
            <div class="card__info-area">
                <img class="card__logo" src="${empresas['audisis'].logo.src}" alt="logo audisis">
                <h6>${empresas['audisis'].desc}</h6>
            </div>
            <div class="card__actions">
            <a class="btn btn--outlined" href="${empresas['audisis'].link}">Ver más</a>
            </div>
        </div>
    
        <div class="card flex-start-start">
            <div class="card__img card__img-bg" style="background-image:url('${empresas['crece'].img.src}');"></div> 
            <div class="card__info-area">
                <img class="card__logo" src="${empresas['crece'].logo.src}" alt="logo crece">
                <h6>${empresas['crece'].desc}</h6>
            </div>
            <div class="card__actions">
                <a class="btn btn--outlined" href="${empresas['crece'].link}">Ver más</a>
            </div>
        </div>
    `
    empGrid2col.innerHTML = `
    <div class="card flex-start-start">
        <div class="card__img card__img-bg" style="background-image:url('${empresas['disecom'].img.src}');"></div>
     
        <div class="card__info-area">
            <img class="card__logo" src="${empresas['disecom'].logo.src}" alt="logo disecom">
            <h6>${empresas['disecom'].desc}</h6>
        </div>
        <div class="card__actions">
            <a class="btn btn--outlined" href="${empresas['disecom'].link}">Ver más</a>
        </div>
    </div>
    <div class="card flex-start-start">
        <div class="card__img card__img-bg" style="background-image:url('${empresas['progestion'].img.src}');"></div>
        <div class="card__info-area">
            <img class="card__logo" src="${empresas['progestion'].logo.src}" alt="logo progestion">
            <h6>${empresas['progestion'].desc}</h6>
        </div>
        <div class="card__actions">
            <a class="btn btn--outlined" href="${empresas['progestion'].link}">Ver más</a>
        </div>
    </div>
    `

    empContainer.appendChild(empTitle)
    empContainer.appendChild(empGrid3col)
    empContainer.appendChild(empGrid2col)
}