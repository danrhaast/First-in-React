import perfil from '../assets/perfil.png'
import playlist from  '../assets/playlist.png';
import treino from '../assets/treino.png';
import '../style/Menu.css';


function Index () {
    return (
        <article className="main">
            <article className="barra">
                <article className='selections'>
                    <a href="/Perfil"><img src={perfil} /><p>Perfil</p></a>
                </article> 

                <article className='selections'>
                    <a href="/Playlist"><img src={playlist} /><p>Playlist</p></a>
                </article> 

                <article className='selections'>
                    <a href="/Treino"><img src={treino} /><p>Treino</p></a>
                </article>   
            </article> 
        </article>
    )
}

export default Index;