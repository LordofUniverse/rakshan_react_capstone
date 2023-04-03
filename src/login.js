import './login.css';


function Login() {
  return (
    <div className="App">
      <div id = "title">
        Log In
      </div>    
      <div id = "registerpage">
        <div id = "pagebutton">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email:</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">Password:</label>
            <input type="password" class="form-control" id="exampleFormControlInput2" placeholder="Enter your password" />
          </div>  
          <div id = "bottombut">
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>  
      <div id = "signin">
        <p>Don't have an account yet? <a href = "#">Click here</a> to register</p>
      </div>
    </div>
  );
}

export default Login;
