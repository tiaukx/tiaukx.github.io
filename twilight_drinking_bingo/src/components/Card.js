import { Card, Row } from 'react-bootstrap';

const twilightCard = (props) => {
    return (
        <>
            <Card style={{width: '10rem', height: '10rem'}} onClick={() => props.handleClick(props.cardId)} >
                <Card.Body>
                    <Row>{props.cardId}. {props.cardText}</Row>
                </Card.Body>
            </Card>
        </>
    )
};

export default twilightCard;