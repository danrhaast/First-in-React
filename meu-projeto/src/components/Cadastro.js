
import '../style/Cadastro.css';

function Cadastro () {
    return (
        <article className="main">
            <section className='form'>
                <form>
                    <h2>Cadastro</h2>
                    <div className="input">
                        <label for="name">Nome:</label>
                        <input type="text" id="name" name="name" required/>
                    </div>

                    <div className="input">
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" required/>
                    </div>

                    <div className="input">
                        <label for="date">Data de Nascimento:</label> 
                        <input type="date" id="date" name="date" required/>
                    </div>

                    <div className="input">
                        <label for="password">Senha:</label>
                        <input type="password" id="password" name="password" required/>
                    </div>
                    <div className="input">
                        <label for="password">Confirmar Senha:</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                </form>
                </section>
        </article>
    )
}

export default Cadastro;