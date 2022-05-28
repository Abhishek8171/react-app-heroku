import './App.css';
import Intro from './Intro';
import Needed from './Need';
import Logo from './Roadmap.jpg';
import Start from './DSA1.png';
import Steps from './Steps';
import whereUse from './DSA.png';
import Basic from './Basic';
import chart from './download1.png';



function App() {
  return (
    <div className="App">
       <img src={Start} alt="Italian Trul" align="left" ></img>
       <h1>ROADMAP TO LEARNING DATA STRUCTURES AND ALGORITHMS (DSA)</h1>
      <Intro></Intro>
      <h1>WHY ITS NEEDS TO LEARN?</h1>
      <Needed></Needed>
      <img src={Logo} alt="Italian Trulli"></img>
      <Steps></Steps>
      <h1>WHERE DO WE USE DSA</h1>
      <img src={whereUse} alt="Italian Trull"></img>
      <h1>TIPS TO ACCELERATE YOUR JOURNEY IN DSA</h1>
      <Basic></Basic>
    
      

    </div>
  );
}

export default App;
