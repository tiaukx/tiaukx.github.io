import Card from './Card';

import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const CardGrid = (props) => {

    const { randomCards, handleClick } = props;

    return (
        <>
            <div id='fullGrid' className="d-flex my-1 mx-1 align-items-center justify-content-center" style={{background: 'black'}} >
                <Row className="m-auto" xs={3} s={3} m={3} l={3} xl={3} xxl={3} >
                        {randomCards.map(card => (
                            <Card key={card.cardId} cardId={card.cardId} cardText={card.cardText} handleClick={handleClick} />
                        ))}
                </Row>
            </div>
        </>
    )
};

export default CardGrid;
