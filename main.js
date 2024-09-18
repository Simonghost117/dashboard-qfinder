//Imports
import formularioAuxiliar from "./views/formularioAuxiliar";
import perfilPaciente from "./views/perfilPaciente";
import turnosAuxiliar from "./views/turnosAuxiliar";
import dashboardMain from "./views/dashboardMain";
import pacientes from "./views/pacientes";
import perfilAcudiente from "./views/perfilAcudiente";
import perfilAuxiliarq from "./views/perfilAuxiliar";
import perfilAuxiliar from "./views/perfilAuxiliar";
//variables constantes y locales
const contenido = document.getElementById('container1');

const select = document.getElementById('menu'),
  
  boton1 = document.querySelector("#boton1"),
  boton2 = document.querySelector("#boton2"),
  boton3 = document.querySelector("#boton3"),
  boton4 = document.querySelector("#boton4"),
  boton5 = document.querySelector("#boton5"),
  boton6 = document.querySelector("#boton6"),
  boton7 = document.querySelector("#boton7"),
  botonHome = document.querySelector("#botonHome");


//codigo de la logica
function boton(button){
  console.log(button)
  const buttons = document.querySelectorAll('.menu-button')
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Agregar la clase 'selected' al botón clicado
    button.classList.add('selected');
}

function Home(){
  contenido.innerHTML = dashboardMain();

  const ctx = document.getElementById('graphic-line');
    const barCtx = document.getElementById('graphic-bar');
    let useCurves = true;
    
    //const labels = Utils.months({count: 7});
    let labels = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    let labels2 = [ "Lun", "Mar", "Mie", "Jue", "Vie", "Sab" ];
    //const dataset1 = [10, , , 250, , , 180, , , , , 400];
    const dataset1 = [10, 160, 230, 250, 220, 290, 180, 160, 150, 170, 200, 400];
    const dataset2 = [100, 310, 240, 110, 110, 210, 260, 200, 110, 50, 20, 0];

    //Chart de el Grafico de Lineas
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Nuevos F-A',
          data: dataset1,
          fill: false,
          borderColor: '#E3A3E0',
          tension: useCurves ? 0.3 : 0,
          fill: false
        },{
          label: 'Antiguos F-A',
          data: dataset2,
          fill: false,
          borderColor: '#D8D2FC',
          tension: useCurves ? 0.3 : 0,
          fill: false
        }]
      }
    });

    //Chart del Grafico de barras
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: labels2,
        datasets: [{
          data: [410, 350, 310, 260, 320, 400],
          label: "",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
        }]
      }
    });
}

//Eventos
document.addEventListener('DOMContentLoaded', function(){
  Home()
  
})
boton1.addEventListener('click', function(e){
  contenido.innerHTML= perfilPaciente()
  boton(this)
})
boton2.addEventListener('click', function(e){
  e.preventDefault()
  contenido.innerHTML= pacientes()

  const botonPerfil = document.querySelector("#botonPerfil")

  botonPerfil.addEventListener('click', function(e){
    e.preventDefault()
    contenido.innerHTML= perfilPaciente()

  
    const acudiente = document.querySelector('#acudiente')

    acudiente.addEventListener('click', function(e){
      e.preventDefault()
      console.log('jsubdwyb')
      contenido.innerHTML= perfilAcudiente()})
  })
  boton(this)
  
})
  
boton3.addEventListener('click', function(e){
  contenido.innerHTML = turnosAuxiliar()
  boton(this)
})

boton4.addEventListener("click", function(e) {
  contenido.innerHTML = perfilAuxiliar()
  boton(this)
})