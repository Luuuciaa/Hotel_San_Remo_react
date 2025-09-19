

import { Seccion } from "../components/Children";
import FormularioContacto from "../components/FormularioContacto";

export function Contacto() {
  return (
    <>
      <main>
        <Seccion titulo="CONTACTANOS">
          <p id="duda" className="text-center  mb-10  text-xl mr-5 ml-5 font-[League_Spartan] font-medium">
            Si tenés alguna duda o sugerencia, contactanos y a la brevedad nos comunicaremos con vos.
          </p>
       </Seccion>
       <FormularioContacto></FormularioContacto>
       </main>
    </>
  );
  }

