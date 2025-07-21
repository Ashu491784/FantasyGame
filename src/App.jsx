import { useState , useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";
import StartScreen from "./components/StartScreen";
import EndScrean from "./components/EndScrean";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import "./App.css";

function App(){
  return(
    <div className="app">
      <AnimatePresence mode="wait">
        {/* <StartScreen/> */}
        <EndScrean/>
      </AnimatePresence>
    </div>
  )
}

export default App
