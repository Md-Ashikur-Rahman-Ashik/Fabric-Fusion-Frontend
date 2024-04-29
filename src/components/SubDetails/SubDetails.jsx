import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SubCard from "../SubCard/SubCard";

const SubDetails = () => {
  const subData = useLoaderData();
  const { subcategoryBox } = subData;

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

  const ourCraft = allCrafts.filter(
    (craft) => craft.subcategoryBox === subcategoryBox
  );
//   console.log(ourCraft);

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
    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 mx-10">
      {ourCraft.map((sub) => (
        <SubCard key={sub._id} sub={sub}></SubCard>
      ))}
    </div>
  );
};

export default SubDetails;
