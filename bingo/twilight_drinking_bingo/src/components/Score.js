import { Badge, Container } from 'react-bootstrap'

const Score = (props) => {

    return (
        <Container>
            <h1>
                <Badge bg="dark" style={{width: '4rem', height: '2.5rem'}} >{props.text}</Badge>
            </h1>
        </Container>
    )
};

export default Score;