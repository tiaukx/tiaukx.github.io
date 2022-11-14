import CardGrid from "./CardGrid";
import CounterButton from "./CounterButton";
import cardsInfo from '../CardsInfo.json';

import { useEffect, useState } from 'react';
import Score from "./Score";
import { Container, Row, Col } from "react-bootstrap";

const PageLoad = () => {

    const [randomCards, setRandomCards] = useState([]);
    const [usedCards, setUsedCards] = useState([]);
    const [counter, setCounter] = useState(0);
    const [storedScore, setStoredScore] = useState(0);

    const gridWidth = 3;
    const gridHeight = 3;
    const gridSize = gridWidth * gridHeight;
    let arrLength = 0;

    const tempArr = [...randomCards];

    useEffect(() => {

        const generateRandom = () => {
            const temp = Math.floor(Math.random() * 64);
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
        const temp = Math.floor(Math.random() * 64);
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
            generateNewCard(index);
        }
    };

    const handleClick = (cardId) => {
        let chosenCard = tempArr.find(e => e.cardId === cardId);
        let index = tempArr.indexOf(chosenCard);

        if (!usedCards.includes(chosenCard)) {
            setUsedCards(prev => [...prev, chosenCard]);
        }
        generateNewCard(index);
        setCounter(counter + 1);
    };

    const resetCounter = () => {
        setCounter(0);
    }

    const storeScore = () => {
        if (storedScore === 0) {
            setStoredScore(counter);
        } else {
            setStoredScore(storedScore + counter);
        }
        resetCounter();
    }

    return (
        <>
            <Container className="d-flex my-1 mx-1 align-items-center justify-content-center">
                <Row className="m-auto">
                    <Col className="d-flex align-items-center justify-content-center" >
                        <CounterButton text={'RESET SCORE'} onPress={resetCounter} />
                        <Score text={counter} />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center" >
                        <CounterButton text={'STORE SCORE'} onPress={storeScore} />
                        <Score text={storedScore} />
                    </Col>
                </Row>
            </Container>
            <br/>
            <CardGrid handleClick={handleClick} randomCards={randomCards} gridWidth={gridWidth} gridHeight={gridHeight} />
        </>
    )
};

export default PageLoad;