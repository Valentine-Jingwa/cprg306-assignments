"use client"
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
  const loadMealDetails = async (id) => {
    const details = await fetchMealDetails(id);
    setMealDetails(details);
  };

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true); // Add this line

  const loadMealIdeas = async () => {
    try {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      if (fetchedMeals) { // Check if fetchedMeals is not null or undefined
        setMeals(fetchedMeals);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  const closeModal = () => { // Add this function
    setIsModalOpen(false);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h1>Here are some meal ideas using {ingredient}</h1>
            <ul>
                {meals && meals.length > 0 ? (
                meals.map((meal) => (
                    <li key={meal.idMeal} onClick={() => loadMealDetails(meal.idMeal)}>{meal.strMeal}</li>
                ))
            ) : (
                <li>No meals found for this ingredient.</li>
              )}
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MealIdeas;
