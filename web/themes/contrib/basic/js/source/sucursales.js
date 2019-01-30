const   sucurId = document.getElementById('js-sucursales'),
        sucurContent = document.createElement('div'),
        gpsImg = new Image(),
        movilImg = new Image(),
        sucurStgo = document.createElement('div'),
        sucurRegiones = document.createElement('div'),
        sucurInter = document.createElement('div')

gpsImg.src = imageUrl + 'svg/icon-gps.svg'
movilImg.src = imageUrl + 'svg/icon-phone.svg'

sucurContent.className = 'sucursales__content'
sucurStgo.className = 'padding-1-0-1-0'
sucurRegiones.className = 'padding-1-0-1-0'
sucurInter.className = 'padding-1-0-1-0'

sucurStgo.innerHTML = `
<div class="title-bar padding-1-0-1-0"><h3>Sucursales</h3></div>
<div><h4 class="text-align-center color-primary">Santiago</h4></div>
<div class="grid-col-3">
    <div class="flex-col-ss">
    <h5 class="color-primary">Casa Matriz</h5>
    <p class="before-icon icon-gps">Crescente Errazuriz 1875, Ñuñoa.</p>
    <p class="before-icon icon-movil">Central: (+562) 2433 6500</p>
    </div>

    <div class="flex-col-ss">
    <h5 class="color-primary">Casa Matriz</h5>
    <p class="before-icon icon-gps">Crescente Errazuriz 1875, Ñuñoa.</p>
    <p class="before-icon icon-movil">Central: (+562) 2433 6500</p>
    </div>

    <div class="flex-col-ss">
    <h5 class="color-primary">Supply Chain Management</h5>
    <p class="before-icon icon-gps">Puerto Madero #9710 B.S.F Pudahuel.</p>
    <p class="before-icon icon-movil">Central: (+562) 2544 8658</p>
    </div>
</div>
`

sucurRegiones.innerHTML = `
<div><h4 class="text-align-center color-primary">Regiones</h4></div>
<div class="grid-col-4">

    <div class="flex-col-ss">
    <h5 class="color-primary">Iquique</h5>
    <p class="before-icon icon-gps">Sotomayor #575, Oficina 401</p>
    <p class="before-icon icon-movil">Central: (+56) (55) 2433 6500</p>
    </div>

    <div class="flex-col-ss">
    <h5 class="color-primary">Antofagasta</h5>
    <p class="before-icon icon-gps">Los Aromos 8874</p>
    <p class="before-icon icon-movil">Central: (+56) (55) 2423 732</p>
    </div>

    <div class="flex-col-ss">
    <h5 class="color-primary">La Serena</h5>
    <p class="before-icon icon-gps">Miguel Aguirre Perry #1833</p>
    <p class="before-icon icon-movil">Central: (+56) (51) 2560 627</p>
    </div>

    <div class="flex-col-ss">
    <h5 class="color-primary">Viña del Mar</h5>
    <p class="before-icon icon-gps">1 Norte #1579</p>
    <p class="before-icon icon-movil">Central: (+56) (02) 243 365 00</p>
    </div>

    <div class="flex-col-ss">
    <h5 class="color-primary">Talca</h5>
    <p class="before-icon icon-gps">8 Oriente #890</p>
    <p class="before-icon icon-movil">Central: (+56) (71) 2510 283</p>
    </div>

    <div class="flex-col-ss">
    <h5 class="color-primary">Concepción</h5>
    <p class="before-icon icon-gps">Los Aromos 8874</p>
    <p class="before-icon icon-movil">Central: (+56) (55) 2423 732</p>
    </div>

    <div class="flex-col-ss">
    <h5 class="color-primary">Temuco</h5>
    <p class="before-icon icon-gps">Phillippi #470</p>
    <p class="before-icon icon-movil">Central: (+56) (45) 465 794</p>
    </div>

    <div class="flex-col-ss">
    <h5 class="color-primary">Puerto Montt</h5>
    <p class="before-icon icon-gps">Serrano #210</p>
    <p class="before-icon icon-movil">Central: (+56) (65) 238 5454</p>
    </div>
</div>
`

sucurInter.innerHTML = `
<div><h4 class="text-align-center color-primary">Internacional</h4></div>
<div class="flex-col-cc">
    <div class="flex-col-ss">
    <h5 class="color-primary">Perú</h5>
    <p class="before-icon icon-gps">La Habana 160º, San Isidro</p>
    <p class="before-icon icon-movil">Central: (+51 1) 2405 945</p>
    </div>
</div>
`

if(sucurContent){
    sucurContent.appendChild(sucurStgo)
    sucurContent.appendChild(sucurRegiones)
    sucurContent.appendChild(sucurInter)
}
if(sucurId){
    sucurId.appendChild(sucurContent)
}
