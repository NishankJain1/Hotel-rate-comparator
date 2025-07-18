import axios from 'axios';

export async function getSupplierAHotels(city: string) {
  const response = await axios.get(`http://api:3000/supplierA/hotels?city=${city}`);
  return response.data;
}

export async function getSupplierBHotels(city: string) {
  const response = await axios.get(`http://api:3000/supplierB/hotels?city=${city}`);
  return response.data;
}
