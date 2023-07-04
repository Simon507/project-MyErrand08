import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--sidebarColor);
  color: var(--contrastColor);
  min-width: 260px;
  width: 260px;

  @media screen and (max-width: 375px) {
    min-width: 225px;
    width: 225px;
  }
  @media screen and (max-width: 1440px) {
    /* height: 100vh; */
    height: 702px;
    width: 260px;
    overflow: auto;
    position: fixed;
    /* left: -260px; */
    top: 68px;
    z-index: 1000;
    /* min-height: 100%; */
  }
`;
