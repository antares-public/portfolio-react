import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavEn } from "../constants/en/nav";
import { NavRu } from "../constants/ru/nav";

const Header: React.FC<{ color: string; lang: boolean }> = ({
  color,
  lang,
}) => {
  const content = lang ? NavRu : NavEn;

  return (
    <Head color={color}>
      <a className="logo" href="https://github.com/antaresofficial">
        antaresofficial
      </a>
      <div className="nav">
        {Object.entries(content).map((e) => {
          return <Link to={e[0] === "about" ? "/" : e[0]}>{e[1]}</Link>;
        })}
      </div>
    </Head>
  );
};

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .logo {
    @media (max-width: 700px) {
      padding-right: 30px;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
  }

  .nav a {
    color: ${(props) => props.color};
    position: relative;
    margin-right: 20px;
    font-size: 1rem;

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
      background: ${(props) => props.color};
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
      background: ${(props) => props.color};
    }

    &:hover::before {
      display: block;
    }
  }
`;

export default Header;
