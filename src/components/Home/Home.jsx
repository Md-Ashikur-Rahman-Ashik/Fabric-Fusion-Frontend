import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeCraft from "../HomeCraft/HomeCraft";

const Home = () => {
  const homeCrafts = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="mx-10">
        <h2 className="text-center mb-10 mt-20 text-5xl font-bold text-pink-600">Our Crafts</h2>
        <div className="grid grid-cols-3 gap-4">
          {homeCrafts.map((craft) => (
            <HomeCraft key={craft._id} craft={craft}></HomeCraft>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
