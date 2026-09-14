import PropTypes from "prop-types";
import styles from "./BannerBadge.module.css";

export default function BannerBadge({ tone = "gold", icon, children }) {
  return (
    <span className={`${styles.badge} ${styles[tone]}`}>
      {icon ? (
        <span className={styles.iconMark} aria-hidden="true">
          {icon}
        </span>
      ) : (
        <span className={styles.dot} aria-hidden="true" />
      )}
      <span className={styles.text}>{children}</span>
    </span>
  );
}

BannerBadge.propTypes = {
  tone: PropTypes.oneOf(["gold", "blue", "steel", "violet", "amber"]),
  icon: PropTypes.node,
  children: PropTypes.node
};