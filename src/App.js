import './App.css';


function App() {
  return (
    <div className="App">
      <div id = "title">
        Register  
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
          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label">Verify Password:</label>
            <input type="password" class="form-control" id="exampleFormControlInput3" placeholder="Verify your Password" />
          </div>  
          <div id = "bottombut">
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Please enter your registration details</button>
          </div>
          </div>
        </div>
      </div>  
      <div id = "signin">
        <p>Already have an account? <a href = "#">Click here</a> to sign in</p>
      </div>
    </div>
  );
}

export default App;
