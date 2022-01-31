const NotFound: React.FC<{ lang: boolean }> = ({ lang }) => {
  return <div>{!lang ? "Not Found" : "Не найдено"}</div>;
};

export default NotFound;
