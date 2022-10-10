import cardsInfo from '../CardsInfo.json';
import Card from './Card';
import { useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap';

const Box = () => {

    const boxWidth = 3;
    const boxHeight = 3;
    const gridSize = boxWidth * boxHeight;

    let randomCards = [];

    while (randomCards.length < gridSize)  {
        const temp = Math.floor(Math.random() * 10);

        if (!randomCards.includes(cardsInfo[temp])) {
            randomCards.push(cardsInfo[temp])
        }
    } 


    return (
        <>
            {console.log(randomCards)}

            {randomCards.map(card => (
                <Card key={card.cardId} cardId={card.cardId} cardText={card.cardText} />
            ))}

        </>
    )
};

export default Box;
