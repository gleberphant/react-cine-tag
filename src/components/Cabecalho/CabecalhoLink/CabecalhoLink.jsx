import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.module.css";

export default function CabecalhoLink({ children, url }) {
  return (
    <>
      <Link className={styles.link} to={url}>
        {children}
      </Link>
    </>
  );
}
