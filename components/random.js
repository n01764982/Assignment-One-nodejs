import { useState } from 'react';
import Navbar from './navbar'

function DiceRoller(){
const [dice, setDice] = useState([]);
const [results, setResult] = useState([]);

const addDice = () => {
    if (dice.length >= 6) 
        return; setDice(([... dice, 6]))
            
};

const updateDice = (index, sides) => {
    const update = [...dice];
    update[index] = Number(sides);
    setDice(update);
};

const removeDie = (index) => {
    const updateDice = dice.filter((_, i) => i != index);
    setDice(updateDice);

    const updateResultR = results.filter((_, i) => i != index);
    setResult(updateResultR);
}

const rollAll = () => {
    const rolled = dice.map(sides =>
        Math.floor(Math.random() * sides) + 1
    );
    setResult(rolled);
};

const total = results.reduce((a,b) => a + b, 0);

return(
    <>
        <div id='dicePage'>
            <h2>Dice Roller</h2>
            <button onClick={addDice}>Add a Dice</button>
            {dice.map((sides, i) => (
                <div key={i}>
                    <label>
                        Die {i + 1}:{' '}
                        <input type='number' min={"2"} onChange={(e) => updateDice(i, e.target.value)}>
                        Sides</input>
                    </label>

                    <button onClick={()=> removeDie(i)}>
                    Remove Dice
                    </button>
                    </div>


            ))}
            {dice.length > 0 && (
                <div>
                    <button onClick={rollAll}>
                        Roll Dice/Die
                    </button>
                </div>
            )}

            {results.length > 0 && (
                <div>
                    <h2>Results</h2>
                    <p>Individual: {results.join(', ')}</p>
                    <p>Total: {total}</p>
                </div>
            )}
        </div>
    </>
)

}

export default DiceRoller;