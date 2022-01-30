import styled from "styled-components";
import { ProjectsList } from "../constants/projects";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <hr />

      <div>
        <Block>
          {ProjectsList.map((e) => (
            <JobComponent>
              <p style={{ margin: 5 }}>
                <a target="_blank" href={e.link}>
                  {e.name}
                </a>
              </p>
            </JobComponent>
          ))}
        </Block>
      </div>
    </div>
  );
}

const Block = styled.div`
  margin-top: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 100px;
`;

const JobComponent = styled.div`
  margin-top: 20px;

  a,
  .h3 {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Projects;
