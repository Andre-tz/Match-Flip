//este es el componente que tendra la lo principal de la aplicacoin, titulo, botones, etc

import { useTranslation } from "react-i18next";
import DifficultyPanel from "./DifficultyPanel";
import { useEffect, useState } from "react";
import useGame from "../../hook/useGame";
import NameModal from "./NameModal";
const Home = ( ) =>{

    const { t } = useTranslation();
    const { setUserData, userData } = useGame();
    //state que sirve para mostrar el modal del nombre
    const [ modalActive, setModalActive ] = useState<boolean>( false );
    
    //este useEffect servira para cambiar el estado del juego 
    useEffect ( ()=>{
        if( userData.gameStatus !== "waiting"){
            setUserData( prev => ( { ...prev, gameStatus :"waiting"} ) )
        }
    }, [setUserData, userData.gameStatus])//no necesita dependencias pero por siacaso le pondré

    //este hook se ejecutara apaneas la app se inicie
    useEffect( ()=>{
        if( !userData.name ){
            setModalActive( true );
        } else{
            setModalActive( false );
        }
    }, [ userData ])

    return(
        <>
            { modalActive && <NameModal />}
            <h1 className="text-5xl">MatchFlip</h1>
            <h2 className="text-2xl">{ t( "subtitle" ) }</h2>
            <DifficultyPanel />  
        </>
    )
}
export default Home;