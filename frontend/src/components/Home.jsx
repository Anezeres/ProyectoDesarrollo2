/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Camisa',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

export default function Home() {
  return (


    <div className="bg-white">
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                ¡Las ofertas de fin de año ya estan aqui!
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Este 2023 las ofertas vienen mas fuertes que nunca, ¿Que estas esperando para comprar tu estren de diciembre?
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.pexels.com/photos/3680210/pexels-photo-3680210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-orange-600 px-8 py-3 text-center font-medium text-white hover:bg-gray-700"
                >
                  Ver Promociones
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/*Producto*/}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-orange-600">Camisas en descuento</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/*Categories*/}
      <div class="bg-orange-00">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-2xl font-bold text-orange-600">Categorias</h2>

            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center"></img>
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Descubre la elegancia y comodidad en nuestra colección para caballeros. Desde trajes formales hasta ropa casual, encontrarás todo lo que necesitas para lucir a la moda en cualquier ocasión.
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Caballeros </p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://images.pexels.com/photos/4923049/pexels-photo-4923049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center"></img>
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Explora la moda femenina en su máxima expresión. Nuestra amplia gama de vestidos, blusas, faldas y más te permite expresar tu estilo único y sentirte segura en cada paso.
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Damas</p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center"></img>
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Los detalles marcan la diferencia. Encuentra los complementos perfectos para realzar cualquier atuendo. Desde joyería y bolsos elegantes hasta gafas de sol y bufandas, nuestros accesorios te ayudarán a destacar.
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Accesorios</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Galeria*/}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-orange-600 lg:w-1/3 lg:mb-0 mb-4">Estilos Únicos: Inspírate en la Elegancia</h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Explora nuestra selección de estilos únicos que te permitirán expresar tu individualidad con cada prenda. Encuentra la elegancia que va más allá de las tendencias y abraza la moda que te hace destacar.</p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/9876711/pexels-photo-9876711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/14807470/pexels-photo-14807470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
              </div>
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://images.pexels.com/photos/928060/pexels-photo-928060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://images.pexels.com/photos/1176619/pexels-photo-1176619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/*Hero*/}

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-600">¡Descubre Tu Nuevo Estilo en Nuestra Tienda!</h1>
            <p class="mb-8 leading-relaxed">En nuestro ecommerce de ropa, te esperan tendencias frescas y prendas de calidad que harán que te sientas especial. ¡No te quedes atrás! Explora nuestra tienda y encuentra la moda que te define. Cada producto es una oportunidad para expresar tu estilo único. ¿Qué estás esperando? ¡Haz clic y lleva a casa la moda que amarás!</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"><b>Explorar</b></button>
              <button class="ml-4 inline-flex text-gray-900 bg-orange-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><b>Ir al Carrito</b></button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/10059436/pexels-photo-10059436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </div>
        </div>
      </section>


      {/*Footer*/}

      <footer class="bg-white dark:bg-gray-900">
        <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
          <a href="#">
            <img class="w-auto h-7" src="https://merakiui.com/images/full-logo.vg" alt=""></img>
          </a>

          <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a href="#" class="text-sm text-gray-900 transition-colors duration-300 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-600">
              Home
            </a>

            <a href="#" class="text-sm text-gray-900 transition-colors duration-300 dark:text-orange-600 hover:text-orange-600 dark:hover:text-orange-600">
              Caballeros
            </a>

            <a href="#" class="text-sm text-gray-900 transition-colors duration-300 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-600">
              Damas
            </a>
            <a href="#" class="text-sm text-gray-900 transition-colors duration-300 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-600">
              Accesorios
            </a>

          </div>

          <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2023. </p>
        </div>
      </footer>


      
    </div>



  )
}
