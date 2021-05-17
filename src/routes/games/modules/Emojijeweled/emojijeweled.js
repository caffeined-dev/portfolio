import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './emojijeweled.scss';
import '../../../../css/mediaqueries.scss';

const COLS = 10;
const ROWS = 10;

const EMOTES = ["🍳", "🍞", "🍣", "🧁", "☕", "🥕", "🍑", "🍇"];

export default function Emojijeweled() {

    let [grid, setGrid] = useState([]);
    let [time, setTime] = useState(60);
    let [started, setStarted] = useState(false);
    let [score, setScore] = useState(0);
    let [chain, setChain] = useState(1);

    useEffect(() => {
        let timerId;

        if (started) {
            timerId = setInterval(() => {
                if (time > 0) setTime(time => time - 1);
                else setStarted(false);
            }, 1000);
        }

        return () => clearInterval(timerId);
    }, [time, started])

    useEffect(() => {
        reset();
    }, []);

    function reset() {
        setGrid(new Array(COLS).fill(0).map((v, i) => new Array(ROWS).fill(0).map((v, i) => EMOTES[Math.floor(Math.random() * EMOTES.length)])));
        setStarted(false);
        setScore(0);
        setTime(60);
    }

    function clickTile(r, c) {

        if (!started) return;

        let pts = floodfill(r, c, grid[r][c]);

        if (pts >= 3) {
            setChain(chain => chain + 1);
            setScore(score + pts * chain);
        } else {
            setChain(1);
            setScore(score + pts);
        }


        refill();
    }

    function refill() {
        let temp = [...grid];

        for (let i = 0; i < ROWS; i++) {
            for (let r = ROWS - 1; r >= 1; r--) {
                for (let c = 0; c < COLS; c++) {
                    if (temp[r][c] === -1) {
                        temp[r][c] = temp[r - 1][c];
                        temp[r - 1][c] = -1;
                    }
                }
            }
        }
        for (let r = ROWS - 1; r >= 0; r--) {
            for (let c = 0; c < COLS; c++) {
                if (temp[r][c] === -1) {
                    temp[r][c] = EMOTES[Math.floor(Math.random() * EMOTES.length)];
                }
            }
        }
        setGrid(temp);
    }

    function floodfill(r, c, value) {
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS) return 0;
        if (grid[r][c] !== value) return 0;
        grid[r][c] = -1;

        return (
            1 +
            floodfill(r - 1, c, value) +
            floodfill(r + 1, c, value) +
            floodfill(r, c + 1, value) +
            floodfill(r, c - 1, value)
        );
    }


    return (
        <Container className="media-width d-flex flex-column align-items-center">
            <h2 className="mb-5">Emoji-Jeweled</h2>
            <p>Click on emojis to build up points. The more clumped up the better! Chain clumps of 3 or more for bonus points.</p>
            <p>My personal best is 649 points</p>
            <div className="w-100 divider m-3" />
            <Container fluid className="d-flex align-items-center justify-content-between mb-3">
                <div className="w-25" style={{ fontSize: '2em' }}>{time}</div>
                <div style={{ fontSize: '2em' }}>Score: {score}</div>
                {!started ? <Button className="w-25" variant="success" onClick={() => setStarted(true)}>Start</Button> :
                    <Button className="w-25" variant="danger" onClick={() => reset()}>Reset</Button>}
            </Container>
            <Container fluid className="d-flex flex-row flex-wrap">
                {grid.map((val, r) => val.map((v, c) => <Tile key={r + "," + c} emoji={v} r={r} c={c} clickTile={clickTile} />))}
            </Container>
        </Container>
    );
}


function Tile({ emoji, r, c, clickTile }) {

    return (
        <div className="tile d-flex justify-content-center align-items-center" onClick={() => clickTile(r, c)}>
            {emoji}
        </div>
    );
}