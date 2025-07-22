import { useState , useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";
import StartScreen from "./components/StartScreen";
import EndScrean from "./components/EndScrean";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Feedback from "./components/feedback";
import Character from "./components/character";
import Wardrobe from "./components/Wardrobe";
import "./App.css";

const sound = {
  background: new Howl({
    scr:['/public/sound/background.mp3'],
    volume: 0.3,
    loop: true
  }),
  correct: new Howl({
    src:['/public/sound/explosion.wav'],
    volume: 0.6
  }),
  wrong: new Howl({
    src: ['/public/sound/click.wav'],
    volume: 0.6
  }),
  win: new Howl({
    src: ['/public/sound/nis.wav'],
    volume: 0.6
  })
}
function App(){
  return(
    <div className="app">
      <AnimatePresence mode="wait">
        {/* <StartScreen/> */}
        <EndScrean/>
        {/* <Feedback/> */}
      </AnimatePresence>
    </div>
  )
}

export default App
