import { useState } from 'react';

const Header = ({ clickedCards }) => {
    const score = clickedCards.length;
    const [highScore, setHighScore] = useState(score);
    if (score > highScore) {
        setHighScore(score);
    }
    return (
        <div
            className="flex justify-between font-mideival pt-2 bg-sky-950 text-white px-10"
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
    );
};

export default Header;
