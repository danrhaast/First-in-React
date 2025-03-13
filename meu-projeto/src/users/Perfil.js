import perfillogo from '../assets/perfillogo.png';


function Perfil () {
    return (
        <article className="main">
            <article className="userPerfil">
                <article className="table">
                    <div className="tablet">
                        <>Nome:</>
                    </div>
                    <div className="tablet">
                        <>Email:</>
                    </div>
                    <div className="tablet">
                        <>Gênero:</>
                    </div>
                    <div className="tablet">
                        <>Peso:</>
                    </div>
                    <div className="tablet">
                        <>Altura:</>
                    </div>
                    <div className="tablet">
                    <>Data de Nascimento:</>
                    </div>
                </article>

                <div className='box'>   
                    <article className="perfil">
                        <img className="fotoPerfil" src={perfillogo}/>
                    </article>
                    <div className='box'>
                            <a>Editar</a>
                    </div>
                </div>
            </article> 
        </article>
    )
}

export default Perfil;