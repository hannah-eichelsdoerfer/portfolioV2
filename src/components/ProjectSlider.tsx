import { useState } from "react";
import { ProjectData } from "../Data/ProjectData";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { StyledProjectSlider } from "../styles/StyledProjectSlider";
import { Card } from "../styles/Card";

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
      {ProjectData.map((project, index) => {
        // return currentProject === index ? (
        if (currentProject === index) {
          return (
            <Card
              className={currentProject === index ? "slide active" : "slide"}
              key={index}
            >
              <RiArrowLeftSLine
                className={"slider-left"}
                onClick={previousProject}
              />
              <img src={project.image} alt="project-showcase" />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <RiArrowRightSLine
                className={"slider-right"}
                onClick={nextProject}
              />
            </Card>
          );
        }
        // ) : (
        //   <div></div>
        // );
      })}
    </StyledProjectSlider>
  );
};

export default ProjectSlider;
