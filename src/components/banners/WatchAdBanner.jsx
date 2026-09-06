import { useEffect, useRef, useState } from "react";
import { Play, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import BannerShell from "../BannerShell";
import CTAButton from "../CTAButton";
import styles from "../../styles/banners.module.css";

const COIN_LABELS = ["VE", "VE", "VE", "VE"];

export default function WatchAdBanner() {
  const [phase, setPhase] = useState("idle"); // idle | watching | done
  const timer = useRef(null);

  const startWatch = () => {
    if (phase === "watching") return;
    setPhase("watching");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPhase("done"), 2600);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  const ctaLabel =
    phase === "watching"
      ? "Watching…"
      : phase === "done"
        ? "Ad Completed"
        : "Watch & Earn";

  return (
    <BannerShell number="02" eyebrow="On-Demand Rewards" className={styles.watch}>
      <div className={styles.copy}>
        <span className={`${styles.eyebrow} ${styles.blueText}`}>
          <Play size={12} /> ON-DEMAND REWARDS
        </span>
        <h2>
          Watch Ads. <span>Earn VEs.</span>
        </h2>
        <p>
          Watch eligible advertisements and earn VEs every time you complete an
          available ad activity.
        </p>
        <div className={styles.featureRow} aria-hidden="true">
          <span>◉ No Daily Cap</span>
          <span>⬆ Instant Credits</span>
        </div>
        <CTAButton
          variant="blue"
          onClick={startWatch}
          disabled={phase === "watching"}
          label="Watch an ad activity to earn VEs (simulated)"
        >
          {phase === "done" ? (
            <CheckCircle2 size={16} />
          ) : (
            <Play size={15} fill="currentColor" />
          )}
          {ctaLabel}
          {phase === "idle" && <ArrowRight size={16} />}
        </CTAButton>
        <p className={styles.demoNote}>
          Simulated flow — no real ad network is used.
        </p>
      </div>

      <div className={styles.adVisual}>
        <div
          className={`${styles.screen} ${phase === "watching" ? styles.playing : ""}`}
        >
          <div className={styles.screenTop}>
            <span>VELOOP AD</span>
            <span>00:30</span>
          </div>
          <div
            className={`${styles.playCircle} ${phase === "done" ? styles.playDone : ""}`}
            aria-hidden="true"
          >
            <Play size={38} fill="currentColor" />
          </div>
          <div className={styles.videoBar}>
            <i />
          </div>
        </div>
        <div className={styles.wallet} aria-live="polite">
          <span>{phase === "done" ? "+38" : "VE"}</span>
          <b>
            {phase === "done"
              ? "Credited"
              : phase === "watching"
                ? "Watching…"
                : "Rewards"}
          </b>
        </div>
        {COIN_LABELS.map((label, index) => (
          <span
            key={index}
            aria-hidden="true"
            className={`${styles.coin} ${styles[`coin${index}`]}`}
          >
            {label}
          </span>
        ))}
        <div
          className={`${styles.earnBadge} ${phase === "done" ? styles.earnDone : ""}`}
        >
          <Sparkles size={13} />
          {phase === "done"
            ? "Reward credited +38 VEs"
            : phase === "watching"
              ? "Ad playing… complete to earn"
              : "Watch → Complete → Earn"}
        </div>
      </div>
    </BannerShell>
  );
}