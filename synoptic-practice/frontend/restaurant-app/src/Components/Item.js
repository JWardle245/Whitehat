import React, {useState, useEffect} from 'react';
import { useTable } from 'react-table';

export default function Item() {

    const[name,setName]=useState('')
    const[items,setItems]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const item={name}
        fetch("http://localhost:8080/item/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(item)
        }).then(()=>{
            console.log("New item added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/item/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setItems(result);
        })
    },[])

    return (
        <div className="Item">
          <form action="/action_page.php">
            <label htmlFor="name" className="textlabel">Name:</label>
            <input type="text" id="name" className="textinput" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="submit" value="Submit" onClick={handleClick}/>
            </form>
            <div>
                <table className="table table-bordered table-responsive">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}