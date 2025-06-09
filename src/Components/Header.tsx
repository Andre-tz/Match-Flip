//Este es el header, tendra mi marca asi como el puntaje de la persona
import { AiFillThunderbolt } from "react-icons/ai";

const Header = ( )  =>{

    return (
        <header className="w-full h-10 px-4 flex justify-between items-center text-xl md:text-2xl transition ease-in-out duration-500 bg-blue-700 md:bg-blue-950" >
            <h1 className="flex">{"<"}<AiFillThunderbolt />{">"} ItsAndreDev</h1>
            <p>Puntaje: 0000</p>
        </header>
    )
}

export default Header;