/* eslint-disable react/prop-types */

// import thumbnail from "../../assets/img/Screenshot 2024-05-22 151202.png";

function Card(props) {
  return (
    <div className="card bg-white shadow-xl">
      <figure>
        <img src={props.image} alt={props.title} />
      </figure>
      <div className="card-body flex items-center">
        <h2 className="card-title text-[#343434] text-xl lg:text-2xl font-semibold text-center">
          {props.title}
        </h2>
      </div>
    </div>
  );
}

export default Card;
