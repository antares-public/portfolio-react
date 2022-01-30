import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import About from "./About";
import Header from "./Header";
import Projects from "./Projects";
import Resume from "./Resume";

function App() {
  return (
    <Wrapper>
      <Header />
      <FindMe>
        Find me on <a href="https://github.com/antaresofficial">github</a>,{" "}
        <a href="https://twitter.com/antares_nebula">twitter</a> and{" "}
        <a href="https://t.me/mariantares">telegram</a>;
      </FindMe>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin: 15px auto;
  max-width: 800px;
`;

const FindMe = styled.p`
  a {
    color: #fff;
    text-decoration: underline;
  }
`;

export default App;
