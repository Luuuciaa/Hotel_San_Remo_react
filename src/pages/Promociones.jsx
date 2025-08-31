
import { promociones } from "../data/promociones";
import  {Promos} from "../components/Promos";
import { Seccion } from "../components/Children";

export function Promociones() {
  return (

    <>
      <main>
        <Seccion titulo="PROMOCIONES">
          <div >
            <p className=" text-[20px] text-center mb-15 font-[Glory] ">"¡Haz tu escapada perfecta con nuestras promociones exclusivas!"</p>
          </div>
          <div className="promos-container flex flex-wrap justify-center" >
            {promociones.map((pro, index) => (
              <Promos key={index} {...pro} />
            ))}
          </div>
        </Seccion>
      </main>

     
    </>
  );
}

