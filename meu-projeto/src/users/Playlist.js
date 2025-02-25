import '../style/Playlist.css';


function Playlist () {
    
    return (
        <article className="main">
            <article className="users">
                
            </article> 

            <article className="users">
                <div className='box'>
                    <h1>Gêneros Musicais:</h1>
                    <p>Escolha suas preferências musicais abaixo</p>

                    <div className='box'>
                        <select name='musicGender' id='musicGender'>
                            <option>Rock</option>
                            <option>Phonk</option>
                            <option>Eletrônica</option>
                        </select>
                    </div>

                <div className='box'>
                    <button>Enviar</button>
                </div>

                </div>
            </article> 
        </article>
    )
}

export default Playlist;