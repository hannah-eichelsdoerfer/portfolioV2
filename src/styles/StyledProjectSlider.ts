import styled from "styled-components";

export const StyledProjectSlider = styled.div`
  width: 100%;
  min-height: 100%;

  .project-card {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    padding: 2rem 4rem;

    img {
      width: 400px;
      height: 400px;
    }

    @media (min-width: 768px) {
      height: 100%;
      display: flex;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #a385d1;
  }
  .swiper-pagination-bullet-active {
    background-color: #a385d1;
  }
`;
