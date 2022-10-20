import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "src/context";
import styled from "styled-components";

export const ViewMore = () => {
  const { getCharacter } = useContext(DataContext);

  const [character, setCharacter] = useState<Record<string, any>>();

  const params = useParams();

  const fetchData = useCallback(async () => {
    if (params && params.id) {
      const chara = await getCharacter(params?.id?.toString());
      setCharacter(chara);
    }
  }, [getCharacter, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData, getCharacter, params]);

  return (
    <Container>
      {character ? (
        <ContentContainer>
          <Banner
            src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
          />
          <DetailsSection>
            <DetailContainer>
              <DetailHeader>Name: </DetailHeader>
              <Detail>Name: {character?.name}</Detail>
            </DetailContainer>
            <DetailContainer>
              <DetailHeader>Description: </DetailHeader>
              <Detail> {character?.description}</Detail>
            </DetailContainer>
            <DetailContainer>
              <DetailHeader>Stories: </DetailHeader>
              {character?.stories.items.map((data: any, index: number) => {
                return (
                  <Detail>
                    <Link href={data.resourceURI}>{data.name}</Link>{" "}
                  </Detail>
                );
              })}
            </DetailContainer>

            <DetailContainer>
              <DetailHeader>Series: </DetailHeader>
              {character?.series.items.map((data: any, index: number) => {
                return (
                  <Detail>
                    {" "}
                    <Link href={data.resourceURI}>{data.name}</Link>{" "}
                  </Detail>
                );
              })}
            </DetailContainer>
            <DetailContainer>
              <DetailHeader>Events: </DetailHeader>
              {character?.events.items.map((data: any, index: number) => {
                return (
                  <Detail>
                    <Link href={data.resourceURI}>{data.name}</Link>{" "}
                  </Detail>
                );
              })}
            </DetailContainer>
          </DetailsSection>
        </ContentContainer>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

const Container = styled.div`
margin-top: 120px;
display: flex;
width 100%;
justify-content: center;
margin-bottom: 20px;
`;
const ContentContainer = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  flex-direction: column;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
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

const DetailHeader = styled.h1`
  font-weight: 700;
  margin: 0px;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Spinner = () => (
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 100px;
  height: 100px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
`;
