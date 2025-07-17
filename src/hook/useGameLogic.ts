import { useState } from "react";

const useGameLogic = ()=>{

    //este estado guardara las ccartas seleccionadas por el usuario
    const [ selectedCards, setSelectedCards ] = useState<string[]>([]);
    //este estado guarda los nombres de las cartas volteadas
    const [ matchedCards, setMatchedCards ] = useState<string[]>([]);

    // esta funcion manejara los click a las cartas
    const handleCardClick = ( cardName : string ) =>{
        //si el tamaño del array es 2 entonces no habra mas clicks
        if( selectedCards.length === 2 ) return;
        //si la carta misma carta es añadida de nuevo entonces tambien lo retorno
        if( selectedCards.includes( cardName ) ) return;
        //como React los valores se actualizan de manera asincroma debo trabajar con una variable de apoyo para trabahar con los valores mas actuales
        const newSelected = [ ...selectedCards, cardName ];
        //actualizando el estado
        setSelectedCards( newSelected )

        if( newSelected.length === 2 ){
            const [ firstCard, secondCard ] = newSelected

            if( firstCard === secondCard ){
                //si ambos son iguales, hay un match
                setMatchedCards( prev => [ ...prev, firstCard ] )
                //ahora limpiamos el array
                setTimeout( ()=>{
                    setSelectedCards( [] )
                }, 500 )
            }else{
                //si son diferentes se voltean y limpiamos el array 
                setTimeout(() => {
                    setSelectedCards( [] );
                }, 1000);
            }
        }
    }

    return{ selectedCards, matchedCards, handleCardClick }
}

export default useGameLogic;
