//este helper se encarga de cambiar los segundos normales a mm:ss
const changeMmSs = ( time: number)=>{

    const minute = Math.floor( time / 60 ); // sacando minutos 
    const seconds = time % 60; //el tiiempo restante es en segundos
    return [ minute, seconds ]
}
export default changeMmSs;