import React, { useContext } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { DataContext } from "../../../context";

export const Sidebar = () => {
  const { searchArray, showSideNav } = useContext(DataContext);

  const handleChange = (e: any) => {
    searchArray(e.target.value);
  };

  return (
    <Container showSideNav={showSideNav}>
      <ItemContainer>
        <SearchIcon />
        <SearchItem onChange={handleChange} />
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 10%;
  height: 100%;
  padding: 50px 30px;
  flex-direction: column;
  background: #f0e7e7;
  margin-top: 15px;
  @media (max-width: 900px) {
    display: ${(props: { showSideNav: boolean }) =>
      props.showSideNav ? "flex" : "none"};
    position: absolute;
    width: 30%;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #7b6c6c;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const SearchItem = styled.input`
  width: 100%;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  border: 0px;
  padding: 0px 15px;
  background: inherit;
  cursor: pointer;
  &:focus {
    outline: none;
    cursor: default;
`;

const SearchIcon = styled(FaSearch)`
  color: #625555;
  fint: 12px;
  height: 30px;
  width: 30px;
  font-weight: 300;
  cursor: pointer;
`;
