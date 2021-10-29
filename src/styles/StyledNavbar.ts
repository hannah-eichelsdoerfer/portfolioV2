import styled from "styled-components";

export const StyledNavbar = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 4rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-transform: uppercase;
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
`;

export const PageLinks = styled.div`
  letter-spacing: 0.1rem;
  font-weight: 500;
  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

export const PageLink = styled.a`
  padding: 0 1rem;
`;
