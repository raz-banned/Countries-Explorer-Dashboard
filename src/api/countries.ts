export const allCountries = () =>
  'https://restcountries.com/v3.1/all?fields=name,capital,currencies,cca3,region,flag,population,languages,capital';

export const countryByCode = (code: string) =>
  `https://restcountries.com/v3.1/alpha/${code}?fields=name,capital,currencies,cca3,region,flag,population,languages,capital`;
