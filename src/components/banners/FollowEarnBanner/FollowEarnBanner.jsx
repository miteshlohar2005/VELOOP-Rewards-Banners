import { useState } from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  Send,
  Heart,
  Bell,
  Check,
  BadgeCheck,
  Megaphone,
  UsersRound
} from "lucide-react";
import RewardBannerShell from "../../ui/RewardBannerShell";
import BannerBadge from "../../ui/BannerBadge";
import BannerCTA from "../../ui/BannerCTA";
import RewardPill from "../../ui/RewardPill";
import copy from "../../../styles/copy.module.css";
import styles from "./FollowEarnBanner.module.css";

const CHANNELS = [
  { icon: Instagram, className: styles.orbA },
  { icon: Youtube, className: styles.orbB },
  { icon: Facebook, className: styles.orbC },
  { icon: Send, className: styles.orbD }
];

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

        <div className={styles.phoneStage}>
          <div className={styles.phone}>
            <span className={styles.phoneNotch} aria-hidden="true" />
            <div className={styles.screen}>
              <div className={styles.profileTop}>
                <div className={styles.profileAvatar} aria-hidden="true">
                  <span>V</span>
                </div>
                <div className={styles.profileMeta}>
                  <strong>
                    VELOOP Rewards
                    <BadgeCheck size={14} className={styles.verifiedBadge} aria-hidden="true" />
                  </strong>
                  <small>@velooprewards</small>
                </div>
              </div>

              <div className={styles.followArea}>
                <button
                  type="button"
                  className={`${styles.followBtn} ${following ? styles.followed : ""}`}
                  onClick={() => setFollowing((value) => !value)}
                  aria-pressed={following}
                >
                  {following ? <Check size={13} strokeWidth={3} /> : null}
                  {following ? "Following" : "Follow"}
                </button>
              </div>

              <div className={styles.stats}>
                <div>
                  <b>128</b>
                  <span>Posts</span>
                </div>
                <div>
                  <b>{following ? "24.6K" : "24.5K"}</b>
                  <span>Followers</span>
                </div>
                <div>
                  <b>180</b>
                  <span>Following</span>
                </div>
              </div>

              <div className={styles.campaignChip}>
                <Megaphone size={13} aria-hidden="true" />
                <span>Campaigns live each week</span>
              </div>
            </div>
          </div>
        </div>

        {CHANNELS.map(({ icon: Icon, className }, index) => (
          <span key={index} className={`${styles.orb} ${className}`} aria-hidden="true">
            <Icon size={20} strokeWidth={2.1} />
          </span>
        ))}

        <div className={styles.notification} aria-hidden="true">
          <span className={styles.notificationIcon}>
            <Bell size={14} strokeWidth={2.3} />
          </span>
          <span className={styles.notificationText}>
            <b>New campaign</b>
            <small>Rewards live now</small>
          </span>
        </div>

        <div className={styles.heartFloat} aria-hidden="true">
          <Heart size={19} fill="currentColor" strokeWidth={2} />
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