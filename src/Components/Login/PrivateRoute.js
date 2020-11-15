
// import {  Route, Redirect } from 'react-router-dom'
// import FakeAuth from './FakeAuth'

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//       FakeAuth.isAuthenticated === true
//         ? <Component {...props} />
//         : <Redirect to={{
//             pathname: '/',
//             state: { from: props.location }
//           }} />
//     )} />
//   )

//   export default PrivateRoute;

import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../../Service/LoginService'

export default function PrivateRoute({component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return (
        <Route
        {...rest}
        render = {props => {
           return ( currentUser ? <Component {...props}/> : <Redirect to="/"/>)
        }}
        >
            
        </Route>
    )
}
