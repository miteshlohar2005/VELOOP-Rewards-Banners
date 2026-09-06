import LeaderboardBanner from "./components/banners/LeaderboardBanner";
import WatchAdBanner from "./components/banners/WatchAdBanner";
import ContactBanner from "./components/banners/ContactBanner";
import FollowEarnBanner from "./components/banners/FollowEarnBanner";
import DailyBonusBanner from "./components/banners/DailyBonusBanner";
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
        <span className={styles.demoPill}>INTERNSHIP TASK • UI DEMO</span>
      </header>

      <h1 className={styles.srOnly}>VELOOP Rewards Engagement Banners</h1>

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