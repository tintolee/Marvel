import { useContext } from "react";
import styled from "styled-components";
import { HeaderComponent } from "./header-component";
import { Sidebar } from "./side-bar";
import { CharacterCard } from "../characters";
import { DataContext } from "../../context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const HomeComponent = () => {
  const { characters, getCharacters, currentOffset } = useContext(DataContext);

  const prev = () => {
    if (currentOffset !== 0) {
      getCharacters(`${currentOffset - 20}`);
    } else {
      getCharacters(`${currentOffset}`);
    }
  };

  const next = () => {
    getCharacters(`${currentOffset + 20}`);
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderComponent />
      </HeaderContainer>
      <ContentContainer>
        <Sidebar />
        <RightSectionContainer>
          <RightSectionContent>
            {characters.map((character) => {
              return <CharacterCard character={character} />;
            })}
          </RightSectionContent>
          <BottomSection>
            <PaginateContainer>
              <ControlButton onClick={prev}>
                <ChevronLeft />
              </ControlButton>
              <ControlButton onClick={next}>
                <ChevronRight />
              </ControlButton>
            </PaginateContainer>
          </BottomSection>
        </RightSectionContainer>
      </ContentContainer>
    </Container>
  );
};
const HeaderContainer = styled.div``;

const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
`;
const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  width: 90%;
  height: 100vh;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const RightSectionContent = styled.div`
  display: flex;
  padding: 50px 50px;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 50px 0px;
  }
`;
const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  height: 100px;
  background-color: #351a1a5f;
  align-items: center;
`;

const ControlButton = styled.button`
  height: 50px;
  width: 50px;
  cursor: pointer;
  margin: 10px;
`;

const PaginateContainer = styled.div`
  display: flex;
  ul {
    display: flex;
    width: 100%;
  }
  li {
    display: flex;
    color: #302727;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    background-color: #f2dbdb;
    border: 1px solid #3d3333;
  }
`;

const ChevronLeft = styled(FaChevronLeft)`
  font-weight: 700;
  font-size: 30px;
  color: #916969;
`;

const ChevronRight = styled(FaChevronRight)`
  font-weight: 800;
  font-size: 30px;
  color: #916969;
`;
