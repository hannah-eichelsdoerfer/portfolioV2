import styled from "styled-components";

interface Props {
  dropdown: boolean;
}

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-weight: bold;
  margin-bottom: 4rem;
  padding: 1rem 2rem;
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

  @media (min-width: 768px) {
    display: none;
  }
`;

export const PageLinks = styled.div<Props>`
  letter-spacing: 0.1rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: ${(props) => (props.dropdown ? "90vh" : "0")};
  transition: height 0.3s ease-in;
  gap: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    overflow: auto;
    height: auto;
    justify-content: space-between;
  }
`;

export const PageLink = styled.a`
  padding: 0 1rem;
  width: 10rem;
  text-align: center;
`;
