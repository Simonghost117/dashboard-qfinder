
export default function(){
    return `
    <section class="px-10 py-8">
        <div class="top flex space-x-12 items-center justify-between">
          <figure>
            <img src="/images/logo.png" alt="Logo de la Empresa">
          </figure>

          <div class="bg-white py-4 px-5 rounded-lg shadow-[0_0_9px_0px_#17007329] flex justify-between items-center space-x-5">
            <figure>
              <img src="/images/abuelos.png" alt="Abuelos">
            </figure>
            <p class="text-moradoOscuro font-bold">"Cuidado compasivo y profesional para el bienestar de tu familiar"</p>

            <button class="bg-rosaPastelOpac p-1 px-7 py-1 text-white shadow-[0_0_14px_2px_#D8D2FCA3] rounded-3xl">Actualizar</button>
          </div>

          <div class="flex gap-x-3">
            <a href="#" class="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
              <i class="fa-regular fa-user text-xl"></i>
            </a>
            <a href="#" class="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
              <i class="fa-regular fa-bell text-xl"></i>
            </a>
          </div>
        </div>

        <h3 class="text-3xl md:text-4xl font-bold text-moradoOscuro mt-4">Panel</h3>

        <div class="flex justify-between space-x-6 mt-8">
          <div class="grid grid-cols-3 grid-rows-2 items-center bg-white rounded-full py-4 px-6 shadow-[0_0_14px_2px_#D8D2FCA3] flex-1">
            <figure class="row-span-2 inline col-span-1">
              <img src="/images/hospitaly.png" alt="ilustracion de un hospital">
            </figure>
            <p class="text-7B7B7B font-light text-lg col-span-2">250</p>
            <p class="font-bold text-moradoOscuro text-lg col-span-2">Servicios Blindados</p>
          </div>

          <div class="grid grid-cols-3 grid-rows-2 items-center bg-white rounded-full py-4 px-6 shadow-[0_0_14px_2px_#D8D2FCA3] flex-1">
            <figure class="row-span-2 inline col-span-1">
              <img src="/images/secret.png" alt="ilustracion de un hospital">
            </figure>
            <p class="text-7B7B7B font-light text-lg col-span-2">70</p>
            <p class="font-bold text-moradoOscuro text-lg col-span-2">Personal Activo</p>
          </div>

          <div class="grid grid-cols-3 grid-rows-2 items-center bg-white rounded-full py-4 px-6 shadow-[0_0_14px_2px_#D8D2FCA3] flex-1">
            <figure class="row-span-2 inline col-span-1">
              <img src="/images/temperature.png" alt="ilustracion de un hospital">
            </figure>
            <p class="text-7B7B7B font-light text-lg col-span-2">300</p>
            <p class="font-bold text-moradoOscuro text-lg col-span-2">Nuevos Pacientes Hoy</p>
          </div>

          <div class="grid grid-cols-3 grid-rows-2 items-center bg-white rounded-full py-4 px-6 shadow-[0_0_14px_2px_#D8D2FCA3] flex-1">
            <figure class="row-span-2 inline col-span-1">
              <img src="/images/temperature.png" alt="ilustracion de un hospital">
            </figure>
            <p class="text-7B7B7B font-light text-lg col-span-2">52</p>
            <p class="font-bold text-moradoOscuro text-lg col-span-2">Pacientes Registrados</p>
          </div>
        </div>

        <div class="mt-8 flex flex-wrap gap-y-6">
          <div class="w-full flex gap-x-10">

            <div class="bg-white shadow-[0_0_5px_2px_#D8D2FCA3] rounded-3xl px-6 py-5 w-3/6">
              <p class="font-bold text-moradoOscuro text-xl">Encuesta Familiar-Acudiente</p>

              <canvas id="graphic-line"></canvas>
            </div>
            <div class="bg-white shadow-[0_0_5px_2px_#D8D2FCA3] rounded-3xl px-6 py-5 w-3/6">
              <p class="font-bold text-moradoOscuro text-xl">Informe de Enfermedades Comunes</p>

              <canvas id="graphic-bar"></canvas>
            </div>
          </div>
          <div class="w-full flex gap-x-10">

            <div class="bg-white shadow-[0_0_5px_2px_#D8D2FCA3] rounded-3xl px-6 py-5 w-4/6">
              <p class="font-bold text-moradoOscuro text-xl mb-8">Turnos Reservados</p>
              


              <table class="w-full">
                <thead class="bg-blancoAzul">
                  <tr class="text-left">
                    <th scope="col" class="py-2 px-5 font-semibold text-sm text-rosaGris text-center">Date</th>
                    <th scope="col" class="py-2 px-5 font-semibold text-sm text-rosaGris text-center">Doctor</th>
                    <th scope="col" class="py-2 px-5 font-semibold text-sm text-rosaGris text-center">Treatment</th>
                    <th scope="col" class="py-2 px-5 font-semibold text-sm text-rosaGris text-center">Charges</th>
                    <th scope="col" class="py-2 px-5 font-semibold text-sm text-rosaGris text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-blancoAzul border-b-2">
                    <td class="py-4 text-center">12 Jan 2022</td>
                    <td class="py-4 text-blue-400 font-semibold text-center">Dr. Jacob Ryan</td>
                    <td class="py-4 text-center">
                      <a href="#" class="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                    </td>
                    <td class="py-4 text-center">$145</td>
                    <td class="py-4 flex gap-x-5 justify-center">
                      <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </a>
                      <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                        <i class="fa-solid fa-trash-can"></i>
                      </a>
                    </td>
                  </tr>
                  <tr class="border-blancoAzul border-b-2">
                    <td class="py-4 text-center">12 Jan 2022</td>
                    <td class="py-4 text-blue-400 font-semibold text-center">Dr. Jacob Ryan</td>
                    <td class="py-4 text-center">
                      <a href="#" class="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                    </td>
                    <td class="py-4 text-center">$145</td>
                    <td class="py-4 flex gap-x-5 justify-center">
                      <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </a>
                      <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                        <i class="fa-solid fa-trash-can"></i>
                      </a>
                    </td>
                  </tr>
                  <tr class="border-blancoAzul border-b-2">
                    <td class="py-4 text-center">12 Jan 2022</td>
                    <td class="py-4 text-blue-400 font-semibold text-center">Dr. Jacob Ryan</td>
                    <td class="py-4 text-center">
                      <a href="#" class="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                    </td>
                    <td class="py-4 text-center">$145</td>
                    <td class="py-4 flex gap-x-5 justify-center">
                      <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </a>
                      <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                        <i class="fa-solid fa-trash-can"></i>
                      </a>
                    </td>
                  </tr>
                  <tr class="border-blancoAzul border-b-2">
                    <td class="py-4 text-center">12 Jan 2022</td>
                    <td class="py-4 text-blue-400 font-semibold text-center">Dr. Jacob Ryan</td>
                    <td class="py-4 text-center">
                      <a href="#" class="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                    </td>
                    <td class="py-4 text-center">$145</td>
                    <td class="py-4 flex gap-x-5 justify-center">
                      <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </a>
                      <a href="#" class="p-1 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                        <i class="fa-solid fa-trash-can"></i>
                      </a>
                    </td>
                  </tr>
                  <tr class="border-blancoAzul border-b-2">
                    <td class="py-4 text-center">12 Jan 2022</td>
                    <td class="py-4 text-blue-400 font-semibold text-center">Dr. Jacob Ryan</td>
                    <td class="py-4 text-center">
                      <a href="#" class="py-1 px-3 rounded-sm bg-rose-500 text-white">Check up</a>
                    </td>
                    <td class="py-4 text-center">$145</td>
                    <td class="py-4 flex gap-x-5 justify-center">
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
            <div class="bg-white shadow-[0_0_5px_2px_#D8D2FCA3] rounded-3xl px-6 py-5 w-2/6">
              <p class="font-bold text-moradoOscuro text-xl mb-8">Personal</p>

              <table class="w-full">
                <thead class="bg-blancoAzul">
                  <tr class="text-left">
                    <th scope="col" class="py-2 px-5 font-normal text-lg text-moradoOscuro text-center">#</th>
                    <th scope="col" class="py-2 px-5 font-normal text-lg text-moradoOscuro text-center">Nombre-Auxiliar</th>
                    <th scope="col" class="py-2 px-5 font-normal text-lg text-moradoOscuro text-center">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-blancoAzul border-b-2">
                    <td class="py-4 text-center font-extrabold text-2xl">2</td>
                    <td class="py-4 text-blue-400 font-semibold text-center flex items-center">
                      <figure class="mr-5">
                        <img src="/images/avatar-women.png" width="50" alt="Illustracion del Auxiliar">
                      </figure>
                      <span class="text-[#3F779B] font-bold text-lg">Dr. Jacob Ryan</span>
                    </td>
                    <td class="py-4 text-center">
                      <a href="#" class="p-1 rounded-md bg-[#79CFA6] shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all text-white">
                        Activo
                      </a>
                    </td>
                  </tr>
                  <tr class="border-blancoAzul border-b-2">
                    <td class="py-4 text-center font-extrabold text-2xl">3</td>
                    <td class="py-4 text-blue-400 font-semibold text-center flex items-center">
                      <figure class="mr-5">
                        <img src="/images/avatar-women.png" width="50" alt="Illustracion del Auxiliar">
                      </figure>
                      <span class="text-[#3F779B] font-bold text-lg">Dr. Jacob Ryan</span>
                    </td>
                    <td class="py-4 text-center">
                      <a href="#" class="p-1 rounded-md bg-[#79CFA6] shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all text-white">
                        Activo
                      </a>
                    </td>
                  </tr>
                  <tr class="border-blancoAzul border-b-2">
                    <td class="py-4 text-center font-extrabold text-2xl">4</td>
                    <td class="py-4 text-blue-400 font-semibold text-center flex items-center">
                      <figure class="mr-5">
                        <img src="/images/avatar-women.png" width="50" alt="Illustracion del Auxiliar">
                      </figure>
                      <span class="text-[#3F779B] font-bold text-lg">Dr. Jacob Ryan</span>
                    </td>
                    <td class="py-4 text-center">
                      <a href="#" class="p-1 rounded-md bg-[#79CFA6] shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all text-white">
                        Activo
                      </a>
                    </td>
                  </tr>
                  <tr class="border-blancoAzul border-b-2">
                    <td class="py-4 text-center font-extrabold text-2xl">5</td>
                    <td class="py-4 text-blue-400 font-semibold text-center flex items-center">
                      <figure class="mr-5">
                        <img src="/images/avatar-women.png" width="50" alt="Illustracion del Auxiliar">
                      </figure>
                      <span class="text-[#3F779B] font-bold text-lg">Dr. Jacob Ryan</span>
                    </td>
                    <td class="py-4 text-center">
                      <a href="#" class="p-1 rounded-md bg-[#79CFA6] shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all text-white">
                        Activo
                      </a>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    `;
}
