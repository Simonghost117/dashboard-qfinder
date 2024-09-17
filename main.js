//Imports
import formularioAuxiliar from "./views/formularioAuxiliar";
import perfilPaciente from "./views/perfilPaciente";
import turnosAuxiliar from "./views/turnosAuxiliar";
import dashboardMain from "./views/dashboardMain";

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

const aside = document.getElementById("aside"),
  contenedor = document.getElementById("contenedor"),
  menuDesktop = document.getElementById("menuDesktop"),
  menuMobile = document.getElementById("menuMobile"),
  iconAsideDesktop = document.getElementById("iconAsideDesktop");


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
      },
      options: {
        responsive: true,
        /*maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }*/
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
      },
      options: {
        responsive: true,
        /*maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }*/
      }
    });
}

//Funciones que me realizan la acción del desplegar el menú en distintas formas de la pantalla
//Forma Movil
function myFn(x){
  console.log(x);
  
  if(x.matches){
      console.log("1")
      hideMenuMobile()
    }else{
      console.log("2")
      hideMenuDesktop()
  }
}
function showMenuMobile(){
  if(aside.classList.contains("w-full")){ //Si es igual a 100% es porque esta desplegado el menu
      aside.classList.add("-left-full", "w-[100px]")
      aside.classList.remove("right-full", "left-0", "w-full");
  }else{ //De lo contrario esta encogido el menu
      aside.classList.remove("-left-full", "w-[100px]")
      aside.classList.add("right-full", "left-0", "w-full");
  }
}
function hideMenuMobile(){
  aside.classList.add("-left-full", "w-[100px]")
  aside.classList.remove("right-full", "left-0", "w-full");
}

//Forma Desktop
function showMenuDesktop(){
  if(aside.classList.contains("w-[100px]")){ //Si el aside esta oculto
      //Desplegando el Aside
      aside.classList.remove("w-[100px]")
      aside.classList.add("w-1/6")
      contenedor.classList.remove("w-full")
      contenedor.classList.add("w-5/6")
      iconAsideDesktop.classList.remove("fa-arrow-right")
      iconAsideDesktop.classList.add("fa-arrow-left")
  }else{ //De lo contrario si esta desplegado
      //Ocultando el Aside
      aside.classList.add("w-[100px]")
      aside.classList.remove("w-1/6")
      contenedor.classList.add("w-full")
      contenedor.classList.remove("w-5/6")
      iconAsideDesktop.classList.remove("fa-arrow-left")
      iconAsideDesktop.classList.add("fa-arrow-right")
  }
}

function hideMenuDesktop(){
  aside.classList.add("w-[100px]")
  aside.classList.remove("w-1/6")
  contenedor.classList.add("w-full")
  contenedor.classList.remove("w-5/6")
  iconAsideDesktop.classList.remove("fa-arrow-left")
  iconAsideDesktop.classList.add("fa-arrow-right")
}

//Eventos
document.addEventListener('DOMContentLoaded', function(){
  Home()
  
})
boton1.addEventListener('click', function(e){
  contenido.innerHTML= perfilPaciente()
  hideMenuMobile()
  boton(this)
})
boton2.addEventListener('click', function(e){
  contenido.innerHTML= formularioAuxiliar()
  hideMenuMobile()
  boton(this)
})
boton3.addEventListener('click', function(e){
  contenido.innerHTML = turnosAuxiliar()
  hideMenuMobile()
  boton(this)
})

botonHome.addEventListener("click", function(e) {
  hideMenuMobile()
  Home()
  boton(this)
})

//Listeners para los botones(version movile y desktop) que despliegan el menu
//Forma movil
menuMobile.addEventListener("click", showMenuMobile);
//Forma Desktop
menuDesktop.addEventListener("click", showMenuDesktop);

//Código de MediaQuery
// Creamos el objeto mediaquery que se encarga de establecer la medida a la que debe corresponder las pantallas
var x = window.matchMedia("(min-width:  1200px)")

// Call listener function at run time
myFn(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFn(x);
});