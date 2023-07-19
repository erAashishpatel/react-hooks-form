import "./App.css";
import React, { useState } from "react";

//useFormInputs are own Custom Hook because it uses a hook within a function.

function useFormInputs(initialValue) {
  //  <--- This will get an initial value that will set an initial state
  //Since , useState hooks used in functions
  const [value, setValue] = useState(" ");

  function handleChange(e) {
    //  <--- To handel changes Functions
    setValue(e.target.value); // Set a value
  }

  return {
    value, // To get the value as well also handle the changes
    onChange: handleChange,
  };
}

function LoginForm() {
  // LoginForm Component

  const email = useFormInputs(" "); // Reuse this  useFormInputs custom hook in anywhere in any form in our app.

  const password = useFormInputs(" ");

  return (
    <form>
      <div> Email: </div>
      <div>
        <input type="text" {...email} />
      </div>
      <br />
      <div> Password: </div>
      <div>
        <input type="password" {...password} />
      </div>
      <div> 
      <p>
        <strong>
          <em> Email: </em>
        </strong>
        {email.value} 
        </p>
        </div>

        <p>
        <strong>
          <em>Password: </em>
        </strong>{" "}
        {password.value}
      </p>
    </form>
  );
}

function SignupForm() {
  // SignupForm Component
  const email = useFormInputs(" ");

  const password = useFormInputs(" ");

  const confirmPassword = useFormInputs(" ");

  return (
    <form>
      <div> Email: </div>
      <div>
        <input type="text" {...email} />
      </div>
      <br />
      <div> Password: </div>
      <div>
        <input type="password" {...password} />
      </div>
      <br />
      <div> Confirm Password: </div>
      <div>
        <input type="password" {...confirmPassword} />
      </div>

      <div>
        <p>
          <strong>
            <em> Email: </em>
          </strong>
          {email.value} 
        </p>
      </div>

      <div>
            <p>
        <strong>
          <em>Password: </em>
        </strong>{" "}
        {password.value} 
        </p>
        </div>

        <div> 
        <p>
        <strong>
          <em>Confirm Password: </em>
        </strong>{" "}
        {confirmPassword.value}
      </p>
      </div>
    </form>
  );
}

function App(props) {
  // App Component
  return (
    <div classame="App" style={{ paddingLeft: 30 }}>
      <h2>Login : </h2>
      <LoginForm />
      <hr />

      <h3>Sign Up : </h3>

      <SignupForm />
    </div>
  );
}

export default App;
