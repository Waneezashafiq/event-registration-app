import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegistrations } from "../features/registrationsSlice";

const MyRegistrationsPage = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.registrations);

  useEffect(() => {
    dispatch(fetchRegistrations());
  }, [dispatch]);

  if (status === "loading") return <p className="p-4">Loading your registrations...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Registrations</h2>
      {list.length === 0 ? (
        <p>No registrations yet!</p>
      ) : (
        <ul className="list-disc ml-6">
          {list.map((reg, index) => (
            <li key={index}>
              {reg.name} - {reg.eventName} ({reg.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyRegistrationsPage;
