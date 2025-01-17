import React ,{useState,useEffect} from 'react'
import Data from './Data.jsx';
import './App.css';
    const App = () => {
      const url="https://jsonplaceholder.typicode.com/posts";
      const[showData,setShowData]=useState([]);
      const loadData=()=>{
    fetch(url,{method:"GET"}

    ).then(res=>res.json())
    .then(result=>{
    if(result){setShowData(result);}

    }).catch(err=>{
      console.log(err);
    })
      }
      useEffect(() => {
        
      loadData();
      }, []);


  return (
    <div className='container'> 
    <h1>React Accordion</h1>
    <div className="row">
      {showData.map((item,index)=>
        <div className="col-xl-6 col-lg-6 col-nd-6 col-sm-12" key={index}>
          <Data {...item}/>
        </div>
      )}
    </div>
    </div>
  )
}

export default App
