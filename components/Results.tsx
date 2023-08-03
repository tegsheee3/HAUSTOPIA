"use client"
import { useState, useEffect } from 'react';
import { fetchProperty } from '@utils/fetchProp';
import PropCard from './PropCard';
import { PropertyFilterProps } from '@types';

interface ResultsProps {
  searchParams: any;
}

export const Results = ({ searchParams }:ResultsProps) => {
  const [searchResults, setSearchResults] = useState<any>({});
  const [offset, setOffset] = useState<number>(0);
  const resultsPerPage = 12;

  useEffect(() => {
    fetchInitialResults();
  }, []);
  const fetchInitialResults = async () => {
    try {
      const defaultSearchParams = {
        state_code: "MI",
        city: "Detroit",
        property_type: "",
        location: "",
        beds_min: "",
        beds_max: "",
        offset: 0,
      }
      console.log("fetchinitialresults");
      const result = await fetchProperty({
        ...defaultSearchParams,
        offset: offset,
        limit: resultsPerPage,
      });
      
      setSearchResults(result);
      
  
    } catch (error) {
      console.error('Error fetching initial data:', error);
    }
  };


  const handleSearch = async () => {
    try {
      const result = await fetchProperty({
        ...searchParams,
        offset: offset,
        limit: resultsPerPage,
      });
      setSearchResults(result);
    } catch (error) {
      console.error('Error fetching data:', error);
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
  
  return (
    <div className='p-10 bg-blue-50'>
      <h2 className="text-4xl font-bold mb-0 pb-3 px-5">Ergebnisse</h2>
      {searchResults.length > 0 && (
        <div>
          <h2 className="mt-4 font-semibold">Search Results:</h2>
          
          {/* Pagination */}
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
              disabled={searchResults.length < resultsPerPage}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      )}
        
        <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 w-full gap-9 pt-14'>
          <PropCard/>
        </div>
    </div>
  );
};

export default Results;
