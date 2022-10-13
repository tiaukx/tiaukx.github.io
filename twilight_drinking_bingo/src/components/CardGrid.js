import Card from './Card';

import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const CardGrid = (props) => {

    const { randomCards, handleClick, gridWidth, gridHeight } = props;

    return (
        <>
            <Container id='fullGrid' className="d-flex align-items-center justify-content-center square border border-dark border-5" style={{width: '30rem', height: '27rem', background: 'black'}} >
                <Row className="d-flex" xs={3} s={3} m={3} l={3} xl={3} xxl={3} >
                        {randomCards.map(card => (
                            <Card key={card.cardId} cardId={card.cardId} cardText={card.cardText} handleClick={handleClick} />
                        ))}
                </Row>
            </Container>
        </>
    )
};

export default CardGrid;
