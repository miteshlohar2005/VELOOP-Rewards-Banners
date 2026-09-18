import { useEffect, useRef, useState } from "react";
import { MessageCircle, Mail, Copy, Check } from "lucide-react";
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
      </div>
    </RewardBannerShell>
  );
}