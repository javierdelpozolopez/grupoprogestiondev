const   ftrSmallContainer = document.getElementById('js-footer-small'),
        ftrSmallcontent = document.createElement('div')

ftrSmallcontent.className = "footer-small__content"

ftrSmallcontent.innerHTML = `
<div><p>Copyright Grupo Progestion Todos los derechos reservados.</p></div>
<div>
<a href="">Acceso Clientes</a>
<a href="">Intranet</a>
<a href="">Cloud Grupo</a>
<a href="">Crece TV</a>
<a href="">Liquidaciones</a>
<a href="">Webmail Progestion</a>
</div>
`

ftrSmallContainer.appendChild(ftrSmallcontent)