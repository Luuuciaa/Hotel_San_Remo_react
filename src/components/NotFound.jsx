
import { Link } from "react-router-dom";
import { Seccion } from "../components/Children";

export function NotFound() {
    return (
        <main>
            <Seccion titulo="PÁGINA NO ENCONTRADA ">
                <div className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-4xl font-bold text-[#3f2c0e] mb-6">404</h1>
                    <p className="text-[20px] sm mb-15">Lo sentimos, la página que buscas no existe</p>

                    <Link
                        to="/"
                        className=" bg-[#d8b25e] text-[#3f2c0e] font-bold px-6 py-2 rounded-full hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300 text-base justify-start items-center cursor-pointer"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </Seccion>
        </main>
    )
}