import { Link } from "react-router-dom";

const MyCraft = ({ craft }) => {
  const {
    name,
    photo,
    shortDescription,
    _id,
    price,
    rating,
    customizationBox,
    available,
  } = craft;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Album" />
      </figure>
      <div className="text-center p-2">
        <h2 className="font-bold text-xl text-pink-600">{name}</h2>
        <p className="font-bold">{shortDescription}</p>
        <p className="font-bold">
          Price: <span className="text-pink-600">{price}</span>
        </p>
        <p className="font-bold">
          Rating: <span className="text-pink-600">{rating}</span>
        </p>
        <p className="font-bold">
          Is Customizable?
          <span className="text-pink-600"> {customizationBox}</span>
        </p>
        <p className="font-bold">
          Is Available?
          <span className="text-pink-600"> {available}</span>
        </p>
        <div className="">
          <Link to={`/crafts/${_id}`}>
            <button className="btn mt-2 bg-pink-100 w-full">Update</button>
          </Link>
        </div>
        <div className="">
          <Link to={`/crafts/${_id}`}>
            <button className="btn mt-2 bg-pink-100 text-pink-600 w-full">Delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCraft;
