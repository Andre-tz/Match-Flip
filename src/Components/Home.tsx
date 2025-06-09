//este es el componente que tendra la lo principal de la aplicacoin, titulo, botones, etc
const Home = ( ) =>{

    return(
        <main className="bg-white-0 p-4 flex flex-col items-center justify-center min-h-screen">

            <h1 className="text-5xl">Bienvenido a Memory Cards</h1>

            {/* 
                <div>
                    <label>
                    <input type="checkbox" />
                    Cambiar a Dev Edition
                    </label>
                </div>
            */}
            
            <div>

                <div>
                    <button>Fácil</button>
                    <button >Normal</button>
                    <button>Difícil</button>
                    <button>Modo Dios</button>
                </div>

                <p>Aqui habrá una descripcion de cada modo.....</p>

            </div>

            <button>Iniciar</button>

        </main>
    )
}
export default Home;