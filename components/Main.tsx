"use client";

import { propertyTypes, usaStates } from "@constants";
import { useState, useEffect } from "react";
import { sortBy } from "@constants";
import { fetchProperty } from "@/utils/fetchProp";
import PropCard from "./PropCard";
import { ApiResponse, Property } from "@types";

const resultsPerPage = 12;

export const Main = () => {
  const [properties, setProperties] = useState<Property[]>([]);;
  const [offset, setOffset] = useState<number>(0);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedProperty_type, setSelectedProperty_type] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [beds_min, setBeds_min] = useState<string>("");
  const [beds_max, setBeds_max] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [sort, setSort] = useState<string>("newest");

  const handleSearch = async () => {
    try {
      const results:ApiResponse = await fetchProperty({
        state_code: selectedState,
        city: cityName,
        property_type: selectedProperty_type,
        location: location,
        beds_min: beds_min,
        beds_max: beds_max,
        offset: offset,
        limit: resultsPerPage,
        sort: sort,
      });
      setProperties(results.data.home_search.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePreviousClick = () => {
    const newOffset = Math.max(0, offset - resultsPerPage);
    setOffset(newOffset);
  };

  const handleNextClick = () => {
    const newOffset = offset + resultsPerPage;
    setOffset(newOffset);
  };

/*useEffect(() => {
    handleSearch();
  }, []);*/

  const firstPage = offset === 0 ? true : false;

  return (
    <div className="p-10 bg-blue-100" id="discover">
      <h2 className="text-4xl font-bold mb-0 pb-3 px-5">Suchen</h2>
      {/*Searchbar*/}
      <div className="p-4 border-2 border-gray-400 rounded-md  shadow-lg ">
        <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
              }}
              required
              className="px-4 py-2 border border-gray-300 rounded-md w-[275px]"
            >
              <option value="" disabled selected>USA Bundesstaat</option>
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
              className="px-4 py-2 border border-gray-300 rounded-md w-[275px]"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="PLZ"
              inputMode="numeric"
              pattern="\d{5}"
              max="99999"
              className="px-4 py-2 border border-gray-300 rounded-md w-[275px]"
            />
            <select
              value={selectedProperty_type}
              onChange={(e) => {
                setSelectedProperty_type(e.target.value);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md w-[275px]"
            >
              <option value="" disabled selected>Immobilienart</option>
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
              className="px-4 py-2 border border-gray-300 rounded-md w-[275px]"
            />
            <input
              type="text"
              value={beds_min}
              onChange={(e) => setBeds_min(e.target.value)}
              placeholder="max. Schlafzimmer"
              className="px-4 py-2 border border-gray-300 rounded-md w-[275px]"
            />
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md w-[275px]"
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

      {/*Results*/}
      
      <div>
        <h2 className="text-4xl font-bold mb-0 pb-3 pt-8 px-5">Immobilien</h2>

        <div className="flex flex-row flex-wrap justify-around">
        {properties.length === 0 ? (
          <div className="flex flex-row items-center">
          <p className="text-left text-2xl py-5 ">Es wurden keine Suchergebnisse gefunden.</p>
          <img src="magGlas.png" width={40} height={40}/>
          </div>
        ) : (
          properties.map((property) => <PropCard property={property} />)
        )}
        </div>

        {/* Pagination */}
        {properties.length > 0 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePreviousClick}
              disabled={offset === 0}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 mr-4"
            >
              Previous
            </button>
            <button
              onClick={handleNextClick}
              disabled={firstPage}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Main;
