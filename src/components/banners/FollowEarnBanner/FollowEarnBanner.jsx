import { useState } from "react";
import {
  Bell,
  Check,
  BadgeCheck,
  Megaphone,
  UsersRound,
  Coins
} from "lucide-react";
import RewardBannerShell from "../../ui/RewardBannerShell";
import BannerBadge from "../../ui/BannerBadge";
import BannerCTA from "../../ui/BannerCTA";
import RewardPill from "../../ui/RewardPill";
import copy from "../../../styles/copy.module.css";
import styles from "./FollowEarnBanner.module.css";
import followEarnIllustration from "../../../assets/follow-earn-illustration.png";

export default function FollowEarnBanner() {
  const [following, setFollowing] = useState(false);

  return (
    <RewardBannerShell number="04" label="Follow VELOOP Rewards and earn on eligible campaigns">
      <div className={copy.copy}>
        <BannerBadge tone="violet" icon={<Megaphone size={13} strokeWidth={2.3} />}>
          Follow &amp; Earn
        </BannerBadge>

        <h2 className={copy.heading}>
          Stay Connected. <br />
          <span className={styles.accent}>Get Rewarded.</span>
        </h2>

        <p className={copy.lead}>
          Follow @velooprewards on socials and join eligible campaigns to
          unlock rewards.
        </p>

        <div className={copy.metaRow}>
          <RewardPill tone="violet" icon={<UsersRound size={14} />}>
            Official channels
          </RewardPill>
          <RewardPill tone="neutral" icon={<Bell size={14} />}>
            Campaign alerts
          </RewardPill>
        </div>

        <div className={copy.ctaRow}>
          <BannerCTA
            tone="violet"
            onClick={() => setFollowing((value) => !value)}
            arrow={!following}
            label="Explore official VELOOP Rewards channels (demo)"
          >
            {following ? "Following" : "Explore Our Channels"}
            {following && <Check size={16} strokeWidth={2.6} />}
          </BannerCTA>
        </div>

        <p className={copy.note}>
          Rewards only apply to officially active campaigns.
        </p>
      </div>

      <div className={styles.visual}>
        <div className={styles.baseGlow} aria-hidden="true" />

        <img
          className={styles.illustration}
          src={followEarnIllustration}
          alt="Phone showing the VELOOP social profile for following and earning rewards"
          draggable="false"
        />

        <div className={styles.campaignCard}>
          <div className={styles.cardHead}>
            <span className={styles.cardIcon}>
              <Megaphone size={14} strokeWidth={2.2} />
            </span>
            <div className={styles.cardTitle}>
              <b>Demo Campaign</b>
              <small>Eligible · active</small>
            </div>
          </div>
          <div className={styles.cardReward}>
            <span className={styles.cardCoin}>
              <Coins size={15} strokeWidth={2.2} />
            </span>
            <strong>+500 SVEs</strong>
          </div>
          <p className={styles.cardDesc}>
            Participate in eligible social campaigns and unlock rewards.
          </p>
        </div>

        <div className={styles.rewardFloat} aria-hidden="true">
          <RewardPill tone="violet" icon={<BadgeCheck size={13} />}>
            Eligible reward
          </RewardPill>
        </div>
      </div>
    </RewardBannerShell>
  );
}