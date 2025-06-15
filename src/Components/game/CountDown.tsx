//este componente me dará una cuenta regresiva para iniciar el juego
import { useEffect } from "react";
import useGame from "../../hook/useGame";
const CountDown = () =>{
    //usare el contexto para activar el contador
    const { setTimerActive, setTimer, timer } = useGame();

    //este useEffect se disparará cuando se monte el componente 
    useEffect( () =>{
        const interval = setInterval( ()=>{

            setTimer ( prevTimer => {

                if( prevTimer <= 1 ){
                    clearInterval( interval );
                    return 0 
                }
                return prevTimer - 1;
            });
        }, 1000 );
    
        return ( )=> clearInterval( interval );
    }, [ setTimerActive, setTimer] );

    //cuando el timer llega a 0 entonces cambianos de estado al 
    useEffect( () =>{
        if( timer === 0 ) { setTimerActive( false ); }
    }, [ timer, setTimerActive])
    return (
        <>
            <h1>El juego iniciará en:</h1>
            <p>{ timer }</p>
        </>

    )
}

export default CountDown;