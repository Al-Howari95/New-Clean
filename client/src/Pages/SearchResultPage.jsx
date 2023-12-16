// CommonParentComponent.jsx
import React, { useState } from 'react';
import Search from './Search';
import Cate1 from "../Component/Cate1";
import Cate2 from "../Component/Cate2";
import Cate3 from "../Component/Cate3";

const CommonParentComponent = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  // Fetch original data
  useEffect(() => {
    axios
      .get("http://localhost:4000/Sarvices")
      .then((response) => setOriginalData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Search setSearchResults={setSearchResults} originalData={originalData} />
      <Cate1 searchResults={searchResults} originalData={originalData} />
      <Cate2 searchResults={searchResults} />
      <Cate3 searchResults={searchResults} />

      {/* Add other components if needed */}
    </div>
  );
};

export default CommonParentComponent;
