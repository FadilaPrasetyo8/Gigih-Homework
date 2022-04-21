import "./Login.css";

import Button from "@mui/material/Button";

const Login = ({ onClick }) => {
  return (
    <div className="container-welcome">
      <div className="welcome">
        <h1>&#x270B; Welcome</h1>
        <Button variant="contained" onClick={onClick} className="btn-primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
