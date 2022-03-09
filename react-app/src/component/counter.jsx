import React, { Component } from 'react';


class Counter extends Component {
    state ={
    count:0
    };

    handleCount =() =>{
        this.setState({count: this.state.count + 1}); 
    }
   
    
    render() { 

        let classes="badge bg-";
        classes += this.state.count===0 ? "warning m-2": "primary m-3";
        
        return (<div>
            <span className={classes}>{this.formatCount()}</span>
            <button onClick = {this.handleCount}className="btn btn-secondary">Increment</button>
            </div>);
    }
    formatCount(){
        return(
            this.state.count ===0 ? <h5>Zero</h5>:this.state.count
        );
    }
}
 
export default Counter;