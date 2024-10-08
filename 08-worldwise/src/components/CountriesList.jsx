import styles from "./CountriesList.module.css";
import Spinner from "../components/Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

function CountriesList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.some((el) => el.country === city.country)) {
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    }
    return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountriesList;
