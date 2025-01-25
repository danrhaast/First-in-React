import logo from './public/logo2(1).png';
import '../style/Navbar.css';

function Header () {
    return (
        <div className='unique'>
            <section>
                <img src={logo} className='logo'/>
                <a href="/">BeatSync</a>
            </section>

            <section>
                <a href='/Login'>Login</a>
                <a href='/Cadastro'>Cadastro</a>
                <a href='/SobreNos'>Sobre Nós</a>
            </section>
        </div>
    )
}

export default Header;