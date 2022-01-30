import styled from "styled-components";
import { ResumeListEn } from "../constants/en/resume";
import { ResumeListRu } from "../constants/ru/resume";

const Resume: React.FC<{ lang: boolean; color: string }> = ({
  lang,
  color,
}) => {
  const content = lang ? ResumeListRu : ResumeListEn;
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
          {content.map((e) => (
            <JobComponent key={e.name}>
              <h3 style={{ marginBottom: 5 }}>
                <a href={e.link || ""} target="_blank">
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
