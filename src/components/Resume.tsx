import styled from "styled-components";
import { ResumeListEn } from "../constants/en/resume";
import { ResumeListRu } from "../constants/ru/resume";

const Resume: React.FC<{ lang: boolean; color: string }> = ({
  lang,
  color,
}) => {
  const { content, name } = lang ? ResumeListRu : ResumeListEn;
  return (
    <div>
      <h1>{name}</h1>
      <hr />

      <div>
        {!lang ? (
          <Block>
            <p style={{ marginBottom: 0 }}>Skills: Programmer, Developer;</p>
            <p style={{ margin: 0 }}>Work experience: 2 years;</p>
          </Block>
        ) : (
          <Block>
            <p style={{ marginBottom: 0 }}>Навыки: Программист, разработчик;</p>
            <p style={{ margin: 0 }}>Опыт работы: &#62; 2х лет;</p>
          </Block>
        )}

        <Block>
          {content.map((e) => (
            <JobComponent key={e.name}>
              <h3 style={{ marginBottom: 5 }}>
                <a href={e.link || ""} target="_blank" rel="noreferrer">
                  {e.name}
                </a>
              </h3>
              <p style={{ margin: 0 }}>
                <span style={{ color: color }}>{e.status}</span>
                {" " + e.desc}
              </p>
            </JobComponent>
          ))}
        </Block>
      </div>
    </div>
  );
};

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
