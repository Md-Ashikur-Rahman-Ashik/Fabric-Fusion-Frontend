import { useLoaderData } from "react-router-dom";

const HomeCraftDetails = () => {
  const homeCraft = useLoaderData();

  return (
    <div>
      <h3>View Details of {homeCraft.name}</h3>
    </div>
  );
};

export default HomeCraftDetails;
