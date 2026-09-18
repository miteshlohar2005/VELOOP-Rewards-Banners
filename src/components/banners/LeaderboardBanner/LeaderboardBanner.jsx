import { useState } from "react";
import { Trophy, Coins, TrendingUp } from "lucide-react";
import RewardBannerShell from "../../ui/RewardBannerShell";
import BannerBadge from "../../ui/BannerBadge";
import BannerCTA from "../../ui/BannerCTA";
import RewardPill from "../../ui/RewardPill";
import copy from "../../../styles/copy.module.css";
import styles from "./LeaderboardBanner.module.css";
import leaderboardIllustration from "../../../assets/leaderboard-illustration.png";

export default function LeaderboardBanner() {
  const [open, setOpen] = useState(false);

  return (
    <RewardBannerShell number="01" label="Leaderboard — Rank higher, earn more">
      <div className={copy.copy}>
        <BannerBadge tone="gold" icon={<Trophy size={13} strokeWidth={2.4} />}>
          Competition Stage
        </BannerBadge>

        <h2 className={copy.heading}>
          Rank Higher.
          <br />
          <span className={styles.accent}>Earn More.</span>
        </h2>

        <p className={copy.lead}>
          Complete activities, earn rewards, gain XP, and compete with other
          users to climb the leaderboard.
        </p>

        <div className={copy.metaRow}>
          <RewardPill tone="gold" icon={<Coins size={14} />}>
            50K VE prize pool
          </RewardPill>
          <RewardPill tone="neutral" icon={<TrendingUp size={14} />}>
            Weekly reset
          </RewardPill>
        </div>

        <div className={copy.ctaRow}>
          <BannerCTA
            tone="gold"
            onClick={() => setOpen((value) => !value)}
            label="Check the leaderboard rankings (demo)"
          >
            {open ? "Rankings Open" : "Check Rankings"}
          </BannerCTA>
          {open && (
            <span className={styles.statusNote} role="status">
              Rankings are now live — demo
            </span>
          )}
        </div>

        <p className={copy.note}>Demo data — connect live rankings when available.</p>
      </div>

      <div className={styles.visual}>
        <div className={styles.baseGlow} aria-hidden="true" />

        <img
          className={styles.illustration}
          src={leaderboardIllustration}
          alt="Competitors on the VELOOP leaderboard with a trophy and podium"
          draggable="false"
        />

        <RewardPill tone="gold" icon={<Trophy size={13} />} className={styles.poolChip}>
          50K VE Reward Pool
        </RewardPill>
      </div>
    </RewardBannerShell>
  );
}