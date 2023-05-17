import { Country, State, City } from "country-state-city";

export const getCountries = () => {
  return Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country.isoCode,
  }));
};

export const getAllStatesOfCountry = (countryCode) => {
  return State.getStatesOfCountry(countryCode).map((state) => ({
    label: state.name,
    value: state.isoCode,
  }));
};

export const getAllCitiesOfState = (countryCode, stateCode) => {
  return City.getCitiesOfState(countryCode, stateCode).map((city) => ({
    label: city.name,
    value: city.name,
  }));
};

export const getInitialStates = () => {
  return State.getStatesOfCountry("IN").map((state) => ({
    label: state.name,
    value: state.isoCode,
  }));
};

export const getInitialCities = () => {
  return City.getCitiesOfState("IN", "GJ").map((city) => ({
    label: city.name,
    value: city.name,
  }));
};
