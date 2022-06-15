import { useState } from "react";
import {Helmet} from "react-helmet";
import {
  Container,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "./SigninElements";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { server } from "../../utils/server";

const SignIn = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",   
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response;
  }

  const signinUser = () => {
    postData("http://" + server.HOST + "/api/user/login", {
      email: formData.email,
      password: formData.password,
    }).then((data) => {
      if(data.status == 200) {
        navigate("/");
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <Container>
        <Navbar />
        <Form>
          <FormH1>Sign in to your account</FormH1>
          <FormLabel htmlFor="for">Email</FormLabel>
          <FormInput
            type="email"
            required
            placeholder=" &#160;Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          <FormLabel htmlFor="for"> Password </FormLabel>
          <FormInput
            type="password"
            required
            placeholder=" &#160;Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <FormButton  type="button"
            onClick={() => {
              signinUser() ;
              
            }}>Sign In</FormButton>
          {/* override default submit */}
        </Form>
        <Footer />
      </Container>
    </>
  );
};

export default SignIn;
