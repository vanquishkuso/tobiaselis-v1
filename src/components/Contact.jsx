import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SubmitButton } from "./SubmitButton";
import LoginBackground from "./LoginBackground";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Contact = () => {
  const [field, setField] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const [checked, setChecked] = useState(false);
  const [sentMail, setSentMail] = useState(false);
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
    setSentMail(true);
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
        setSentMail(false);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
        toast.error(
          "Oj då, mejlet kunder inte skickas. Testa igen om en stund!",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          }
        );
        setSentMail(false);
      });
  };

  useEffect(() => {
    if (
      field.name.length >= 1 &&
      field.email.length >= 1 &&
      field.message.length >= 1 &&
      checked == true
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    console.log(field);
    console.log(disabled);
    console.log(checked);
  }, [field, checked]);

  const { name, email, message } = field;

  const onChangeFields = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Wrapper id="kontakt">
        {/* <LoginBackground/> */}
        <Header>Kontakta mig vettja!</Header>
        <FormWrapper>
          <Form onSubmit={handleOnSubmit}>
            <Label>Namn</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={onChangeFields}
            />
            <Label>Mejl</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={onChangeFields}
            />
            <Label>Meddelande</Label>
            <TextArea
              type="text"
              name="message"
              value={message}
              onChange={onChangeFields}
            />
            {/* <button type="submit">TEST</button> */}

            <CheckboxWrapper>
              <Checkbox type="checkbox" onChange={() => setChecked(!checked)} />
              <p>
                Jag godkänner integritetspolicyn samt att uppgifterna ovan
                sparas och skickas till mejlleverantören
              </p>
            </CheckboxWrapper>
            <ButtonWrapper>
              <Button
                type="submit"
                round="true"
                primary="false"
                big="true"
                disabled={disabled}
              >
              
               <p style={{opacity: sentMail ? "0" : "100"}}>Skicka</p>
               {sentMail ? <div style={{transition: "0.5s ease"}}><Spinner/></div> : ""}
              </Button>
            
            </ButtonWrapper>
          </Form>
          <TextWrapper>
            <Text>
              Har du några frågor om utveckling, projekten eller bara vill säga
              hej? Var inte blyg, kontakta mig genom kontaktformuläret!
            </Text>
          </TextWrapper>
        </FormWrapper>
        <ToastContainer />
      </Wrapper>
    </>
  );
};

export default Contact;

const Spinner = styled(CircularProgress)`
  position: absolute;
  top: 15%;
  right: 35%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
  transform: scale(1.2);
`;

const CheckboxWrapper = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: #5c38c0;
  min-height: 80vh;
  padding: 3rem calc((100vw - 1300px) / 2);

`;

const Header = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #f8f8f8;
  margin-top: 3rem;
  font-weight: 500;
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  background: #f8f8f8;

  padding: 2rem 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 87%;
    order: 2;
  }
`;

const Label = styled.label`
  color: #2c2c2c;
  margin: 0em 1rem;
  letter-spacing: 1px;
`;
const TextArea = styled.textarea`
  min-height: 100px;
  margin: 1rem;
  border-radius: 10px;
  border: solid 2px #d1d1d1;
  padding: 1rem;
  font-size: 1.2rem;
`;
const Input = styled.input`
  margin: 1rem;
  padding: 0.7rem;
  border: solid 2px #d1d1d1;
  border-radius: 10px;
  font-size: 1.2rem;
`;

const Button = styled(SubmitButton)`
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  color: #f8f8f8;
  margin-bottom: 1em;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 90%;
  @media screen and (max-width: 1100px) {
    width: 97%;
    margin: 0 auto;
    margin-top: -2rem;
    order: 1;
  }

  @media screen and (max-width: 360px) {
    width: 85%;
  }
`;
