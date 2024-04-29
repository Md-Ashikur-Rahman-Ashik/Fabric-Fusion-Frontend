import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const SubDetails = () => {
  const subData = useLoaderData();
  console.log(subData);

  const [loading, setLoading] = useState(true);
  // const allCrafts = useLoaderData();
  const [allCrafts, setAllCrafts] = useState([]);

  useEffect(() => {
    fetch(`https://server-side-assignment-ten.vercel.app/crafts`)
      .then((res) => res.json())
      .then((data) => {
        setAllCrafts(data);
        setLoading(false);
      });
  }, []);

  console.log(allCrafts);

  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src="" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-pink-600">{}</h2>
        <p></p>
        <div className="">
          <Link to={`/crafts/`}>
            <button className="btn bg-pink-100 w-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubDetails;
