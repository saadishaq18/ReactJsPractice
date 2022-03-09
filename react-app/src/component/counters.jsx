import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counter:[
            {key:1, value:0},
            {key:2, value:0},
            {key:3, value:0},
            {key:4, value:0},
        ]
     };
     handleDelete= counterId =>{
         console.log("event called", counterId);
        const counter = this.state.counter.filter(c=> c.key !== counterId);
        this.setState({counter})
     }

     handleIncrement = counters => {
        const counter = [...this.state.counter];
        const index =counter.indexOf(counters);
        counter[index]={...counters};
        counter[index].value++;
        this.setState({counter});
     };

     handleReset = () =>{
        const counter =this.state.counter.map(c=>{
            c.value=0;
            return c;
        });
        this.setState({counter});
     };
    render() { 
        return (<div>
            <button onClick={this.handleReset}className="btn btn-primary m-2">Reset</button>
            {this.state.counter.map(counter => <Counter onDelete={this.handleDelete} onIncrement={this.handleIncrement} key = {counter.key} counter={counter}/>)}
        </div>);
    }
}
 
export default Counters;