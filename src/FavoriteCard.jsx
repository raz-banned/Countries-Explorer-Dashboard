import styles from "./FavoriteCard.module.css";

function FavoriteCard({ country }) {
  return <li className={styles.item}>{country?.name?.common}</li>;
}

export default FavoriteCard;
