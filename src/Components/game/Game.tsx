//este componente tendra todo el juego de memory cards
import { useNavigate } from "react-router-dom";
import useGame from "../../hook/useGame";
import CountDown from "./CountDown";
import { IoMdArrowRoundBack } from "react-icons/io";
import getRandomImages from "../../herlpers/getRandomImages";
import Cards from "./Cards";

//este array contiene el nombre de todas las imagenes que se usaran en el juego
const allImages = [ "blue-eyes", "bombardera", "cortex", "crash", "dark-magician", "deimos", "goku", "kratos", "luigi", "mario", "palito-pez", "red-eyes", "vegeta", "yoshi", "zeus"]

const Game = () =>{
    //usamos el contexto para acceder a datos
    const { timerActive, userData } = useGame();
    //obtener el hook para manejar el click en el boton de atras
    const navigation   = useNavigate();
    //manejando el click para navegar a otra pagina
    const handleClick = () =>{
        navigation("/") //esto nos lleva al inicio
    }
    
    //aqui usaré el helper que he creado para obtener mis imagenes en una nueva constante
    const gameImages = getRandomImages( allImages,userData.pairCards )

    //cuando el timer esta activo se renderizara el componente CountDown
    if( timerActive ) { return <CountDown /> }

    //cuando el timer llega a 0 enotnces me retornara el juego en si
    return (
        <> 
            <IoMdArrowRoundBack onClick={ handleClick } className="absolute left-4"/>
            <h1>Componente del juego</h1>
            <div className="flex flex-wrap">
                { gameImages.map( ( card, index  ) => (
                    <Cards
                        key={ index }
                        name ={ card }
                    />
                ))}
            </div>
        </>
    )
}

export default Game;