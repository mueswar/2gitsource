import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';

function Employee (){
  const [id,setId] = useState();
  const [name,setName] = useState();
  function changeId(e){
    setId(e.target.value)
  }
  function changeName(e){
    setName(e.target.value)
  }

  return (<div>
      <p><label>EMP Id: 
        <input type="text" name="id" value={id}
            onChange={changeId}/> </label></p>
      <p><label>EMP Name: 
        <input type="text" name="name" value={name}
            onChange={changeName}/> </label></p> 
            <p>
            Emp Id:{id} <br/> Name :{name}
            </p>
</div>)
}