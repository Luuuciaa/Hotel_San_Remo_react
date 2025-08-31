
//Componente Pie de página
export function Footer() {
  return (
    <footer className="bg-[#3f2c0e] p-10 mt-24 font-montserrat">
  <div className="flex flex-col md:flex-row justify-between gap-10">
    
    {/* REDES SOCIALES */}
    <section className="redessociales text-center md:text-left">
      <h3 className="text-lg font-semibold mb-5 text-white">Seguinos en nuestras redes sociales</h3>
      <ul className="space-y-2">
        <li className="flex items-center justify-center md:justify-start mb-5">
          <i className="bx bxl-instagram text-[#f8d479] text-2xl mr-3"></i>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-white ">hotelessanremo</a>
        </li>
        <li className="flex items-center justify-center md:justify-start">
          <i className="bx bxl-facebook-circle text-[#f8d479] text-2xl mr-3"></i>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-white ">San RemoHoteles</a>
        </li>
      </ul>
    </section>

    {/* CONTACTO */}
    <section className="contacto text-center md:text-left">
      <h3 className="text-lg font-semibold mb-5 text-white ">Contacto</h3>
      <ul className="space-y-2">
        <li className="flex items-center justify-center md:justify-start mb-5">
          <i className="bx bxs-phone text-[#f8d479] text-2xl mr-3"></i>
          <a href="tel:+5492257585109" className="hover:underline text-white">2257585109</a>
        </li>
        <li className="flex items-center justify-center md:justify-start mb-5">
          <i className="bx bxl-whatsapp text-[#f8d479] text-2xl mr-3"></i>
          <a href="https://wa.me/5492234425306" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">2234425306</a>
        </li>
        <li className="flex items-center justify-center md:justify-start mb-5">
          <i className="bx bx-envelope text-[#f8d479] text-2xl mr-3"></i>
          <a href="mailto:revervas@sanremohotel.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">revervas@sanremohotel.com</a>
        </li>
        <li className="flex items-center justify-center md:justify-start mb-5">
          <i className="bx bx-location-plus text-[#f8d479] text-2xl mr-3"></i>
          <a href="https://maps.app.goo.gl/YYvqaTjuzkm96Fs86" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
            C.16 San Clemente del Tuyú, BsAs, Argentina
          </a>
        </li>
      </ul>
    </section>

  </div>

  <p className="text-white text-center mt-10 font-bold">
    © 2025 Hotel San Remo - Todos los derechos reservados
  </p>
</footer>

  );
}
