import styled from "styled-components";

export const Card = styled.div`
  padding: 2rem 4rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: space-between;

  img {
    width: 500px;
    height: 500px;
    filter: grayscale(100%);
  }

  p {
    left: 20rem;
  }
`;
