import { Card, Row } from 'react-bootstrap';

const twilightCard = (props) => {
    return (
        <>
            <Card style={{width: '10rem'}}>
                <Card.Body>
                    <Row>{props.cardId} {props.cardText}</Row>
                </Card.Body>
            </Card>
        </>
    )
};

export default twilightCard;