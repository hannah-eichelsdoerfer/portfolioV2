import styled from "styled-components";

export const Card = styled.div`
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.2);
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem 4rem;

  .skills-container {
    img {
      height: 30px;
      margin: 5px 0;
      filter: grayscale(100%);
      :hover {
        filter: grayscale(0%);
        transition: 0.2s ease-in-out;
        transform: scale(1.05);
      }
    }
  }

  form {
    min-width: 100%;
    input,
    textarea {
      display: block;
      width: 100%;
      padding: 0.5rem 0.8rem 0.5rem 0.8rem;
      margin: 0.9vw 0;
      border: 0;
      border-radius: 5px;
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-height: 70vh;
  }
`;

export const ProjectCard = styled.div``;

export const LoadingSpinner = styled.div`
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
  background-color: white;
  border-radius: 100%;
  height: 6em;
  width: 6em;

  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
      transform: scale(1);
    }
  }
`;
