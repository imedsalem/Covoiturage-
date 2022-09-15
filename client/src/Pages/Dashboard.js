import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RideList from './RideList/RideList'
import UserList from './UserList/UserList'

const Dashboard = () => {
  const [show, setShow] = useState(true)
  return (
    <div style={{marginTop: 100}}>
      
    
            
            <button
              className="btn btn-primary"
              type="button"
              style={{
                marginTop: "50px",
                marginLeft: "30px",
                backgroundColor: "#1d6d86",
                borderColor: "#1d6d86",
                margin: "0 auto",
                width: "145px",
                marginBottom: "30px",
              }}
              onClick = {() => setShow(true)}
            >
              users
            </button>

            <button
              className="btn btn-primary"
              type="button"
              style={{
                marginTop: "50px",
                marginLeft: "30px",
                backgroundColor: "#1d6d86",
                borderColor: "#1d6d86",
                margin: "0 auto",
                width: "145px",
                marginBottom: "30px",
              }}
              onClick = {() => setShow(false)}
            >
              announcement
            </button>
         
         {show? <UserList/>  : <RideList/>}

    </div>
  )
}

export default Dashboard