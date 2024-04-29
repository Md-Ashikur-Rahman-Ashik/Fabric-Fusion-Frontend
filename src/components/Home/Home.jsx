import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeCraft from "../HomeCraft/HomeCraft";
import TutorialsFromExperts from "../TutorialsFromExperts/TutorialsFromExperts";
import InspirationGallery from "../InspirationGallery/InspirationGallery";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const homeCrafts = useLoaderData();

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
    </div>
  );
};

export default Home;
