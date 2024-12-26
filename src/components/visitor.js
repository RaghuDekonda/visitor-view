/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import visitorService from '../service/visitorService';

const Visitor = () => {
  const[loading,setLoading] = useState(true);
  const [visitor, setVisitor] = useState({});
 
  useEffect(()=>{
    const fetchData = async() =>{
      setLoading(true);
      try{
        const response = await visitorService.getVisitor();
        setVisitor(response.data);
      }
      catch(error){
        console.log(error);
      }
      setLoading(false)
    };
    fetchData();
  },[]);
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="container mx-auto my-8"> 
        <div>
          <button 
            onClick={() => navigate("/addVisitor")} 
            className="bg-red-600 text-2xl hover:bg-green-800 my-30  mx-10 font-semibold px-20 py-3 rounded"
          >
            Add Visitors ➕
          </button>
        </div>
        <div>
          <table className="shadow">
            <thead>
              <tr>
                <th className='px-6 py-3 text-2xl uppercase tracking-wide'>S.no</th>
                <th className='px-6 py-3 text-2xl uppercase tracking-wide'>Visitor Name</th>
                <th className='px-6 py-3 text-2xl uppercase tracking-wide'>Visiting Room</th>
                <th className='px-6 py-3 text-2xl uppercase tracking-wide'>Visiting Date</th>
                <th className='px-6 py-3 text-2xl uppercase tracking-wide'>Visitor Number</th>
              </tr>
            </thead>
            {!loading && ( 
            <tbody>
              {visitor.map((visitor)=>(
              <tr   className='hover:bg-yellow-500 hover:text-white'>
                <td key={visitor.visitor_id} className='text-center text-xl px-6 py-4 whitespace-none font-semibold '>{visitor.visitor_id}</td>
                <td className='text-center text-2xl px-6 py-4 whitespace-none  font-semibold '>{visitor.visitor_name}</td>
                <td className='text-center text-2xl px-6 py-4 whitespace-none font-semibold '>{visitor.visiting_room}</td>
                <td className='text-center text-2xl px-6 py-4 whitespace-none font-semibold '>{visitor.visiting_date}</td>
                <td className='text-center text-2xl px-6 py-4 whitespace-none font-semibold '>{visitor.visitor_number}</td>

              </tr>
              ))}
            </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Visitor;