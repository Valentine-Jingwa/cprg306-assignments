"use client";

import { useEffect, useState } from "react";

async function fetchRandomDog() {
  try{
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json(); //filters response to js object, removes headers
    return data.message; //from json response
  } 
  catch (error) {
    console.log(error);
  }
}
async function fetchDogBreed(){
  try{
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    return data.message;
  }
  catch (error) {
    console.log(error);
  }
}
// Promises can have three different states:
// 1.

export default function Page() {
  const [dog, setDog] = useState(" ");
  const [breeds, setBreed] = useState([]);

  async function loadRandomDog() {
    const randomDog = await fetchRandomDog();
    setDog(randomDog);
  }
  async function loadDogBreeds() {
    const dogBreed = await fetchDogBreed();
    setBreed(dogBreed);
  }
  const randomDog = fetchRandomDog();
  console.log(randomDog);

  useEffect(() => {
    loadRandomDog();
    loadDogBreeds();
  }, []);

  return (
    <main className="min-h-screen">
      <div className="flex-col item-center">
        <h1 className="text-2xl font-bold border bg-red-100">Dogs!</h1>
        <div className="flex w-full bg-blue-100">
          <select name="breed" className="border bg-blue-200 rounded text-black m-10 h-10 w-32">
            {Object.keys(breeds).map((breed) => {
                return <option key={breed} value={breed}>{breed}</option>;
              })}

          </select>
          <img className="rounded h-64 w-64" src={dog}></img>
        </div>
      </div>
    </main>
  );
}
