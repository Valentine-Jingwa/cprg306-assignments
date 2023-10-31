import React, { useState, useEffect } from 'react';
import './res/styles.css';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
};

const fetchMealDetails = async (id) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);  // Added this line
  const [isModalOpen, setIsModalOpen] = useState(true);

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    if (fetchedMeals) {
      setMeals(fetchedMeals);
    }
  };

  const loadMealDetails = async (id) => {  // Moved this function inside the component
    const details = await fetchMealDetails(id);
    setMealDetails(details);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <>
      {isModalOpen && (
        <div className="modal flex items-center justify-center h-screen bg-opacity-50 bg-black fixed inset-0 overflow-y-auto" onClick={closeModal}>
          <div className="modal-content bg-grey-200 p-6 rounded-lg w-1/2" onClick={e => e.stopPropagation()}>
            <h1 className="text-2xl mb-4 text-center">Here are some meal ideas using {ingredient}</h1>
            <ul className={`flex ${meals.length > 5 ? 'overflow-x-auto' : ''} divide-y divide-gray-300`} >
                {meals && meals.length > 0 ? (
                    meals.map((meal) => (
                    <li className="py-2 px-4 hover:bg-blue-100 cursor-pointer text-center" key={meal.idMeal} onClick={() => loadMealDetails(meal.idMeal)}>
                        {meal.strMeal}
                    </li>
                    ))
                ) : (
                    <li>No meals found for this ingredient.</li>
                )}
            </ul>

            <div className=" mt-6">
              <h1 className="text-2xl mb-4">Meal Details</h1>
              {mealDetails && (
                <div>
                  <h2 className="text-xl mb-2">{mealDetails.strMeal}</h2>
                    <div className="flex flex-column ml-4">
                        <img className="w-1/6 object-cover rounded-lg m-4" src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
                        <p className="text-sm">{mealDetails.strInstructions}</p>
                    </div>
                </div>
              )}
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
export default MealIdeas;
