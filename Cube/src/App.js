import './App.css';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Box4 from './components/Box4';
import FrontBox from './components/FrontBox';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='box_container'>
          <Box1/>
          <Box2/>
        </div>
        <div className='box_container'>
          <Box3/>
          <Box4/>
        </div>
        <div className='frontBox_container1'>
          <FrontBox/>
        </div>
      </div>
    </div>
  );
}

export default App;
