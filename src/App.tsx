//App tendra la aplicacoin completa, header, footer y el home
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import useGame from "./hook/useGame";
import { useEffect, useState } from "react";

function App() {
    const { userData } = useGame();
    //esta constante guardará el tipo de fuente
    const [ font, setFont ] = useState<string>( "" );
    //con useEffect cambiara el valor de la variable cada vez que el usuario cambie de tema
   useEffect( ()=>{
    if( userData.codeTheme ) { 
        setFont( "font-['Ubuntu_Mono']")
    } else { 
        setFont( "font-['Rubik']" )
    }
   }, [ userData.codeTheme])

  return (
    <div className={ `${ font } w-[100vw] h-[100vh]`}>
        <Header />
        <main className="bg-white-0 p-4 flex flex-col items-center justify-center min-h-screen relative z-0">
            <Outlet /> 
        </main>
        <Footer />
        <Toaster position="top-center" />
    </div>
  )
}

export default App;
