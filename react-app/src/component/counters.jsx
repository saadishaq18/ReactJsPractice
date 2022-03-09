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
    render() { 
        return (<div>
            {this.state.counter.map(counter => <Counter onDelete={this.handleDelete} key = {counter.key} counter={counter}/>)}
        </div>);
    }
}
 
export default Counters;