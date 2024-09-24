import randomize from './randomize';
import { Tilt } from 'react-tilt';

const Card = ({
    firstName,
    imageUrl,
    id,
    cards,
    setCards,
    clickedCards,
    setClickedCards,
    setIsGameOver,
}) => {
    const handleClick = (node) => {
        node.style.transform = 'none';
        node.style.willChange = 'auto';
        node.style.transition = 'none';
        node.style.perspective = 'none';
    };
    return (
        <Tilt>
            <div
                className="h-40 w-32 bg-sky-950 flex flex-col justify-center items-center rounded "
                onClick={(e) => {
                    setCards(randomize(cards));
                    let newClickedCards = [];
                    if (!clickedCards.includes(id)) {
                        newClickedCards = [...clickedCards, id];
                    } else {
                        setIsGameOver(true);
                    }
                    setClickedCards(newClickedCards);
                    handleClick(e.currentTarget.parentNode);
                }}
            >
                <img
                    src={imageUrl}
                    alt={firstName}
                    className="h-[90%] w-full rounded"
                />
                <p
                    className="font-bold text-gray-50 font-medeival cursor-default"
                    style={{ fontFamily: 'MedievalSharp' }}
                >
                    {firstName}
                </p>
            </div>
        </Tilt>
    );
};

export default Card;
