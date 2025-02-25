import perfillogo from '../assets/perfillogo.png';


function Perfil () {
    return (
        <article className="main">
            <article className="user">
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
                <article className="perfil">
                    <img className="fotoPerfil" src={perfillogo}/>
                </article>
            </article> 
        </article>
    )
}

export default Perfil;