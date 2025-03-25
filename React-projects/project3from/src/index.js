import React from 'react';
import ReactDOM from 'react-dom/client';

class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      emp:{
        Id:"",
        Name:""
      }
    }
  }
  changeHandler=e=>{
    
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      emp:{
        ...this.state.emp,
        [name] : value
      }
    });
    console.log(this.state.emp);
  }
  createEmp =()=>{
    console.log(this.state.emp);
  }
  render(){
    return <div>
      <form>
        <p><label>EMP Id: 
          <input type="text" name="Id" value={this.state.emp.Id}
              onChange={this.changeHandler}/> </label></p>
        <p><label>EMP Name: 
          <input type="text" name="Name" value={this.state.emp.Name}
              onChange={this.changeHandler}/> </label></p>
      </form>      
      <p><button onClick={this.createEmp}>ADD</button></p>
  </div>
  }
}
const element = <Employee ></Employee>;
//Test app
const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
  element
);
