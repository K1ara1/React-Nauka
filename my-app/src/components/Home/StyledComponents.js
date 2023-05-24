import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const HomeBackground = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  right: 0;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  background-color: black;

  @media screen and (max-width: 1024px) {
    background-color: black;
    top: 0;
    max-width: 100%;
    max-height: 100%
  }
`;

export const HomeVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;

  @media screen and (max-width: 1024px) {
    max-width: auto;
    max-height: auto;
  }
`;

export const HomeContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40vh;
  align-items: center;
  justify-content: center;
  left: 50vw;

  @media screen and (max-width: 1024px) {
    top: 25vh;
  }
`;

export const SearchE = styled.input`
  position: absolute;
  width: 25vw;
  height: 5vh;
  border: 2px solid black;
  @media screen and (max-width: 1024px) {
    width: 50vw;
  }
`;

export const SearchBtn = styled.button`
  width: 7vw;
  height: 5vh;
  background-color: darkolivegreen;
  color: white;
  position: absolute;
  margin-top: 14vh;
  cursor: pointer;
  border-radius: 6vh;
  transition: 0.2s;
  
  :hover{
    width: 7.5vw;
    height: 5.5vh;
  }

  @media screen and (max-width: 1024px) {
    width: 50vw;
  }
`;

