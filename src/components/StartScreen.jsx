import {motion} from 'framer-motion';
import {Howl} from 'howler';
import {faPlay} from 'react-icons/fa';

const StartScreen = (startGame, muted) => {
    const characters = [
       {id:'bella', name:'Bella',description:'The trandy Bloggers'},
       {id:'shafya', name:'Shaffey',description:'The trandy student'} ,
       {id:'keylan', name:'Keylan',description:'The trandy Min Student'} 
        
    ];
    return (
        <motion.div className="start-screen" initial={{ opacity: 0}} animate={{ opacity:1}} exit={{opacity: 0}}></motion.div>
    )

}

export default StartScreen
