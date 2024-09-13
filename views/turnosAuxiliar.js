export default function(){
    return `
       <div id="container1">
        <div class="pt-5 mx-8">
          <div class="flex flex-col md:flex-row justify-between mb-[50px] gap-y-5">
            <p class="text-3xl text-center font-bold">QfindeR</p>
            <div class="flex gap-x-3 self-end">
              <a href="#" class="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
                <i class="fa-regular fa-user text-xl"></i>
              </a>
              <a href="#" class="px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center">
                <i class="fa-regular fa-bell text-xl"></i>
              </a>
            </div>
          </div>
          <div class="flex gap-3 mb-5">
            <p class="text-3xl md:text-4xl font-bold">Turnos Auxiliar</p>
          </div>
        </div>
        <div class="bg-white p-5 mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]p-3">

          <div class="flex justify-end items-center mb-6 gap-x-6">
            <p class="text-lg text-moradoOscuro">Buscar Por:</p>
            <form>
              <select id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:bg-white dark:text-moradoOscuro dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none min-w-72">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            <button class="bg-rosaPastelOpac rounded p-1 px-2 shadow-lg">
              <i class='fas fa-filter text-white'></i>
            </button>
          </div>
          <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-moradoOscuro uppercase bg-azulMasClaro">
                <tr>
                  <th></th>
                  <th scope="col" class="px-6 py-3">
                    Fecha
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <a href="#">
                      Auxiliar
                      <i class="fas fa-arrow-down ml-3"></i>
                    </a>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <a href="#">
                      Paciente
                      <i class="fas fa-arrow-down ml-3"></i>
                    </a>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <a href="#">
                      Encargado/a
                      <i class="fas fa-arrow-down ml-3"></i>
                    </a>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <a href="#">
                      Hora-inicio
                      <i class="fas fa-arrow-down ml-3"></i>
                    </a>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <a href="#">
                      Hora-Salida
                    </a>
                  </th>
                  <th>

                  </th>
                </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:border-azulMasClaro text-lg">
                  <th scope="row" class="px-6 py-4 font-medium">
                    <div class="flex items-center">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600">
                    </div>
                  </th>
                  <td class="px-6 py-4">
                      <p class="text-moradoOscuro font-medium">12 Jun 2024</p>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-azulMarFondo whitespace-nowrap ">
                      Daniel Mendez
                  </th>
                  <td class="px-6 py-4">
                      <p class="bg-rosa text-white text-[16px] text-center inline p-1 px-4 rounded">Will Robert</p>
                  </td>
                  <td class="px-6 py-4 text-moradoOscuro font-medium">
                      Enfermero 1
                  </td>
                  <td class="px-6 py-4 text-moradoOscuro font-medium">
                      5 Am
                  </td>
                  <td class="px-6 py-4 text-moradoOscuro font-medium">
                    2 Pm
                  </td>
                  <td class="px-6 py-4 flex gap-x-5">
                    <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                      <i class="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                    </a>
                    <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                      <i class="fa-solid fa-trash-can text-moradoOscuro"></i>
                    </a>
                  </td>
              </tr>
              <tr class="bg-white border-b dark:border-azulMasClaro text-lg">
                <th scope="row" class="px-6 py-4 font-medium">
                  <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600">
                  </div>
                </th>
                <td class="px-6 py-4">
                    <p class="text-moradoOscuro font-medium">12 Jun 2024</p>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-azulMarFondo whitespace-nowrap ">
                    Daniel Mendez
                </th>
                <td class="px-6 py-4">
                    <p class="bg-rosa text-white text-[16px] text-center inline p-1 px-4 rounded">Will Robert</p>
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    Enfermero 1
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    5 Am
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                  2 Pm
                </td>
                <td class="px-6 py-4 flex gap-x-5">
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                    <i class="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                  </a>
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                    <i class="fa-solid fa-trash-can text-moradoOscuro"></i>
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:border-azulMasClaro text-lg">
                <th scope="row" class="px-6 py-4 font-medium">
                  <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600">
                  </div>
                </th>
                <td class="px-6 py-4">
                    <p class="text-moradoOscuro font-medium">12 Jun 2024</p>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-azulMarFondo whitespace-nowrap ">
                    Daniel Mendez
                </th>
                <td class="px-6 py-4">
                    <p class="bg-rosa text-white text-[16px] text-center inline p-1 px-4 rounded">Will Robert</p>
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    Enfermero 1
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    5 Am
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                  2 Pm
                </td>
                <td class="px-6 py-4 flex gap-x-5">
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                    <i class="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                  </a>
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                    <i class="fa-solid fa-trash-can text-moradoOscuro"></i>
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:border-azulMasClaro text-lg">
                <th scope="row" class="px-6 py-4 font-medium">
                  <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600">
                  </div>
                </th>
                <td class="px-6 py-4">
                    <p class="text-moradoOscuro font-medium">12 Jun 2024</p>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-azulMarFondo whitespace-nowrap ">
                    Daniel Mendez
                </th>
                <td class="px-6 py-4">
                    <p class="bg-rosa text-white text-[16px] text-center inline p-1 px-4 rounded">Will Robert</p>
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    Enfermero 1
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    5 Am
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                  2 Pm
                </td>
                <td class="px-6 py-4 flex gap-x-5">
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                    <i class="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                  </a>
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                    <i class="fa-solid fa-trash-can text-moradoOscuro"></i>
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:border-azulMasClaro text-lg">
                <th scope="row" class="px-6 py-4 font-medium">
                  <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600">
                  </div>
                </th>
                <td class="px-6 py-4">
                    <p class="text-moradoOscuro font-medium">12 Jun 2024</p>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-azulMarFondo whitespace-nowrap ">
                    Daniel Mendez
                </th>
                <td class="px-6 py-4">
                    <p class="bg-rosa text-white text-[16px] text-center inline p-1 px-4 rounded">Will Robert</p>
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    Enfermero 1
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    5 Am
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                  2 Pm
                </td>
                <td class="px-6 py-4 flex gap-x-5">
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                    <i class="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                  </a>
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                    <i class="fa-solid fa-trash-can text-moradoOscuro"></i>
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:border-azulMasClaro text-lg">
                <th scope="row" class="px-6 py-4 font-medium">
                  <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600">
                  </div>
                </th>
                <td class="px-6 py-4">
                    <p class="text-moradoOscuro font-medium">12 Jun 2024</p>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-azulMarFondo whitespace-nowrap ">
                    Daniel Mendez
                </th>
                <td class="px-6 py-4">
                    <p class="bg-rosa text-white text-[16px] text-center inline p-1 px-4 rounded">Will Robert</p>
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    Enfermero 1
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    5 Am
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                  2 Pm
                </td>
                <td class="px-6 py-4 flex gap-x-5">
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                    <i class="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                  </a>
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                    <i class="fa-solid fa-trash-can text-moradoOscuro"></i>
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:border-azulMasClaro text-lg">
                <th scope="row" class="px-6 py-4 font-medium">
                  <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600">
                  </div>
                </th>
                <td class="px-6 py-4">
                    <p class="text-moradoOscuro font-medium">12 Jun 2024</p>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-azulMarFondo whitespace-nowrap ">
                    Daniel Mendez
                </th>
                <td class="px-6 py-4">
                    <p class="bg-rosa text-white text-[16px] text-center inline p-1 px-4 rounded">Will Robert</p>
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    Enfermero 1
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    5 Am
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                  2 Pm
                </td>
                <td class="px-6 py-4 flex gap-x-5">
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                    <i class="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                  </a>
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                    <i class="fa-solid fa-trash-can text-moradoOscuro"></i>
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:border-azulMasClaro text-lg">
                <th scope="row" class="px-6 py-4 font-medium">
                  <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600">
                  </div>
                </th>
                <td class="px-6 py-4">
                    <p class="text-moradoOscuro font-medium">12 Jun 2024</p>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-azulMarFondo whitespace-nowrap ">
                    Daniel Mendez
                </th>
                <td class="px-6 py-4">
                    <p class="bg-rosa text-white text-[16px] text-center inline p-1 px-4 rounded">Will Robert</p>
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    Enfermero 1
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    5 Am
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                  2 Pm
                </td>
                <td class="px-6 py-4 flex gap-x-5">
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                    <i class="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                  </a>
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                    <i class="fa-solid fa-trash-can text-moradoOscuro"></i>
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:border-azulMasClaro text-lg">
                <th scope="row" class="px-6 py-4 font-medium">
                  <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600">
                  </div>
                </th>
                <td class="px-6 py-4">
                    <p class="text-moradoOscuro font-medium">12 Jun 2024</p>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-azulMarFondo whitespace-nowrap ">
                    Daniel Mendez
                </th>
                <td class="px-6 py-4">
                    <p class="bg-rosa text-white text-[16px] text-center inline p-1 px-4 rounded">Will Robert</p>
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    Enfermero 1
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    5 Am
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                  2 Pm
                </td>
                <td class="px-6 py-4 flex gap-x-5">
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                    <i class="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                  </a>
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                    <i class="fa-solid fa-trash-can text-moradoOscuro"></i>
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:border-azulMasClaro text-lg">
                <th scope="row" class="px-6 py-4 font-medium">
                  <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600">
                  </div>
                </th>
                <td class="px-6 py-4">
                    <p class="text-moradoOscuro font-medium">12 Jun 2024</p>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-azulMarFondo whitespace-nowrap ">
                    Daniel Mendez
                </th>
                <td class="px-6 py-4">
                    <p class="bg-rosa text-white text-[16px] text-center inline p-1 px-4 rounded">Will Robert</p>
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    Enfermero 1
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    5 Am
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                  2 Pm
                </td>
                <td class="px-6 py-4 flex gap-x-5">
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                    <i class="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                  </a>
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                    <i class="fa-solid fa-trash-can text-moradoOscuro"></i>
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:border-azulMasClaro text-lg">
                <th scope="row" class="px-6 py-4 font-medium">
                  <div class="flex items-center">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-rosaPastelOpac bg-gray-100 border-gray-300 rounded focus:bg-rosaPastelOpac dark:focus:bg-rosaPastelOpac dark:bg-rosaPastelOpac focus:ring-2 dark:border-gray-600">
                  </div>
                </th>
                <td class="px-6 py-4">
                    <p class="text-moradoOscuro font-medium">12 Jun 2024</p>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-azulMarFondo whitespace-nowrap ">
                    Daniel Mendez
                </th>
                <td class="px-6 py-4">
                    <p class="bg-rosa text-white text-[16px] text-center inline p-1 px-4 rounded">Will Robert</p>
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    Enfermero 1
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                    5 Am
                </td>
                <td class="px-6 py-4 text-moradoOscuro font-medium">
                  2 Pm
                </td>
                <td class="px-6 py-4 flex gap-x-5">
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#8BC34A] hover:text-white">
                    <i class="fa-solid fa-pen-to-square text-moradoOscuro"></i>
                  </a>
                  <a href="#" class="p-2 rounded-md bg-white shadow-[0_0_14px_2px_#D8D2FCA3] grid place-content-center transition-all hover:bg-[#ff7878] hover:text-white">
                    <i class="fa-solid fa-trash-can text-moradoOscuro"></i>
                  </a>
                </td>
              </tr>
            
            </tbody>

          </table>
          </table>

          <div class="mt-8 flex justify-between items-center" id="footer-table">
            <p class="text-moradoOscuro font-medium text-lg">8 resultados encontrados: Mostrando página 1 de 1</p>

            <div class="bg-FAFAFA flex items-stretch content-baseline text-[17px] border border-[#D8D2FC]" id="pag">
              <button class="py-3 px-4 border-r border-[#D8D2FC]">Vista Previa</button>
              <a href="#" class="flex items-center justify-center py-3 px-4 border-r border-[#D8D2FC]">1</a>
              <a href="#" class="bg-rosaPastelOpac text-white font-bold flex items-center justify-center py-3 px-4 border-r border-[#D8D2FC]">2</a>
              <a href="#" class="flex items-center justify-center py-3 px-4 border-r border-[#D8D2FC]">3</a>
              <a href="#" class="flex items-center justify-center py-3 px-4 border-r border-[#D8D2FC]">4</a>
              <button class="py-3 px-4">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    `
}