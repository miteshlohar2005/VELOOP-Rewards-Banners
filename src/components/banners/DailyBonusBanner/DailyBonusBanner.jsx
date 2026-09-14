import { useState } from "react";
import { Gift, Check, CalendarCheck2, Gem, Coins } from "lucide-react";
import RewardBannerShell from "../../ui/RewardBannerShell";
import BannerBadge from "../../ui/BannerBadge";
import BannerCTA from "../../ui/BannerCTA";
import RewardPill from "../../ui/RewardPill";
import copy from "../../../styles/copy.module.css";
import styles from "./DailyBonusBanner.module.css";

const STREAK_DAYS = [1, 2, 3, 4, 5, 6, 7];

export default function DailyBonusBanner() {
  const [claimed, setClaimed] = useState(false);

  return (
    <RewardBannerShell number="05" label="Daily bonus — claim your available reward">
      <div className={copy.copy}>
        <BannerBadge tone="amber" icon={<Gift size={13} strokeWidth={2.3} />}>
          Daily Bonus
        </BannerBadge>

        <h2 className={copy.heading}>
          Your Daily Bonus <br />
          <span className={styles.accent}>Is Waiting.</span>
        </h2>

        <p className={copy.lead}>
          Check in regularly and claim your available daily bonus before the
          opportunity resets.
        </p>

        <div className={copy.metaRow}>
          <RewardPill tone="amber" icon={<CalendarCheck2 size={14} />}>
            7-day streak
          </RewardPill>
          <RewardPill tone="neutral" icon={<Coins size={14} />}>
            Resets daily
          </RewardPill>
        </div>

        <div className={copy.ctaRow}>
          <BannerCTA
            tone="amber"
            onClick={() => setClaimed(true)}
            disabled={claimed}
            arrow={!claimed}
            label="Claim the daily bonus"
          >
            {claimed ? <Check size={17} strokeWidth={2.6} /> : <Gift size={16} strokeWidth={2.2} />}
            {claimed ? "Bonus Claimed" : "Claim Bonus"}
          </BannerCTA>
          {claimed && (
            <span className={styles.claimNote} role="status">
              Demo reward marked as claimed
            </span>
          )}
        </div>

        <p className={copy.note}>Demo only — no reward is actually issued.</p>
      </div>

      <div className={styles.visual}>
        <div className={styles.baseGlow} aria-hidden="true" />

        <div className={styles.todayCard} aria-live="polite">
          <span className={styles.todayIcon}>
            <Gift size={16} strokeWidth={2.2} />
          </span>
          <div className={styles.todayText}>
            <small>TODAY&apos;S BONUS</small>
            <strong>{claimed ? "Claimed" : "+25 GEMS"}</strong>
            <span>
              {claimed ? "Next reset tomorrow" : "Available now"}
            </span>
          </div>
        </div>

        <div className={styles.giftStage}>
          <div className={`${styles.giftBox} ${claimed ? styles.giftOpen : ""}`}>
            <span className={`${styles.giftLid} ${claimed ? styles.lidLift : ""}`} aria-hidden="true" />
            <span className={styles.giftBody} aria-hidden="true">
              <Gem
                size={46}
                strokeWidth={1.5}
                className={styles.gemIcon}
                aria-hidden="true"
              />
            </span>
          </div>
        </div>

        <div className={styles.coins} aria-hidden="true">
          <span className={`${styles.riseCoin} ${styles.coinOne}`}>+10</span>
          <span className={`${styles.riseCoin} ${styles.coinTwo}`}>+5</span>
          <span className={`${styles.riseCoin} ${styles.coinThree}`}>+10</span>
        </div>

        <div className={styles.streakCard} aria-label="7-day bonus streak">
          <div className={styles.streakHead}>
            <span className={styles.streakIcon}>
              <CalendarCheck2 size={15} strokeWidth={2.2} />
            </span>
            <b>7-DAY STREAK</b>
            <span className={styles.streakPercent} aria-hidden="true">
              {claimed ? "100%" : "86%"}
            </span>
          </div>
          <div className={styles.days}>
            {STREAK_DAYS.map((day) => (
              <span
                key={day}
                className={`${styles.day} ${claimed || day < 7 ? styles.dayDone : ""}`}
                aria-hidden="true"
              >
                {claimed || day < 7 ? <Check size={11} strokeWidth={3.2} /> : day}
              </span>
            ))}
          </div>
          <div className={styles.streakFoot}>
            <strong>
              {claimed ? "7/7 — Streak complete" : "6 days completed"}
            </strong>
            <small>
              {claimed ? "Back tomorrow for the next cycle" : "Come back tomorrow!"}
            </small>
          </div>
        </div>
      </div>
    </RewardBannerShell>
  );
}