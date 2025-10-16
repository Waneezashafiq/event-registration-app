import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getEvents = async () => {
  const response = await axios.get(`${API_URL}/events`);
  return response.data;
};

export const addRegistration = async (registration) => {
  const response = await axios.post(`${API_URL}/registrations`, registration);
  return response.data;
};

export const getRegistrations = async () => {
  const response = await axios.get(`${API_URL}/registrations`);
  return response.data;
};
