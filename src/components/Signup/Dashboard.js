import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import userImage from '../pics/saurabh1.jpg';
import "./Dashboard.css";
import LoadingSpinner from './LoadingSpinner';
import {Context} from '../contextProvider/ContextProvider';
import ErrorPage from '../Products/ErrorPage';


const Dashboard = () => {
  const { loginData, setLoginData } = useContext(Context);

  const [recievedData, setRecievedData] = useState(true)



  const history = useNavigate();

  const DashboardValid = async () => {
    const apiUrl = process.env.REACT_APP_BACKEND_URL || 'https://social-soso-backend-1.onrender.com';
    let token = localStorage.getItem("usersdatatoken");
    console.log(token,"dash")
    
    const res = await fetch(`${apiUrl}/validuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });
    const data = await res.json();

    if (data.status === 401 || !data) {
      history("*")

    }
    else {
      history("/dash")
      setLoginData(data);
      setRecievedData(false)

    }

  }


  useEffect(() => {
    setRecievedData(false)
    DashboardValid();
    setRecievedData(true)
  }, [])




  return (
    <>{!recievedData && <section className="main">

      <div className="user">
        <div className="profile">
          <img id='userImage' src={userImage} alt="profile" />
          <div className="profile-Details">
            <div>
              <span className="user-name"><h3>{loginData.validUserOne.name}</h3></span> <button className="edit-profile">Edit Profile</button>
              <button className="edit-profile">View archive</button></div>
            <div>
              <span>9 posts</span>
              <span>250 followers</span>
              <span>358 following</span>
            </div>
            <div>Saurabh Rajput</div>
            <div><h6>{loginData.validUserOne.email}</h6></div>
          </div>
        </div>
      </div>
    </section>}
      {recievedData && <LoadingSpinner />}




    </>
  )
}


export default Dashboard
