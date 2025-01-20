import perfil from './public/Component 2.png'
import playlist from  './public/Component 3.png'
import treino from './public/Component 4.png'


function Index () {
    return (
        <article className="main">
            <article className="barra">
                <article>
                    <a href="/"><img src={perfil}/></a>
                    <p>Perfil</p>
                </article> 

                <article>
                    <a href="/"><img src={playlist} /></a>
                    <p>Playlist</p>
                </article> 

                <article>
                    <a href="/"><img src={treino}/></a>
                    <p>Treino</p>
                </article>   
            </article> 
        </article>
    )
}

export default Index;