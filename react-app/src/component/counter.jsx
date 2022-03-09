import React, { Component } from 'react';


class Counter extends Component {
   

   
   
    
    render() { 

        let classes="badge bg-";
        classes += this.props.counter.value===0 ? "warning m-2": "primary m-3";
        
        return (<div>
            <span className={classes}>{this.formatCount()}</span>
            <button onClick = {()=>this.props.onIncrement(this.props.counter)}className="btn btn-secondary">Increment</button>
            <button onClick= {()=>this.props.onDelete(this.props.counter.key)}className="btn btn-dark m-2">Delete</button>
            </div>);
    }
    formatCount(){
        return(
            this.props.counter.value ===0 ? <h5>Zero</h5> : this.props.counter.value
        );
    }
}
 
export default Counter;