import { useLoaderData } from "react-router-dom";

const HomeCraftDetails = () => {
  const homeCraft = useLoaderData();

  return (
    <div className="mx-10">
      <h3 className="text-center text-5xl font-bold text-pink-600">
        {homeCraft.name}
      </h3>
      <img
        src={homeCraft.photo}
        className="w-full md:w-2/3 mx-auto mt-5 rounded-xl"
        alt=""
      />
      <p className="mt-5 text-2xl text-center">{homeCraft.shortDescription}</p>
      <div className="text-center">
        <ul className="text-xl font-bold mt-5 flex lg:flex-row flex-col md:list-disc justify-around">
          <li>
            Price: <span className="text-pink-600">{homeCraft.price} BDT</span>
          </li>
          <li>
            Rating: <span className="text-pink-600">{homeCraft.rating}</span>
          </li>
          <li>
            Customization :{" "}
            <span className="text-pink-600">{homeCraft.customizationBox}</span>
          </li>
        </ul>
        <ul className="text-xl font-bold mt-5 flex lg:flex-row flex-col md:list-disc justify-around">
          <li>
            Processing Time:{" "}
            <span className="text-pink-600">
              {homeCraft.processingTime} Minutes
            </span>
          </li>
          <li>
            Stock Status:{" "}
            <span className="text-pink-600">{homeCraft.available}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeCraftDetails;
