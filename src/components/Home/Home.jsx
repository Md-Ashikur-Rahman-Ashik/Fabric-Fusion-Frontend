import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeCraft from "../HomeCraft/HomeCraft";
import TutorialsFromExperts from "../TutorialsFromExperts/TutorialsFromExperts";
import InspirationGallery from "../InspirationGallery/InspirationGallery";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import Subcategories from "../Subcategories/Subcategories";

const Home = () => {
  const [loading, setLoading] = useState(true);
  // const homeCrafts = useLoaderData();
  const [homeCrafts, setHomeCrafts] = useState([]);
  const [sub, setSub] = useState([]);

  useEffect(() => {
    fetch("https://server-side-assignment-ten.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => {
        setHomeCrafts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/subcategories")
      .then((res) => res.json())
      .then((data) => {
        setSub(data);
        setLoading(false);
      });
  }, []);

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
    <div>
      <Banner></Banner>
      <div className="mx-4 md:mx-10">
        <Fade>
          <h2 className="text-center mb-10 mt-20 text-5xl font-bold text-pink-600">
            Our Crafts
          </h2>
        </Fade>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
          {homeCrafts
            .map((craft) => (
              <HomeCraft key={craft._id} craft={craft}></HomeCraft>
            ))
            .slice(0, 6)}
        </div>
      </div>
      <TutorialsFromExperts></TutorialsFromExperts>
      <InspirationGallery></InspirationGallery>
      <div className="mx-4 md:mx-10">
        <Fade>
          <h2 className="text-center mb-10 mt-20 text-5xl font-bold text-pink-600">
            Art & Craft Categories
          </h2>
        </Fade>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
          {sub.map((craft) => (
            <Subcategories key={craft._id} craft={craft}></Subcategories>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
