import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 100px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  position: fixed;
  .navMenu ul {
    display: flex;
    gap: 30px;
    li {
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const clickNavMenu = (e) => {
    const target = e.target;
    const main = document.getElementsByClassName("main")[0].offsetTop;
    const about = document.getElementsByClassName("about")[0].offsetTop;
    const team = document.getElementsByClassName("team")[0].offsetTop;

    console.log("sdfsdf");
    console.log(target);
  };

  return (
    <Nav>
      <div
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
      >
        logo
      </div>
      <div className="navMenu">
        <ul>
          <li onClick={clickNavMenu}>About Us</li>
          <li onClick={clickNavMenu}>Team</li>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
