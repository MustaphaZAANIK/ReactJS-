import React, { Component } from 'react';
class Counter extends Component {
     rendertags(){
         if(this.state.tags.length===0) return <p>there is no para</p>;
          return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
     }
     
    render() { 
        
        return (
            
            <div>
                <span className={this.classes()}>{this.count()}</span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={()=> this.props.onDelete(this.props.counter.id)}>Delete</button>
                
                </div>
        
            
        ); 
    }
    count(){
        return this.props.counter.value===0?"zero":this.props.counter.value;
    }
    classes(){
        let classes="badge m-2 badge-";
        return classes+=this.props.counter.value===0?"warning":"primary";
    }
    
   
}
 
export default Counter;