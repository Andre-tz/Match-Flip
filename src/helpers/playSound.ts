//este helper me aayudara a la reutilizacion de  los sonidos
const playSound = ( src: string , volume = 0.5 ) =>{
    const audio = new Audio( src ); //creamos el reproductor de sonido con la url al archivo que usaremos
    audio.volume = volume; //el volumen sera medio, nunca poner 1 
    audio.currentTime = 0; //si el audio se esta reproduciendo actualmente lo silenciamos 
    audio.play();//disparamos el audio
}

export default playSound;