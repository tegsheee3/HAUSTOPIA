import { PropertyFilterProps } from "@types";

export async function fetchProperty(filters: PropertyFilterProps) {
  const { state_code, city, property_type, location, beds_min,beds_max, offset, limit,sort } = filters;
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
  };
  console.log("state",state_code,"city" ,city,"proptype", property_type, "location", location, "bedmin", beds_min,"bedsmax",beds_max,"offset", offset,"limit" ,limit,"sort",sort)
  
  const testUrl="https://us-real-estate.p.rapidapi.com/v3/for-sale?state_code=MI&city=Detroit&location=50993&limit=42&property_type=Mobile&sort=lowest_price&beds_max=2&beds_min=5&offset=0"

  let url = "https://us-real-estate.p.rapidapi.com/v3/for-sale?";
  if (state_code){ url += `state_code=${state_code}&`} else {url+=`state_code=MI&`};
  if (city) url += `city=${city}&`;
  if (location) url += `location=${location}&`;
  if (limit) url += `limit=${limit}&`;
  if (property_type) url += `property_type=${property_type}&`;
  if (sort) url += `sort=${sort}&`;
  if (beds_max) url += `beds_max=${beds_max}&`;
  if (beds_min) url += `beds_min=${beds_min}&`;
  if (offset !== undefined && offset !== null) url += `offset=${offset}`;

  const response = await fetch(url, { headers: headers });
  const result = await response.json();
  
  console.log(result)
  return result;
}



