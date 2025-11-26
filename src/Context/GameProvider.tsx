//este componente envolvera a los demas y usara el contexto que se creo en GameContext.ts
import  GameContext  from "./GameContext";
import { useState, useEffect } from "react";

type Props ={
    children: React.ReactNode;
}

const GameProvider = ({ children } : Props)=>{
    //estos son los datos iniciales del usuario, los buscamos en el localStorage, si no existen, se inicializan con valores por defecto
    const [ userData, setUserData ] = useState(
        () =>{
            const storedData = localStorage.getItem( "userData" );
            return storedData? JSON.parse( storedData ) : { name: "", difficulty: "", language: "es", pairCards : 0, gameStatus : "waiting", codeTheme: false,  wasShown: false  }
        }
    );
    
    //esta constante tendra el estado del contador, si esta activo o no
    const [ timerActive, setTimerActive ] = useState<boolean>( true );

    //esta constante tendra el valor  del contador
    const [ timer, setTimer ] = useState<number>( 5 );

    //estado que almacenara el valor del modal de informacion
    const [ showInfo, setShowInfo ] = useState<boolean>( false )
    //este estado ira junto con el otro para que el modal no se vuelva a abir
    const [ wasShown, setWasShown ] = useState<boolean>( false )
    //este useEffect llevara los datos del usuario al localStorage al iniciar la aplicacion
    useEffect( () =>{ 
        localStorage.setItem( "userData", JSON.stringify( userData ) );
    }, [ userData] );

    return (
        <GameContext.Provider value ={ { userData, setUserData, timerActive, setTimerActive, timer, setTimer, showInfo, setShowInfo, wasShown, setWasShown  } }>
            { children }
        </GameContext.Provider>
    )
}

export default GameProvider;