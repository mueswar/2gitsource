import React from 'react';
import ReactDOM from 'react-dom/client';
import {useFormik} from 'formik';

const Employee = ()=>{
  const formik = useFormik({
    initialValues:{
      Id:"",
      Name:""
    },
    onSubmit:values=>{
      alert(JSON.stringify(values));
    }
  });
  return (<div>
    <form onSubmit={formik.handleSubmit}>
      <p><label>EMP Id: 
        <input type="text" name="Id" value={formik.values.Id}
            onChange={formik.handleChange}/> </label></p>
      <p><label>EMP Name: 
        <input type="text" name="Name" value={formik.values.Name}
            onChange={formik.handleChange}/> </label></p>     
    <p><button type='submit'>ADD</button></p>
    </form> 
</div>)
}
const element = <Employee ></Employee>;
//Test app
const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
  element
);
