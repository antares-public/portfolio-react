import styled from "styled-components";

function Resume() {
  return (
    <div>
      <h1>Frontend developer</h1>
      <hr />

      <div>
        <Block>
          <p style={{ marginBottom: 0 }}>Skills: Programmer, Developer;</p>
          <p style={{ margin: 0 }}>Work experience: 1 year 9 months;</p>
        </Block>
        <Block>
          <JobComponent>
            <h3 style={{ marginBottom: 5 }}>
              <a href="sberclass.ru">Sberbank (Sberbio) </a>
            </h3>
            <p style={{ margin: 0 }}>
              <span style={{ color: "#2bbc8a" }}>
                Middle Frontend Developer React.
              </span>{" "}
              Context, Typescript, immer, emotion, lodash, etc. Adding new
              functionality;
            </p>
          </JobComponent>
          <JobComponent>
            <h3 style={{ marginBottom: 5 }}>
              <a href="adevi.io">Intelligent Profit Solutions </a>{" "}
            </h3>
            <p style={{ margin: 0 }}>
              <span style={{ color: "#2bbc8a" }}>
                Junior+/Middle Frontend Developer.
              </span>{" "}
              Adding functionality, fixing bugs, writing texts. Code review and
              participation in the study of projects competitors. Project Stack:
              Typescript, Reaction, Redux, Redux Saga, Material UI, REST API;
            </p>
          </JobComponent>
          <JobComponent>
            <h3 style={{ marginBottom: 5 }}>
              <a href="superiorityai.ru/?auth=registration&utm_medium=organic&utm_source=vk&utm_campaign=community-profile-header">
                Superiority
              </a>
            </h3>
            <p style={{ margin: 0 }}>
              <span style={{ color: "#2bbc8a" }}>
                Junior Frontend Developer.
              </span>{" "}
              Project support and bug fixes. React JS, React Hook, Material UI,
              REST API;
            </p>
          </JobComponent>
          <JobComponent>
            <h3 style={{ marginBottom: 5 }}>Freelance</h3>
            <p style={{ margin: 0 }}>
              <span style={{ color: "#2bbc8a" }}>
                Junior Frontend Developer.
              </span>{" "}
              Improvement of websites and correction of errors on React
              applications;
            </p>
          </JobComponent>
        </Block>
      </div>
    </div>
  );
}

const Block = styled.div`
  margin-top: 10px;
`;

const JobComponent = styled.div`
  margin-top: 20px;

  a,
  .h3 {
    color: #fff;
  }
`;

export default Resume;
