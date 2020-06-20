import countries_json from './countries.json';
import * as flags from './flags';

export const country_codes = Object.keys(countries_json);

const mapCountriesToImages = iconSize => (iso, index) => {
  const country = countries_json[iso];
  const icon = flags[`icons${iconSize}`][iso];
  const countryName = countries_json[iso].name
  return {
    currency: country.currency,
    country: country.value,
    name:country.name,
    icon,
  }
};

const getSelectedCountries = (countries, iconSize) => countries.map(mapCountriesToImages(iconSize));

const getAllCountries = (iconSize) => country_codes.map(mapCountriesToImages(iconSize));
  
const getOptions = (countries = [], iconSize = 32) =>
  countries.length
    ? getSelectedCountries(countries, iconSize)
    : getAllCountries(iconSize);

export default getOptions;