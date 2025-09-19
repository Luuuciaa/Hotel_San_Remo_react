
import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu.jsx";
import { Footer } from "./components/Footer.jsx";
import { HabitacionDetail } from "./pages/HabitacionesDetail.jsx";
// Páginas
import { Inicio } from "./pages/Inicio.jsx";
import { Promociones } from "./pages/Promociones.jsx";
import { Servicios } from "./components/Servicios.jsx";
import { Habitaciones } from "./pages/Habitaciones.jsx";
import { Ubicacion } from "./pages/Ubicacion.jsx";
import { Contacto } from "./pages/Contacto.jsx";
import { Vermas } from "./components/Vermas";
import { Reservar } from "./components/Reservar.jsx";
import { NotFound } from "./components/NotFound.jsx";




export function App() {
  return (
    <>
      <Menu />
      <main>
        {/*RUTAS ANIDADAS*/}
        <Routes>
          <Route index="/" element={<Inicio />} /> {/*RUTA RAÍS DE LA PÁGINA PRINCIPAL*/}
          <Route path="/habitaciones" element={<Habitaciones />} />
          <Route path="/habitaciones/:habitacionId" element={<HabitacionDetail />} ></Route>{/*RUTA DINÁMICA PARA QUE MUESTRE LAS HABITACIONES POR ID*/}
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/vermas" element={<Vermas />} />
          <Route path="/reservar" element={<Reservar />}></Route>
          {/* Ruta comodín para manejar páginas inexistentes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

