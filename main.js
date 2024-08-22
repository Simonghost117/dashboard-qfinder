//Imports
import formularioAuxiliar from "./views/formularioAuxiliar";
import perfilPaciente from "./views/perfilPaciente";
import turnosAuxiliar from "./views/turnosAuxiliar";

//variables constantes y locales
const contenido = document.getElementById('container1');

const select = document.getElementById('menu'),
  
  boton1 = document.querySelector("#boton1"),
  boton2 = document.querySelector("#boton2"),
  boton3 = document.querySelector("#boton3"),
  boton4 = document.querySelector("#boton4"),
  boton5 = document.querySelector("#boton5"),
  boton6 = document.querySelector("#boton6"),
  boton7 = document.querySelector("#boton7");


//codigo de la logica
function boton(button){
  console.log(button)
  const buttons = document.querySelectorAll('.menu-button')
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Agregar la clase 'selected' al botón clicado
    button.classList.add('selected');
}

//Eventos
document.addEventListener('DOMContentLoaded', function(){
  contenido.innerHTML = `
    <div class='h-screen flex flex-col justify-center items-center'>
      <h1 class='text-7xl font-bold text-center'>Qfinder<br>Bienvenidos</h1>
    </div>
  `
})
boton1.addEventListener('click', function(e){
  contenido.innerHTML= perfilPaciente()
  boton(this)
})
boton2.addEventListener('click', function(e){
  contenido.innerHTML= formularioAuxiliar()
  boton(this)
})
boton3.addEventListener('click', function(e){
  contenido.innerHTML = turnosAuxiliar()
  boton(this)
})