import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image;
    console.log(image);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 p-7 ">
      <h4 className="text-4xl">Add A Doctor</h4>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && (
            <p role="alert" className="text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email Address is required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p role="alert" className="text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select input-bordered w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && (
            <p role="alert" className="text-red-600">
              {errors.img.message}
            </p>
          )}
        </div>
        <input
          className="btn btn-accent  w-full mt-4"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
