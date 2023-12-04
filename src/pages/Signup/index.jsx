import Button from '../../components/Static/Button/index'
import Input from '../../components/Static/Input/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Logo from '../../components/Icons/Logo/index'
import { RegexEmail } from '../../hooks/RegexEmail'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { register } from '../../services/index'

const initialvalue = { email: '', fullname: '', username: '', password: '' }

const SignUp = () => {
    const [boolean,setBoolean] = useState(false)
    const [formData, setFormData] = useState(initialvalue);
    const navigate = useNavigate()

    const handleInputChange = (name, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    useEffect(()=>{
      let arr = Object.values(formData)
      let isDisabled = arr.every(item => item !== "")
      setBoolean(isDisabled)
    },[formData])
    
    const handleData = () => {
      const isEmail= RegexEmail(formData.email)
      
      if(isEmail){
          const result = register(formData)
          if(result){
            setTimeout(() => {
              navigate("/login")
            }, 1500);
            toast.success("Success")
          }
      }else{
          toast.error("Invalid input")
          setBoolean(false)
      }
    }

    return (
      <Container>
          <ToastContainer />

          <Form>
            <Logo />

            <AlertTitle>
              Sign up to see photos and videos of your friends.
            </AlertTitle>

            <InputComponentsBody>
                <Input
                    type={"text"} 
                    name={"email"} 
                    placeholder={"Email"} 
                    value={formData.email} 
                    onInputChange={handleInputChange} 
                />

                <Input
                    type={"text"} 
                    name={"fullname"} 
                    placeholder={"Full name"} 
                    value={formData.fullname} 
                    onInputChange={handleInputChange} 
                />

                <Input
                    type={"text"} 
                    name={"username"} 
                    placeholder={"User Name"} 
                    value={formData.username} 
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
                disabled={ !boolean }
                title={"Sign Up"} 
                handleData={handleData}
            />
          </Form>

          <AlertBox>
            You don’t have an account?
              <Span onClick={() => navigate("/login")}>
                Join
              </Span>
          </AlertBox>
      </Container>
    )
}

export default SignUp

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const AlertTitle = styled.p`
    color: #8E8E8E;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 12px 0px 18px 0px;
`

