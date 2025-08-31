import { Seccion } from "../components/Children";

 export function Ubicacion() {
  return (
    <>
    <main>
        
    <Seccion titulo="UBICACIÓN">
        <h3 className="text-center italic text-[17px]  sm:text-[20px] lg:text-[20px] font-bold font-[Glory]">"TU DESCANSO A SOLO UNOS 100 METROS DEL MAR"</h3>
        <p className="text-center mb-15 mt-10 font-[Glory] text-[15px]  sm:text-[17px] lg:text-[17px] ">Calle 16 San Clemente del Tuyú - Buenos Aires - Argentina</p>
        {/*MAPA DE GOOGLE MAPS*/ }
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.159966070168!2d-56.7193489!3d-36.35690399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c1b5e14b753e3%3A0x1f0e1d12cc0b59c7!2sSan%20Remo%20World%20Hotel!5e0!3m2!1ses!2sar!4v1743017116013!5m2!1ses!2sar"
            width="800"
             height="600" s
             style={{ border: 0 }}
             allowfullscreen="" 
             loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-[90%]  block mx-auto mb-20"
            >

            </iframe>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
    </Seccion>
    </main>
   
    </>
  );
}

