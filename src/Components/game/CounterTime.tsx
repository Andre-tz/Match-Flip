//este comonente memmostrara el tiempo del juego

import { useState } from "react";
import { FcAlarmClock } from "react-icons/fc";
import useGame from "../../hook/useGame";
import getInitialTime from "../../helpers/getInitialTime";
import changeMmSs from "../../helpers/changeMsSs";

const CounterTimer =( ) =>{
    //usando el contador del context
    const { userData } = useGame();
    //estado que tendra la cantidad de timepo dependiendo el modo
    const [ time ] = useState<number>( ()=> getInitialTime( userData.difficulty ) );
    //este estado guardará el estado del counter
    //const [ counter, setCounter] = useState<boolean>( false );
    const [ minute, seconds ] = changeMmSs( time )

    return (
        <div>
            <FcAlarmClock />
            <p>{ `${ minute } : ${ seconds }`}</p>
        </div>
    );
}

export default CounterTimer;