import { motion, scale } from "framer-motion";

const Feedback = ({feedback, handleContainer, isFinalLavel}) => {
    if(feedback.score >=90) {
        return{
            title:'Fabulous!',
            message:"You're fashion icon!👑 This outfit is very nice...",
            emoji:"👏🏻"
        }
    }else if (feedback.score >=75) {
        return{
            title:'Greate Gob!',
            message:"You're fashion icon!🪄 This outfit is nice.",
            emoji:"👍🏻"
        }
    }else if(feedback.score >=50) {
        return{
            title:'Not Bad!',
            message:"There is potential here!🔥 This outfit is nomal",
            emoji:"🙁"
        }
    }else {
        return {
            title: "Oops!!",
            message: "This output doesn't quite match the occassion. Let's try again.",
            emoji:"🥺"
        }
    }
     const {title, message, emoji} = getFeedbackMessage();
     return(
        <motion.div className="feedback-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity: 0}}>
            <motion.div className="feedback-card" initial={{scale:0.8}} animate={{ scale:1}}>
                <h2>{title} {emoji}</h2>

                <div className="score-breakdown">
                    <div className="score-item">
                        <span>Style Points:</span>
                        <span>{feedback.stylePoints}</span>
                    </div>
                    <div className="score-item">
                        <span>Challenge Match:</span>
                        <span>{feedback.challengeMatch}</span>
                    </div>
                    <div className="score-item">
                        <span>Bonus Points:</span>
                        <span>{feedback.bonusPoints}</span>
                    </div>
                    <div className="score-item">
                        <span>Total Score:</span>
                        <span>{feedback.score}</span>
                    </div>
                </div>
                <div className="feedback-comments">
                    <h3>Fashion Notes:</h3>
                    <p>{message}</p>
                    <ul>{feedback.comments.map((Comment, i) => (<li key={i}>{Comment}</li>))}</ul>
                </div>
                <motion.button className="continue-button" whileHover={{scale:1.05}} whileTap={{scale:0.95}}>
                    {isFinalLavel ? 'See Final result' : "Next Level"}
                </motion.button>
            </motion.div>
        </motion.div>
     )
}
   
            


export default Feedback