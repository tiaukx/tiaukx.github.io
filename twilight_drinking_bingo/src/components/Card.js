import { Card, Col, Row } from 'react-bootstrap';

const twilightCard = (props) => {
    return (
        <>
            <Col>
                <Card className="my-1 mx-1 " style={{ width: '7.5rem', height: '7.5rem' }} onClick={() => props.handleClick(props.cardId)} >
                    <Card.Body className="d-flex align-items-center fw-bold font-monospace lh-1" style={{textAlign: "center"}}>
                        {props.cardId}. {props.cardText}
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
};

export default twilightCard;