import React from 'react'
import {useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { server } from "../utils/server";

const SignOutPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    logout();
  }, []);

  async function logout() {
    const response = await fetch("http://" + server.HOST + "/api/user/logout");
    if(response.status == 200) {
      Cookies.remove('login');
      navigate("/");
    }
  }

  return (
      <>
      </>
  )
}

export default SignOutPage
