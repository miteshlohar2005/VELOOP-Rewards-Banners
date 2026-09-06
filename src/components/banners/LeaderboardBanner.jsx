import { useState } from "react";
import { Trophy, ArrowRight, CheckCircle2 } from "lucide-react";
import BannerShell from "../BannerShell";
import CTAButton from "../CTAButton";
import styles from "../../styles/banners.module.css";

const rankings = [
  { rank: "01", name: "Aarav", value: "12,450 VEs", medal: "gold" },
  { rank: "02", name: "Maya", value: "11,820 VEs", medal: "silver" },
  { rank: "03", name: "Riya", value: "10,970 VEs", medal: "bronze" }
];

export default function LeaderboardBanner() {
  const [open, setOpen] = useState(false);

  return (
    <BannerShell number="01" eyebrow="Competition Stage Active" className={styles.leaderboard}>
      <div className={styles.copy}>
        <span className={`${styles.eyebrow} ${styles.goldText}`}>
          <Trophy size={13} /> COMPETITION STAGE ACTIVE
        </span>
        <h2>
          Rank Higher.
          <br />
          <span>Earn More.</span>
        </h2>
        <p>
          Complete activities, earn VEs, gain XP, and compete with other users
          to climb the leaderboard.
        </p>
        <div className={styles.miniReward}>
          <Trophy size={14} /> Current pool: <b>50,000 VEs</b> in prizes
        </div>
        <CTAButton
          variant="gold"
          onClick={() => setOpen((value) => !value)}
          label="Check the leaderboard rankings (demo)"
        >
          {open ? <CheckCircle2 size={16} /> : <ArrowRight size={17} />}
          {open ? "Rankings Open" : "Check Rankings"}
        </CTAButton>
        <p className={styles.demoNote}>
          Demo: connect your live rankings data here.
        </p>
      </div>

      <div className={styles.leaderVisual}>
        <div className={styles.chartLine} aria-hidden="true" />
        <div className={styles.trophyFixed}>
          <div className={styles.trophyWrap}>
            <Trophy className={styles.trophyIcon} aria-hidden="true" />
            <div className={styles.crownGlow} aria-hidden="true" />
          </div>
        </div>
        <div className={styles.podium}>
          {rankings.map((user, index) => (
            <article
              key={user.rank}
              className={`${styles.rankCard} ${styles[user.medal]} ${
                index === 0 ? styles.rankFirst : ""
              }`}
            >
              <span className={styles.rankNo}>{user.rank}</span>
              <div className={styles.avatar} aria-hidden="true">
                {user.name.slice(-1)}
              </div>
              <strong>{user.name}</strong>
              <small>{user.value}</small>
            </article>
          ))}
        </div>
        {open && (
          <div className={styles.floatingXP} role="status">
            +250 XP · Rank up!
          </div>
        )}
      </div>
    </BannerShell>
  );
}