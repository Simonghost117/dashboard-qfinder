export default function(){
    return `
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
    </div>
    `
}