import React from "react";
import treatmentImage from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const ExtraSection = () => {
  return (
    <div className="hero    mt-6">
      <div className="hero-content   flex-col lg:flex-row">
        <img
          src={treatmentImage}
          alt=""
          className="lg:w-2/3 lg:h-[480px]  rounded-lg shadow-2xl"
        />
        <div className="mx-8">
          <h1 className="text-4xl font-medium">
            Exception Dental Cares, On Your Terms
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
