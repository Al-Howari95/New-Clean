// import React, { useState } from 'react';
// import axios from 'axios';

// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [products, setProducts] = useState([]);

//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchInput = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get('http://localhost:4000/Sarvices', {
//         params: { query: searchQuery },
//       });

//       const searchResults = response.data;

//       // Filter results to include only exact matches
//       const exactMatches = searchResults.filter((product) =>
//         product.title.toLowerCase() === searchQuery.toLowerCase()
//       );

//       if (exactMatches.length > 0) {
//         setProducts(exactMatches);
//       } else {
//         console.log('No exact match found');
//         setProducts([]); // Reset products if no exact match found
//       }
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   const resetProducts = () => {
//     setProducts([]); // Reset products when needed
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearchInput}>
//         <div className="relative mx-auto text-gray-600 lg:block hidden">
//           <input
//             className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
//             type="search"
//             name="search"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleInputChange}
//           />
//           <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
//             {/* Search icon */}
//           </button>
//         </div>
//       </form>

//       {/* Button to reset products */}
//       <div>
//         <button onClick={resetProducts}>
//           Reset Products
//         </button>
//       </div>

//       {/* Display the search results as cards */}
//       <div className="flex flex-wrap justify-center gap-20">
//         {products.map((product) => (
//           <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             <div className="p-4 text-center">
//               <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                 {product.title}
//               </h5>
//               <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
//                 {product.description}
//               </p>
//               {/* Add other properties as needed */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    //   // اجلب البيانات الأصلية هنا من ال API
    //   // على سبيل المثال:
    axios
      .get("http://localhost:4000/Sarvices")
      .then((response) => setOriginalProducts(response.data));
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchInput = async (e) => {
    e.preventDefault();
    try {
      // قم بتحديث هذا الجزء لاستخدام originalProducts بدلاً من products
      const response = await axios.get("http://localhost:4000/Sarvices", {
        params: { query: searchQuery },
      });

      const searchResults = response.data;

      // قم بتحديث هذا الجزء أيضًا لاستخدام originalProducts
      const exactMatches = searchResults.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (exactMatches.length > 0) {
        setProducts(exactMatches);
      } else {
        console.log("No exact match found");
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const resetProducts = () => {
    setProducts([]);
  };

  return (
    
    <div>
      <form onSubmit={handleSearchInput}>
        <div className="relative inline-block">
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
            {/* Search icon */}
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </form>

      {/* <div>
        <button onClick={resetProducts}>Reset Products</button>
      </div> */}
<br></br><br></br>
      <div className="flex flex-wrap justify-center gap-20">
        {products.length > 0
          ? products.map((product) => (
              <div
                key={product.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="p-4 text-center">
                  <img className="rounded-t-lg" src={product.image} alt="" />

                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.title}
                  </h5>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                    {product.description}
                  </p>
                </div>
              </div>
            ))
          : originalProducts.map((product) => (
              <div
                key={product.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="p-4 text-center">
                  <img className="rounded-t-lg" src={product.image} alt="" />

                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.title}
                  </h5>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Search;

// import React, { useState } from 'react';

// const Search = () => {
//   const [products, setProducts] = useState([]);
//   // const [showError, setShowError] = useState(false); // Uncomment if needed

//   const handleSearchInput = (e) => {
//     e.preventDefault();
//     const getValue = e.target.search.value;
//     const filterItems = products.filter((item) => {
//       return item.name.toLowerCase().includes(getValue.toLowerCase());
//     });
//     if (filterItems.length > 0) {
//       setProducts(filterItems);
//     } else {
//       // Uncomment if needed
//       // setShowError(true);
//     }
//   };

//   return (
//     <div className='bg-stone-200'>
//       <form onSubmit={handleSearchInput} className='w-96'>
//         <label
//           htmlFor="default-search"
//           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//         >
//           Search
//         </label>
//         <div className="relative">
//           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg
//               className="w-4 h-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//           </div>
//           <input
//             type="search"
//             id="default-search"
//             className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Search Mockups, Logos..."
//             required=""
//             name="search"
//           />
//           <button
//             type="submit"
//             className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Search
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Search;
