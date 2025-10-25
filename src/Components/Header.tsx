//Este es el header, tendra mi marca asi como el puntaje de la persona
import { AiFillThunderbolt } from "react-icons/ai";
import { IoLanguageSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import useGame from "../hook/useGame";

const Header = ( )  =>{
    //este hookk se usara para las traduciones del texto de la aplicacion
    const { i18n } = useTranslation();
    const { setUserData } = useGame();

    const handleLanguage = () =>{
        //cambia el idioma entre ingles y español
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
        setUserData(prevData => ({
            ...prevData,
            language: newLanguage
        })
    )}

    return (
        <header className="w-full h-10 px-4 flex justify-between items-center text-xl md:text-2xl transition ease-in-out duration-500 bg-blue-700 md:bg-blue-950" >
            <h1 className="flex">{"<"}<AiFillThunderbolt />{">"} ItsAndreDev</h1>
            <IoLanguageSharp  onClick={ handleLanguage }/>
        </header>
    )
}

export default Header;