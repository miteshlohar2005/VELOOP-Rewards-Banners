import { useState } from "react";
import { Gift, Check, CalendarCheck2, Coins } from "lucide-react";
import RewardBannerShell from "../../ui/RewardBannerShell";
import BannerBadge from "../../ui/BannerBadge";
import BannerCTA from "../../ui/BannerCTA";
import RewardPill from "../../ui/RewardPill";
import copy from "../../../styles/copy.module.css";
import styles from "./DailyBonusBanner.module.css";
import dailyBonusIllustration from "../../../assets/daily-bonus-illustration.png";

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

        <img
          className={styles.illustration}
          src={dailyBonusIllustration}
          alt="Gift box with a VE coin and surrounding coins for the daily bonus"
          draggable="false"
        />

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
      </div>
    </RewardBannerShell>
  );
}