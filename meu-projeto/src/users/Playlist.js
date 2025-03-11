import '../style/Playlist.css';


function Playlist() {

    return (
        <article className="main">
            <article className="user">
                    <div className='box'>
                        <h1>Características Corporais</h1>
                        <div className='input'>
                            <label>Peso:</label>
                            <input></input>
                        </div>
                        <div className='input'>
                            <label>Altura:</label>
                            <input></input>
                        </div>
                    </div>

                    <div className='box'>
                        <h1>Gêneros Musicais:</h1>
                        <p>Escolha suas preferências musicais abaixo</p>

                        <div className='input'>
                            <select name='musicGender' id='musicGender'>
                                <option>Rock</option>
                                <option>Phonk</option>
                                <option>Eletrônica</option>
                                <option>Funk</option>
                                <option>Pop</option>
                            </select>
                        </div>

                        <div className='box'>
                            <div className='input'>
                                <button>Enviar</button>
                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <h1>Objetivo do Treino:</h1>
                        <p>Escolha objetivo do seu treino de acordo com ele</p>

                        <div className='input'>
                            <select name='musicGender' id='musicGender'>
                                <option>Emagrecimento</option>
                                <option>Hipertrofia</option>
                                <option>Resistência</option>
                                <option>Relaxamento/Hobbie</option>
                            </select>
                        </div>
                    </div>
            </article>
        </article>
    )
}

export default Playlist;