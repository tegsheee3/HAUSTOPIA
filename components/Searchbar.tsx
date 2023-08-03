"use client";

import { propertyTypes, usaStates } from "@constants";
import { useState } from "react";
import { sortBy } from "@constants";

interface SearchbarProps {
  onSearch: (params: any) => void;
}

export const Searchbar = ({ onSearch }: SearchbarProps) => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedProperty_type, setSelectedProperty_type] =
    useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [beds_min, setBeds_min] = useState<string>("");
  const [beds_max, setBeds_max] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [sort, setSort] = useState<string>("newest");

  const handleSearch = () => {
    onSearch({
      state_code: selectedState,
      city: cityName,
      property_type: selectedProperty_type,
      location: location,
      beds_min: beds_min,
      beds_max: beds_max,
      offset: 0,
    });
    console.log(onSearch);
  };

  return (
    <div className="p-10" id="discover">
      <h2 className="text-4xl font-bold p-5">Suchen</h2>
      <div className="flex flex-row p-4 border-2 border-gray-400 rounded-md  shadow-xl ">
        <select
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
          }}
          required
          className="px-4 py-2 border border-gray-300 rounded-md max-w-[275px]"
        >
          <option value="">Land*</option>
          {Object.entries(usaStates).map(([stateName, stateAbbr]) => (
            <option key={stateAbbr} value={stateAbbr}>
              {stateName}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Stadt"
          className="px-4 py-2 border border-gray-300 rounded-md max-w-[275px]"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="PLZ"
          inputMode="numeric"
          className="px-4 py-2 border border-gray-300 rounded-md max-w-[275px]"
        />
        <select
          value={selectedProperty_type}
          onChange={(e) => {
            setSelectedProperty_type(e.target.value);
          }}
          className="px-4 py-2 border border-gray-300 rounded-md max-w-[275px]"
        >
          {Object.entries(propertyTypes).map(([value, text]) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={beds_max}
          onChange={(e) => setBeds_max(e.target.value)}
          placeholder="min. Schlafzimmer"
          className="px-4 py-2 border border-gray-300 rounded-md max-w-[275px]"
        />
        <input
          type="text"
          value={beds_min}
          onChange={(e) => setBeds_min(e.target.value)}
          placeholder="max. Schlafzimmer"
          className="px-4 py-2 border border-gray-300 rounded-md max-w-[275px]"
        />
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
          }}
          className="px-4 py-2 border border-gray-300 rounded-md max-w-[275px]"
        >
          {Object.entries(sortBy).map(([eng, ger]) => (
            <option key={eng} value={eng}>
              {ger}
            </option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-[275px]"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
