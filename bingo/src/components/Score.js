import { Badge, Container } from 'react-bootstrap'

const Score = (props) => {

    return (
        <>
            <Badge className="fs-1 fw-bold font-monospace justify-content-evenly" bg="dark" style={{ width: '5rem', height: '4rem', textAlign: "center" }} >{props.text}</Badge>
        </>
    )
};

export default Score;