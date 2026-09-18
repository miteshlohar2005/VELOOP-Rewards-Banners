import { useState } from "react";
import { Trophy, Coins, TrendingUp, Crown } from "lucide-react";
import RewardBannerShell from "../../ui/RewardBannerShell";
import BannerBadge from "../../ui/BannerBadge";
import BannerCTA from "../../ui/BannerCTA";
import RewardPill from "../../ui/RewardPill";
import copy from "../../../styles/copy.module.css";
import styles from "./LeaderboardBanner.module.css";
import leaderboardIllustration from "../../../assets/leaderboard-illustration.png";

const rankings = [
  { rank: "01", name: "Aarav", value: "12,450", medal: "gold" },
  { rank: "02", name: "Maya", value: "11,820", medal: "silver" },
  { rank: "03", name: "Riya", value: "10,970", medal: "bronze" }
];

const AVATAR_GRADIENTS = {
  gold: ["#ffe1a6", "#c98e2a"],
  silver: ["#e4ebf7", "#7e8aa1"],
  bronze: ["#eab28a", "#95643a"]
};

// Visual podium order: silver on the left, champion centre, bronze right.
const podiumOrder = [rankings[1], rankings[0], rankings[2]];

export default function LeaderboardBanner() {
  const [open, setOpen] = useState(false);

  return (
    <RewardBannerShell number="01" label="Leaderboard — Rank higher, earn more">
      <div className={copy.copy}>
        <BannerBadge tone="gold" icon={<Trophy size={13} strokeWidth={2.4} />}>
          Competition Stage Active
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
            Current pool: 50,000 VEs in prizes
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

        <div className={styles.rankingRow}>
          {podiumOrder.map((user) => (
            <article
              key={user.rank}
              className={`${styles.rankCard} ${styles[user.medal]} ${
                user.rank === "01" ? styles.first : ""
              }`}
              style={{
                "--a1": AVATAR_GRADIENTS[user.medal][0],
                "--a2": AVATAR_GRADIENTS[user.medal][1]
              }}
            >
              <span className={styles.rankNum}>#{user.rank}</span>
              {user.rank === "01" && (
                <Crown size={15} strokeWidth={2.4} className={styles.crown} aria-hidden="true" />
              )}
              <div className={styles.avatar} aria-hidden="true">
                {user.name.charAt(0)}
              </div>
              <div className={styles.info}>
                <strong>{user.name}</strong>
                <span className={styles.veValue}>
                  <Coins size={12} aria-hidden="true" />
                  {user.value} VEs
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RewardBannerShell>
  );
}