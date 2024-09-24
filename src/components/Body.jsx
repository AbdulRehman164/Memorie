import { useEffect, useState } from 'react';
import Card from './Card';
import randomize from './randomize';

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

    return (
        <div className="flex justify-center items-center">
            {isGameOver ? (
                <div>
                    <div className="h-[100vh] w-[100vw] bg-black opacity-50 z-10 absolute top-0 left-0"></div>
                    <div
                        className="h-[30vh] w-[30vw] bg-white rounded z-50 absolute top-[30%] left-[35%] shadow-black"
                        style={{ fontFamily: 'MedievalSharp' }}
                    >
                        <div className="bg-red-950 text-white font-extrabold p-2 mb-16">
                            <h2>Game over</h2>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="bg-sky-950 text-white px-6 py-2 rounded"
                                onClick={() => {
                                    setIsGameOver(false);
                                }}
                            >
                                play Again
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}

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
