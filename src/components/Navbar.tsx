import {
  Hamburger,
  PageLink,
  PageLinks,
  StyledNavbar,
} from "../styles/StyledNavbar";
import { BsCodeSlash } from "react-icons/bs";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <BsCodeSlash size={22} color="white" />
        <p>Hannah Eich</p>
      </div>
      <Hamburger>
        <span />
        <span />
        <span />
      </Hamburger>
      <PageLinks>
        <PageLink href="/">About</PageLink>
        <PageLink href="/">Projects</PageLink>
        <PageLink href="/">Journey</PageLink>
      </PageLinks>
    </StyledNavbar>
  );
};

export default Navbar;
