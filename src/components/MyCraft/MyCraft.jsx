import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-assignment-ten.vercel.app/craft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Album" />
      </figure>
      <div className="text-center p-2">
        <h2 className="font-bold text-xl text-pink-600">{name}</h2>
        <p className="font-bold">{shortDescription}</p>
        <p className="font-bold">
          Price: <span className="text-pink-600">{price} BDT</span>
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
          <Link to={`/update-craft/${_id}`}>
            <button className="btn mt-2 bg-pink-100 w-full">Update</button>
          </Link>
        </div>
        <div>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn mt-2 bg-pink-100 text-pink-600 w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCraft;
