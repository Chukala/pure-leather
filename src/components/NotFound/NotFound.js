import React, { Component } from 'react';

class NotFound extends Component{
  render(){
    console.log(this.props);
    return(
      <div className="container"style={{minHeight: 500}}>
       <div className="row">
         <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h2 className="display-3">Page not found</h2>
          <h3>the requested URL <span className="text-danger">{this.props.location.pathname}</span>{" "} was not found</h3>
         </div>

       </div>

      </div>
    )
  }

}
  

export default NotFound;