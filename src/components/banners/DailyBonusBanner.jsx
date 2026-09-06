import { useState } from "react";
import { Gift, CheckCircle2 } from "lucide-react";
import BannerShell from "../BannerShell";
import CTAButton from "../CTAButton";
import styles from "../../styles/banners.module.css";

const STREAK_DAYS = [1, 2, 3, 4, 5, 6, 7];

export default function DailyBonusBanner() {
  const [claimed, setClaimed] = useState(false);

  return (
    <BannerShell number="05" eyebrow="Daily Bonus" className={styles.daily}>
      <div className={styles.copy}>
        <span className={`${styles.eyebrow} ${styles.goldText}`}>
          <Gift size={13} /> DAILY BONUS
        </span>
        <h2>
          Your Daily Bonus
          <br />
          <span>Is Waiting.</span>
        </h2>
        <p>
          Check in regularly and claim your available daily bonus before the
          day resets.
        </p>
        <CTAButton
          variant="gold"
          onClick={() => setClaimed(true)}
          disabled={claimed}
          label="Claim the daily bonus"
        >
          {claimed ? <CheckCircle2 size={16} /> : <Gift size={16} />}
          {claimed ? "Bonus Claimed" : "Claim Bonus"}
        </CTAButton>
        <p className={styles.demoNote}>
          Demo only — no reward is actually issued.
        </p>
      </div>

      <div className={styles.dailyVisual}>
        <div className={styles.giftStage}>
          <div className={`${styles.giftBox} ${claimed ? styles.giftOpen : ""}`}>
            <Gift size={70} aria-hidden="true" />
            <span>VE</span>
          </div>
        </div>
        <div className={styles.gems} aria-live="polite">
          {claimed ? "+25 ✓" : "+25"}
          <small>GEMS</small>
        </div>
        <div className={styles.bonusCard}>
          <small>TODAY&apos;S BONUS</small>
          <strong>{claimed ? "CLAIMED" : "+25 GEMS"}</strong>
          <span>{claimed ? "Next bonus resets tomorrow" : "Available now"}</span>
        </div>
        <div className={styles.streak} aria-label="7-day streak">
          <b>7-DAY STREAK</b>
          <div>
            {STREAK_DAYS.map((day) => (
              <i
                key={day}
                className={claimed || day < 7 ? styles.doneDay : ""}
              >
                {day}
              </i>
            ))}
          </div>
          <strong>{claimed ? "7/7 Streak Complete ✓" : "6 Days Completed"}</strong>
          <small>Come back tomorrow to keep it alive.</small>
        </div>
      </div>
    </BannerShell>
  );
}