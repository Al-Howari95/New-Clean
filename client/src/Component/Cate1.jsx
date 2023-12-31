import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from "./Search";


const Categories = () => {
  
  const [cardsData, setCardsData] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userFavorites, setUserFavorites] = useState({
    image: "",
    title: "",
    content: "",  
    price: "",
    description: "",
    
  });
console.log(wishlist,"ddddddddddddd")

  useEffect(() => {
    axios.get('http://localhost:4000/Sarvices')
      .then(response => {
        setCardsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const toggleWishlist = async (cardId) => {
    if (wishlist.includes(cardId)) {
      try {
        // إلغاء إعجاب بالكارد
        await axios.delete(`http://localhost:4000/wishlist/${cardId}`);
        setWishlist(wishlist.filter((id) => id !== cardId));
        setUserFavorites(userFavorites.filter((card) => card.id !== cardId));
      } catch (error) {
        console.error('Error removing from favorites:', error);
      }
    } else {
      try {
        // إضافة الكارد إلى المفضلة
        await axios.post(`http://localhost:4000/wishlist`, { cardId });
        setWishlist([...wishlist, cardId]);
        setUserFavorites([...userFavorites, cardsData.find((card) => card.id === cardId)]);
      } catch (error) {
        console.error('Error adding to favorites:', error);
      }
    }
  };

  const handleSearch = () => {
    axios.get('http://localhost:4000/Sarvices')
      .then(response => {
        const filteredCards = response.data.filter(
          (card) =>
            card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.price.toLowerCase().includes(searchTerm.toLowerCase()) 

        );
        setCardsData(filteredCards);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  
  return (
    <div className="flex flex-col items-center">
      <div>
      <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg mb-4"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-lg mb-4 ml-2">
          Search
        </button>
        <h1 className="text-3xl font-bold my-4">Hourly Cleaning</h1>
        <h3 className="text-sm text-center text-gray-600 my-6">
          Awesome site. On the top advertising a business online includes
          <br />
          assembling Having the most keep.
        </h3>
        <div className="flex flex-wrap justify-center gap-20">
          {cardsData.slice(0, 3).map((card, index) => (
            <div key={index} id='lala' className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={card.image} alt="" />
              <div className="p-4 text-center">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                  {card.description}
                </p>
                <p className="text-bold text-gray-700 dark:text-gray-400 mb-4">
                  {card.price}
                </p>
                <button
                  onClick={() => toggleWishlist(card.id)}
                  className={`${
                    wishlist.includes(card.id) ? 'text-red-500' : 'text-blue-500'
                  } text-2xl focus:outline-none`}
                >
                  &#x2764;
                </button>
                <Link
                  to={`/Detelis/${card.id}`}
                  id='Read' className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                >
                  Datiles
                  <svg
                    className="w-3 h-3 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Categories;
