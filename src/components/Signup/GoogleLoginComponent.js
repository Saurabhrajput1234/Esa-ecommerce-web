

import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginComponent = () => {
  const [userData, setUserData] = useState(null);

  const responseGoogle = async (response) => {
    console.log(response);
    if (response.accessToken) {
      try {
        const googleData = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${response.accessToken}`,
          },
        });
        if (!googleData.ok) {
          throw new Error('Failed to fetch user data from Google API');
        }
        const userData = await googleData.json();
        console.log(userData);
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching Google user data:', error);
      }
    }
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        clientId="256416113921-294gptvd0kujr6ltog0l3fd55q150fti.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      {userData && (
        <div>
          <h2>User Data</h2>
          <p>Name: {userData.given_name} {userData.family_name}</p>
          <p>Email: {userData.email}</p>
          <img src={userData.picture} alt="User" />
        </div>
      )}
    </div>
  );
};

export default GoogleLoginComponent;




























