//este es el componente que tendra la lo principal de la aplicacoin, titulo, botones, etc

import { useTranslation } from "react-i18next";
import DifficultyPanel from "./DifficultyPanel";
const Home = ( ) =>{

    const { t } = useTranslation();
    return(
        <>
            <h1 className="text-5xl">{ t( "title" ) }</h1>
            <h2 className="text-2xl">{ t( "subtitle" ) }</h2>
            <DifficultyPanel />  
        </>
    )
}
export default Home;