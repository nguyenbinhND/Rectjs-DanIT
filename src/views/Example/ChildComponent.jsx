import React from "react";

class ChildComponent extends React.Component {
    state = {
        fname: '',
        lname: ''
    }
    render() {
        let name = 'nguyen binh'
        return (
            <>
              {this.props.name}
            </>

        )
    }
}
export default ChildComponent;