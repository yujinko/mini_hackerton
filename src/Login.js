import React, { useState } from "react";
import { 
  SignUpContainer, 
  TitleContainer, 
  InputStyle, 
  ButtonContainer,
  LinkLogin
} from "./Styled";
import { Link, useNavigate } from 'react-router-dom'; 
import axios from "axios";

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    try {
        const response = await axios.post('https://hufs-mutsa-12th.store/dj/login/', {
            username: id,
            password: pw,
        });
        if (response.data && response.data.access) {
            console.log(response.data);
            localStorage.setItem("access", response.data.access);
            setShowModal(true); // 로그인 성공 시 모달을 표시
            navigate('/Main'); // 로그인 성공 시 메인 페이지로 이동
        } else {
            alert('로그인 실패');
        }
    } catch (error) {
        console.log(error.response);
        alert('로그인 실패');
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

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <SignUpContainer>
      <TitleContainer>로그인</TitleContainer>
      <div>
        <InputStyle 
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={IdChange}
        />
        <InputStyle 
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          onChange={PwChange}
        />
      </div>
      
      <ButtonContainer onClick={login}>로그인하기</ButtonContainer>
      <LinkLogin>
        <Link to="/signup">회원가입</Link>
      </LinkLogin>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>로그인을 성공하였습니다.</p>
            <button onClick={closeModal}>확인</button>
          </div>
        </div>
      )}
    </SignUpContainer>
  )
}
