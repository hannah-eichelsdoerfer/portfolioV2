import { Hamburger, PageLinks, StyledNavbar } from "../styles/StyledNavbar";
import { BsCodeSlash } from "react-icons/bs";

import { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  console.log(dropdown);

  return (
    <StyledNavbar>
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        onClick={() => setDropdown(false)}
      >
        <BsCodeSlash size={22} color="white" />
        <p>Hannah Eich</p>
      </Link>

      <PageLinks dropdown={dropdown}>
        <Link to="/about" onClick={() => setDropdown(!dropdown)}>
          About
        </Link>
        <Link to="/projects" onClick={() => setDropdown(!dropdown)}>
          Projects
        </Link>
        <Link to="/contact" onClick={() => setDropdown(!dropdown)}>
          Contact
        </Link>
      </PageLinks>

      <Hamburger onClick={() => setDropdown(!dropdown)}>
        <span />
        <span />
        <span />
      </Hamburger>
    </StyledNavbar>
  );
};

export default Navbar;
