import { useParams } from "react-router-dom";
import myWritings from "../../json/DummyArticle.json";

function Article() {
  const { id } = useParams();
  const articleId = parseInt(id, 10);
  const article = myWritings.find((article) => article.id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <h1>{article.content}</h1>
    </div>
  );
}

export default Article;
