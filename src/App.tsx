import './App.css';
import { motion } from 'framer-motion';
import headPortrait from './assets/headPortrait.jpg';
import { useState } from 'react';

function App() {
  const [list, setList] = useState(false);
  function listClick() {
    if (!list) {
      setList(true);
    } else {
      setList(false);
    }
  }
  return (
    <>
      <div className="background">
        <div>
          <div></div>
          <button onClick={listClick}></button>
        </div>
        <div className={'headPortraitContainer'}>
          <motion.div className="avatar" animate={{ scale: 1, rotate: 360 }}>
            <motion.img src={headPortrait} alt={''} className="rounded-full w-48 ring ring-emerald-900" animate={{}} whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }} />
          </motion.div>
          <motion.div className={'selfIntroduction'}>
            <div className={'selfIntroductionText'}>
              <div className="text-7xl">Tina</div>
              <div className="text-2xl pt-1">ハッハッハッ！雪風様は無敵なのだ！</div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
