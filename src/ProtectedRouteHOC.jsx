import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'


class ProtectedRouteHOC extends Component {
  
  
  
  state = {
    authPass:true
  }

  render(){
    const {component:Component, ...rest} = this.props

  return (
    <Route {...rest} render={
      
      (props) => (this.state.authPass ? <Component {...props} /> : <Redirect to="/" />)
    }/> 
  )
  }
}
export default ProtectedRouteHOC

