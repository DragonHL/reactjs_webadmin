import {
  BrowserRouter as Router,

  // Route,
  Link
} from "react-router-dom";
// import AdminOverview from "./Components/AdminOverview";


import './css/Login.css';


function App() {
  return (
    <Router>
      <div className="container">

        <h1>My Restaurant</h1>
        <form>
          <div className="form-group">
            <input type="email" className="form-control" id="userName" aria-describedby="emailHelp"
              placeholder="User name" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          {/* <a className="btn btn-primary button_login" href="" role="button">

              Login
      
          </a> */}
      <Link to="/AdminOverview" className="btn btn-primary button_login">Login</Link>

        </form>
{/* <Route path="/" exact component={App}/>
<Route path="/AdminOverview" component={AdminOverview}/> */}
      </div>

    </Router>

    
  );
}

export default App;
