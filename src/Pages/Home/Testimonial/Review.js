import React from "react";

const Review = ({ review }) => {
  const { name, userReview, img, location } = review;
  return (
    <div className="card   shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>{userReview}</p>
        <div className="flex items-center mt-6">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="text-large">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
