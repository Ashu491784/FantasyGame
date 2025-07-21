import {motion} from 'framer-motion';
import {Howl} from 'howler';
import {FaPlay} from 'react-icons/fa';

const StartScreen = (startGame, muted) => {
    const characters = [
       {id:'bella', name:'Bella',description:'The trandy Bloggers'},
       {id:'shafya', name:'Shaffey',description:'The trandy student'} ,
       {id:'keylan', name:'Keylan',description:'The trandy Min Student'} 
        
    ];

    //click sound
    const playClickSound =() => {
        if(!muted){
         const sound =   new Howl({
                src: ['/public/sound/mixkit-select-click-1109.wav'],
                volume: 0.7
            })
            sound.play();
        }
    }
    return (
        <motion.div className="start-screen" initial={{ opacity: 0}} animate={{ opacity:1}} exit={{opacity: 0}}>
            <div className="start-container">
                <motion.div className="game-title" initial={{ y:-50, opacity:0}} animate={{ y:0, opacity:1}} transition={{delay:0.2}}>Fashin Frexzy</motion.div>
           
            <motion.p initial={{y:50, opacity:0}} animate={{ y:0, opacity:1}} transition={{delay: 0.4}} className="game-substile">
                Style your character for different occasitions and get rated!!!
            </motion.p>
            <motion.div className="character-grid" initial={{ opacity:0}} animate={{ opacity:1}} transition={{ delay: 0.6}}>
                {characters.map((char) => (
                    <motion.div key={char.id} className="character-card" onClick={() => {}} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <div className={`character-avatar ${char.id}`}></div>
                        <h3>{char.name}</h3>
                        <h3>{char.description}</h3>
                        <div className="play-button"><FaPlay/>🧚🏻‍♀Play</div>
                    </motion.div>
                ))}
            </motion.div>
             </div>
        </motion.div>
    )

}

export default StartScreen
