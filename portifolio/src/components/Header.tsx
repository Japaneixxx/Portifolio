import '../css/Header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Header = () =>{
    return(
        <header>
        
        <div className='navbar'>
            <div className='navbar-left'>
            <a href="/" className='home'>Japa</a>
            </div>
        <div className='navbar-center'>
            <a href="/" className='center'>Contato</a>
            <a href="/" className='center'>Projetos</a>
            <a href="/" className='center'>Sobre mim</a>
        </div>
        </div>
        

    </header>
    )
}

export default Header
