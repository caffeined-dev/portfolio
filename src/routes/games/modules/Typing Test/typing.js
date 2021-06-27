import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './typing.scss';
import '../../../../css/mediaqueries.scss';
import randomWords from 'random-words';

export default function Typing() {

    let [words, setWords]  = useState(randomWords({ exactly: 100 }));
    let [accuracy, setAccuracy] = useState(new Array(100).fill(0));
    let [current, setCurrent] = useState(0);
    let [word, setWord] = useState("");
    let [total, setTotal] = useState(0);
    let [time, setTime] = useState(0);
    let [started, setStarted] = useState(false);
    let [result, setResult] = useState(0);

    useEffect(() => {
        let timerId;

        if(started) {
            timerId = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        }

        return () => clearInterval(timerId);
    }, [time, started])

    function checkKey(event) {
        if(current === 0)
            setStarted(true);

        if(event.target.value[event.target.value.length - 1] === ' ') {
            setTotal(total + event.target.value.length);
            setCurrent(current + 1);
            let temp = [...accuracy];
            if(word === words[current])
                temp[current]++;
            else
                temp[current]--;
            setAccuracy(temp);
            setWord("");
        } else
            setWord(event.target.value);

        if(current >= words.length - 1) {
            setStarted(false);
            checkResult();
            return;
        }
    }

    function checkResult() {
        let cnt = 0;
        accuracy.forEach((v, i) => v === 1 ? cnt++ : undefined);
        setResult(Math.floor((total / 5) / (time / 60) * (cnt / 100)));
    }

    function reset() {
        setWords(randomWords({ exactly: 100 }));
        setAccuracy(new Array(100).fill(0));
        setCurrent(0);
        setTime(0);
        setResult(0);
        setStarted(false);
    }

    return (
        <Container className="media-width d-flex flex-column align-items-center mb-5">
            <h2 className="mb-5">Typing Test</h2>
            <p>Type 100 words as quickly and accurately as you can.</p>
            <p>My personal best is 141 WPM</p>
            <div className="w-100 divider m-3" />
            <Container fluid className="d-flex align-items-center justify-content-between mb-3">
                <div className="w-25" style={{ fontSize: '2em' }}>{time}</div>
                <div style={{ fontSize: '2em' }}>{result !== 0 ? ("WPM: " + result) : ""}</div>
                <Button className="w-25" variant="danger" onClick={() => reset()}>Reset</Button>
            </Container>
            <Container fluid className="d-flex words-container mb-3 p-5 flex-wrap">
                {words.map((v, i) => <Word key={i} word={v} active={i === current} result={accuracy[i]}/>)}
            </Container>
            <Form className="w-100">
                <Form.Group controlId="formInput">
                    <Form.Control placeholder="Start typing to begin" type="text" value={word} onChange={ev => checkKey(ev)}/>
                </Form.Group>
            </Form>
        </Container>
    );
}


function Word({word, active, result}) {
    return (
        <p className={`mr-2 ${active ? "word-active" : result === 1 ? "word-correct" : result === -1 ? "word-wrong" : 'text-muted'}`}>{word}</p>
    );
}