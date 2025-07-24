export const carReducer = (state, action) => {
  switch (action.type) {
    case "SET_CARS":
      return { ...state, cars: action.payload, filteredCars: [] };
    case "FILTER_BY_PRICE":
      return {
        ...state,
        filteredCars: state.cars.filter((car) => car.price <= action.payload),
      };
    default:
      return state;
  }
};
