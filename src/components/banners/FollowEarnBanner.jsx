import { useState } from "react";
import {
  Instagram,
  UsersRound,
  Sparkles,
  ArrowRight,
  Gift,
  Check
} from "lucide-react";
import BannerShell from "../BannerShell";
import CTAButton from "../CTAButton";
import styles from "../../styles/banners.module.css";

export default function FollowEarnBanner() {
  const [following, setFollowing] = useState(false);

  return (
    <BannerShell number="04" eyebrow="Follow & Earn" className={styles.follow}>
      <div className={styles.copy}>
        <span className={`${styles.eyebrow} ${styles.purpleText}`}>
          <Instagram size={13} /> FOLLOW & EARN
        </span>
        <h2>
          Follow <span>& Earn.</span>
        </h2>
        <p>
          Follow VELOOP Rewards on our official social channels and discover
          exclusive updates, campaigns, and eligible rewards.
        </p>
        <CTAButton
          variant="purple"
          onClick={() => setFollowing((value) => !value)}
          label="Follow VELOOP Rewards on official channels (demo)"
        >
          {following ? <Check size={16} /> : <ArrowRight size={16} />}
          {following ? "Following" : "Follow & Earn"}
        </CTAButton>
        <p className={styles.demoNote}>
          Placeholder — link only officially active channels.
        </p>
      </div>

      <div className={styles.socialVisual}>
        <div className={styles.phoneStage}>
          <div className={styles.phone}>
            <div className={styles.phoneNotch} aria-hidden="true" />
            <div className={styles.profileLogo} aria-hidden="true">
              V
            </div>
            <strong>VELOOP Rewards</strong>
            <small>@velooprewards</small>
            <button
              type="button"
              className={following ? styles.followedBtn : ""}
              onClick={() => setFollowing((value) => !value)}
              aria-pressed={following}
            >
              {following ? "Following ✓" : "Follow"}
            </button>
            <div className={styles.stats}>
              <span>
                128
                <br />
                <small>Posts</small>
              </span>
              <span>
                {following ? "24.6K" : "24.5K"}
                <br />
                <small>Followers</small>
              </span>
              <span>
                180
                <br />
                <small>Following</small>
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.socialOrb} ${styles.orb1}`} aria-hidden="true">
          <Instagram size={22} />
        </div>
        <div className={`${styles.socialOrb} ${styles.orb2}`} aria-hidden="true">
          <UsersRound size={22} />
        </div>
        <div className={`${styles.socialOrb} ${styles.orb3}`} aria-hidden="true">
          <Sparkles size={22} />
        </div>
        <div className={styles.campaignCard}>
          <Gift size={20} aria-hidden="true" />
          <div>
            <b>Eligible campaign</b>
            <small>Participate & unlock follower rewards.</small>
          </div>
          <strong>{following ? "+500 VEs ✓" : "+500 VEs"}</strong>
        </div>
      </div>
    </BannerShell>
  );
}