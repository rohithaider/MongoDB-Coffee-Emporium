import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import revalidateLoaderData from "../main";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = {};

    formData.forEach((value, key) => {
      coffeeData[key] = value;
    });

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount>0) {
          swal("Congratulations", "Successfully Updated! ", "success");
        }
        revalidateLoaderData()
        
      });
  }
  return (
    <div className="text-center mt-10">
      {/* form div */}
      <form
        className="bg-[#F4F3F0] md:w-2/3 mx-auto border p-10"
        onSubmit={handleSubmit}
      >
        <h1
          className="text-3xl font-extrabold mb-4 font-rancho"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
        >
          Update Coffee
        </h1>
        
        <div>
          <div className="flex justify-around gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold">Name</span>
              </div>
              <input
                name="name"
                type="text"
                defaultValue={name}
                placeholder="Enter Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Chef</span>
              </div>
              <input
                name="chef"
                type="text"
                defaultValue={chef}
                placeholder="Enter Coffee Chef"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex justify-around gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold">Supplier</span>
              </div>
              <input
                name="supplier"
                type="text"
                defaultValue={supplier}
                placeholder="Enter Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Taste</span>
              </div>
              <input
                name="taste"
                type="text"
                defaultValue={taste}
                placeholder="Enter Taste Name"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex justify-around gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold">Category</span>
              </div>
              <input
                name="category"
                type="text"
                defaultValue={category}
                placeholder="Enter Category Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Details</span>
              </div>
              <input
                name="details"
                type="text"
                defaultValue={details}
                placeholder="Enter Coffee Details"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex justify-around gap-4">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Photo-URL</span>
              </div>
              <input
                name="photo"
                type="text"
                defaultValue={photo}
                placeholder="Enter Photo URL"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex mt-8">
            <label className="form-control w-full ">
              <input
                name="submit"
                type="submit"
                value="Add Coffee"
                className="input input-bordered w-full btn bg-[#D2B48C] text-[#331A15]"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
