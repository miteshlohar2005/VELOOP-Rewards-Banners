import PropTypes from "prop-types";
import { ArrowRight } from "lucide-react";
import styles from "./BannerCTA.module.css";

export default function BannerCTA({
  tone = "gold",
  href,
  onClick,
  disabled = false,
  arrow = true,
  className = "",
  label,
  children,
}) {
  const classes = `${styles.cta} ${styles[tone]} ${disabled ? styles.disabled : ""} ${className}`;

  const inner = (
    <>
      <span className={styles.label}>{children}</span>
      {arrow && (
        <ArrowRight
          size={16}
          strokeWidth={2.4}
          className={styles.arrow}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} aria-label={label}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {inner}
    </button>
  );
}

BannerCTA.propTypes = {
  tone: PropTypes.oneOf(["gold", "blue", "steel", "violet", "amber"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  arrow: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node
};