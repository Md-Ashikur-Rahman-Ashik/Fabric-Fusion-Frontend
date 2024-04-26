import Swal from "sweetalert2";

const AddCraftItem = () => {
  const handleAddCraft = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const subcategoryBox = document.getElementById("subcategory").value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customizationBox = document.getElementById("customization").value;
    const processingTime = form.processingTime.value;
    const available = document.getElementById("available").value;
    const email = form.email.value;
    const userName = form.userName.value;

    const newCoffee = {
      name,
      subcategoryBox,
      shortDescription,
      price,
      rating,
      customizationBox,
      processingTime,
      available,
      email,
      userName,
    };

    console.log(newCoffee);
  };

  return (
    <div className="bg-pink-50 text-black p-24">
      <h2 className="text-3xl font-extrabold text-pink-600 text-center">
        Add A Craft Item
      </h2>
      <form onSubmit={handleAddCraft}>
        {/* Form Name and Quantity Row */}
        <div className="md:flex flex-col items-center gap-4 mt-2">
          <div className="md:w-1/2">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-pink-600"
            >
              Item Name
            </label>
            <div className="flex">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Item Name"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-pink-600">Subcategory</span>
              </div>
              <select className="select select-bordered" id="subcategory">
                <option>Embroidery</option>
                <option>Knitting & Crocheting</option>
                <option> Quilting</option>
                <option>Beadwork</option>
                <option>Tie-Dyeing</option>
                <option>Macrame</option>
              </select>
            </label>
          </div>
        </div>
        {/* Form Supplier and Taste Row */}
        <div className="md:flex flex-col items-center gap-4 mt-2">
          <div className="md:w-1/2">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-pink-600"
            >
              Short Description
            </label>
            <div className="flex">
              <input
                type="text"
                name="shortDescription"
                id=""
                placeholder="Short Description"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-pink-600"
            >
              Price
            </label>
            <div className="flex">
              <input
                type="text"
                name="price"
                id=""
                placeholder="Price"
                className="flex py-2 flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
        </div>
        {/* Form Category and Details Row */}
        <div className="md:flex flex-col items-center gap-4 mt-2">
          <div className="md:w-1/2">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-pink-600"
            >
              Rating
            </label>
            <div className="flex">
              <input
                type="text"
                name="rating"
                id=""
                placeholder="Rating"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-pink-600">
                  Customization Available?
                </span>
              </div>
              <select className="select select-bordered" id="customization">
                <option>Yes</option>
                <option>No</option>
              </select>
            </label>
          </div>
        </div>
        {/* Form Photo Row */}
        <div className="mt-2">
          <div className="md:w-1/2 mx-auto">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-pink-600"
            >
              Processing Time
            </label>
            <div className="flex">
              <input
                type="text"
                name="processingTime"
                id=""
                placeholder="Processing Time"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2 mx-auto">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-pink-600">
                  Is product available?
                </span>
              </div>
              <select className="select select-bordered" id="available">
                <option>In Stock</option>
                <option>Made to Order</option>
              </select>
            </label>
          </div>
          <div className="md:w-1/2 mx-auto mt-2">
            <label className="block mb-1 text-sm font-medium text-pink-600">
              User Email
            </label>
            <div className="flex">
              <input
                type="text"
                name="email"
                id=""
                placeholder="User Email"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2 mx-auto mt-2">
            <label className="block mb-1 text-sm font-medium text-pink-600">
              User Name
            </label>
            <div className="flex">
              <input
                type="text"
                name="userName"
                id=""
                placeholder="User Name"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Add Craft"
          className="btn w-1/2 mt-4 bg-pink-100 text-pink-600 block mx-auto"
        />
      </form>
    </div>
  );
};

export default AddCraftItem;
