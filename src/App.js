import React,{useState} from "react";
import Todolist from "./Todolist";

const App = () => {
    const[item, setitem] = useState("");
    const[newitem, setnewitem] = useState([]);
    const listofItem = () => {
        setnewitem((olditem) => {
            return [...olditem, item];
        });
        setitem(" ");
    }
    const itemEvent = (e) => {
        setitem(e.target.value);
    }
    const deleteitem = (id) => {
        setnewitem((olditem) => {
            return olditem.filter((arrelm,index) => {
                return index!== id;
            });
        });
    }
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add items" value={item} onChange={itemEvent}/>
                <button onClick={listofItem}> + </button>

                <ol>
                {newitem.map( (itemval,index) => {
                    return <Todolist text={itemval}
                        key={index}
                        id={index}
                        onSelect={deleteitem}
                    />
                })}
                </ol>
            </div>
        </div>
        </>
    );
}

export default App;