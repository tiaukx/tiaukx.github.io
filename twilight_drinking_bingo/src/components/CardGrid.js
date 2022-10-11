import cardsInfo from '../CardsInfo.json';
import Card from './Card';

import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const CardGrid = () => {

    const [randomCards, setRandomCards] = useState([]);

    useEffect(() => {
       
    }, [randomCards])

    const gridWidth = 3;
    const gridHeight = 3;
    const gridSize = gridWidth * gridHeight;
    let arrLength = 0;

    const generateRandom = () => {

        const temp = Math.floor(Math.random() * 64);
        const newVal = cardsInfo[temp];
        const inArray = randomCards.includes(cardsInfo[temp])
        // let index = randomCards.indexOf(newVal)

        if (!inArray) {
            setRandomCards(prev => [...prev, newVal]);
            arrLength++;
        }

        return randomCards, arrLength;
    };

    // const removeDupes = (data) => {
    //     return data.filter((val, index) => data.indexOf(val) === index);
    // }

    // removeDupes(randomCards);

    do {
        generateRandom();
    } while (arrLength < gridSize)

    const handleClick = (cardId) => {
        let chosenCard = randomCards.find(e => e.cardId === cardId);
        let index = randomCards.indexOf(chosenCard);

        randomCards.splice(index, 1);
        randomCards[index] = generateRandom();
    };

    return (
        <>

            <Container id='fullGrid' className="d-flex vw-100">
                <Row className="m-auto">
                    {randomCards.map(card => (
                        <Card key={card.cardId} cardId={card.cardId} cardText={card.cardText} handleClick={handleClick} />
                    ))}
                </Row>
            </Container>
        </>
    )
};

export default CardGrid;
