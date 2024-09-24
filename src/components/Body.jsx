import { useEffect, useState } from 'react';
import Card from './Card';
import randomize from './randomize';
import GameOver from './GameOver';
import Shimmer from './Shimmer';

const Body = ({ clickedCards, setClickedCards }) => {
    const [cards, setCards] = useState(randomize([]));
    const [isGameOver, setIsGameOver] = useState(false);

    const getData = async () => {
        const response = await fetch(
            'https://thronesapi.com/api/v2/Characters',
        );
        const json = await response.json();
        setCards(json.slice(0, 12));
    };

    useEffect(() => {
        getData();
    }, []);

    return cards.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="flex justify-center items-center">
            {isGameOver ? <GameOver setIsGameOver={setIsGameOver} /> : null}

            <div className="grid grid-cols-4 gap-2">
                {cards.map((e) => (
                    <Card
                        {...e}
                        cards={cards}
                        setCards={setCards}
                        key={e.id}
                        clickedCards={clickedCards}
                        setClickedCards={setClickedCards}
                        setIsGameOver={setIsGameOver}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
