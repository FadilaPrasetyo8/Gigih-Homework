// Authorization
import { authSpotify } from "../../auth/auth";

// Components
import Login from "../../components/Login/Login";

const LoginPage = () => {
  return <Login onClick={authSpotify} />;
};

export default LoginPage;
