import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';
const list= ['','X', 'O']

function App() {

  const [data, setData] = useState([]);

  const start = () => {
    let newList = [];

    for(let i = 0; i < 9; i++) {
      newList.push({
        icon: list[0],
        isOpen: false
      });
    
    }
   
   
    setData(newList);
  }
  
 

  useEffect(() => {
    start();
  },[] );

   const open =id => {
    
    const newArray= [...data];
    const item = data[id].icon === "" ? "X" : data[id].icon === "X" ? "O" : "";
    newArray[id].icon =item;
    console.log(item);
    console.log(newArray[id].icon);

    if (newArray[id].icon !==""){
       newArray[id].isOpen = true; 
    } 
    else{
      newArray[id].isOpen = false;
    }
    

      setData(newArray)
   }

  return (

<div className='Container'>
  <div  className='GameTime'>GAME TIME</div>
      <div className="App">
        {
          data.map((Item, index) => 
            <div style={{ userSelect: 'none' }} key={index} className='Box'
            onClick={() => open(index)}>
            {Item.isOpen && Item.icon}
            </div>
          )
        }
      </div>
      </div>

      
  );
}

export default App;
