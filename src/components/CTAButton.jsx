import PropTypes from "prop-types";
import styles from "./CTAButton.module.css";

export default function CTAButton({
  variant = "gold",
  href,
  onClick,
  disabled = false,
  className = "",
  label,
  children,
}) {
  const classes = `${styles.cta} ${styles[variant] || styles.gold} ${
    disabled ? styles.disabled : ""
  } ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} aria-label={label}>
        {children}
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
      {children}
    </button>
  );
}

CTAButton.propTypes = {
  variant: PropTypes.oneOf(["gold", "blue", "purple", "light"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node
};