import styled from "styled-components";

export const SignUpContainer = styled.div`
  position: absolute;
  top: 10%;
  bottom: 10%;
  width: 100%;
  max-width: 400px;
  padding: 0 40px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #eeeeee;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
`;
export const TitleContainer = styled.div`
  margin-top: 60px;
  margin-left: 6px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
`;

export const InputStyle = styled.input`
  display: flex;
  background-color: white;
  font-size: 0.7;
  border: none;
  border-bottom: 1px solid darkgrey;
  outline: none;
  width: 360px;
  padding: 13px;
  margin-bottom: 1rem;
  border-radius: 2rem;
  ::placeholder {
    color: lightgray;
  }
`;
export const ButtonContainer = styled.button`
  width: 387px;
  padding: 13px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  border: 1px solid #c2c0c0;
  background-color: darkgrey;
  border-radius: 20px;
`;
export const LinkLogin = styled.div`
  font-size: 15px;
  margin-top: 20px;
  border: none;
  text-align: right;
  padding-right: 20px;
`;

export const FooterContainer = styled.div`
  background-color: #e9ecf6;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterHeader = styled.div`
  margin-top: 14px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;
export const FooterContent = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 10px;
`;
