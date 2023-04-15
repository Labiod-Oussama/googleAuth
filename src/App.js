import './App.css';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    gapi.load("auth2", () => {
      gapi.auth2.init({ clientId:'680157492797-7l7kif0cuvflg6m3u2kno4a24n776b11.apps.googleusercontent.com' });
    });
  }, []);
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
      <GoogleLogin
        clientId="680157492797-7l7kif0cuvflg6m3u2kno4a24n776b11.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />,
    </div>
  );
}

export default App;
