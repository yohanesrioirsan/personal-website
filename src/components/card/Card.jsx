/* eslint-disable react/prop-types */

// import thumbnail from "../../assets/img/Screenshot 2024-05-22 151202.png";

function Card(props) {
  return (
    <>
      <div className="relative card bg-white shadow-xl">
        <figure>
          <img src={props.image} alt={props.title} />
        </figure>
        <div className="card-body flex items-center">
          <h2 className="card-title text-[#343434] text-xl lg:text-2xl font-semibold text-center">
            {props.title}
          </h2>
        </div>
        <div className="absolute top-0 left-0 flex justify-center items-center backdrop-blur-sm bg-white/80 w-full h-full rounded-2xl opacity-0 hover:animate-blink hover:opacity-100">
          <div className="flex gap-3 flex-col sm:flex-row">
            {props.repository && (
              <a className="btn btn-sm" href={props.repository} target="_blank">
                <ion-icon name="logo-github"></ion-icon>
                Git Repository
              </a>
            )}
            {props.url && (
              <a className="btn btn-sm btn-accent" href={props.url}>
                <ion-icon name="open-outline"></ion-icon>Visit Site
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
