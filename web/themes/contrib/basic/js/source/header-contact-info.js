const   hdrContactInfo = document.getElementById('js-hdr-contact-info'),
        hdrContContent = document.createElement('div')

        if(hdrContactInfo){
            hdrContContent.className = "hdr-contact__content"

            hdrContContent.innerHTML = `
                <p><span>Casa Matriz:</span>Crescente Errázuriz 1875, Ñuñoa - Stgo, Chile</p>
                <p>Tel: (+56 2) 2433 6500</p>
                <p> <a href="https://www.one.grupoprogestion.com">Acceso Clientes</a></p>
            `
            
            hdrContactInfo.appendChild(hdrContContent)
        }


