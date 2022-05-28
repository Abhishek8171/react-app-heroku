import './App.css';
import Intro from './Intro';
import Needed from './Need';
import Logo from './Roadmap.jpg';
import Start from './DSA1.png';
import Steps from './Steps';
import whereUse from './DSA.png';
import Basic from './Basic';
import chart from './download1.png';
import Learn from './icegif-15.gif';
import sheep from './elmer-sheep.gif';
import './header.css';
import Head from './Header';
import Bottom from './Bottom';
import './Bottom.css';



function App() {
  return (
    <div className="App">

<div class="header">
  <Head></Head>
</div>
       
       <h1>ROADMAP TO LEARNING DATA STRUCTURES AND ALGORITHMS (DSA)</h1>
       <img src={Learn} alt="Italian Trul" class="center" ></img>      
      <Intro></Intro>
      <h1>WHY ITS NEEDS TO LEARN?</h1>
      <Needed></Needed>    
      <img src={Logo} alt="Italian Trulli"></img>
      <Steps></Steps>
      <h1>WHERE DO WE USE DSA</h1>
      <img src={whereUse} alt="Italian Trull"></img>
      <h1>TIPS TO ACCELERATE YOUR JOURNEY IN DSA</h1>
      <img src={sheep} alt="Italian Trul" class="center" ></img> 
      <Basic></Basic>
    
    </div>
  );
}

export default App;
