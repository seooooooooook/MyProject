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
const main = document.getElementsByClassName("main");
console.log(main);
const Navbar = () => {
  const navigate = useNavigate();
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
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            About Us
          </li>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Team
          </li>
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
