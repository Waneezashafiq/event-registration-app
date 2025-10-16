import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRegistration } from "../features/registrationsSlice";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventName: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRegistration(formData));
    setFormData({ name: "", email: "", eventName: "" });
    alert("Registration successful!");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Register for an Event</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-2 rounded"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="border p-2 rounded"
          required
        />
        <input
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          placeholder="Event Name"
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
