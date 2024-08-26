import randomize from './randomize';

const Card = ({ no, cards, setCards, clickedCards, setClickedCards }) => {
    return (
        <div
            className="h-40 w-32 bg-gray-300"
            onClick={() => {
                setCards(randomize(cards));
                let newClickedCards = [];
                if (!clickedCards.includes(no)) {
                    newClickedCards = [...clickedCards, no];
                }
                setClickedCards(newClickedCards);
            }}
        >
            {no}
        </div>
    );
};

export default Card;
