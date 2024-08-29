import { useEffect, useState } from 'react';
import Card from './Card';
import randomize from './randomize';

const Body = ({ clickedCards, setClickedCards }) => {
    const [cards, setCards] = useState(randomize([]));
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

    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-4 gap-2">
                {cards.map((e) => (
                    <Card
                        {...e}
                        cards={cards}
                        setCards={setCards}
                        key={e.id}
                        clickedCards={clickedCards}
                        setClickedCards={setClickedCards}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
