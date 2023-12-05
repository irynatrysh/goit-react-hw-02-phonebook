import styled from 'styled-components';

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 12px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid black;
`;
const Button = styled.button`
  width: 150px;
  height: 30px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid green;
  margin: 0 auto;
  transition: transform 0.2s ease-in-out;
   &:hover {
  transform: scale(1.1); /* Збільшуємо на 10% при наведенні */
  }
  cursor: pointer;
`;
const Label = styled.label`
  text-align: left;
  font-size: 20px;
`;
export { Form, Input, Button, Label };