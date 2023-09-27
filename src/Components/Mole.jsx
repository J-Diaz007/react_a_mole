import {useEffect} from 'react'
import moleImg from '../images/mole.png'

// Mole will represent a displayed mole. 
// It will contain a timer determining the lifespan of a mole. 
// This component will render when displayMole === true
//Needs a useEffect hook that will start the timer and clean it up afterward
// (Utilize the useEffect hook to govern the mole (component) lifecycle.)


export default function Mole(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )
}
