import { MouseEventHandler } from "react";

export interface PropertyDescription {
  sqft: number;
  year_built: number;
  garage: number;
  baths: number;
  beds: number;
  type: string;
}

export interface PropertyAddress {
  "postal_code": string;
  "state": string;
  "city": string;
  "line": string;
}

export interface Property {
  primary_photo: { href: string };
  description: PropertyDescription;
  photos: { href: string }[]; 
  location: {
    address: PropertyAddress;
    street_view_url: string;
  };
  property_id:string;
  list_price: number;
}

export interface ApiResponse {
  status: number;
  data: {
    home_search: {
      results: Property[];
    };
  };
}

export interface PropertyFilterProps{
  property_type?: string,
  beds_min?:string,
  beds_max?:string,
  city?:string,
  state_code:string,
  location?: string,
  sort?:string,
  offset?:number,
  limit?: number,
}

export interface HomeProps {
  searchParams: PropertyFilterProps;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
