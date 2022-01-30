import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Header>
        <a href="https://github.com/antaresofficial">antaresofficial</a>
        <div className="nav">
          <a href="#">About</a>
          <a href="#">Resume</a>
          <a href="#">Projects</a>
        </div>
      </Header>
      <FindMe>
        Find me on <a href="https://github.com/antaresofficial">github</a>,{" "}
        <a href="https://twitter.com/antares_nebula">twitter</a> and{" "}
        <a href="https://t.me/mariantares">telegram</a>.
      </FindMe>
      <h1>Maria Berestovaya</h1>
      <p>
        I have been working as a Frontend React developer for about 2 years. I
        managed to work on two major projects. I want less to make up layout and
        pay more attention to logic.
      </p>
      <p>
        In my free time I like to play guitar, read books and travel. I also
        love coffee and constant development. I am interested in the backend,
        and I also program in other programming languages so as not to lose
        interest in the profession and not get bogged down in routine.
      </p>
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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
  }

  .nav a {
    color: #2bbc8a;
    position: relative;
    margin-right: 20px;

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

export default App;
