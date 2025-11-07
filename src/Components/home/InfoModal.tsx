import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useGame from "../../hook/useGame";

//este modal le mostrará al usuario las reglas del juego
const InfoModal = ( ) => {
    //constante para usar el cambio de idioma
    const { t } = useTranslation( );
    //este constante tendra el hook de navegacion
    const navigate = useNavigate();
    //obteniendo showIndo del context
    const { setShowInfo } = useGame();
    //funcion para ir a la pagina del juego
    const handleNavigate = ( ) =>{
        navigate( "/game" )
        setShowInfo( false )
    }
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center">
                <h1 className="text-xl font-semibold mb-2">{t("infoModal.title")}</h1>
                <p className="text-gray-700 mb-4">{t("infoModal.message")}</p>
                <button onClick={handleNavigate} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">{t("infoModal.button")}</button>
            </div>
        </div>

    )
}

export default InfoModal;