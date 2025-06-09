//este componente es el que tendra la logica de los botones de dificultad, y la descripcion de cada uno
import { useTranslation } from "react-i18next";
import { useState } from "react";

const stylesButton = "px-2 border-2 border-red-600 w-40 rounded-2xl cursor-pointer transition-colors duration-300"
const buttonDisabled = "bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed opacity-50";
const buttonsLevels =[ "easy", "medium", "hard", "godMode" ];

const DifficultyPanel = () => {
    const { t } = useTranslation();
    const [ selected, setSelected ] = useState<string>( "" );

    const handleClick = ( level : string)=>{
        setSelected( level );
    }
    return (
        <>
            <div>
                <div className="flex flex-col justify-between items-center">
                    { buttonsLevels.map(( level, index ) => {
                        return(
                            <button
                                key={ index }
                                className={ `${ stylesButton } ${ selected === level ? "bg-red-600 text-white" : "" }` }
                                onClick={  ( ) => handleClick( level ) }
                                >{ t ( `difficulty.${ level }`) }
                            </button>
                        )
                    })}
                </div>

                <p className="mt-4 text-gray-600 text-center">{ !selected? "escoge tu dificultad" : t(`description.${ selected }`)}</p>
            </div>

            <button className={ selected? "" : buttonDisabled }>{ t( "startGame" ) }</button>
        </>
        
    );
}

export default DifficultyPanel;