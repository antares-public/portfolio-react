import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants/colors";
import About from "./About";
import Header from "./Header";
import Projects from "./Projects";
import Resume from "./Resume";

function App() {
  const [lang, setLang] = useState(
    localStorage.getItem("lang")
      ? JSON.parse(localStorage.getItem("lang") || "")
      : false
  );
  const [count, setCount] = useState(
    localStorage.getItem("colorIndex")
      ? JSON.parse(localStorage.getItem("colorIndex") || "")
      : 0
  );

  const handleChangeColor = () => {
    if (count >= COLORS.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    localStorage.setItem("colorIndex", JSON.stringify(count));
    localStorage.setItem("lang", JSON.stringify(lang));
  }, [count, lang]);

  return (
    <Wrapper>
      <Header color={COLORS[count]} />
      <Buttons>
        <button onClick={() => setLang(!lang)}>En-Ru</button>
        <button onClick={handleChangeColor}>Color</button>
      </Buttons>

      <FindMe>
        Find me on <a href="https://github.com/antaresofficial">github</a>,{" "}
        <a href="https://twitter.com/antares_nebula">twitter</a> and{" "}
        <a href="https://t.me/mariantares">telegram</a>;
      </FindMe>
      <Routes>
        <Route path="/" element={<About lang={lang} color={COLORS[count]} />} />
        <Route
          path="/projects"
          element={<Projects lang={lang} color={COLORS[count]} />}
        />
        <Route
          path="/resume"
          element={<Resume lang={lang} color={COLORS[count]} />}
        />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin: 15px auto;
  max-width: 800px;
  min-height: 100%;
`;

const FindMe = styled.p`
  a {
    color: #fff;
    text-decoration: underline;
  }
`;

const Buttons = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;

  button {
    border: none;
    font-family: "Fira Code", monospace;
    padding: 10px;
  }
`;

export default App;
