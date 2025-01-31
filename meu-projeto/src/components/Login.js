


function Login () {
    return (
        <article className="main">
            <section className='form'>
                <form method="POST">
                    <h2>Login</h2>
                    <div className="input">
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" required/>
                    </div>

                    <div className="input">
                        <label for="password">Senha:</label>
                        <input type="password" id="password" name="password" required/>
                    </div>
                </form>
                </section>
        </article>
    )
}

export default Login;