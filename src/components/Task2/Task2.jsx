import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Task2.css'
import Sdata from '../Sdata'

function Task2() {

    const [myarray, setMyarray] = useState(Sdata);
    const [sortDown, setSortDown] = useState(true);
    const [value, setValue] = useState();
    const [inptext, setInptext] = useState("");
    const [search, setSearch] = useState("");

    function handleRemove(id) {
        const newList = myarray.filter((item) => item.id !== id); // when the id is same then that element will not be considered

        setMyarray(newList);
    }

    function sortArray() {
        const sortlist = myarray.sort(function (a, b) {
            if (a.name < b.name) {
                return -1
            } else if (a.name > b.name) {
                return 1
            } else return 0
        });
        setSortDown(!sortDown);// myarray dosen't re-render so when we render another state it will be rendered too. 
        setMyarray(sortlist);
        console.log(myarray);
    }

    function sortDownArray() {
        const reversed = myarray.reverse();
        setSortDown(!sortDown);// myarray dosen't re-render so when we render another state it will be rendered too. 
        setMyarray(reversed);
        console.log(myarray);
    }
    function sortAge() {
        const age = myarray.sort(function (a, b) {
            if (a.age < b.age) return -1
            else if (a.age > b.age) return 1
            else return 0
        });
        setSortDown(!sortDown)
        setMyarray(age);
    }

    function sortSalary() {
        const salary = myarray.sort(function (a, b) {
            if (a.salary < b.salary) return -1
            else if (a.salary > b.salary) return 1
            else return 0
        });
        setSortDown(!sortDown)
        setMyarray(salary);
    }
    function addElement() {
        const huh = myarray[value].address = inptext;
        console.log(huh);
        setSortDown(!sortDown);
    }

    console.log(value);
    return <div>
        <div>
            <Link to="/task1" >
                <button>
                    Go to Task 1
                </button>
            </Link>

            <h2>Task : 3</h2>
            <pre>
                {`
                    3. Array operation program    
                    - add address key for each 
                    - sorting : asc - desc (by salary, by age , by name ),
                    - searching (by salary, by age , by name ),
                    - pagination (page size : 3),
                    - delete row                     
                    `}
            </pre>
            <hr />
            <h3>Array Operations</h3>
            <select name="name" onChange={(e) => setValue(e.target.value)}>
                <option value="none">Select Name</option>
                {myarray.map((e, key) => {
                    return <option key={key} value={e.value}>{e.name}</option>;
                })}
            </select>
            <input type="text" onChange={(e) => setInptext(e.target.value)}/>  
            <button onClick={() => (addElement())}>Update</button><br />
            <input type="text" onChange={(e)=> setSearch(e.target.value)} />
            <div>

                {
                    myarray.filter((val) =>{
                        console.log(val.age, search);
                        if (val.name.toLowerCase().includes(search.toLowerCase()) || val.age.toString().includes(search) || val.salary.toString().includes(search)  ){
                            return val;
                        }
                    }).map((mydata) => <div className='data' key={mydata.id}>
                        <div className='indata' onClick={() => sortArray()} onDoubleClick={() => sortDownArray()} >{mydata.name}</div>
                        <div className='indata' onClick={() => sortAge()} onDoubleClick={() => sortDownArray()} >{mydata.age}</div>
                        <div className='indata' onClick={() => sortSalary()} onDoubleClick={() => sortDownArray()} >{mydata.salary}</div>
                        {mydata.address ? <div className="indata">{mydata.address}</div> : ""}
                        
                        <div className='data'>
                            <button onClick={() => handleRemove(mydata.id)}>Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>;
}

export default Task2;




