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
    render() { 
        return (<div>
            {this.state.counter.map(counter => <Counter key = {counter.key}/>)}
        </div>);
    }
}
 
export default Counters;