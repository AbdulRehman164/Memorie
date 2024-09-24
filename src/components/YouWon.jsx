const YouWon = ({ setClickedCards }) => {
    return (
        <div>
            <div className="h-[100vh] w-[100vw] bg-black opacity-50 z-10 absolute top-0 left-0"></div>
            <div
                className="h-[25vh]  rounded z-50 absolute top-[30%] left-[35%] shadow-black bg-white text-2xl"
                style={{ fontFamily: 'MedievalSharp' }}
            >
                <div className="mb-10 bg-sky-950 flex justify-between px-4 py-2 text-white">
                    <div>Congratulations! You Won the Game</div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-sky-950 text-white px-6 py-2 rounded"
                        onClick={() => {
                            setClickedCards([]);
                        }}
                    >
                        Play Again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YouWon;
