import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function NavbarComponent() {
    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link className='nav-link' to='/'>
                            Home
                        </Link>
                        <Link className='nav-link' to='/about/mahdani'>
                            About
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
