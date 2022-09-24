import React from "react";

class MyComponent extends React.Component {
  state = {
    fname: '',
    lname: ''
  }

  handelChangeFname = (event)=>{
    this.setState({
      fname : event.target.value
    })
  }

  handelChangelname = (event)=>{
    this.setState({
      lname : event.target.value
    })
  }

  onSave = (event)=>{
    event.preventDefault()
    alert(" click me")
  }
  render() {
    let name = 'nguyen binh'
    return (
      <>
        <form>
          <label for="fname">First name:</label><br />
          <input onChange={(event)=> this.handelChangeFname(event)} type="text"  value={this.state.fname} 
          /><br />
          <div>{this.state.fname}</div>
          <label for="lname">Last name:</label><br />
          <input
          onChange={(event)=>this.handelChangelname(event)}
          type="text" i value={this.state.lname}/>
          <div>{this.state.lname}</div>
          <input onClick={(event)=>this.onSave(event)} type="submit" value="Submit" />
        </form>

      </>

    )
  }
}
export default MyComponent;