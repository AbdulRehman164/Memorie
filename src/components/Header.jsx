import { useState } from 'react';

const Header = ({ clickedCards }) => {
    const score = clickedCards.length;
    const [highScore, setHighScore] = useState(score);
    if (score > highScore) {
        setHighScore(score);
    }
    return (
        <div>
            <h1>Memorie</h1>
            <div>
                <div>Score : {score}</div>
            </div>
            <div>High Score : {highScore}</div>
        </div>
    );
};

export default Header;
