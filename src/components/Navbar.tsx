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
      >
        <BsCodeSlash size={22} color="white" />
        <p>Hannah Eich</p>
      </Link>

      <Hamburger onClick={() => setDropdown(!dropdown)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <PageLinks dropdown={dropdown}>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </PageLinks>
    </StyledNavbar>
  );
};

export default Navbar;
