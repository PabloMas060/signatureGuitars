const primeraSeccion = document.getElementById('seccionNuevaUno')
const segundaSeccion = document.getElementById('seccionNuevaDos')

const card = document.createElement("div")
card.setAttribute("class","card")
const h1 = document.createElement("h1");
h1.textContent = "Recomendados";
const eventos = document.createElement("div")
eventos.setAttribute("class", "card" )
const imagenEvento = document.createElement("img")
imagenEvento.setAttribute("src", "/img/prod1.jpg")



primeraSeccion.appendChild(card)
card.appendChild(h1)
primeraSeccion.appendChild(eventos)
eventos.appendChild(imagenEvento)