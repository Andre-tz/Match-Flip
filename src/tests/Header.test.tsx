import Header from "../Components/Header";
import { fireEvent, render, screen } from "@testing-library/react";

let currentLanguage = "en"
const changeLanguageMock = vi.fn()
const setUserDataMock = vi.fn();
//Ejecutando la funcion falsa del modulo i18next
vi.mock( "react-i18next", ()=> ({
    useTranslation: ()=>({
        i18n: {
            get language (){
                return currentLanguage
            },
            changeLanguage: changeLanguageMock
        }
    })
}))

//ejecutando la funcion false de setUserData desde UseGame
vi.mock( "../hook/useGame.ts", ()=>({
    default: ()=>({
        setUserData: setUserDataMock
    })
}))

describe( "Header component", ()=>{
    beforeEach(() => {
        vi.clearAllMocks();
    });
    
    it( "Renderizar el componente", ()=>{
        render( <Header/> )
        expect( screen.getByText(/ItsAndreDev/i )).toBeTruthy()
    })

    it( "Cambiar lenguage cuando el icono es clickeado", ()=>{
        render( <Header/>)
         //obteniendo referencia al icono por su atributo arial-label
        const icon = screen.getByLabelText("change-language")
        fireEvent.click( icon )
        expect( setUserDataMock ).toHaveBeenCalled()
        expect( changeLanguageMock ).toHaveBeenCalled()
    })
    
    it( "Cambiar de ingles a español", ()=>{
        currentLanguage= "en"
        render( <Header/>)
         const icon = screen.getByLabelText("change-language")
        fireEvent.click( icon )
        expect( changeLanguageMock ).toHaveBeenCalledWith( "es" )
    })

    it( "Cambiar de español a ingles", ()=>{
        currentLanguage= "es"
        render( <Header/>)
         const icon = screen.getByLabelText("change-language")
        fireEvent.click( icon )
        expect( changeLanguageMock ).toHaveBeenCalledWith( "en" )
    })
})
