import { SocialLink, StyledFooter } from "../styles/StyledFooter";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <StyledFooter>
      <SocialLink href="https://github.com/hannah-eichelsdoerfer">
        <BsLinkedin />
      </SocialLink>
      <SocialLink href="https://github.com/hannah-eichelsdoerfer">
        <BsGithub />
      </SocialLink>
      <SocialLink href="https://github.com/hannah-eichelsdoerfer">
        <BsInstagram />
      </SocialLink>
    </StyledFooter>
  );
};

export default Footer;
