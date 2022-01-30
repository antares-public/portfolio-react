import { AboutEn } from "../constants/en/about";
import { AboutRu } from "../constants/ru/about";

const About: React.FC<{ lang: boolean; color: string }> = ({ lang }) => {
  const content = lang ? AboutRu : AboutEn;
  return (
    <div>
      <h1>Maria Berestovaya</h1>
      <hr />

      {content.map((e) => (
        <p key={e}>{e}</p>
      ))}
    </div>
  );
};

export default About;
