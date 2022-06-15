// http://www.hackingwithreact.com/read/1/23/creating-a-link-between-pages-in-react-router link for where I got Helmet information.

import {useState} from "react";
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom";
 
import {
  Container,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  ImageWrap,
  RequiredInputText,
  Button,
} from "./RegisterElements";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { server } from "../../utils/server";

const Register = ({}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",   // Use same-origin on qub server?
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const registerUser = () => {
    postData("http://" + server.HOST + "/api/user/register", {
      email: formData.email,
      first_name: formData.firstname,
      last_name: formData.lastname,
      password: formData.password,
    }).then((data) => {
      navigate("/");
    });
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Navbar />
      <Container>
        <Form>
          <ImageWrap>
            {/* <FormImage variant="small" src={Image}/> */}
          </ImageWrap>
          <FormH1>Register for an account</FormH1>
          <FormLabel htmlFor="for">Email *</FormLabel>
          <FormInput
            type="email"
            required
            placeholder=" &#160;Enter an email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />

          <FormLabel htmlFor="for">First Name *</FormLabel>
          <FormInput
            type="text"
            required
            placeholder=" &#160;Enter your first name"
            value={formData.firstname}
            onChange={(e) =>
              setFormData({...formData, firstname: e.target.value})
            }
          />

          <FormLabel htmlFor="for">Last Name </FormLabel>
          <FormInput
            type="text"
            placeholder=" &#160;Enter your last name"
            value={formData.lastname}
            onChange={(e) =>
              setFormData({...formData, lastname: e.target.value})
            }
          />

          <FormLabel htmlFor="for">Password *</FormLabel>
          <FormInput
            type="password"
            required
            placeholder=" &#160;Enter a password"
            value={formData.password}
            onChange={(e) =>
              setFormData({...formData, password: e.target.value})
            }
          />
          <RequiredInputText>* is a required field</RequiredInputText>
          <FormButton
            type="button"
            onClick={() => {
              registerUser() ;
              
            }} >
            Register
          </FormButton>
         
          {/* override default submit */}
        </Form>

       

      </Container>
     
      <Footer />
    </>
  );
};

export default Register;
