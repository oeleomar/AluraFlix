const listBanner = document.querySelector('.list-banners')

const figure = document.createElement('figure')
figure.classList.add('.wrapper-banner')

const img = document.createElement('img')
img.src = '/AluraFlix/IMG/banner4.png'
img.alt = 'Banner do Filme'
img.classList.add('main-banner')

const title = document.createElement('figcaption')
title.classList.add('main-caption')
title.append("Texto do filme")


figure.insertAdjacentElement('beforeend', img)
figure.insertAdjacentElement('beforeend', title)


listBanner.insertAdjacentElement('beforeend', figure)
