const Login = ({ redirectUrl }) => {
  const CLIENT_ID = "55ec1a3ca9a64bfa9720edac9915bf53";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONE_TYPE = "token";
  const SCOPE = "playlist-modify-private";

  return (
    //   <div className="container-welcome">
    //     <div className="welcome">
    //       <h1> Welcome Login </h1>
    //       <a href={redirectUrl} className="btn-primary">
    //         Login
    //       </a>
    //     </div>
    //   </div>
    // );
    <a
      href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONE_TYPE}&scope=${SCOPE}`}
    >
      Login to Spotify
    </a>
  );
};

export default Login;
