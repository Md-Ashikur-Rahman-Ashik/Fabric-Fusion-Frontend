import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyCraft from "../MyCraft/MyCraft";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [changedItem, setChangedItem] = useState([]);
  const [auto, setAuto] = useState(true);
  const [enable, setEnable] = useState(false);
  const [notEnable, setNotEnable] = useState(false);

  const [loading, setLoading] = useState(true);

  const handleEnable = () => {
    const selectBox = document.getElementById("box").value;
    if (selectBox === "Yes") {
      setAuto(false);
      setEnable(true);
      const selected = item.filter((cus) => cus.customizationBox === "Yes");
      setChangedItem(selected);
    } else if (selectBox === "No") {
      setAuto(false);
      setEnable(false);
      setNotEnable(true);
      const selected = item.filter((cus) => cus.customizationBox === "No");
      setChangedItem(selected);
    } else {
      setAuto(true);
      setEnable(false);
      setNotEnable(false);
    }
  };

  useEffect(() => {
    fetch(`https://server-side-assignment-ten.vercel.app/craft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, [user, item]);

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
    <div className="mx-10">
      <div className="flex w-full mb-4">
        <select
          className="select select-bordered font-bold text-pink-600"
          id="box"
          onChange={handleEnable}
        >
          <option>Customization</option>
          <option value={"Yes"}>Yes</option>
          <option value={"No"}>No</option>
        </select>
      </div>
      {auto && (
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
          {item.map((craft) => (
            <MyCraft key={craft._id} craft={craft}></MyCraft>
          ))}
        </div>
      )}
      {enable && (
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
          {changedItem.map((craft) => (
            <MyCraft key={craft._id} craft={craft}></MyCraft>
          ))}
        </div>
      )}
      {notEnable && (
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
          {changedItem.map((craft) => (
            <MyCraft key={craft._id} craft={craft}></MyCraft>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtCraftList;
