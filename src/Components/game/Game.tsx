//este componente tendra todo el juego de memory cards

import { useNavigate } from "react-router-dom";
import useGame from "../../hook/useGame";
import CountDown from "./CountDown";
import { IoMdArrowRoundBack } from "react-icons/io";



//este array contiene el nombre de todas las imagenes que se usaran en el juego
//const allImages = [ "blue-eyes", "bombardera", "cortex", "dark-magician", "deimos", "goku", "kratos", "luigi", "mario", "palito-pez", "red-eyes", "vegeta", "yoshi", "zeus"]

const Game = () =>{
    //usamos el contexto para acceder a datos
    const { timerActive } = useGame();
    //obtener el hook para manejar el click en el boton de atras
    const navigation   = useNavigate();

    const handleClick = () =>{
            navigation("/") //esto nos lleva al inicio
    }

    if( timerActive ) { return <CountDown /> }

    return (
        <> 
        <IoMdArrowRoundBack onClick={ handleClick }/>
        <h1>Componente del juego</h1>
        </>
    )
}

export default Game;