import logo from './public/logo2(1).png';

function Header () {
    return (
        <div className='unique'>
            <section>
                <img src={logo} className='logo'/>
                <a href="/">BeatSync</a>
            </section>

            <section>
                <a href='/'>Login</a>
                <a href='/'>Cadastro</a>
                <a href='/'>Sobre Nós</a>
            </section>
        </div>
    )
}

export default Header;