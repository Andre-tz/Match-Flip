//este es el componente de las cartas

//creamos el tipo del cual nuesta carta tomará valores
type CardsProps = {
    name: string;
}
const Cards = ( { name } : CardsProps )=>{

    return(
        <div className="h-72 w-40 border-2 border-red-600 flex justify-center items-center" >
            <img src={ `./src/images/${ name }.webp`} alt={ `foto de ${name }` }/>
        </div>
    )
}
export default Cards