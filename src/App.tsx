import './App.css';

import headPortrait from './assets/headPortrait.jpg';
import {CSSTransition} from 'react-transition-group'

function App() {

  return (
    <>
      <CSSTransition in={true} appear={true} timeout={1500} classNames="headPortraitTransition">
        <div className={"headPortraitContainer"}>
          <div className={"headPortrait"}>
            <img src={headPortrait} width={'200px'} alt={''} className="rounded-full headPortraitImg" />
          </div>
          <div className={"selfIntroduction"}>
            <div className={"selfIntroductionText"}>
              <div className="Tina">Tina</div>
              <div className="">A Front-end developer</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default App;
