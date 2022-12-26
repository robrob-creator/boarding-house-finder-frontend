/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBoardingHouse } from "../../services/boardingHouse";

export default function CreateBoardingHouse() {
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    let body = {
      name: e.target?.name?.value,
      available_rooms: parseInt(e.target.available_rooms?.value),
      status: "pending",
      address: e.target.address?.value,
      map_link: e.target.map_link?.value,
      rent_price: parseInt(e.target.rent_price?.value),
    };
    let error = {};

    if (body.name === "") {
      error.name = "*name required!";
    }

    if (body.available_rooms === "") {
      error.available_rooms = "*rooms required!";
    }
    if (body.address === "") {
      error.addres = "*address required!";
    }
    if (body.map_link === "") {
      error.map_link = "*rooms required!";
    }
    setErrors(error);

    if (!errors) {
      await createBoardingHouse(body);
      navigate("/");
    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm sm:max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-bold">
            Create Boarding House
          </h1>
          <form onSubmit={(e) => submit(e)}>
            <div className="sm:grid grid-cols-2 gap-4">
              <div className=" mb-4">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded "
                  name="name"
                  placeholder="Name"
                />
                <p className="text-red-400 text-xs italic">{errors?.Name}</p>
              </div>
              <div className=" mb-4">
                <input
                  type="number"
                  className="block border border-grey-light w-full p-3 rounded"
                  name="available_rooms"
                  placeholder="Available Rooms"
                />
                <p className="text-red-400 text-xs italic">
                  {errors?.available_rooms}
                </p>
              </div>
              <div className=" mb-4">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded"
                  name="address"
                  placeholder="Addres"
                />
                <p className="text-red-400 text-xs italic">{errors?.addres}</p>
              </div>

              <div className=" mb-4">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded"
                  name="map_link"
                  placeholder="Map Link"
                />
                <p className="text-red-400 text-xs italic">
                  {errors?.map_link}
                </p>
              </div>
              <div className=" mb-4">
                <input
                  type="number"
                  className="block border border-grey-light w-full p-3 rounded"
                  name="rent_price"
                  placeholder="Rent per month"
                />
                <p className="text-red-400 text-xs italic">
                  {errors?.rent_price}
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Boarding House
            </button>
          </form>
        </div>

        <div className="text-grey-dark mt-6">@BORDINGO</div>
      </div>
    </div>
  );
}
