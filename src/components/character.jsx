import  {motion, scale} from 'framer-motion';

const Character = ({character,selectedItems, removeItems, feedback}) => {
    const characterVariant = {
        happy: {
            rorate: [0, -5,5,-5,0],
            transition: {duration: 0.6}
        },
        sad: {
            y: [0, -10, 0],
            transition: {duration: 0.5}
        },
        neture:{
            scale: 1,
            rorate:1,
            y: 0
        }

    }
    const getReaction = () => {
        if(!feedback) return 'neture'
        return feedback.score >= 70 ? 'happy' : 'sad'   
     }
     return(
        <div className='character-container'>
            <motion.div className={`character-display ${character}`} variants={characterVariant} animate={feedback ? getReaction() : 'nature'}>
                    {/* base character */}
      
               <div className="character-base"></div>
               {/* Display Selected Items */}
               {selectedItems.map(item => (
                <div
                 key={`${item.type}-${item.id}`}
                className={`character-item ${item.type}-${item.id}`}
                onClick={() => removeItems(item.type)}
                >
        </div>
               ))}
            </motion.div>
        <div className='outfit-items'>{selectedItems.length === 0 ? (<p className='empty-message'>Drag Items Click to Dress up!!!</p>): (
            selectedItems.map(item => (<motion.div className='selected-item-tag' key={`selected-${item.type}-${item.id}`} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} 
            exit={{opacity: 0, scale:0.5}} onClick={() => removeItems(item.type)} whileHover={{scale: 1.1}}>
                {item.name}
                <span className='remove-item'>x</span>
            </motion.div>)))}</div>
        </div>
     )

}
export default Character