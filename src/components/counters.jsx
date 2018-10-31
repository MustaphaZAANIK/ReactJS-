import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    render() { 
        return ( 
            <div>
           <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
           {this.props.counters.map(counter=><Counter key={counter.id}  onIncrement={this.props.onIncrement} counter={counter} onReset={this.props.onReset} onDelete={this.props.onDelete}> 
            
           </Counter>)}
           
           
            

            </div>
         );
    }
}
 
export default Counters ;