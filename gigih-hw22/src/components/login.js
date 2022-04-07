import "./Login.css";

const Login = ({ onClick }) => {
  return (
    <div className="container-welcome">
      <div className="welcome">
        <h1>&#x1F44B; Welcome</h1>
        <button onClick={onClick} className="btn-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
