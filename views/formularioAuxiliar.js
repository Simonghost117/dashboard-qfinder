export default function(){
    return `
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
            <a href="#" class="xl:hidden px-3 rounded-full bg-white shadow-[0_0_14px_2px_#D8D2FCA3] hover:shadow-[0_0_14px_2px_#46a6ff47] grid place-content-center" id="btnMenuMobile">
              <i class="fa fa-bars text-xl"></i>
            </a>
          </div>
        </div>
        <div class="flex gap-3 mb-5">
          <p class="text-3xl md:text-4xl font-bold">Turnos Auxiliar</p>
        </div>
      </div>

      <div class="bg-white p-5 mt-8 mb-8 mr-0 ml-0 mq980:mr-12 mq980:ml-8 xl:ml-0 rounded-lg transition-all xl:basis-[88%]">
        <div class="flex justify-between mb-14">
          <p class="text-xl md:text-2xl text-moradoOscuro font-bold">Agregar Información del Paciente</p>

          <a href="#" class="py-2 px-4 bg-rosa text-white font-bold text-md rounded-md">Lista de Pacientes</a>
        </div>

        <div class="flex flex-col space-y-7">
          <div class="flex space-x-7">
            <div class="w-1/2">
              <div class="relative z-0">
                <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                <label for="floating_standard" class="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name *</label>
              </div>          
            </div>
            <div class="w-1/2">
              <div class="relative z-0">
                  <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label for="floating_standard" class="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name *</label>
                </div>
            </div>
          </div>

          <div class="flex space-x-7">
            <div class="w-3/6">
              <div class="relative z-0">
                  <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label for="floating_standard" class="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name *</label>
                </div>
            </div>
            <div class="w-3/6 flex space-x-7">
              <div class="w-1/2">
                <div class="relative z-0">
                  <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label for="floating_standard" class="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name *</label>
                </div>
              </div>
              <div class="w-1/2">
                <div class="relative z-0">
                  <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label for="floating_standard" class="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name *</label>
                </div>
              </div>
            </div>
          </div>

          <div class="flex space-x-7">
            <div class="w-1/3">
              <div class="relative z-0">
                  <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label for="floating_standard" class="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name *</label>
                </div>
            </div>
            <div class="w-1/3">
              <div class="relative z-0">
                  <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label for="floating_standard" class="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name *</label>
                </div>
            </div>
            <div class="w-1/3">
              <div class="relative z-0">
                  <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label for="floating_standard" class="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name *</label>
                </div>
            </div>
            <div class="w-1/3">
              <div class="relative z-0">
                  <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
                  <label for="floating_standard" class="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name *</label>
                </div>
            </div>
          </div>

          <div class="w-full mb-16">
            <div class="relative z-0">
              <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-[#271E4A] dark:focus:border-[#271E4A] focus:outline-none focus:ring-0 focus:border-[#271E4A] peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-sm text-[#271E4A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#271E4A] peer-focus:dark:text-[#271E4A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name *</label>
            </div>
          </div>

          <div class="flex justify-center space-x-20">
            <a href="#" class="py-2 px-4 bg-[#79CFA6] text-white font-bold text-md rounded-md">Subir Hoja de Vida</a>
            <a href="#" class="py-2 px-4 bg-[#CA79C6] text-white font-bold text-md rounded-md">Subir Hoja de Vida</a>
          </div>
        </div>
      </div>
    `
}