


function Treino () {
    return (
        <article className="main">
            <article className="users">
                <div className='box'>
                    <h1>Treinos:</h1>
                    <p>Escolha uma preferência de treino abaixo</p>

                    <div className='box'>
                        <select name='musicGender' id='musicGender'>
                            <option>Musculação</option>
                            <option>Calistenia</option>
                            <option>Crossfit</option>
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

export default Treino;