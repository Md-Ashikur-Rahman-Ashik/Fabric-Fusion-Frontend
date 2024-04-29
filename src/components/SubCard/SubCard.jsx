import { Link } from "react-router-dom";

const SubCard = ({ sub }) => {

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={sub.photo} alt="Album" />
      </figure>
      <div className="card-body text-center">
        <h2 className="font-bold text-xl text-pink-600">{sub.name}</h2>
        <p className="font-bold"><span className="text-pink-600">{sub.shortDescription}</span></p>
        <p className="font-bold">Subcategory : <span className="text-pink-600">{sub.subcategoryBox}</span></p>
        <p className="font-bold">Price :<span className="text-pink-600"> {sub.price} BDT</span></p>
        <p className="font-bold">Rating :<span className="text-pink-600"> {sub.rating}</span></p>
        <p className="font-bold">Processing Time :<span className="text-pink-600"> {sub.processingTime} Minutes</span></p>
        <div className="">
          <Link to={`/crafts/${sub._id}`}>
            <button className="btn bg-pink-100 w-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
