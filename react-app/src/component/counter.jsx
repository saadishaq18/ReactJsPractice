import React, { Component } from 'react';


class Counter extends Component {
    state ={
    count:0
    };
   
    
    render() { 

        let classes="badge m-2 bg-";
        classes += this.state.count===0 ? "warning": "primary";
        
        return (<div>
            <span className={classes}>{this.formatCount()}</span>
            <button className="btn btn-secondary">Increment</button>
            </div>);
    }
    formatCount(){
        return(
            this.state.count ===0 ? <h5>Zero</h5>:this.state.count
        );
    }
}
 
export default Counter;