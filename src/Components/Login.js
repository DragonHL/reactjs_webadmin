import '../css/Login.css';

function Login() {
  return (

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
        <button className="btn btn-primary button_login" href="/#"  />
      </form>
    </div>

  );
}



export default Login;