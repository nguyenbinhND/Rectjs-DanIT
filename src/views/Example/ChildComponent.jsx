import React from "react";

class ChildComponent extends React.Component {

    render() {
        let {fname, lname, arrjob} = this.props
        return (
            <>
            <div className="title-job">
                {
             arrjob.map((item, index)=>{
                    return(
                        <div key={item.id}>
                          {item.title} - {item.salary}
                        </div>
                    )
             })
                }
            </div>
            </>

        )
    }
}
export default ChildComponent;