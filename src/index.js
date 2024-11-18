import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import surati1 from './images/1.jpg';
import surati2 from './images/2.jpg';
import surati3 from './images/3.jpg';
import surati4 from './images/4.jpg';
import surati5 from './images/5.jpg';
import surati6 from './images/6.jpg';





function App() {
  return(
    
    <div>

      <h1>Winter Is Coming</h1>

      {/* images */}
      <div className='imageDiv'>
        <img src={surati1}/>
        <img src={surati2}/>
        <img src={surati3}/>
        <img src={surati4}/>
        <img src={surati5}/>
        <img src={surati6}/>
      </div>

    </div>
   
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
