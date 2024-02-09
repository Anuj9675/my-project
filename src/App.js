import React, { useEffect, useState } from 'react';
import axios from 'axios';


const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {userData && (
        <div className="max-w-md rounded overflow-hidden shadow-lg bg-white">
          <div className="p-4 flex">
            <img
              className="w-32 h-32 object-cover rounded mr-4"
              src={userData.picture.large}
              alt={`${userData.name.first} ${userData.name.last}`}
            />
            <div>
              <div className="font-bold text-xl mb-2">
                {userData.name.first} {userData.name.last}
              </div>
              <p className="text-gray-700 text-base">
                Gender: {userData.gender}<br />
                Phone: {userData.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
