export default function(){
    return `
      <div class="min-h-[700px]">
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
  </div>
  </div>
    `
}