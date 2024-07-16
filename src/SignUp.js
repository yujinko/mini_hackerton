import React, { useState } from "react";

import {
  SignUpContainer,
  TitleContainer,
  InputStyle,
  ButtonContainer,
  LinkLogin,
} from "./Styled";
import { Link } from "react-router-dom";
import axios from "axios";
import Login from "./Login";

export default function SignUp() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://minihackton.store/member/signup/",
        {
          username: id,
          password1: pw,
          password2: pw2,
          nickname: nickname,
        }
      );
      alert("회원가입 성공");
    } catch (error) {
      console.error(error);
      alert("회원가입 실패");
    }
  };

  function IdChange(e) {
    console.log(e);
    setId(e.target.value);
  }

  function PwChange(e) {
    console.log(e);
    setPw(e.target.value);
  }

  function Pw2Change(e) {
    console.log(e);
    setPw2(e.target.value);
  }

  function NicknameChange(e) {
    console.log(e);
    setNickname(e.target.value);
  }

  return (
    <SignUpContainer>
      <TitleContainer>회원가입</TitleContainer>
      <div>
        <InputStyle
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={IdChange}
        />
        <InputStyle
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={NicknameChange}
        />
        <InputStyle
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          onChange={PwChange}
        />
        <InputStyle
          placeholder="비밀번호 확인"
          value={pw2}
          onChange={Pw2Change}
        />
      </div>

      <ButtonContainer onClick={handleSubmit}>회원가입하기</ButtonContainer>
      <LinkLogin>
        <Link to="/login">로그인</Link>
      </LinkLogin>
    </SignUpContainer>
  );
}
