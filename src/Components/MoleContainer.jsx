import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

// MoleContainer will be the component that decides which child component is rendered. 
// We will store a Boolean state variable called displayMole here.
//Needs a handleClick function that will increment the score by 1 and immediately
// //set the clicked-on mole to no longer display (pass this down only to Mole components)

export default function MoleContainer(props){

    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }    

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}
