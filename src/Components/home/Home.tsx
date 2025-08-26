//este es el componente que tendra la lo principal de la aplicacoin, titulo, botones, etc

import { useTranslation } from "react-i18next";
import DifficultyPanel from "./DifficultyPanel";
import { useEffect } from "react";
import useGame from "../../hook/useGame";
const Home = ( ) =>{

    const { t } = useTranslation();
    const { setUserData, userData } = useGame();
    

    useEffect ( ()=>{
        if( userData.gameStatus !== "waiting"){
            setUserData( prev => ( { ...prev, gameStatus :"waiting"} ) )
        }
    }, [setUserData, userData.gameStatus])//no necesita dependencias pero por siacaso le pondré

    return(
        <>
            <h1 className="text-5xl">{ t( "title" ) }</h1>
            <h2 className="text-2xl">{ t( "subtitle" ) }</h2>
            <DifficultyPanel />  
        </>
    )
}
export default Home;