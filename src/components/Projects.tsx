import styled from "styled-components";
import { ProjectsListEn } from "../constants/en/projects";
import { ProjectsListRu } from "../constants/ru/projects";

const Projects: React.FC<{ lang: boolean; color: string }> = ({
  lang,
  color,
}) => {
  const { content, name } = lang ? ProjectsListRu : ProjectsListEn;
  return (
    <div>
      <h1>{name}</h1>
      <hr />

      <Block>
        {content.map((e) => (
          <JobComponent color={color} key={e.link}>
            <p style={{ margin: 5 }}>
              <a target="_blank" href={e.link}>
                {e.name}
              </a>
            </p>
          </JobComponent>
        ))}
      </Block>
    </div>
  );
};

const Block = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 6fr);

  @media (max-width: 700px) {
    grid-template-columns: 12fr;
  }
`;

const JobComponent = styled.div`
  margin-top: 20px;

  a,
  .h3 {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
      color: ${(props) => props.color};
    }
  }
`;

export default Projects;
