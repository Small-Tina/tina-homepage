//引入模块组件
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Modal } from 'antd';
//引入自定义内容
import './App.css';
import headPortrait from './assets/headPortrait.png';
import menu from './assets/menu.svg';

const App: React.FC = () => {
  const [list, setList] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const menuStates = {
    begin: { y: 10 },
    end: { y: 70 },
  };
  const handleOk = (): void => {
    setIsModalOpen(false);
  };
  const handleCancel = (): void => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal title="公告" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>网页项目将于农历新年完工</p>
        <p>目前正在加紧开发中</p>
        <p>敬请期待</p>
      </Modal>
      <div id={'main-box'}>
        <div id={'drop-down-box'}>
          <motion.div className={'menuBar relative'} variants={menuStates} animate={list ? 'begin' : 'end'}>
            <div className={'m-auto h-60px w-49/50 rounded-lg flex flex-row'}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div
              className={'absolute bottom-5px left-3'}
              onClick={() => {
                setList(!list);
              }}
            >
              <motion.img width={30} src={menu} alt="" whileHover={{ scale: 0.95 }} />
            </div>
          </motion.div>
        </div>
        <div className={'headPortraitContainer h-200px w-680px absolute flex'}>
          <motion.div className={' inline-flex relative'} animate={{ scale: 1, rotate: 360 }}>
            <motion.img src={headPortrait} alt={''} className="rounded-full w-48 ring ring-emerald-900 shadow-headPortrait" animate={{}} whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }} />
          </motion.div>
          <motion.div className={'selfIntroduction relative'}>
            <div className={'selfIntroductionText w-300px h-200px absolute text-2xl'}>
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
