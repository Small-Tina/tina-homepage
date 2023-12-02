import './App.css';

import headPortrait from './assets/headPortrait.jpg';
import {CSSTransition} from 'react-transition-group'

function App() {
const timeout:object = {
  appear: 1500,
  enter: 1300,
  exit: 1500,
  };
  return (
    <>
      <div className="background">
        <CSSTransition in={true} appear={true} timeout={timeout} classNames="headPortraitTransition">
          <div className={"headPortraitContainer"}>
            <div className={"headPortrait"}>
              <img src={headPortrait} width={'200px'} alt={''} className="rounded-full headPortraitImg" />
            </div>
            <div className={"selfIntroduction"}>
              <div className={"selfIntroductionText"}>
                <div className="text-5xl">Tina</div>
                <div className="text-xl">A Front-end Developer</div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default App;
