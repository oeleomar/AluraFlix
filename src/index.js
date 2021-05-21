function add_banner(){
    
    const name_filme = document.querySelector('#name_film').value
    const url_filme = document.querySelector('#url_film').value 

    const verificador = verificadorDeUrl(name_filme, url_filme)
    if(verificador == true){
        writeOnScreen(name_filme, url_filme)
        const limpa_filme = document.querySelector('#name_film').value = ''
        const limpa_url = document.querySelector('#url_film').value = ''
    }else if (verificador == false){
        const limpa_filme = document.querySelector('#name_film').value = ''
        const limpa_url = document.querySelector('#url_film').value = ''
    }
}

function verificadorDeUrl(name_film, url_film){
    if (name_film = ""|| url_film == ""){
        window.alert('Verifique os campos')
        return false
    } else if (url_film.startsWith() == 'http'){
        window.alert('Verifique os campos')
        return false
    }
    return true
}

function writeOnScreen(name_film, url_film){  

    const listBanner = document.querySelector('.list-banners')

    const figure = document.createElement('figure')
    figure.classList.add('wrapper-banner')

    const img = document.createElement('img')
    img.src = `${url_film}`
    img.alt = 'Banner do Filme'
    img.classList.add('main-banner')

    const title = document.createElement('figcaption')
    title.classList.add('main-caption')
    title.append(name_film)


    figure.insertAdjacentElement('beforeend', img)
    figure.insertAdjacentElement('beforeend', title)
    console.log(figure)


    listBanner.insertAdjacentElement('beforeend', figure)

}