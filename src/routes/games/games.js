import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './games.scss';
import Connect4 from './modules/Connect 4/connect4';
import Typing from './modules/Typing Test/typing';


const NAMES = ["Typing Test", "Connect 4"];

const IMAGES = [
    "https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2031&q=80",
    "https://live.staticflickr.com/3476/3315537273_e597f1387d_b.jpg"
];



export default function Games() {




    let [module, setModule] = useState(-1);
    let MODULES = [<Typing />, <Connect4 />];


    return (
        <Container fluid className="d-flex flex-column align-items-center">
            {module === -1 ? undefined : <Button variant="info" className="mb-5" onClick={() => setModule(-1)}>Go Back</Button>}
            {module === -1 ? <Modules setModule={setModule}/> : MODULES[module]}
        </Container>
    );
}

function Modules({setModule}) {

    return (
        <Container fluid className="w-100 d-flex flex-column align-items-center">
            <h3 className="p-5">Feel free to try out these games made in React</h3>
            <div className="modules media-width d-flex justify-content-between">
                {NAMES.map((v, i) => <Module key={i} index={i} setModule={setModule}/>)}
            </div>
        </Container>
    );
}

function Module({ index, setModule }) {

    return (
        <Card className="module">
            <Card.Img variant="top" className="module-image" src={IMAGES[index]} />
            <Card.Body className="d-flex flex-column align-items-start justify-content-end">
                <Card.Title className="text-muted">{NAMES[index]}</Card.Title>
                <Button variant="info" onClick={() => setModule(index)}>Play</Button>
            </Card.Body>
        </Card>
    );
}