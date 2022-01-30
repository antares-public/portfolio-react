import { AboutEn } from "../constants/en/about";
import { AboutRu } from "../constants/ru/about";

const About: React.FC<{ lang: boolean; color: string }> = ({ lang, color }) => {
  const content = lang ? AboutRu : AboutEn;
  return (
    <div>
      <h1>Maria Berestovaya</h1>
      <hr />

      {content.map((e) => {
        const word = e.match(/\*(.*?)\*/);
        const text = e.replace(
          /\*(.*?)\*/,
          `<span id="word">${word && word[1]}</span>`
        );
        const el = document.getElementById("word");

        if (el) {
          // @ts-ignore
          el.style.color = color;
        }

        return word ? (
          <div dangerouslySetInnerHTML={{ __html: text }} />
        ) : (
          <p key={e}>{e}</p>
        );
      })}
    </div>
  );
};

export default About;
