import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Mail,
  ChevronRight,
  Headphones,
  Check
} from "lucide-react";
import BannerShell from "../BannerShell";
import CTAButton from "../CTAButton";
import styles from "../../styles/banners.module.css";

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
    <BannerShell number="03" eyebrow="Contact Us" className={styles.contact}>
      <div className={styles.copy}>
        <span className={`${styles.eyebrow} ${styles.blueText}`}>
          <MessageCircle size={13} /> CONTACT US
        </span>
        <h2>
          Need Help? <span>We&apos;re Here.</span>
        </h2>
        <p>
          Have a question, concern, or need assistance? Get in touch with the
          VELOOP Rewards support team.
        </p>
        <CTAButton variant="light" href={`mailto:${SUPPORT_EMAIL}`} label="Email VELOOP support">
          Contact Support <Mail size={16} />
        </CTAButton>
      </div>

      <div className={styles.supportVisual}>
        <div className={styles.chatBubble} aria-hidden="true">
          <MessageCircle size={23} />
          <span>We&apos;re here to help</span>
        </div>
        <div className={styles.agent} aria-hidden="true">
          <div className={styles.agentHead}>
            <div className={styles.headset} />
            <div className={styles.face} />
          </div>
          <div className={styles.agentBody}>V</div>
        </div>
        <div className={styles.supportPanel}>
          <a className={styles.supportRow} href={`mailto:${SUPPORT_EMAIL}`}>
            <MessageCircle size={14} /> <span>Start a conversation</span>
            <ChevronRight size={14} />
          </a>
          <a className={styles.supportRow} href={`mailto:${SUPPORT_EMAIL}`}>
            <Mail size={14} /> <span>Email Us</span>
            <ChevronRight size={14} />
          </a>
          {copied && (
            <span className={styles.srOnly} role="status">
              Support email copied to clipboard
            </span>
          )}
          <button type="button" className={styles.supportRow} onClick={copyEmail}>
            {copied ? <Check size={14} /> : <Mail size={14} />}
            <span>{copied ? "Copied!" : "Copy Email"}</span>
            <ChevronRight size={14} />
          </button>
          <div className={styles.supportRow}>
            <Headphones size={14} /> <span>Help Center (soon)</span>
            <ChevronRight size={14} />
          </div>
        </div>
      </div>
    </BannerShell>
  );
}