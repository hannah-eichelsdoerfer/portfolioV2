import { useState } from "react";
import { ProjectData } from "../Data/ProjectData";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { StyledProjectSlider } from "../styles/StyledProjectSlider";
import { Card, LoadingSpinner, ProjectCard } from "../styles/Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const ProjectSlider = () => {
  const [currentProject, setCurrentProject] = useState(0);

  if (ProjectData.length === 0) {
    return null;
  }

  const previousProject = () => {
    setCurrentProject(
      currentProject === 0 ? ProjectData.length - 1 : currentProject - 1
    );
  };

  const nextProject = () => {
    setCurrentProject(
      currentProject === ProjectData.length - 1 ? 0 : currentProject + 1
    );
  };

  return (
    <StyledProjectSlider>
      <Swiper
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {ProjectData.map((project, index) => {
          return (
            <SwiperSlide className={"project-card"}>
              <img src={project.image} alt="project-showcase" width={50} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledProjectSlider>

    // <StyledProjectSlider>
    //   {ProjectData.map((project, index) => {
    //     return (
    //       <Card
    //         key={index}
    //         className={currentProject === index ? "slide active" : "slide"}
    //       >
    //         <img
    //           src={project.image}
    //           alt="project-showcase"
    //           className={"project-showcase"}
    //         />
    //         <h4>{project.title}</h4>
    //         <p>{project.description}</p>
    //       </Card>
    //     );
    //   })}
    //   <RiArrowLeftSLine className={"slider-left"} onClick={previousProject} />
    //   <RiArrowRightSLine className={"slider-right"} onClick={nextProject} />
    // </StyledProjectSlider>
  );
};

export default ProjectSlider;
