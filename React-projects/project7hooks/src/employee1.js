import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';

function Employee (){
  const [employee,setEmployeedata] = useState({
    id:'',
    name:''
  });
  function changeEmployeedata(e){
    setEmployeedata({
      ...employee,
        [e.target.name] : e.target.value
    })
  }

  return (<div>
      <p><label>EMP Id: 
        <input type="text" name="id" value={employee.id}
            onChange={changeEmployeedata}/> </label></p>
      <p><label>EMP Name: 
        <input type="text" name="name" value={employee.name}
            onChange={changeEmployeedata}/> </label></p> 
            <p>
            Emp Id:{employee.id} <br/> Name :{employee.name}
            </p>
</div>)
}
