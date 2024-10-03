export default function(){
    return `
 <!-- Encabezado -->
      <div class="flex justify-between items-center mb-8" >
        <div class="text-2xl font-bold">
          <h1 class="text-2xl m-3">QfindeR</h1>
          <div class="inline-flex mt-10">
            <img class="mx-16" src="/public/images/doctorsección.png">
            <h2 class="text-[35px] self-center font-bold mx-[-40px]">Registro de nuevo paciente</h2>
          </div>
        </div>
      </div>
      <!-- Formulario -->
      <div class="p-8 mt-[-40px] rounded-full" >
        <form class="space-y-2 bg-white p-2 sm:p-8 md:p-4  shadow-lg rounded-3xl w-full min-w-[320px] ">
          <div class="flex flex-wrap justify-between items-center mb-5">
            <h1 class="text-lg font-semibold">Agregar Información del Paciente</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 tm-1400px:grid-cols-2 gap-4 mb-7 ">
            <div class="relative z-0">
              <label class="block text-sm font-medium">Nombres *</label>
              <input type="text" class="w-[540px] border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre *</label> -->
            </div>
            <div>
              <label class="block text-sm font-medium">Apellidos *</label>
              <input type="text" class="w-[540px] border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Apellidos *</label> -->
            </div>
            <div>
              <div class="inline-flex gap-10">
               <div>
                <label class="block text-sm font-medium">Tipo de documento *</label>
                <input type="email" class="w-[250px] border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
                <!-- <input type="email" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Correo Electrónico *</label> -->
               </div>
               <div> 
                <label class="block text-sm font-medium">Número de identificación *</label>
                <input type="email" class="w-[250px] border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
                <!-- <input type="email" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Correo Electrónico *</label> -->
               </div>
              </div>  
            </div>
            <div>
              <div class="inline-flex gap-10">
               <div>
                <label class="block text-sm font-medium">Eps *</label>
                <input type="email" class="w-[250px] border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
                <!-- <input type="email" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Correo Electrónico *</label> -->
               </div>
               <div> 
                <label class="block text-sm font-medium">Edad *</label>
                <input type="email" class="w-[250px] border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
                <!-- <input type="email" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Correo Electrónico *</label> -->
               </div>
              </div>  
            </div>
            <div>
              <label class="block text-sm font-medium">Dirección *</label>
              <input type="email" class="w-[540px] border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Edad *</label> -->
            </div>
            <div>
              <label class="block text-sm font-medium">Alergias *</label>
              <input type="email" class="w-[540px] border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Edad *</label> -->
            </div>
            <div>
              <label class="block text-sm font-medium">Descripción *</label>
              <input type="text" class="w-[1170px] border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none">
              <!-- <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Grupo Sanguíneo *</label> -->
            </div>
            <div class="md:col-span-2 lg:col-span-1 flex items-center space-x-2 mt-20 ">
              <div class="rounded-full">
                <label for="fileUpload"
                  class="bg-[#DCDCDC] hover:bg-gray-200 text-[#5D5D5D] py-2 px-4 rounded-3xl cursor-pointer border-2 border-[#B5B5B5]">
                  Subir fotografía *
                </label>
                <input type="file" id="fileUpload"
                  class="w-full hidden border-gray-300 focus:border-blue-500 focus:outline-none">
              </div>
            </div>
            <div class="flex justify-end w-full">
              <button type="submit"
                class="bg-[#4B9AF6] border-2 border-[#1279E2] text-white py-1 px-3 rounded-2xl m-5 ">Continuar con el registro</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>`
}

