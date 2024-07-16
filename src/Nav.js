import React from 'react'
import styled from 'styled-components'
import useStore from './store'
import useStorageStore from './storageStore';

const Nav = () => {
  const isLogin = useStore((state) => state.isLogin);
  const loginComplete = useStore((state) => state.loginComplete);
  const isUser = useStorageStore((state) => state.isUser);
  const logoutComplete = useStorageStore((state) => state.logoutComplete)

  return (
    <div>
      <NavBody>
        <NavContents>
          <Logo>루튼 토마토</Logo>
          {isUser?<button onClick={logoutComplete}>로그아웃</button>:<a style={{textDecoration:"none", color:"black"}} href="/login">로그인</a>}
          {console.log(isUser)}
          <a style={{textDecoration:"none", color:"black"}} href="/signup">회원가입</a>
        </NavContents>
      </NavBody>
      
    </div>
  )
}

export default Nav


const NavBody = styled.nav`
  background-color: #e9ecf6;
  position: relative;
  height: 50px;
  display:flex;

`
const NavContents = styled.div`
  display:flex;
  align-items:center;
  gap: 30px;
  justify-content: flex-start;
  font-weight: 700;

`

const Logo = styled.p`
  margin: 0 0 0 30px;
  font-size: 20px;
  font-weight: 800;
`