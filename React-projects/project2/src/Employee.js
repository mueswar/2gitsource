import React from 'react';

class Employee extends React.Component{
  counter =0;
  addCount = () => {
    this.counter++;
    alert(this.counter);
  }
  render(){
    return <div>
    <p><label>EMP Id: <b> {this.props.id}</b></label></p>
    <p><label>EMP Name:  <b> {this.props.name}</b></label></p>
    <p><button onClick={this.addCount}>ADD</button></p>
    <p><label>Number of clicks:  <b> {this.counter}</b></label></p>
  </div>
  }
}
const Employee1 = () => {
    return <Employee id="1" name="lname" />;
  };
export default Employee1;