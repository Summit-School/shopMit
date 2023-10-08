// import { useEffect, useState } from 'react';

// // Custom function to fetch data for single categories
// const useFetch = (apiUrl, category) => {
//   const [auto, setAuto] = useState([]);
//   console.log(`This is the length of the array ${auto.length}`)  
//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setAuto(data);
//       })
//       .catch((err) => {
//         console.error(err);
//         setAuto([]); // Handle errors by setting an empty array
//       });
//   }, [category, apiUrl]);

//   useEffect(() => {
//     console.log(auto); // Log auto whenever it changes

//   }, [auto]);

//   return auto;
// };




// // Custom function to fetch data for multiple categories and aggregate it
// const fetchCategoryData = async (categories,apiUrl) => {
//   const allCategoryData = {};

//   await Promise.all(
//     categories.map(async (category) => {
//       const categoryData = await useFetch(apiUrl,category);
//       allCategoryData[category] = categoryData;
//     })
//   );

//   return allCategoryData;
// };

//   export  {useFetch,fetchCategoryData};


import { useEffect, useState } from 'react';

// Custom hook to fetch data for a single category
const useCategoryData = (category) => {
  const [data, setData] = useState([]);
  const apiUrl = `http://localhost:5000/${category}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const categoryData = await response.json();
        setData(categoryData);
      } catch (error) {
        console.error(`Error fetching data for category ${category}:`, error);
      }
    };

    fetchData();
  }, [category, apiUrl]);

  return data;
};

// Custom function to fetch data for multiple categories and aggregate it
const fetchCategoryData = async (categories) => {
  const allCategoryData = {};

  await Promise.all(
    categories.map(async (category) => {
      const categoryData = await useCategoryData(category);
      allCategoryData[category] = categoryData;
    })
  );

  return allCategoryData;
};

export { useCategoryData, fetchCategoryData };
