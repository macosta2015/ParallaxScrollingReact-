import './App.css';
import {Parallax} from 'react-parallax'
import Falcon9 from './images/Falcon9.jpg'; 
import FalconHeavy from './images/FalconHeavy.jpg'; 
import SpaceLaunch from './images/SpaceLaunch.jpg'; 


function App() {
  return (
    <div className="App">
      <Parallax strength={900} bgImage={FalconHeavy}>
        <div className="content">
          <div className="text-content">Normall Parallax</div>
        </div>
      </Parallax>

      {/* <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={FalconHeavy}> */}
      <Parallax strength={300} blur={{ min: -15, max: 15 }} bgImage={Falcon9}>
        <div className="content">
          <div className="text-content">Blur</div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={SpaceLaunch}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>

      <div className="content">

      </div>

      <h1>Hello World</h1>
    </div>
  );
}

export default App;
