import { useLoaderData } from "react-router-dom";
import HomeCraft from "../HomeCraft/HomeCraft";

const MyArtCraftList = () => {
  const myCrafts = useLoaderData();

  return (
    <div className="mx-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
      {myCrafts.map((craft) => (
        <HomeCraft key={craft._id} craft={craft}></HomeCraft>
      ))}
    </div>
  );
};

export default MyArtCraftList;
