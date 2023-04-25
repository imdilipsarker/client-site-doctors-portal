import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PPPP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-16">
      <p className="text-center text-secondary font-bold">
        Available appointments on {format(selectedDate, "PPPP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
          selectedDate={selectedDate}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
