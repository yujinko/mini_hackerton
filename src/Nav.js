import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <div>
      <NavBody>
        <NavContents>
          <Logo>루튼 토마토</Logo>
          <a style={{textDecoration:"none", color:"black"}} href="/login">로그인</a>
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