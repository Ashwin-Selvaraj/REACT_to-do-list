import React,{useContext} from "react"; 
import ConsumerContext from './context';
import {FaTrash,FaEdit} from "react-icons/fa";

// import
const Items=()=>
{
    const {data1,data2,data3,data4}=useContext(ConsumerContext);
    let value=false;
    const RemoveTask=(ID)=>
    {
        data2(()=>data1.filter((task)=>task.ID !== ID));
        data4(()=>data3.filter((task)=>task.ID !== ID));
    }
    return(<React.Fragment>
        <div className="list">
                {
                    data1.map((task)=>
                    {
                        var str1="Complete";
                        var str2=task.status;
                        if(str2===str1)
                        {
                            console.log("Inside if");
                            value=true;
                        }
                        else{
                            console.log("Inside else");
                            value=false;
                        }
                        return(<>
                            <div className="list-items">
                                <h3 className="title">{task.title}</h3>
                                <h3 className={value?"status-Complete":"status-InComplete"}>{task.status}</h3>
                                <FaEdit className="edit" ></FaEdit>
                                <FaTrash className="delete" onClick={()=>RemoveTask(task.ID)}></FaTrash>
                            </div>
                        </>)
                    })
                } 
        </div>
    </React.Fragment>)
}
export default Items;