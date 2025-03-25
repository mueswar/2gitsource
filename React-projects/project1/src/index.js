import React from 'react';
import ReactDOM from 'react-dom/client';

//jsx example 1
const element1 = <h1> Hello h1 </h1>;

//jsx example 2
const element2 = (
  <div>
    <h1> Hello h1 </h1>
    <h1> Hello how are you </h1>
  </div>
);

const element3 = React.createElement("h1", null, "welcometo react example 3");

const element4 = React.createElement("div", null,
  React.createElement("h1", null, "welcometo react example 4"),
  React.createElement("h1", null, "welcometo react example 4 second")
);
//jsx example
function DisEmp(emp1){
  return <div>
    <p><label>EMP Id: <b> {emp1.id}</b></label></p>
    <p><label>EMP Name:  <b> {emp1.name}</b></label></p>
  </div>
}
const element5 = <DisEmp id="1" name ="fname"></DisEmp>;
//jsx example
var DisEmp1 = (emp1) => {
  return <div>
    <p><label>EMP Id: <b> {emp1.id}</b></label></p>
    <p><label>EMP Name:  <b> {emp1.name}</b></label></p>
  </div>
}
const element6 = <DisEmp1 id="1" name ="lname"></DisEmp1>;
//jsx example
var DisEmp2 = (emp1) => {
  return <div>
    <p><label>EMP Id: <b> {emp1.id}</b></label></p>
    <p><label>EMP Name:  <b> {emp1.name}</b></label></p>
    <Dep name={emp1.dname}></Dep>
  </div>
}
var Dep = (dep1) => {
  return <div>
    <p><label>dep name: <b> {dep1.name}</b></label></p>
  </div>
}
const element7 = <DisEmp2 id="1" name ="lname" dname="dep Name 1"></DisEmp2>;

//class
class Employee extends React.Component{
  render(){
    return <div>
    <p><label>EMP Id: <b> {this.props.id}</b></label></p>
    <p><label>EMP Name:  <b> {this.props.name}</b></label></p>
  </div>
  }
}
const element8 = <Employee id="8" name ="lname 8" dname="dep Name 1"></Employee>;

//class 2
class Employee1 extends React.Component{
  render(){
    return <div>
    <p><label>EMP Id: <b> {this.props.id}</b></label></p>
    <p><label>EMP Name:  <b> {this.props.name}</b></label></p>
    <Dep1 name={this.props.dname}></Dep1>
  </div>
  }
}
class Dep1 extends React.Component{
  render(){
    return <div>
    <p><label>dep name: <b> {this.props.name}</b></label></p>
  </div>
  }
}
const element9 = <Employee1 id="9" name ="lname 9" dname="dep Name 1"></Employee1>;
//Test app
const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
  element9
);
