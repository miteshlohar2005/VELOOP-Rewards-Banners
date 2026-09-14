import { useEffect, useRef, useState } from "react";
import { Play, Check, Wallet, Zap, ShieldCheck, MonitorPlay } from "lucide-react";
import RewardBannerShell from "../../ui/RewardBannerShell";
import BannerBadge from "../../ui/BannerBadge";
import BannerCTA from "../../ui/BannerCTA";
import RewardPill from "../../ui/RewardPill";
import copy from "../../../styles/copy.module.css";
import styles from "./WatchAdBanner.module.css";

const STEPS = [
  { key: "watch", label: "Watch" },
  { key: "complete", label: "Complete" },
  { key: "earn", label: "Earn" }
];

const COINS = [
  { className: styles.coinA },
  { className: styles.coinB },
  { className: styles.coinC }
];

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

  const activeStep = phase === "done" ? 2 : phase === "watching" ? 1 : 0;

  const ctaLabel =
    phase === "watching"
      ? "Watching…"
      : phase === "done"
        ? "Ad Completed"
        : "Watch & Earn";

  return (
    <RewardBannerShell number="02" label="Watch ads and earn VEs">
      <div className={copy.copy}>
        <BannerBadge tone="blue" icon={<MonitorPlay size={13} strokeWidth={2.3} />}>
          On-Demand Rewards
        </BannerBadge>

        <h2 className={copy.heading}>
          Watch Ads. <br />
          <span className={styles.accent}>Earn VEs.</span>
        </h2>

        <p className={copy.lead}>
          Watch eligible advertisements and earn VEs for completing available
          ad activities.
        </p>

        <div className={copy.metaRow}>
          <RewardPill tone="neutral" icon={<ShieldCheck size={14} />}>
            No daily cap
          </RewardPill>
          <RewardPill tone="blue" icon={<Zap size={14} />}>
            Instant credits
          </RewardPill>
        </div>

        <div className={copy.ctaRow}>
          <BannerCTA
            tone="blue"
            onClick={startWatch}
            disabled={phase === "watching"}
            arrow={phase === "idle"}
            label="Watch an ad activity to earn VEs (simulated)"
          >
            {phase === "done" ? <Check size={17} strokeWidth={2.6} /> : <Play size={15} fill="currentColor" strokeWidth={2.4} />}
            {ctaLabel}
          </BannerCTA>
          {phase === "done" && (
            <span className={styles.creditNote} role="status">
              Demo reward credited
            </span>
          )}
        </div>

        <p className={copy.note}>Simulated flow — no real ad network is used.</p>
      </div>

      <div className={styles.visual}>
        <div className={styles.baseGlow} aria-hidden="true" />

        <div className={`${styles.device} ${phase === "watching" ? styles.devicePlaying : ""}`}>
          <div className={styles.deviceTop}>
            <span className={styles.adTag}>AD</span>
            <span className={styles.duration}>
              {phase === "done" ? "00:00" : "00:30"}
            </span>
          </div>

          <div
            className={`${styles.playButton} ${phase === "done" ? styles.playDone : ""}`}
            aria-hidden="true"
          >
            {phase === "done" ? (
              <Check size={30} strokeWidth={3} />
            ) : (
              <Play size={30} fill="currentColor" strokeWidth={2.2} />
            )}
          </div>

          <div className={styles.progress} aria-hidden="true">
            <i className={phase === "watching" ? styles.progressActive : ""} />
          </div>

          <span className={styles.screenCaption}>
            {phase === "idle"
              ? "Tap Watch & Earn to preview"
              : phase === "watching"
                ? "Playing ad — complete to earn"
                : "Ad completed — reward credited"}
          </span>
        </div>

        {COINS.map((coin, index) => (
          <span key={index} className={`${styles.coin} ${coin.className}`} aria-hidden="true">
            VE
          </span>
        ))}

        <div className={`${styles.wallet} ${phase === "done" ? styles.walletCredited : ""}`} aria-live="polite">
          <span className={styles.walletIcon}>
            <Wallet size={17} strokeWidth={2.2} />
          </span>
          <span className={styles.walletText}>
            <small>VE Wallet</small>
            <strong className={phase === "done" ? styles.walletAmount : ""}>
              {phase === "done" ? "+38 VEs" : "Ready"}
            </strong>
          </span>
          {phase === "done" && (
            <span className={styles.walletFlash} role="status">
              Credited
            </span>
          )}
        </div>

        <ol className={styles.steps} aria-label="Watch complete earn steps">
          {STEPS.map((step, index) => (
            <li
              key={step.key}
              className={`${styles.step} ${
                index < activeStep
                  ? styles.stepDone
                  : index === activeStep
                    ? styles.stepActive
                    : ""
              }`}
            >
              <span className={styles.stepIndex}>
                {index < activeStep ? <Check size={12} strokeWidth={3} /> : index + 1}
              </span>
              {step.label}
            </li>
          ))}
        </ol>
      </div>
    </RewardBannerShell>
  );
}