import LeaderboardBanner from "./components/banners/LeaderboardBanner/LeaderboardBanner";
import WatchAdBanner from "./components/banners/WatchAdBanner/WatchAdBanner";
import ContactBanner from "./components/banners/ContactBanner/ContactBanner";
import FollowEarnBanner from "./components/banners/FollowEarnBanner/FollowEarnBanner";
import DailyBonusBanner from "./components/banners/DailyBonusBanner/DailyBonusBanner";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#banners">
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={styles.brandWrap}>
          <span className={styles.brand}>VELOOP</span>
          <span className={styles.brandDivider} aria-hidden="true" />
          <span className={styles.brandSub}>REWARDS</span>
        </div>
        <span className={styles.demoPill}>INTERNSHIP TASK · UI DEMO</span>
      </header>

      <h1 className="srOnly">VELOOP Rewards Engagement Banners</h1>

      <div className={styles.bannerStack} id="banners">
        <LeaderboardBanner />
        <WatchAdBanner />
        <ContactBanner />
        <FollowEarnBanner />
        <DailyBonusBanner />
      </div>

      <footer className={styles.footer}>
        <span>
          Demo / placeholder notice: ranking, reward, and streak values are
          development placeholders. No real backend is connected.
        </span>
        <strong>
          VELOOP <small>REWARDS</small>
        </strong>
      </footer>
    </main>
  );
}