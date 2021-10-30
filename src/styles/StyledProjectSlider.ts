import styled from "styled-components";

export const StyledProjectSlider = styled.div`
  .slider-left {
    position: absolute;
    font-size: 10rem;
    top: 40%;
    left: 0rem;
    z-index: 1;
  }
  .slider-right {
    position: absolute;
    font-size: 10rem;
    top: 40%;
    right: 0rem;
    z-index: 1;
  }

  /* .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  } */
`;
