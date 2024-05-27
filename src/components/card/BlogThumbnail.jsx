/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// import thumbnail from "../../assets/img/Screenshot 2024-05-22 151202.png";

function truncateText(text, limit) {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
}

function BlogThumbnail(props) {
  const { content } = props;
  const { id } = props;

  const truncatedText = truncateText(content, 6);

  return (
    <div className="card bg-white shadow-xl">
      <div className="card-body flex">
        <Link to={`/writing/${id}`}>
          <h2 className="card-title text-[#343434] text-xl lg:text-2xl font-semibold">
            {props.title}
          </h2>
        </Link>
        <p>{props.date}</p>
        <p className="text-[#343434]">{truncatedText}</p>
      </div>
    </div>
  );
}

export default BlogThumbnail;
