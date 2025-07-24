import React, { createContext, useReducer, useEffect } from "react";
import { carReducer } from "./carReducer";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const initialState = { cars: [], filteredCars: [] };
  const [state, dispatch] = useReducer(carReducer, initialState);

  useEffect(() => {
    fetch("http://localhost:3001/Cars")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_CARS", payload: data }))
      .catch(console.error);
  }, []);

  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};
