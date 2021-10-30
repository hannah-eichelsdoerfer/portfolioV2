import styled from "styled-components";

export const Card = styled.div`
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem 4rem;

  img {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-height: 70vh;

    img {
      width: 40%;
      height: 40%;
      /* position: relative;
      right: 12rem;
      bottom: 10rem; */
    }
  }
`;
