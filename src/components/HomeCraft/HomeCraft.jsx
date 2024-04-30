import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const HomeCraft = ({ craft }) => {
  const { name, photo, shortDescription, _id } = craft;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-pink-600">{name}</h2>
        <p>{shortDescription}</p>
        <div className="">
          <Link to={`/crafts/${_id}`}>
            <button className="btn bg-pink-100 w-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCraft;
