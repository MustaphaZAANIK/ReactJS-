import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = { 
    counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},
    ]
 };
 handleDelete=counterId=>{
     const counters=this.state.counters.filter(c=> c.id!==counterId);
     this.setState({counters})
 };
 handleReset=()=>{
     const counters=this.state.counters.map(counter=>{
     counter.value=0;
     return counter});
     this.setState({counters})

 };
 handleIncrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    
    counters[index].value++
    this.setState({counters})
    
    
};
  render() {
    return (
      <React.Fragment>
        <NavBar total={this.state.counters.filter(c=>c.value>0 ).length}/>
        <main className="container">
        <Counters
        counters={this.state.counters}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
        />

        </main>
      </React.Fragment>
    );
  }
}

export default App;
