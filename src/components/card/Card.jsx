import thumbnail from "../../assets/img/Screenshot 2024-05-22 151202.png";

function Card() {
  return (
    <div className="card bg-white shadow-xl">
      <figure>
        <img src={thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body flex items-center">
        <h2 className="card-title text-[#343434] text-xl lg:text-2xl font-semibold text-center">
          Binar Car Rental
        </h2>
      </div>
    </div>
  );
}

export default Card;
