import { Button, Container } from 'react-bootstrap';

const CounterButton = (props) => {

    return (
        <Container>
            <Button variant="dark" className="fs-3 fw-bold font-monospace" style={{width: '13rem', height: '4rem'}} onClick={() => props.onPress()}>{props.text}</Button>
        </Container>
    )
};

export default CounterButton;