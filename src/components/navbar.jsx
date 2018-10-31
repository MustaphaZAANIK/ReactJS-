import React, { Component } from 'react';
class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
    <a className="navbar-brand" href="#">Total :  <span className="badge badge-info">{this.props.total}</span></a>
  
</nav>

         );
    }
}
 
export default NavBar ;