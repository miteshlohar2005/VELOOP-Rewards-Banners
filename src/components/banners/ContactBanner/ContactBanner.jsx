import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Mail,
  ChevronRight,
  Copy,
  Check,
  Headphones,
  LifeBuoy,
  Send
} from "lucide-react";
import RewardBannerShell from "../../ui/RewardBannerShell";
import BannerBadge from "../../ui/BannerBadge";
import BannerCTA from "../../ui/BannerCTA";
import RewardPill from "../../ui/RewardPill";
import copy from "../../../styles/copy.module.css";
import styles from "./ContactBanner.module.css";
import contactIllustration from "../../../assets/contact-illustration.png";

const SUPPORT_EMAIL = "velooprewardsofficial@gmail.com";

export default function ContactBanner() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef(null);

  const copyEmail = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard
      .writeText(SUPPORT_EMAIL)
      .then(() => {
        setCopied(true);
        clearTimeout(resetTimer.current);
        resetTimer.current = setTimeout(() => setCopied(false), 1800);
      })
      .catch(() => {});
  };

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  return (
    <RewardBannerShell number="03" label="Contact VELOOP Rewards support">
      <div className={copy.copy}>
        <BannerBadge tone="steel" icon={<MessageCircle size={13} strokeWidth={2.3} />}>
          Contact Us
        </BannerBadge>

        <h2 className={copy.heading}>
          Need Help? <br />
          <span className={styles.accent}>We&apos;re Here.</span>
        </h2>

        <p className={copy.lead}>Got a question? Reach out to the VELOOP Rewards team.</p>

        <div className={copy.metaRow}>
          <RewardPill tone="steel" icon={<Mail size={14} />}>
            {SUPPORT_EMAIL}
          </RewardPill>
        </div>

        <div className={copy.ctaRow}>
          <BannerCTA tone="steel" href={`mailto:${SUPPORT_EMAIL}`} label="Email VELOOP support">
            Contact Support
          </BannerCTA>
          <button
            type="button"
            className={styles.copyBtn}
            onClick={copyEmail}
            aria-label={copied ? "Email copied to clipboard" : "Copy support email to clipboard"}
          >
            {copied ? <Check size={15} strokeWidth={2.6} /> : <Copy size={15} strokeWidth={2.2} />}
            {copied ? "Copied" : "Copy Email"}
          </button>
        </div>

        {copied && (
          <span className="srOnly" role="status">
            Support email copied to clipboard
          </span>
        )}

        <p className={copy.note}>Typical response time — usually within 24 hours.</p>
      </div>

      <div className={styles.visual}>
        <div className={styles.baseGlow} aria-hidden="true" />

        <img
          className={styles.illustration}
          src={contactIllustration}
          alt="VELOOP support agent with a headset and chat for customer support"
          draggable="false"
        />

        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelTitle}>
              <Headphones size={15} strokeWidth={2.2} />
              We&apos;re here to help
            </span>
          </div>

          <a className={styles.row} href={`mailto:${SUPPORT_EMAIL}`}>
            <span className={styles.rowIcon}>
              <Mail size={15} strokeWidth={2.2} />
            </span>
            <span className={styles.rowText}>
              <b>Email Us</b>
              <small>{SUPPORT_EMAIL}</small>
            </span>
            <ChevronRight size={16} className={styles.rowChevron} />
          </a>

          <div className={styles.divider} aria-hidden="true" />

          <button type="button" className={styles.row} onClick={copyEmail}>
            <span className={styles.rowIcon}>
              {copied ? <Check size={15} strokeWidth={2.4} /> : <Copy size={15} strokeWidth={2.2} />}
            </span>
            <span className={styles.rowText}>
              <b>{copied ? "Copied!" : "Copy Email"}</b>
              <small>One-tap copy to clipboard</small>
            </span>
            <ChevronRight size={16} className={styles.rowChevron} />
          </button>

          <div className={styles.divider} aria-hidden="true" />

          <a
            className={styles.row}
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("VELOOP Support Ticket")}`}
          >
            <span className={styles.rowIcon}>
              <Send size={15} strokeWidth={2.2} />
            </span>
            <span className={styles.rowText}>
              <b>Submit a Ticket</b>
              <small>Open support email</small>
            </span>
            <ChevronRight size={16} className={styles.rowChevron} />
          </a>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.row}>
            <span className={styles.rowIcon}>
              <LifeBuoy size={15} strokeWidth={2.2} />
            </span>
            <span className={styles.rowText}>
              <b>Help Center</b>
              <small>Coming soon</small>
            </span>
            <span className={styles.comingSoon}>Soon</span>
          </div>
        </div>
      </div>
    </RewardBannerShell>
  );
}