

import {Switch ,Route } from "react-router-dom";
import Login from './Components/Login/Login';
import ResetPassWord from './Components/Login/ResetPassWord';
import WebAdmin from "./Components/WebAdmin/WebAdmin";
import PrivateRoute from "./Components/Login/PrivateRoute";
import { AuthProvider } from "./Service/LoginService";


function App() {
  return (
    <div>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/resetpassword" component={ResetPassWord} />
          <PrivateRoute path="/webadmin" component={WebAdmin} />
        </Switch>
      </AuthProvider>

    </div>
  );
}

export default App;
