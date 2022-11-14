import { Nav, Navbar, Container } from 'react-bootstrap';

const Navi = () => {
    return (
        <Navbar variant="dark" bg="dark" expand="lg" className='justify-content-center' >
            <Container className="justify-content-center">
                <Navbar.Brand>Twilight Bingo</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Navi;