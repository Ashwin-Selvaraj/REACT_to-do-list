import React,{useState} from "react";
// import {FaAngleDown} from 'react-icons/fa';
import Items from './list';
import ContextProvider from './context';
// popup
import PopUp from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

const InFrame=()=>
{
    const [title, setTitle]=useState("");
    const [status,setStatus]=useState("");
    const [data,setData]=useState([]);
    const [dataa,setDataa]=useState([]);
    const [sts,setSts]=useState("");
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(title && status)
        {
            const task={
                title:title,
                status:status,
                ID:data.length
            }
            setData([...data,task]);
            setDataa([...dataa,task]);
            setTitle("");
            setStatus("");
        }
        else{
            console.log("empty values");
        }
    }

    const SortArray=(status)=>
    {
        console.log("Inside SortArray");
        
        if(status !== "All")
        {
            setData(()=>dataa.filter((task)=>task.status===status));
        }
        else{
            setData(dataa);
        }
        console.log(data);
    }

    

    return(<ContextProvider.Provider value={{data1:data,data2:setData,data3:dataa,data4:setDataa}}>
        <div className="in-frame">
            <PopUp trigger={<button className="btn-addtask">Add Task</button>}>
                {close=>(
                    <div className="popup">
                        <div className="popup-title">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} ></input>
                        </div>
                        <div className="popup-status">
                            <label htmlFor="status">Status</label>
                            <select className="dropdown"  onChange={(e)=>setStatus(e.target.value)}>
                                <option value={"Complete"}>Complete</option>
                                <option value={"InComplete"}>InComplete</option>
                            </select>
                        </div>
                        <button className="popup-btn-addtask" onClick={handleSubmit}>Add Task</button>
                        <button className="popup-btn-cancel" onClick={()=>close()}>Cancel</button>
                    </div>)
                }
            </PopUp>
        <div className="all">
            {/* <button className="btn-all">All</button> */}
            {/* {data1=data} */}
            <select value={sts} onChange={(e)=>setSts(e.target.value)} className="btn-all" >
                <option value={"All"} >All</option>
                <option value={"Complete"}  >Complete</option>
                <option value={"InComplete"} >InComplete</option>
            </select>
            <button className="icon-all" onClick={()=>SortArray(sts)}>Enter</button>
            {/* <FaAngleDown className="icon-all"></FaAngleDown> */}
        </div>
        <Items></Items>
    </div>
    </ContextProvider.Provider>)
}

export default InFrame;