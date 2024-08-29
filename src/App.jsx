import Body from './components/Body';
import Header from './components/Header';
import { useState } from 'react';

function App() {
    const [clickedCards, setClickedCards] = useState([]);
    return (
        <div className="flex flex-col gap-20">
            <Header clickedCards={clickedCards} />
            <Body
                clickedCards={clickedCards}
                setClickedCards={setClickedCards}
            />
        </div>
    );
}

export default App;
