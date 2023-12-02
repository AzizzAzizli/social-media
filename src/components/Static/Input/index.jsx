import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const InputComponent = ({ type , placeholder , value , name , onInputChange }) => {

  const handleChange = (e) => {
    const inputValue = e.target.value;
    onInputChange(name, inputValue);
  };

  return (
    <>
         <Input
            name={name}
            type={type} 
            value={value} 
            onChange={handleChange}
            placeholder={placeholder}
        />
    </>
  )
}

export default InputComponent

const Input = styled.input`
    width: 100%;
    padding: 12px 13px;
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    background: #FAFAFA;
    color: #959595;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
    
    &::placeholder{
      color: #959595;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
`