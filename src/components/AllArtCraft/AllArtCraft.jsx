import { Link, useLoaderData } from "react-router-dom";

const AllArtCraft = () => {
  const allCrafts = useLoaderData();

  return (
    <div className="overflow-x-auto mx-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-pink-600">
            <th>Craft Items</th>
            <th>Stock Status</th>
            <th>Subcategory</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allCrafts.map((craft) => (
            <tr key={craft._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={craft.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{craft.name}</div>
                  </div>
                </div>
              </td>
              <td>{craft.available}</td>
              <td>{craft.subcategoryBox}</td>
              <th>
                <Link to={`/crafts/${craft._id}`}>
                  <button className="btn text-pink-600 btn-ghost btn-xs">
                    View Details
                  </button>
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllArtCraft;
