import React from 'react';

class Employee extends React.Component{
  state={counter :0};
  addCount = () => {
    this.setState({counter : this.state.counter+1});
  }
  render(){
    return <div>
    <p><label>EMP Id: <b> {this.props.id}</b></label></p>
    <p><label>EMP Name:  <b> {this.props.name}</b></label></p>
    <p><button onClick={this.addCount}>ADD</button></p>
    <p><label>Number of clicks:  <b> {this.state.counter}</b></label></p>
  </div>
  }
}
const Employee2 = () => {
    return <Employee id="1" name="lname" />;
  };
export default Employee2;