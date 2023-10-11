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

const useCategoryData = (category = '') => {
  const [data, setData] = useState({});
  let apiUrl = 'http://localhost:5000/products';

  if (category!=='') {
    apiUrl += `?category=${category}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const categoryData = await response.json();
        setData(categoryData);
        console.log(`This are the category data from the useFetch function ${categoryData}`);
      } catch (error) {
        console.error(`Error fetching data for category ${category}:`, error);
      }
    };

    fetchData();
  }, [category, apiUrl]);

return {data,setData};
};

  // console.log(category);
  // console.log(`These are the products from the useFetch function ${JSON.stringify(data)}`);

  // console.log('These are the products from the useFetch function:');
  // data.forEach(product => console.log(product));



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
