//ete componente tendrá 2 botones para que el usuario pueda repetir el juego o salir a la pantalla principal
import { useNavigate} from "react-router-dom";
import useGame from "../../../hook/useGame";
import { useTranslation } from "react-i18next";

//clases para botones
const retryBtn = "bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition";
const exitBtn = "bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg transition";
const giveUpBtn = "bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition";

const ButtonNavigation = ( ) => {
    //necesito el estado del  juego para saber sque botones mostrar al usuario
    const { userData, setTimerActive, setTimer } = useGame();
    //usare useTranslation
    const { t } = useTranslation();
    //hook para navegar entre paginas
    const backHome = useNavigate();
    //funcion de lcik para volver a la pagina principal
    const handleClick = ()=>{
        backHome( "/" )
    }
    
    const handleRestart = ()=>{
        setTimerActive( true )
        setTimer( 5 )
    }
    //funcion para renderizar los botones de acuerdo al estado del juego
    const renderButtons = () =>{
        //si el estado es won entonces me devulve 2 botones repetir y salir
        if( userData.gameStatus === "won" ){
            return (
                <>
                    <button className={ retryBtn } onClick={ handleRestart}> { t( "buttonModals.tryAgain" ) }</button>
                    <button onClick={ () => { handleClick() }  } className= { exitBtn }>{ t("buttonModals.exit" ) }</button>
                </>
            )
        }else if( userData.gameStatus === "timeOut" ){
            //si es timeOut entonces igual me devuelve 2 botones repetir y rendirse{
            return(
                <>
                    <button className={ retryBtn }> { t( "buttonModals.tryAgain" ) }</button>
                    <button className= { giveUpBtn }>{ t("buttonModals.giveUp" ) }</button>
                </>
            )
        }else{
            //si no es ningino de los dos entonces por ende es lost que me devolvera un boton de salir
            return <button onClick={ () => { handleClick() }  } className= { exitBtn }>{ t("buttonModals.exit" ) }</button>
        }
    }

    return (
        <div>
            { renderButtons() }
        </div>
    );

}
export default ButtonNavigation;