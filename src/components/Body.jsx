import { useState } from 'react';
import Card from './Card';
import randomize from './randomize';

const Body = () => {
    const [cards, setCards] = useState(
        randomize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    );
    const [clickedCards, setClickedCards] = useState([]);
    return (
        <div className="flex justify-center items-center">
            <div>score : {clickedCards.length}</div>
            <div className="grid grid-cols-4 gap-2 border border-black">
                {cards.map((e) => (
                    <Card
                        no={e}
                        cards={cards}
                        setCards={setCards}
                        key={e}
                        clickedCards={clickedCards}
                        setClickedCards={setClickedCards}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
