import { useTranslation } from "react-i18next";

//este es el footer
const Footer = ( ) =>{
    //usamos useTranslation
    const { t } = useTranslation();
    return (
        <footer>

            <p>{ t( "footer.textOne" ) }</p>
            <p>{ t( "footer.textTwo" ) }</p>

        </footer>
    )
}

export default Footer;