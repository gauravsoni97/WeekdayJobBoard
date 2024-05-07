import React, { createContext, useState, useEffect, useContext } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({}); // State to hold filters
  const [offset, setOffset] = useState(0); // State to keep track of offset
  const [hasMore, setHasMore] = useState(true); // State to check if there is more data to fetch

  const fetchData = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };

      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setApiData(prevData => [...prevData, ...(data?.jdList || [])]); // Concatenate new data
      setLoading(false);
      setHasMore(data.jdList.length > 0); // Check if there is more data
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    if (hasMore) {
      setOffset(prevOffset => prevOffset + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore]);

  useEffect(() => {
    fetchData();
  }, [offset]); // Fetch data whenever offset changes

  // Function to handle filtering
  const handleFilter = (filters) => {
    setFilters(filters);
    // Refetch data with new filters
    setApiData([]); // Clear existing data
    setOffset(0); // Reset offset
    setLoading(true);
  };

  return (
    <ApiContext.Provider value={{ apiData, loading, error, handleFilter }}>
      {children}
    </ApiContext.Provider>
  );
};

const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};

export { ApiProvider, useApi };
