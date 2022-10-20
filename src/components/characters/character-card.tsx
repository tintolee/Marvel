import React from "react";
import styled from "styled-components";

export const CharacterCard = (character: any) => {
  return (
    <Container>
      <Banner
        src={`${character.character.thumbnail.path}.${character.character.thumbnail.extension}`}
      />
      <DetailsSection>
        <Detail>Name: {character.character.name}</Detail>
      </DetailsSection>
      <ViewMoreContainer>
        <ViewMoreLink href={`/character/${character.character.id}`} > Details </ViewMoreLink>
      </ViewMoreContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 500px;
  margin: 0px 20px;
  border-radius: 10px;
  margin-bottom: 40px;
  border: 1px solid #c59f9f;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  background-image: url(${(props: { src: string }) =>
    props.src ? props.src : ""});
  border-top-right-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #c59f9f;
`;

const DetailsSection = styled.div`
  diaplay: flex;
  flex-direction: coulmn;
  padding: 5px 10px;
`;

const Detail = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const ViewMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 20px;
  background-color: #755252;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ViewMoreLink = styled.a`
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  &:hover{
    color: #243272;
  }
`;
