import React,{useState} from 'react'
import { FcExpand, FcCollapse } from "react-icons/fc";

const Data = ({title,body}) => {
    const [state, setstate] = useState(false);
   const click = () => {
      setstate(!state)
    }
    
  return (
    <div className={state?'cc accordion-item ':'accordion-item ' } onClick={click} 
    //onMouseLeave={()=>{setstate(false)}} onMouseEnter={()=>{setstate(true)}}// 
    >
        <div className='accordion-title'> <h5>{title}</h5>
      {state? <FcCollapse />:<FcExpand  />}
        </div>
      {state&&  <p>{body}</p>}
    </div>
  )
}

export default Data
