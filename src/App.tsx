import './App.css';
import headPortrait from './assets/headPortrait.png';
import menu from './assets/menu.svg';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Modal } from 'antd';

const App: React.FC = () => {
  const [list, setList] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const listClick = () => {
    if (!list) {
      setList(true);
      const menu: Element | null = document.querySelector('.menuBarNone');
      menu!.className = 'menuBarDisplay';
    } else {
      setList(false);
      const menu: Element | null = document.querySelector('.menuBarDisplay');
      menu!.className = 'menuBarNone';
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal title="提醒" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>网站将于农历新年正式完工</p>
        <p>目前正在全力开发中</p>
      </Modal>
      <div className="background">
        <div>
          <motion.div className={'menuBarNone'}>
            <button onClick={listClick}>
              <motion.img className={'menuButton'} width={30} src={menu} alt="" whileHover={{ scale: 0.95 }} />
            </button>
          </motion.div>
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
};

export default App;
