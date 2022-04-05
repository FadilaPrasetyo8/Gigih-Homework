const Login = ({ redirectUrl }) => {
  return (
    <div className="container-welcome">
      <div className="welcome">
        <h1> Welcome Login </h1>
        <a href={redirectUrl} className="btn-primary">
          Login
        </a>
      </div>
    </div>
  );
};

export default Login;
