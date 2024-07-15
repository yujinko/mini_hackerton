import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer bcColor = "#e9ecf6">
            <FooterHeader>Rate your favorite movie</FooterHeader>
        </FooterContainer>
    )
}


export const FooterContainer = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 10;
    transition: all 0.3s ease-in;
    background-color: ${({ bgColor }) => bgColor};
`
export const FooterHeader = styled.div`
    margin-bottom: 24px;
    font-size: 24px;
`
