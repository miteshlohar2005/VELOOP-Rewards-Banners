import PropTypes from "prop-types";
import styles from "./BannerShell.module.css";

export default function BannerShell({ number, eyebrow, className = "", children }) {
  return (
    <section className={`${styles.banner} ${className}`} aria-label={eyebrow}>
      <span aria-hidden="true" className={styles.bannerNoise} />
      <span aria-hidden="true" className={styles.bannerNumber}>
        {number}
      </span>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

BannerShell.propTypes = {
  number: PropTypes.string,
  eyebrow: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};