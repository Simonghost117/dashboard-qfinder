export default function(){
    return `
     <section class="mx-5 py-7">
        <div class="flex justify-between">
          <p class="text-3xl font-bold">QfindeR</p>
          <div class="relative">
            <i class="fa-solid fa-user-plus absolute left-3 top-[10px]"></i>
            <a href="#" id="btn_agregarUsuario" class="py-1 px-8 rounded-full border-blue-500 border-2 bg-azulCielo text-white transition-all hover:bg-hoverBgGuardar block text-center">Agregar nuevo usuario</a>
          </div>
          
        </div>
        
        <div class="flex  py-4 justify-between">
          <div class="flex">
            <i class="fa-solid fa-hands-holding-child text-3xl md:text-4xl"></i>
            <p class="text-3xl md:text-4xl font-bold px-2">Pacientes</p>

          </div>
          
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute right-3 top-2"></i>
            <input type="text" value="" class="rounded-full shadow-[0_0_14px_2px_#D8D2FCA3] text-md py-1 px-4 pr-8 hover:border-gris border-2">
          </div>
        </div>

        <div class="bg-white rounded-md p-6 space-y-4 lg:grid grid-cols-2 gap-4 lg:space-y-0">
<a href="#"  id="botonPerfil">
          <div class="bg-white rounded-[40px] shadow-[0_0_14px_2px_#D8D2FCA3] p-2 px-9 flex items-center hover:border-gris border-2">
            <img class="w-[80px] h-[80px] shadow-md rounded-3xl" src=/public/images/socio.avif alt="">
            <div class="px-4 m-1">
              <p class="font-semibold text-[18px]">Marcos Andres Meneses Ortega</p>
              <p>Enfermedad: <span class="font-semibold">Alzheimer</span></p>
              <p>Acudiente: <span class="font-semibold">Martha Rodriguez</span></p>
            </div>
          </div>
 </a>
          
          <div class="bg-white rounded-[40px] shadow-[0_0_14px_2px_#D8D2FCA3] p-2 px-9 flex items-center">
            <img class="w-[80px] h-[80px] shadow-md rounded-3xl" src=/public/images/socio.avif alt="">
            <div class="px-4 m-1">
              <p class="font-semibold text-[18px]">Marcos Andres Meneses Ortega</p>
              <p>Enfermedad: <span class="font-semibold">Alzheimer</span></p>
              <p>Acudiente: <span class="font-semibold">Martha Rodriguez</span></p>
            </div>
          </div>

          <div class="bg-white rounded-[40px] shadow-[0_0_14px_2px_#D8D2FCA3] p-2 px-9 flex items-center
          hover:border-gris border-2">
            <img class="w-[80px] h-[80px] shadow-md rounded-3xl" src=/public/images/socio.avif alt="">
            <div class="px-4 m-1">
              <p class="font-semibold text-[18px]">Marcos Andres Meneses Ortega</p>
              <p>Enfermedad: <span class="font-semibold">Alzheimer</span></p>
              <p>Acudiente: <span class="font-semibold">Martha Rodriguez</span></p>
            </div>
          </div>
         
        </div>
      </section>
    `
}