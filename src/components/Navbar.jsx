import React from "react";
import styled from "styled-components";
import logo from "assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
export default function Navbar() {
  return (
    <Nav>
      <div className="brand__container">
        <a href="#" className="brand">
          <img src={logo} alt="Logo" />
        </a>
        <div className="toggle">
          <GiHamburgerMenu />
          <MdClose />
        </div>
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="home">Home</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="blog">Blog</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
          <li>
            <a href="team">Team</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 10rem;
  padding-top: 2rem;
  color: white;
  .brand__container {
    .brand {
    }
    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      .active {
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      list-style: none;
      display: flex;
      gap: 3rem;
      li {
        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
`;
