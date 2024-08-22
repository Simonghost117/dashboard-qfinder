const contenido = document.getElementById('container1');

const select = document.getElementById('menu');


function boton(button){
  const buttons = document.querySelectorAll('.menu-button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Agregar la clase 'selected' al botón clicado
    button.classList.add('selected');
}

function sesion1(){
//  const boton = document.getElementById('boton1');


//boton.addEventListener('click', () => {
  // Cambiar el color del icono al hacer clic
 // boton.style.color = '#555'; // Color más oscuro
//});



    contenido.innerHTML=`
    

    <div id="cntInformation" class="bg-white60opac basis-[100%] mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]">
      <div class="">
        <section class="mx-5 py-7">
          <div class="flex flex-col md:flex-row justify-between mb-[50px] gap-y-5">
            <p class="text-3xl text-center font-bold">QfindeR</p>
            <div class="flex gap-x-3 self-end">
              <a href="#" class="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
                <i class="fa-regular fa-user text-xl"></i>
              </a>
              <a href="#" class="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
                <i class="fa-regular fa-bell text-xl"></i>
              </a>
              <a href="#" class="xl:hidden px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] hover:shadow-[0_0_14px_2px_#46a6ff47] grid place-content-center" id="btnMenuMobile">
                <i class="fa fa-bars text-xl"></i>
              </a>
            </div>
          </div>
          <div class="flex gap-3 mb-5">
            <i class="fa-solid fa-hands-holding-child text-3xl md:text-4xl"></i>
            <p class="text-3xl md:text-4xl font-bold">Perfil del Paciente</p>
          </div>
          <div class="bg-white rounded-md p-6">
              <div class="flex flex-col md:flex-row justify-between items-center mb-10">
                <p class="text-2xl md:text-3xl text-moradoOscuro font-bold">Información del Paciente</p>
                <div class="flex flex-col md:flex-row gap-x-5 gap-y-3 mt-6 w-full md:w-auto md:mt-0">
                  <a href="#" class="py-1 px-7 rounded-sm bg-gris text-white transition-all hover:bg-hoverBgEditar block text-center">Editar</a>
                  <a href="#" class="py-1 px-7 rounded-sm bg-azulCielo text-white transition-all hover:bg-hoverBgGuardar block text-center">Guardar</a>
                </div>
              </div>
              <div class="grid grid-cols-12 gap-5">
                <div class="col-span-12 w-[60%] m-auto mq980:m-0 rounded-full mq1185:col-span-3 mq980:col-span-2 mq980:w-auto mq980:rounded-[1.5rem] bg-white shadow-[0_0_14px_2px_#D8D2FCA3]">
                  <img src="/public/images/socio.avif" alt="imagen de usuario" class="rounded-full mq980:rounded-[1.5rem] h-full object-cover">
                </div>
                <div class="col-span-12 mq1185:col-span-9 mq980:col-span-10 p-6 rounded-[1.5rem] bg-white shadow-[0_0_14px_2px_#D8D2FCA3]">
                  <p class="text-moradoOscuro font-bold">Camilo Hernandez</p>
                  <p class="text-moradoOscuro mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                  <div class="flex justify-between gap-x-5 mt-6">
                    <div class="flex-1">
                      <p class="text-moradoOscuro font-bold">Eps</p>
                      <p>Sanitas</p>
                    </div>
                    <div class="flex-1">
                      <p class="text-moradoOscuro font-bold">Número de teléfono</p>
                      <p>+91 8548521524</p>
                    </div>
                    <div>
                      <p class="text-moradoOscuro font-bold">Address</p>
                      <p>345, Sarju Appt., Mota Varacha, Surat Gujarat, India.</p>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 mq1185:col-span-7 mq1050:col-span-7 p-6 rounded-[1.5rem] bg-white shadow-[0_0_14px_2px_#D8D2FCA3]">
                  <div class="relative overflow-x-auto">
                  <p class="text-moradoOscuro font-bold text-xl mb-6">Past Visit History</p>
                  <table class="w-full">
                    <thead class="bg-blancoAzul">
                      <tr class="text-left">
                        <th scope="col" class="py-2 px-5 font-semibold text-sm text-rosaGris">Date</th>
                        <th scope="col" class="py-2 px-5 font-semibold text-sm text-rosaGris">Doctor</th>
                        <th scope="col" class="py-2 px-5 font-semibold text-sm text-rosaGris">Treatment</th>
                        <th scope="col" class="py-2 px-5 font-semibold text-sm text-rosaGris">Charges</th>
                        <th scope="col" class="py-2 px-5 font-semibold text-sm text-rosaGris">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-blancoAzul border-b-2">
                        <td class="py-4">12 Jan 2022</td>
                        <td class="py-4 text-blue-400 font-semibold">Dr. Jacob Ryan</td>
                        <td class="py-4">
                          <a href="#" class="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                        </td>
                        <td class="py-4">$145</td>
                        <td class="py-4 flex gap-x-5">
                          <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                            <i class="fa-solid fa-pen-to-square"></i>
                          </a>
                          <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                            <i class="fa-solid fa-trash-can"></i>
                          </a>
                        </td>
                      </tr>
                      <tr class="border-blancoAzul border-b-2">
                        <td class="py-4">12 Jan 2022</td>
                        <td class="py-4 text-blue-400 font-semibold">Dr. Jacob Ryan</td>
                        <td class="py-4">
                          <a href="#" class="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                        </td>
                        <td class="py-4">$145</td>
                        <td class="py-4 flex gap-x-5">
                          <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                            <i class="fa-solid fa-pen-to-square"></i>
                          </a>
                          <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                            <i class="fa-solid fa-trash-can"></i>
                          </a>
                        </td>
                      </tr>
                      <tr class="border-blancoAzul border-b-2">
                        <td class="py-4">12 Jan 2022</td>
                        <td class="py-4 text-blue-400 font-semibold">Dr. Jacob Ryan</td>
                        <td class="py-4">
                          <a href="#" class="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                        </td>
                        <td class="py-4">$145</td>
                        <td class="py-4 flex gap-x-5">
                          <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                            <i class="fa-solid fa-pen-to-square"></i>
                          </a>
                          <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                            <i class="fa-solid fa-trash-can"></i>
                          </a>
                        </td>
                      </tr>
                      <tr class="border-blancoAzul border-b-2">
                        <td class="py-4">12 Jan 2022</td>
                        <td class="py-4 text-blue-400 font-semibold">Dr. Jacob Ryan</td>
                        <td class="py-4">
                          <a href="#" class="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                        </td>
                        <td class="py-4">$145</td>
                        <td class="py-4 flex gap-x-5">
                          <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                            <i class="fa-solid fa-pen-to-square"></i>
                          </a>
                          <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                            <i class="fa-solid fa-trash-can"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </div>
                <div class="col-span-12 mq1185:col-span-5 mq1050:col-span-5 p-6 rounded-[1.5rem] bg-white shadow-[0_0_14px_2px_#D8D2FCA3]">
                  <p class="text-moradoOscuro font-bold text-xl mb-6">General Report</p>
                  <div class="mb-3">
                    <div class="flex justify-between mb-1">
                      <p class="font-bold text-md">Heart Beat</p>
                      <p class="font-semibold text-sm text-zinc-500">45</p>
                    </div>
                    <div class="w-full bg-gray-200 h-4 dark:bg-gray-700">
                      <div class="bg-fuchsia-300 h-4"  style="width: 45%"></div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="flex justify-between mb-1">
                      <p class="font-bold text-md">Blood Pressure</p>
                      <p class="font-semibold text-sm text-zinc-500">30</p>
                    </div>
                    <div class="w-full bg-gray-200 h-4 dark:bg-gray-700">
                      <div class="bg-emerald-300 h-4"  style="width: 30%"></div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="flex justify-between mb-1">
                      <p class="font-bold text-md">Sugar</p>
                      <p class="font-semibold text-sm text-zinc-500">60</p>
                    </div>
                    <div class="w-full bg-gray-200 h-4 dark:bg-gray-700">
                      <div class="bg-sky-300 h-4"  style="width: 60%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between mb-1">
                      <p class="font-bold text-md">Haemoglobin</p>
                      <p class="font-semibold text-sm text-zinc-500">90</p>
                    </div>
                    <div class="w-full bg-gray-200 h-4 dark:bg-gray-700">
                      <div class="bg-red-400 h-4"  style="width: 90%"></div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 flex flex-col md:flex-row text-center justify-center items-center gap-x-5 gap-y-4 mt-10">
                  <a href="#" class="py-1 px-9 rounded-md bg-red-600 text-white font-bold w-full md:w-auto block md:inline-block text-center">Reportar como extraviado</a>
                  <a href="#" class="py-1 px-9 rounded-md bg-green-600 text-white font-bold w-full md:w-auto block md:inline-block text-center">Encontrado</a>
                </div>
              </div>
          </div>
        </section>
      </div>
    </div>`
}
function sesion2(){
//  const boton = document.getElementById('boton2');
//  boton.style.backgroundColor = 'red'
    contenido.innerHTML=`
   
      <!-- Encabezado -->
      <div class="flex justify-between items-center mb-8" >
        <div class="text-2xl font-bold">
          <h1 class="text-2xl m-3">QfindeR</h1>
          <h2 class="text-xl font-bold">Auxiliar</h2>
        </div>
        <div class="flex items-center space-x-4">
          <button class="bg-white rounded-full p-2">
            <img src="imguser 1.png" alt="Icono">
          </button>
          <button class="bg-white rounded-full p-2">
            <img src="imgnotifications 1.png" alt="Icono">
          </button>
        </div>
      </div>
      <!-- Formulario -->
      <div class="p-8" >
        <form class="space-y-2 bg-white p-2 sm:p-8 md:p-4  shadow-lg rounded-3xl w-full min-w-[320px] ">
          <div class="flex flex-wrap justify-between items-center mb-5">
            <h1 class="text-lg font-semibold">Agregar Información del Auxiliar</h1>
            <button class="bg-red-500 text-white py-1 px-3 rounded border-2 border-slate-900">Lista de
              Auxiliares</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 tm-1400px:grid-cols-2 gap-4 mb-7">
            <div class="relative z-0">
              <label class="block text-sm font-medium">Nombres *</label>
              <input type="text" class="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre *</label> -->
            </div>
            <div>
              <label class="block text-sm font-medium">Apellidos *</label>
              <input type="text" class="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Apellidos *</label> -->
            </div>
            <div>
              <label class="block text-sm font-medium">Correo Electrónico *</label>
              <input type="email" class="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="email" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Correo Electrónico *</label> -->
            </div>
            <div>
              <label class="block text-sm font-medium">Número de Teléfono *</label>
              <input type="text" class="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="number" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Numero de Telefono *</label> -->
            </div>
            <div>
              <label class="block text-sm font-medium">Edad *</label>
              <input type="number" class="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Edad *</label> -->
            </div>
            <div>
              <label class="block text-sm font-medium">Género *</label>
              <select class="w-full border-gray-300 focus:border-blue-500 focus:outline-none py-0.5">
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium">Grupo Sanguíneo *</label>
              <input type="text" class="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Grupo Sanguíneo *</label> -->
            </div>
            <div class="">
              <label class="block text-sm font-medium">Dirección</label>
              <input type="text" class="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Direccion *</label> -->
            </div>
            <div class="md:col-span-2 lg:col-span-1 flex items-center space-x-2">
              <div>
                <label for="fileUpload"
                  class="bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer">
                  Hoja de vida
                </label>
                <input type="file" id="fileUpload"
                  class="w-full hidden border-gray-300 focus:border-blue-500 focus:outline-none">
              </div>
            </div>
            <div class="flex justify-end w-full">
              <button type="submit"
                class="bg-purple-600 border-2 border-slate-900 text-white py-1 px-3 rounded-2xl m-5">Guardar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>`
}

function sesion3(){
  contenido.innerHTML =`

  <div class=" h-full w-52 column">


    <div class="mx-6 my-[20px]">

      <h1 class="text-4xl mx-6 my-[30px]">Turnos Auxiliares</h1>
      <div class="bg-white h-[580px] w-[1252px]  justify-center items-center rounded-3xl">

        <div class="rounded-3xl h-[50px] items-center justify-end text-end text-[14px] flex">
          <h6 class="text-[10px]">buscar en:</h6>

          <div class="flex items-center justify-end mx-[20px] h-[22px]">
            <input
              class="w-[180px] h-[22px] rounded-lg text-[12px] text-between flex relative border border-black shadow-black shadow-sm"
              placeholder="Nombre">
            <img src="public\down-arrow 2.png" alt="flexha" class="absolute justify-start p-14">
            <div class=" bg-fondoicono h-[34px] w-[34px] mx-2 content-center rounded-lg">
              <img src="public\filter-filled-tool-symbol 1.png" alt="filter" class="h-[20px] w-[20px] mx-[7px]">
            </div>
          </div>
        </div>


      <div class=" h-[32px] w-[1200px] bg-fondofichado mx-auto flex max-w-7xl mx-auto justify-between items-center">

      <p>Fecha ↓</p>
      <p>Auxiliar ↓</p>
      <p>Paciente ↓</p>
      <p>Encargado ↓</p>
      <p>Hora-Inicio ↓</p>
      <p>Hora-Final ↓</p>
      </div>
<br>

      <div class=" h-[32px] w-[1200px] bg-white mx-auto flex max-w-7xl justify-between items-center">
        <input type="checkbox" class="mx-2 "/>
        <p class="mx-2 ">12 de Jun 2024</p>
        <p class="mx-2">Daniel Mendez</p>
        <button class="mx-2  rounded-md text-white bg-red-400 ">Will Robert</button>
        <p class="mx-2 ">Enfermero 1</p>
        <p class="mx-2 ">5 Am</p>
        <p class="mx-2 m">2 Pm</p>
        <div class=" bg-stone-100 shadow hover:shadow-xl h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\edit-button-3.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px] "></image>
        </div>
        <div class=" bg-stone-100 shadow hover:shadow-xl  h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\trash 6.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px]">
        </div>
      </div>
      <br>
      <div class=" h-[32px] w-[1200px] bg-white mx-auto flex max-w-7xl justify-between items-center">
        <input type="checkbox" class="mx-2 "/>
        <p class="mx-2 ">12 de Jun 2024</p>
        <p class="mx-2">Samuel Pinto</p>
        <button class="mx-2  rounded-md text-white bg-red-400 ">Will Robert</button>
        <p class="mx-2 ">Enfermero 2</p>
        <p class="mx-2 ">5 Am</p>
        <p class="mx-2 m">2 Pm</p>
        <div class=" bg-stone-100 shadow hover:shadow-xl h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\edit-button-3.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px] "></image>
        </div>
        <div class=" bg-stone-100 shadow hover:shadow-xl  h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\trash 6.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px]">
        </div>
      </div>
      <br>
      <div class=" h-[32px] w-[1200px] bg-white mx-auto flex max-w-7xl justify-between items-center">
        <input type="checkbox" class="mx-2 "/>
        <p class="mx-2 ">12 de Jun 2024</p>
        <p class="mx-2">Danna Urrea</p>
        <button class="mx-2  rounded-md text-white bg-red-400 ">Will Robert</button>
        <p class="mx-2 ">Enfermero 3</p>
        <p class="mx-2 ">5 Am</p>
        <p class="mx-2 m">2 Pm</p>
        <div class=" bg-stone-100 shadow hover:shadow-xl h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\edit-button-3.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px] "></image>
        </div>
        <div class=" bg-stone-100 shadow hover:shadow-xl  h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\trash 6.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px]">
        </div>
      </div>
      <br>
      <div class=" h-[32px] w-[1200px] bg-white mx-auto flex max-w-7xl justify-between items-center">
        <input type="checkbox" class="mx-2 "/>
        <p class="mx-2 ">12 de Jun 2024</p>
        <p class="mx-2">Zharick C</p>
        <button class="mx-2  rounded-md text-white bg-red-400 ">Will Robert</button>
        <p class="mx-2 ">Enfermero 4</p>
        <p class="mx-2 ">5 Am</p>
        <p class="mx-2 m">2 Pm</p>
        <div class=" bg-stone-100 shadow hover:shadow-xl h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\edit-button-3.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px] "></image>
        </div>
        <div class=" bg-stone-100 shadow hover:shadow-xl  h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\trash 6.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px]">
        </div>
      </div>
      <br>
      <div class=" h-[32px] w-[1200px] bg-white mx-auto flex max-w-7xl justify-between items-center">
        <input type="checkbox" class="mx-2 "/>
        <p class="mx-2 ">12 de Jun 2024</p>
        <p class="mx-2">Geronimo M.</p>
        <button class="mx-2  rounded-md text-white bg-red-400 ">Will Robert</button>
        <p class="mx-2 ">Enfermero 5</p>
        <p class="mx-2 ">5 Am</p>
        <p class="mx-2 m">2 Pm</p>
        <div class=" bg-stone-100 shadow hover:shadow-xl h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\edit-button-3.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px] "></image>
        </div>
        <div class=" bg-stone-100 shadow hover:shadow-xl  h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\trash 6.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px]">
        </div>
      </div>
      <br>
      <div class=" h-[32px] w-[1200px] bg-white mx-auto flex max-w-7xl justify-between items-center">
        <input type="checkbox" class="mx-2 "/>
        <p class="mx-2 ">12 de Jun 2024</p>
        <p class="mx-2">Jacob Ryan</p>
        <button class="mx-2  rounded-md text-white bg-red-400 ">Will Robert</button>
        <p class="mx-2 ">Enfermero 6</p>
        <p class="mx-2 ">5 Am</p>
        <p class="mx-2 m">2 Pm</p>
        <div class=" bg-stone-100 shadow hover:shadow-xl h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\edit-button-3.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px] "></image>
        </div>
        <div class=" bg-stone-100 shadow hover:shadow-xl  h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\trash 6.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px]">
        </div>
      </div>
      <br>
      <div class=" h-[32px] w-[1200px] bg-white mx-auto flex max-w-7xl justify-between items-center">
        <input type="checkbox" class="mx-2 "/>
        <p class="mx-2 ">12 de Jun 2024</p>
        <p class="mx-2">Jhon Benavides</p>
        <button class="mx-2  rounded-md text-white bg-red-400 ">Will Robert</button>
        <p class="mx-2 ">Enfermero 7</p>
        <p class="mx-2 ">5 Am</p>
        <p class="mx-2 m">2 Pm</p>
        <div class=" bg-stone-100 shadow hover:shadow-xl h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\edit-button-3.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px] "></image>
        </div>
        <div class=" bg-stone-100 shadow hover:shadow-xl  h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\trash 6.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px]">
        </div>
      </div>
      <br>
      <div class=" h-[32px] w-[1200px] bg-white mx-auto flex max-w-7xl justify-between items-center">
        <input type="checkbox" class="mx-2 "/>
        <p class="mx-2 ">12 de Jun 2024</p>
        <p class="mx-2">Maria Ceron</p>
        <button class="mx-2  rounded-md text-white bg-red-400 ">Will Robert</button>
        <p class="mx-2 ">Enfermero 8</p>
        <p class="mx-2 ">5 Am</p>
        <p class="mx-2 m">2 Pm</p>
        <div class=" bg-stone-100 shadow hover:shadow-xl h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\edit-button-3.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px] "></image>
        </div>
        <div class=" bg-stone-100 shadow hover:shadow-xl  h-[34px] w-[34px] mx-2 content-center rounded-lg">
          <image src="public\trash 6.png" alt="" class="h-[18px] w-[18px] justify-self-center mx-[7px]">
        </div>
      </div>
      <br>

      </div>

    </div>
    
    `
}