
import { Servicios } from "../components/Servicios.jsx";
import { Link } from "react-router-dom";
export function Inicio() {
  return (
    <>

      <main>
        {/* SECCIÓN DE PRESENTACIÓN */}
        <section className="presentacion relative font-[Glory]">
          <article className="contenido">
            <img
              src="./img/frente.jpg"
              alt="Frente del Hotel"
              id="hotel"
              className="w-full h-[500px] sm:h-[600px] lg:h-[800px] object-cover brightness-50"
            />

            {/* TÍTULO */}
            <h1
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  
                   text-white text-5xl sm:text-5xl lg:text-[70px] font-extrabold text-center"
            >
              ¡Bienvenidos!
            </h1>

            {/* DESCRIPCIÓN */}
            {/*bottom-5  para mantenerlo pegado al borde inferior sin salir del contenedor.*/}
            <p
              className="absolute bottom-5 left-1/2 -translate-x-1/2 
             w-[90%] max-w-4xl 
             text-white text-base sm:text-lg lg:text-[25px] 
             font-light text-center px-4"
            >
              Lo invitamos a disfrutar de una estadía única, donde el confort, la tranquilidad
              y un servicio excepcional se combinan para brindarle la mejor experiencia.
            </p>
          </article>
        </section>


        {/*SECCIÓN INFORMACIÓN DEL HOTEL*/}

        <section className="elhotel flex flex-wrap justify-center items-start gap-20 font-[Glory] ">
          <div className="contenido-texto text-center max-w-xl  ">


            <h2 className=" mb-5 mt-20 font-bold  text-[25px] sm:text-[25px] lg:text-[35px]">San Remo World Hotel</h2>
            <h3 className="font-italic mb-10 text-[20px]  sm:text-[20px] lg:text-[25px] font-bold "><em>San Clemente del Tuyú</em></h3>

            <p className="text-center mb-10  leading-7 mr-8 ml-8 font-[League Spartan] leading-[25px]  text-[17px] sm:text-[20px] lg:text-[20px] ">
              Ubicado en San Clemente del Tuyú, a solo 100 metros de la playa y del centro, nuestro hotel le ofrece una
              experiencia de descanso y comodidad inigualable. Nos encontramos a 8 km de Termas Marinas Park y Mundo Marino, dos
              de los principales atractivos de la zona. Disponemos de 81 habitaciones con baño privado y TV por cable, además de
              cómodos Apart monoambiente para quienes buscan mayor independencia. Entre nuestros servicios, destacamos un
              delicioso desayuno, una piscina cubierta climatizada de gran dimensión con jacuzzi, una acogedora sala de estar y
              un exclusivo mirador con vista panorámica en el último piso, ideal para relajarse y disfrutar del paisaje.
            </p>

        {/*BOTÓN VER MÁS*/}
            <div id="vermas">
              <Link to="/vermas" className="bg-[#d8b25e] text-[#3f2c0e] font-bold  px-3 py-2 rounded-full hover:bg-[#3f2c0e] 
              hover:text-[#fcf8ef] transition-colors duration-300 text-lg sm:text-[20px] lg:text-[20px] ">Ver Más</Link>
            </div>
          </div>

          <div className="contenido-imagen mt-10 mb-10  ">
            <img
              src="./img/hotel frente.jpg"
              alt="Vista frontal del San Remo World Hotel"
              className="w-full max-w-[500px] h-[550px] sm:h-[550px] object-cover rounded-[10px] shadow-md mx-auto" />
          </div>
        </section>

        {/*SERVICIOS*/}
        <section className="bg-[#fcf8ef] p-10 sm:p-20 mt-5 mb-24 max-w-[1200px] mx-auto font-[Montserrat]">
          <h3 className="text-[25px] sm:text-[25px] lg:text-[28px] font-bold mb-8 text-center">Nuestros Servicios</h3>
          <div className="servicios-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="columna1 mr-5 mt-4 ">
              <Servicios
                nombre="Desayuno"
                descripcion="Inicia tu día de la mejor manera."
                icon="bxs-coffee-alt" />
              <Servicios
                nombre="Cochera"
                descripcion="Para garantizar la máxima comodidad y tranquilidad durante su estadía."
                icon="bx-car" />
            </div>
            <div className="columna2 mr-8 mt-4">
              <Servicios nombre="Wi-Fi"
                descripcion="Conéctate sin límites y disfruta de una estadía siempre conectada."
                icon="bx-wifi" />
            </div>
            <div className="columna3 mr-5 mt-4">
              <Servicios
                nombre="Piscina"
                descripcion="Relájate y renueva tus energías."
                icon="bx-swim" />
              <Servicios
                nombre="Media pensión"
                descripcion="Para quienes buscan una experiencia más cómoda y relajante."
                icon="bx-restaurant" />
            </div>
          </div>
        </section>


      </main>

    </>
  );
}

