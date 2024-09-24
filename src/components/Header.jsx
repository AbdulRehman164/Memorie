import { useState } from 'react';
import YouWon from './YouWon';

const Header = ({ clickedCards, setClickedCards }) => {
    const score = clickedCards.length;
    const [highScore, setHighScore] = useState(
        localStorage.getItem('highScore')
            ? localStorage.getItem('highScore')
            : score,
    );
    if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('highScore', score);
    }

    return (
        <div>
            {score >= 12 ? <YouWon setClickedCards={setClickedCards} /> : null}
            <div
                className="flex justify-between pt-2 bg-sky-950 text-white px-10"
                style={{ fontFamily: 'MedievalSharp' }}
            >
                <h1 className="text-5xl font-extrabold">Memorie</h1>
                <div className="font-extrabold text-xl">
                    <div>
                        <div>Score : {score}</div>
                    </div>
                    <div>High Score : {highScore}</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
