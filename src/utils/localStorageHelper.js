export const saveEventOrder = (order) => {
  localStorage.setItem('eventOrder', JSON.stringify(order));
};

export const loadEventOrder = () => {
  const data = localStorage.getItem('eventOrder');
  return data ? JSON.parse(data) : [];
};
