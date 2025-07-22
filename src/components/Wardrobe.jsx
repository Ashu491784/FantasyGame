import { useState } from "react";
import { color, motion } from "framer-motion";
import { Howl } from "howler";
import { select, style } from "framer-motion/client";

const Wardrobe = ({currentChallenge, selectedItems, addItem, muted}) => {
   const categories = (['tops', 'bottoms', 'shoes', 'accessories']) ;
   const [activeCategory, setActiveCategory] = useState(categories[0]);

   //sample wardrobe items
   const wardrobeItems = {
    tops: [
        {id: 't1', style:'tops', name: 'Crop top', style: 'casual' , color:'pink', points:10},
        {id: 't2', style:'tops', name: 'Blouse', style: 'formal' , color:'white', points:15},
        {id: 't3', style:'tops', name: 'T-Shirts', style: 'casual' , color:'blue', points:5},
        {id: 't4', style:'tops', name: 'Sweater', style: 'warm' , color:'Black', points:10}
    ],
    bottoms: [
        {id: 'b1', style:'bottoms', name: 'Jeans', style: 'casual' , color:'pink', points:10},
        {id: 'b2', style:'bottoms', name: 'Skirts', style: 'formal' , color:'blue', points:10},
        {id: 'b3', style:'bottoms', name: 'Shorts', style: 'casual' , color:'red', points:10},
        {id: 'b4', style:'bottoms', name: 'Legins', style: 'sporty' , color:'green', points:10},
    ],
    shoes: [
        {id: 's1', style:'shoes', name: 'Sandals', style: 'summer' , color:'gold', points:10},
        {id: 's2', style:'shoes', name: 'Boots', style: 'warm' , color:'black', points:15},
        {id: 's3', style:'shoes', name: 'Heels', style: 'casual' , color:'brown', points:12},
        {id: 's4', style:'shoes', name: 'Sneakers', style: 'sporty' , color:'white', points:8},
    ],
    accessories: [
        {id: 'a1', style:'accessories', name: 'Hat', style: 'summer' , color:'black', points:10},
        {id: 'a2', style:'accessories', name: 'sunglass', style: 'warm' , color:'white', points:15},
        {id: 'a3', style:'accessories', name: 'Bag', style: 'casual' , color:'black', points:16},
        {id: 'a4', style:'accessories', name: 'Necklace', style: 'formal' , color:'gold', points:8},
    ],
    dresserss : [
        {id: 'a1', style:'dresses', name: 'Summer Dress', style: 'summer' , color:'black', points:10},
        {id: 'a2', style:'dresses', name: 'Cocktail Dress', style: 'Party' , color:'Red', points:15},
        {id: 'a3', style:'dresses', name: 'Bikini', style: 'summer' , color:'pink', points:16},
        {id: 'a4', style:'dresses', name: 'Office Dress', style: 'formal' , color:'white', points:25},
    ]
   }
  const playSelectedSound = () => {
    if(!muted){
        const sound = new Howl({
            src: ['/public/sound/mixkit-select-click-1109.wav'],
            volume: 0.4
        })
        sound.play();
    }
    }
    const isItemSelected = (item) => {
        return selectedItems.some(selected => selected.type === item.type && selected.id === item.id);
    }
    return (
        <div className="wardrobe-container">
            <div className="wardrobe-categories">
                {categories.map((category) => (
                    <button key={category} className={`category-tab ${activeCategory === category ? 'active' : ''}`} onClick={() => setActiveCategory(category)}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {/* click karana item eke tika pennawa */}
            <div className="wardrobe-items">
                {wardrobeItems[activeCategory].map(item => (
                    <motion.div key={item.id} className={`wardrobe-item ${isItemSelected(item) ? 'selected':''}`} onClick={() => {
                        playSelectedSound()
                        addItem()
                    }} whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} 
                        transition={{type:'spring', stiffness:100}}>
                        <div className={`item-icon ${item.type} ${item.color}`}></div>
                        <div className="item-info">
                            <h4>{item.name}</h4>
                            <p>Style: {item.style}</p>
                            <p>+{item.points} pts</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Wardrobe