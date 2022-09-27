import './style.css';

export default function Login() {
  return (
    <div className="container">
      <form className="form">
        <label htmlFor="username">
          Username
          <input id="username" type="text" placeholder="fadezak100" />
        </label>

        <label htmlFor="password">
          Password
          <input id="password" type="text" placeholder="********" />
        </label>
      </form>
      <a className="submit-btn" href="/">
        Login
      </a>
    </div>
  );
}
