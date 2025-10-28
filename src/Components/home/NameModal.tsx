import { useState } from "react";
import { useTranslation } from "react-i18next"
import useGame from "../../hook/useGame";

//este modal aparecerá para que el usuasrio colocque su nombre
const NameModal = ( )=>{
    //useTranslation para la traduccion
    const { t } = useTranslation();
    //estado que manejara el valor del input
    const [ inputValue, setInputValue ] = useState<string>( "" );
    //usando el estado global
    const { setUserData } = useGame();
    //funcion para capturar el valor del input
    const handleChange = ( e : React.ChangeEvent<HTMLInputElement> ) =>{
        setInputValue( e.target.value )
    }

    //funcion que guardará el nombre de la persona
    const handleClick = ( ) =>{
        setUserData( prev => ( { ...prev, name: inputValue } ) )
    }

    return (
        <div className="absolute z-10 bg-green-600">
            <h1>{ t( "nameModal.title" ) }</h1>
            <p> { t( "nameModal.message" ) }</p>
            <label>
                <input onChange={ handleChange } value={ inputValue }  type="text" placeholder={ t( "nameModal.placeholder" ) } />
            </label>
            <button onClick={ handleClick }>{ t( "nameModal.button" ) }</button>
        </div>
    )
}

export default NameModal;