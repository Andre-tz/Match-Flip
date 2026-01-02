import { useTranslation } from "react-i18next";

//este es el footer
const Footer = ( ) =>{
    //usamos useTranslation
    const { t } = useTranslation();
    return (
        <footer className="w-full mt-6 px-4 py-4 flex flex-col items-center gap-1 text-sm text-[var(--muted)] bg-[var(--card)] border-t border-[var(--border)] transition-colors duration-300">

            <p className="text-center leading-snug">{ t( "footer.textOne" ) }</p>
            <p className="text-center">{ t( "footer.textTwo" ) }</p>

        </footer>
    )
}

export default Footer;