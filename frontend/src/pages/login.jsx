import "./login1.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <form id="login">
          <h1>Login</h1>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          
          <button type="submit">Log In</button>
        </form>
        <a href="/signup" className="signup-link">Don't have an account?</a>
      </div>
    </div>
  );
}

export default Login;
