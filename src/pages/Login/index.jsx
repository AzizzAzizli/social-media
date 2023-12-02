import PhoneImage from '../../assets/images/home/phone/phone.svg'
import Button from '../../components/Static/Button/index'
import Input from '../../components/Static/Input/index'
import Logo from '../../components/Icons/Logo/index'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate()

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const callFormData = () => {
    console.log(formData);
  }
  return (
    <Container>
        <Left>
          <Image src={PhoneImage} alt="" />
        </Left>

        <Right>
          <Form>
            <Logo />

            <InputComponentsBody>
                <Input
                    type={"email"} 
                    name={"email"} 
                    placeholder={"Email"} 
                    value={formData.email} 
                    onInputChange={handleInputChange} 
                />

                <Input
                    type={"password"} 
                    name={"password"} 
                    placeholder={"Password"} 
                    value={formData.password} 
                    onInputChange={handleInputChange} 
                />

            </InputComponentsBody>

            <Button 
                disabled={formData.email === "" || formData.fullname === "" || formData.username === "" || formData.password === ""}
                title={"Log in"} 
                callFormData={callFormData}
            />
          </Form>

          <AlertBox>
            You don’t an account?
              <Span onClick={() => navigate("/signup")}>
                Sign Up
              </Span>
          </AlertBox>
        </Right>
    </Container>
  )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 200px 0px;
    gap:56px;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`

`
const Left = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end
`

const Right = styled.div`
    width:50%;
    height: 100%;
`

const Form = styled.div`
    max-width: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px 40px;
    border-radius: 3px;
    border: 1px solid #EFEFEF;
    background: #FFF;
`

const InputComponentsBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    margin-top: 12px;
`

const AlertBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 3px;
    max-width: 350px;
    width: 100%;
    padding: 27px 0px;
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid #EFEFEF;
    background: #FFF;

    color: #262626;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Span = styled.span`
  color: #0095F6;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`