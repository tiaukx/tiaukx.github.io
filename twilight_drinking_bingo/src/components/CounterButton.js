import { Button, Container } from 'react-bootstrap';

const CounterButton = (props) => {

    return (
        <Container>
            <Button variant="dark" style={{width: '7rem', height: '2.5rem'}} onClick={() => props.onPress()}>{props.text}</Button>
        </Container>
    )
};

export default CounterButton;