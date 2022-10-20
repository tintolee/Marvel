import React from "react";
import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "src/context";

export const HeaderComponent = () => {

  const { setShowSideNav, showSideNav } = useContext(DataContext)

  const handleClick =()=>{
    setShowSideNav(!showSideNav)
  }

  return (
    <HeaderContainer>
      <HamburgerContainer>
        <Hamburger onClick={handleClick} />
      </HamburgerContainer>
      <LogoContainer>
        <HeaderText>
          <LogoImage src={"./marvelIcon.jpg"} alt="logo" />
        </HeaderText>
      </LogoContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: #decbcb;
  padding: 30px 10px;
  position: fixed;
  width: 100%;
  display: flex;
`;

const HamburgerContainer = styled.div`
display: none;
@media (max-width: 900px) {
  display:block;
}
`;

const Hamburger = styled(FaHamburger)`
width: 40px;
height: 40px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
`;

const HeaderText = styled.h3`
  padding: 0px;
  margin: 0px;
  font-weight: 600;
  font-size: 20px;
`;

const LogoImage = styled.img`
  width: 90px;
  height: 70px;
`;
