import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';

export const Container = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
`;

export const Logo = styled.img.attrs({ className: "mb-4" })`
  width: 72;
  height: 72;
`;

export const Title = styled.h1.attrs({ className: "h3 mb-3 font-weight-normal" })``;
export const Label = styled.label.attrs({ className: "sr-only" })``;

export const FormControl = styled.input`
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;

  &:focus {
    z-index: 2;
  }

  input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;
export const Password = styled(FormControl).attrs({ type: "password" })``;
export const Email = styled(FormControl).attrs({ type: "email" })``;
export const Button = styled.button.attrs({ className: "btn btn-lg btn-primary btn-block", type: "submit" })``;
export const Copyright = styled.p.attrs({ className: "mt-5 mb-3 text-muted" })``;
export const CheckboxContainer = styled.div.attrs({ className: "mb-3" })`
font-weight: 400;
`;
export const CheckboxLabel = styled.label``;
export const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
font-weight: 400;
`;

const renderCheckbox = (label) => {
  return (
    <CheckboxContainer>
      <CheckboxLabel>
        <CheckboxInput value="remember-me" /> {label}
      </CheckboxLabel>
    </CheckboxContainer>
  );
}

const SignIn = () => (
  <Container>
    <Form>
      <Logo src={logo} alt="logo" />
      <Title>Please sign in</Title>
      <Label htmlFor="inputEmail">Email address</Label>
      <Email placeholder="Email address" required autoFocus />
      <Label htmlFor="inputPassword">Password</Label>
      <Password placeholder="Password" required />
      {renderCheckbox("Remember me")}
      <Button>Sign in</Button>
      <Copyright>&copy; 2017-2019</Copyright>
    </Form>
  </Container>
);

export default SignIn;
