//este helper se encarga de darme el tiempo de cada juego dependiendo la dificultad
//los tiempos son :  45 - 60 - 85 - 100
const getInitialTime = ( difficulty: string )=>{

        let time;
        switch ( difficulty ) {
            case "easy":
                time = 45;
                break;

            case "medium":
                time = 60 ;
                break;

            case "hard":
                time = 85;
                break;

            case "godMode":
                time = 100; 
                break;

            default:
                console.error( "Ha ocurrido un error con el tiempo")
                break;
        }
        return time? time : NaN;
    }

export default getInitialTime;