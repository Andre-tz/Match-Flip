import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

//este modal le mostrará al usuario las reglas del juego
const InfoModal = ( ) => {
    //constante para usar el cambio de idioma
    const { t } = useTranslation( );
    //este constante tendra el hook de navegacion
    const navigate = useNavigate();

    //funcion para ir a la pagina del juego
    const handleNavigate = ( ) =>{
        navigate( "/game" )
    }
    
    return (
        <div>
            <h1>{ t( "infoModal.title") }</h1>
            <p>{ t("infoModal.message" ) }</p>
            <button onClick={ handleNavigate }>{ t( "infoModal.button" ) }</button>
        </div>
    )
}

export default InfoModal;