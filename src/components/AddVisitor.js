import React  ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import visitorService from '../service/visitorService'
const AddVisitor = () => {
  const[visitor,setVisitor]=useState({
    visitor_id:"",
    visitor_name:"",
    visiting_room:"",
    visiting_date:"",
    visitor_number:"",
  });
  const saveVisitor=(e) =>{
    e.preventDefault();
    visitorService.saveVisitor(visitor)
    .then((response) => {
      console.log("saved",response);
      navigate("/")
    })
    .catch((error)=>{
      console.log(error);

    })
  }
  const reset=(e) =>{
    e.preventDefault();
    setVisitor({
      visitor_id:"",
    visitor_name:"",
    visiting_room:"",
    visiting_date:"",
    visitor_number:"",
      });
  }
  const handleChange = (e) =>{
    const value = e.target.value;
    setVisitor({...visitor,[e.target.name]:value})
  }

  const navigate= useNavigate();
  return (
    <div className='max-w-xl mx-40 bg-slate-200 my-20 rounded shadow py-4 px-8'>
      <div className='text-4xl tracking-wider font-bold text-center  py-4 px-8'>
      <p>Add Visitor Details ➕</p></div>
      <div className='mx-10 my-2'> 
      <input onChange={(e)=> handleChange(e)} className='w-full pl-2 py-2 my-4 text-slate-500 rounded' placeholder="Visitor_Name" name="visitor_name"  type="text" value={visitor.visitor_name}></input>
      <input onChange={(e)=> handleChange(e)}  className='w-full pl-2 py-2 my-4 text-slate-500 rounded ' placeholder="Visiting_Room" name="visiting_room" type="text"  value={visitor.visiting_room}></input>
      <input onChange={(e)=> handleChange(e)} className='w-full pl-2 py-2 my-4 text-slate-500 rounded '   name="visiting_date"  value={visitor.visiting_date} type="date"  ></input>
      <input onChange={(e)=> handleChange(e)} className='w-full pl-2 py-2 my-4 text-slate-500 rounded' placeholder="Visitor_Number" name="visitor_number"  type="text" value={visitor.visitor_number}></input>
      </div>
      <div className=' flex my-4 space-x-4 px-20 '>
      <button 
      onClick={saveVisitor}
      className='bg-green-500 hover:bg-green-800 py-2 px-6 rounded'>Save</button>
      <button 
      onClick={reset}
      className='bg-yellow-500 hover:bg-yellow-800 py-2 px-6 rounded'>Clear</button>
      <button  onClick={()=> navigate("/")}  className='bg-red-500 hover:bg-red-800 py-2 px-6 rounded'>Cancel</button>
      </div>
       </div> 
    
  )
}

export default AddVisitor
