import { useEffect } from "react";
import { useParams } from "react-router-dom";
import myWritings from "../../json/DummyArticle.json";
import emoji from "../../assets/img/Emoji.png";

function Article() {
  const { slug } = useParams();
  const article = myWritings.find((article) => article.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = article.title + " - My Blog";
    }
  });

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <article className="min-h-screen container pt-4 px-4 lg:px-52">
      <div className="flex flex-col justify-center">
        <div className="mb-5">
          <h1 className="text-[#343434] text-4xl lg:text-6xl font-bold mb-1">
            {article.title}
          </h1>
          <div className="flex gap-1">
            <img className="w-7 h-5" src={emoji} alt="emoji" />
            <h2 className="text-md lg:text-lg">Yohanes Rio Irsan - </h2>
            <h2 className="text-md lg:text-lg">{article.date}</h2>
          </div>
        </div>
        <p className="text-[#343434] text-xl">{article.content}</p>
      </div>
    </article>
  );
}

export default Article;
