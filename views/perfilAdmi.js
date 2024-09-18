export default function(){
    return `
          <section class="mx-5 py-7">
        <div class="flex flex-col md:flex-row justify-between mb-[50px] gap-y-5">
          <p class="text-3xl font-bold">QfindeR</p>
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
          <p class="text-3xl md:text-4xl font-bold">Administrador</p>
        </div>
        <div class="bg-white rounded-md p-6">
          
            <div class="flex flex-col md:flex-row justify-between  mb-10">
              <p class="text-2xl md:text-3xl text-moradoOscuro font-bold">Información del Administrador
              </p>
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
                <p class="text-moradoOscuro font-bold">SERVID</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <br>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div class="flex-1">
                    <p class="text-moradoOscuro font-bold">Nit:</p>
                    <p>1234567889</p>
                  </div>
                  <div class="flex-1">
                    <p class="text-moradoOscuro font-bold">Número de teléfono</p>
                    <p>+91 8548521524</p>
                  </div>
                  <div>
                    <p class="text-moradoOscuro font-bold">Dirección:</p>
                    <p>Popayán Cauca</p>
                  </div>
                  <div>
                    <p class="text-moradoOscuro font-bold">Correo electronico:</p>
                    <p>servid@gmail.com</p>
                  </div>
                </div>
              </div>
            
            </div>
        </div>
      </section>
    `
}