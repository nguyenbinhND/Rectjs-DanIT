import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    fname: '',
    lname: '',
    arrjob: [
      {id : 1, title: "dev" , salary : 2000 },
      {id : 2, title: "tester" , salary : 1000 },
    ]
  }

  handelChangeFname = (event) => {
    this.setState({
      fname: event.target.value
    })
  }

  handelChangelname = (event) => {
    this.setState({
      lname: event.target.value
    })
  }

  onSave = (event) => {
    event.preventDefault()
  }
  render() {
    let name = 'nguyen binh'
    return (
      <>
        <form>
          <label for="fname">First name:</label><br />
          <input onChange={(event) => this.handelChangeFname(event)} type="text" value={this.state.fname}
          /><br />
          <label for="lname">Last name:</label><br />
          <input
            onChange={(event) => this.handelChangelname(event)}
            type="text" i value={this.state.lname} /><br /> 
          <input onClick={(event) => this.onSave(event)} type="submit" value="Submit" />
          
        </form>
        <ChildComponent 
          fname={this.state.fname}
          lname={this.state.lname}
          arrjob = {this.state.arrjob} 
          />
      </>

    )
  }
}
export default MyComponent;