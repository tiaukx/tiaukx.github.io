import cardsInfo from '../CardsInfo.json';
import Card from './Card';

import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const CardGrid = () => {

    const [randomCards, setRandomCards] = useState([]);
    const [usedCards, setUsedCards] = useState([]);
    const [counter, setCounter] = useState(0);

    const gridWidth = 3;
    const gridHeight = 3;
    const gridSize = gridWidth * gridHeight;
    let arrLength = 0;

    const tempArr = [...randomCards];
    // let usedCards = [];

    useEffect(() => {

        const generateRandom = () => {
            const temp = Math.floor(Math.random() * 10);
            const newVal = cardsInfo[temp];
            const inArray = tempArr.includes(cardsInfo[temp])
            let index = tempArr.indexOf(newVal);

            if (!inArray) {
                tempArr.push(newVal);
                arrLength++;
                setRandomCards(tempArr);
            } else if (inArray) {
                tempArr.splice(index, 1);
                arrLength--;
                setRandomCards(tempArr);
            } 
        };

        while (arrLength < gridSize) {
            generateRandom();
        }

    }, [])

    const generateNewCard = (index) => {
        const temp = Math.floor(Math.random() * 10);
        const newVal = cardsInfo[temp];
        const inArray = tempArr.includes(cardsInfo[temp])
        const alreadyUsed = usedCards.includes(cardsInfo[temp]);

        if (usedCards.length === cardsInfo.length - gridSize) {
            setUsedCards([]);
        } 

        if (!inArray && !alreadyUsed) {
            tempArr[index] = newVal;
            arrLength++;
            setRandomCards(tempArr)
        } else {
            generateNewCard();
        } 
    };

    const handleClick = (cardId) => {
        let chosenCard = tempArr.find(e => e.cardId === cardId);
        let index = tempArr.indexOf(chosenCard);

        if (!usedCards.includes(chosenCard)) {
            setUsedCards(prev => [...prev, chosenCard]);
        }
        generateNewCard(index);
    };

    console.log('Used Cards: ', usedCards)

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
