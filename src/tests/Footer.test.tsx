import Footer from "../Components/Footer";
import { render, screen } from "@testing-library/react"
vi.mock( "react-i18next", ()=>({
    useTranslation : ()=>({
        t: ( key : string ) => key
    })
}))

describe( "Footer", ()=>{
    it( "Debe renderizar 2 textos traducidos",()=>{
        render(<Footer/>);
        expect( screen.getByText( "footer.textOne" )).toBeTruthy()
        expect( screen.getByText( "footer.textTwo" )).toBeTruthy()
    })
})