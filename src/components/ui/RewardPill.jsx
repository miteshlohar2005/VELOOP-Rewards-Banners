import PropTypes from "prop-types";
import styles from "./RewardPill.module.css";

export default function RewardPill({ tone = "neutral", icon, className = "", children }) {
  return (
    <span className={`${styles.pill} ${styles[tone]} ${className}`}>
      {icon && (
        <span className={styles.iconMark} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.text}>{children}</span>
    </span>
  );
}

RewardPill.propTypes = {
  tone: PropTypes.oneOf(["neutral", "gold", "blue", "steel", "violet", "amber", "green"]),
  icon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
};