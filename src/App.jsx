import Body from './components/Body';
import Header from './components/Header';
import { useState } from 'react';

function App() {
    const [clickedCards, setClickedCards] = useState([]);
    return (
        <>
            <Header clickedCards={clickedCards} />
            <Body
                clickedCards={clickedCards}
                setClickedCards={setClickedCards}
            />
        </>
    );
}

export default App;
