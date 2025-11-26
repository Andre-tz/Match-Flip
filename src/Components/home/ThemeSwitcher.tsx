import { useEffect, useState } from "react";
import useGame from "../../hook/useGame";

//este componente es el que cambiará de tema el juego 
const ThemeSwitcher = ( ) => {
    const [ swichTheme, setSwitchTheme ] = useState<boolean>( false );
    const { setUserData } = useGame();

    //funcion para cambiar el tema
    const handleTheme = () =>{
        setSwitchTheme( prev => !prev )
    }
    //actualizando el localStorage
    useEffect( ()=>{
        setUserData( prev =>( {
            ...prev,
            codeTheme : swichTheme
        }))
    } , [swichTheme, setUserData])

    return (
        <div>
            <button onClick={ handleTheme } className="bg-blue-100 p-2 border-2 border-blue-800 rounded-[10px] text-blue-800 cursor-pointer"> Cambiar Tema</button>
        </div>
    )
}
export default ThemeSwitcher;