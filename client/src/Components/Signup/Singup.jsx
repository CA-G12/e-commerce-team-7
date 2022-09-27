import './style.css';

export default function Singup() {
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

        <label htmlFor="username">
          Confirm Password
          <input id="username" type="text" placeholder="********" />
        </label>

        <label htmlFor="avatar">
          Avatar
          <input
            id="avatar"
            type="text"
            placeholder="https://example.com/image.png"
          />
        </label>
      </form>
      <a className="submit-btn" href="/">
        Signup
      </a>
    </div>
  );
}
