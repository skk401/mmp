import React, { useEffect } from 'react'
import axios from 'axios'

import { Layout } from '../Components/User/Layout'
function UserDashboard() {
  const getData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/user/get-user-info-by-id", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData();  }, [])
  

  return (
    <>
        <Layout />
    </>
  )
}

export default UserDashboard;