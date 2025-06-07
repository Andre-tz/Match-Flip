//este es el componente que tendra la lo principal de la aplicacoin, titulo, botones, etc
const Home = ( ) =>{

    return(
        <main>

            <h1>Bienvenido a Memory Cards</h1>

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