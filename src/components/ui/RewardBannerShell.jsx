import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./RewardBannerShell.module.css";

export default function RewardBannerShell({ number, label, accent = "", className = "", children }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (typeof IntersectionObserver !== "function") {
      setRevealed(true);
      return undefined;
    }
    let io;
    const reveal = () => {
      setRevealed(true);
      if (io) io.disconnect();
    };
    const height = window.innerHeight || document.documentElement.clientHeight;
    if (el.getBoundingClientRect().top < height - 48) {
      reveal();
      return undefined;
    }
    io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) reveal();
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
    return () => io && io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.shell} ${revealed ? styles.isRevealed : ""} ${accent} ${className}`}
      aria-label={label}
      data-revealed={revealed ? "true" : "false"}
    >
      <span aria-hidden="true" className={styles.indexChip}>
        {String(number).padStart(2, "0")}
      </span>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}

RewardBannerShell.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  accent: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};