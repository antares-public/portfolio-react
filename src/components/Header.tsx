import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Head>
      <a href="https://github.com/antaresofficial">antaresofficial</a>
      <div className="nav">
        <Link to="/">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </Head>
  );
}

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.4rem;
  }

  .nav a {
    color: #2bbc8a;
    position: relative;
    margin-right: 20px;
    font-size: 1.2rem;

    &:last-child::after {
      display: none;
    }

    &::after {
      position: absolute;
      content: "";
      width: 0.5px;

      display: flex;
      align-items: center;
      height: 16px;
      right: -10px;
      top: 5px;
      background: #2bbc8a;
    }

    &::before {
      position: absolute;
      content: "";
      height: 1px;
      bottom: -1px;

      display: none;

      margin: 0 auto;
      left: 0;
      right: 0;
      width: 100%;
      background: #2bbc8a;
    }

    &:hover::before {
      display: block;
    }
  }
`;

export default Header;
