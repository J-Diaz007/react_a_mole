import './App.css';
import { useState } from 'react'
import MoleContainer from './Components/MoleContainer'

//App - Stores the score state variable
//Needs a function to create 9 MoleContainers

// Declare a function called createMoleHill()
// Inside this function, define an empty array called hills
// Build a basic for loop that iterates nine times. (This number can be changed) 
// On each iteration, a MoleContainer component should be pushed to hills
// It may be worthwhile to send props to the MoleContainer
// Score and setScore could go down.
// A key with the value of i would also be best practice.
// Outside the for loop, define a return value that formats the hills variable between div tags.
// Next, simply call this function inside the app's return method.

function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                key={i}
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>React_a_Mole!</h1>
            {score}
            {createMoleHill()}
        </div>
    )
}

export default App


