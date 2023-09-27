import {useEffect} from 'react'
import MoleHill from '../images/molehill.png'


// This will represent an empty molehill or an invalid location to click. 
// Much like its sister component (Mole), it will have an internal timer to cycle the display. 
// This component will render when displayMole === false
//Needs a useEffect hook that will start the timer and clean it up afterward
// (Utilize the useEffect hook to govern the mole (component) lifecycle.)

// Declare a useEffect that takes a callback function, as we have done in the past.
// Within the callback function, define a random number of seconds. 
// We want each mole to exist on its own random timer. Otherwise, our game would not be much fun.
// Next, declare a variable called timer. This variable will be assigned to a setTimeout()
// The setTimeout() callback should only toggle props.displayMole to true.
// Important: Do not forget to define a cleanup for our useEffect using clearTimeout(timer)
// Once EmptySlot is built, Mole will be easy as well.

export default function EmptySlot(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={MoleHill}/>
        </div>
    )
}
