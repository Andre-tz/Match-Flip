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
        <header className="w-full px-4 flex justify-between items-center bg-[var(--card)] text-[var(--text)] border-b border-[var(--border)] transition-colors duration-300" >
            <h1 className="flex items-center gap-1 text-base font-semibold">{"<"}<AiFillThunderbolt  className=" text-[var(--accent)]"/>{">"} ItsAndreDev</h1>
            <IoLanguageSharp className="text-lg cursor-pointer text-[var(--muted)] hover:text-[var(--accent)] transition-colors"  onClick={ handleLanguage }/>
        </header>
    )
}

export default Header;