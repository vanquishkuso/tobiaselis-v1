import React, { useState } from "react";
import styled from "styled-components";
import { SubmitButton } from "./SubmitButton";
import LoginBackground from "./LoginBackground";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/ad48ab5c-8623-48f5-bffb-97132fe3049a",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
        toast.success("Tack för mejlet! Jag återkommer så fort som möjligt!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          });
        toast();
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);

        toast.error("Oj då, mejlet kunder inte skickas. Testa igen om en stund!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          });
      });
  };

  return (
    <>
      <Wrapper>
        {/* <LoginBackground/> */}
        <Header>Kontakta oss vettja!</Header>
        <FormWrapper>
          <Form onSubmit={handleOnSubmit}>
            <Label>Namn</Label>
            <Input type="text" name="name" />
            <Label>Mejl</Label>
            <Input type="email" name="email" />
            <Label>Meddelande</Label>
            <TextArea type="text" name="message" />
            {/* <button type="submit">TEST</button> */}
            <Button type="submit" round="true" primary="true">
              Skicka
            </Button>
          </Form>
        </FormWrapper>
        <ToastContainer />
      </Wrapper>
    </>
  );
};

export default Contact;

const Wrapper = styled.div`
  min-height: 60vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  margin-bottom: 5rem;
`;

const Header = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #222222;
  margin-top: 3rem;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  background: #231436;
  width: 550px;
  padding: 2rem 0rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 auto;
`;

const Label = styled.label`
  color: #f8f8f8;
  margin: 0em 1rem;
  letter-spacing: 1px;
`;
const TextArea = styled.textarea`
  min-height: 100px;
  margin: 1rem;
  border-radius: 10px;
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
`;
const Input = styled.input`
  margin: 1rem;
  padding: 0.7rem;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
`;

const Button = styled(SubmitButton)`
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
