import "./signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <form id="signup">
          <h1>Sign Up</h1>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
          
          <label htmlFor="email">Password</label>
          <input type="email" id="email" placeholder="Enter your password" />
          
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" placeholder="Re-enter your password" />
          
          <button type="submit">Sign Up</button>
        </form>
        <a href="/login" className="login-link">Already have an account?</a>
      </div>
    </div>
  );
}

export default Signup;
