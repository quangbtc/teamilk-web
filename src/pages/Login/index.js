import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(https://phunugioi.com/wp-content/uploads/2021/12/background-tra-sua-dep.jpg);
`;
const WrapperContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 30vw;
  height: 50vh;
  border-radius: 20px;
  padding: 15px 20px;
  background: linear-gradient(
    rgba(255, 158, 255, 0.3),
    rgba(255, 158, 255, 0.3)
  );
`;
const FormLogin = styled.div``;
const FormHead = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormText = styled.h2`
  color: lightcoral;
`;
const FormBody = styled.div``;
const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;
const Label = styled.label`
  font-size: 1.8rem;
  width: 80px;
`;
const InputText = styled.input`
  flex: 1;
  height: 40px;
  border-radius: 10px;
  padding: 20px;
  font-size: 1.8rem;
`;
const ButtonSubmit = styled.button`
  height: 40px;
  border-radius: 10px;
  width: 100%;
  font-size: 2.2rem;
  background-color: lightgreen;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: none;
`;
const RememberText = styled.span``;
const ForgotPassword = styled.a`
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    opacity: 0.8;
  }
`;
const Login = () => {
  return (
    <Container>
      <WrapperContent>
        <FormLogin>
          <FormHead>
            <FormText>LOGIN</FormText>
          </FormHead>
          <FormBody>
            <WrapperInput>
              <Label>Username</Label>
              <InputText placeholder="Username" />
            </WrapperInput>
            <WrapperInput>
              <Label>Email</Label>
              <InputText placeholder="Email" />
            </WrapperInput>
            <WrapperInput>
              <Label>Password</Label>
              <InputText placeholder="Password" />
            </WrapperInput>
            <WrapperInput>
              <ButtonSubmit>Login</ButtonSubmit>
            </WrapperInput>
            <WrapperInput>
              <RememberMe>
                <CheckBox type="checkbox" />
                <RememberText>Remember me ?</RememberText>
              </RememberMe>
              <ForgotPassword>Forgot password ?</ForgotPassword>
            </WrapperInput>
          </FormBody>
        </FormLogin>
      </WrapperContent>
    </Container>
  );
};

export default Login;
