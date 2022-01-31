import { AboutEn } from "../constants/en/about";
import { AboutRu } from "../constants/ru/about";

const About: React.FC<{ lang: boolean; color: string }> = ({ lang, color }) => {
  const { content, name } = lang ? AboutRu : AboutEn;
  return (
    <div>
      <h1>{name}</h1>
      <hr />

      {content.map((e) => {
        const word = e.match(/\[(.+?)\]/);
        const text = e.replace(
          /\[(.+?)\]/,
          ` <style type="text/css">
          .word { 
           color: ${color};
          }
         </style><span class="word">${word && word[1]}</span>`
        );
        return word ? (
          <div key={text} dangerouslySetInnerHTML={{ __html: text }} />
        ) : (
          <p key={e}>{e}</p>
        );
      })}
    </div>
  );
};

export default About;
