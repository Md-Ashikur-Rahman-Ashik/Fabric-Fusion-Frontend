import { Link } from "react-router-dom";

const Subcategories = ({ craft }) => {
  const { photo, subcategoryBox, _id } = craft;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={photo} className="h-64 w-full object-cover" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-xl text-center text-pink-600">{subcategoryBox}</h2>
      </div>
    </div>
  );
};

export default Subcategories;
