import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { 
  SignUpContainer, 
  TitleContainer, 
  InputStyle, 
  ButtonContainer,
  LinkLogin
   } from "./SignUp.styled";
import { Link } from 'react-router-dom'; 
import axios from "axios";


export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const getLogin = async () => {
    try {
        const response = await axios.post('https://hufs-mutsa-12th.store/dj/login/');
        console.log('응답 완료');
        localStorage.setItem("access", response.data.access);    
        setId(response.data);
    } catch (error) {
        console.error('에러 : ', error);
    }
  }

  useEffect(() => {
    getLogin();
  }, []);

  const login = async () => {
    try {
        const response = await axios.post('https://hufs-mutsa-12th.store/dj/login/', {
            username: id,
            password: pw,
        });
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        alert('로그인 성공');
        } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
  };


  function IdChange(e) {
    console.log(e);
    setId(e.target.value);
  };

  function PwChange(e) {
    console.log(e);
    setPw(e.target.value);
  };


  return (
    <SignUpContainer>
      <TitleContainer>로그인</TitleContainer>
      <div>
        <InputStyle 
        placeholder = "아이디를 입력해주세요"
        value={id}
        onChange={IdChange}/>
        <InputStyle 
        placeholder = "비밀번호를 입력해주세요"
        value={id}
        onChange={PwChange}/>
      </div>
      
      <ButtonContainer onClick={login}>로그인하기</ButtonContainer>
      <LinkLogin>
        <Link to="/signup">회원가입</Link>
      </LinkLogin>
    </SignUpContainer>
  )
}
