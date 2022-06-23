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
            <p style={{ margin: 0 }}>Work experience: &#62; 2 years;</p>
            <p style={{ margin: 0 }}>Updated: 06/23/2022;</p>
          </Block>
        ) : (
          <Block>
            <p style={{ marginBottom: 0 }}>Навыки: Программист, разработчик;</p>
            <p style={{ margin: 0 }}>Опыт работы: &#62; 2х лет;</p>
            <p style={{ margin: 0 }}>Обновлено: 23.06.22</p>
          </Block>
        )}

        <Block>
          {content.map((e) => (
            <JobComponent key={e.desc}>
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

          <CenterBlock>
            <a href="https://novotroitsk.hh.ru/resume_converter/%D0%91%D0%B5%D1%80%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%9C%D0%B0%D1%80%D0%B8%D1%8F%20%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B5%D0%B2%D0%BD%D0%B0.pdf?hash=dfd99318ff09058d7a0039ed1f47674b65356e&type=pdf&hhtmSource=resume&hhtmFrom=resume_list&force-roles=true">
              {!lang ? 'More information about me' : 'Больше информации обо мне'}
            </a>
          </CenterBlock>
        </Block>
      </div>
    </div>
  );
};

const CenterBlock = styled.div`
  text-align: center;
  margin: 40px 0;


  a {
    color: gray;
    text-decoration: underline;
  }
`;

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
