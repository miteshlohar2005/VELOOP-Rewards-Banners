# VELOOP Rewards — Premium Engagement Banners

## 1. Project Title

**VELOOP Rewards — Engagement Banners** — a premium, responsive, production-quality React banner showcase for the VELOOP Rewards platform.

## 2. Project Overview

This project is an internship submission for **VELOOP Rewards**. It implements five dark, fintech-style engagement banners that make up one cohesive design system while keeping their own visual identity. Every banner is fully responsive, animated with lightweight CSS, accessible, and free of backend dependencies — all reward data is clearly labeled development placeholder/demo values.

## 3. Features

- Five premium engagement banners in one cohesive VELOOP Rewards design system
- Dark fintech theme on the required `#161827` application background
- Full-width responsive layout (desktop / laptop / tablet / mobile)
- Subtle premium animations: floating trophies, pulsing glows, drifting coins, gift bob, orbs
- Interactive CTA states (simulated ad flow, claim bonus, follow toggle, copied-to-clipboard)
- Semantic HTML, keyboard focus states, `aria-label`s, live regions, and `prefers-reduced-motion` support
- Lightweight stack — CSS animation only, no animation libraries
- Demo/placeholder values are honest and clearly labeled; no fake backend is implied

## 4. Banner Descriptions

### 01 — Leaderboard Banner
Promotes competition with the message **“Rank Higher. Earn More.”** Includes a glowing floating trophy, animated podium ranking cards with user positions, VE prize-pool indicator, XP reward visual, and a **Check Rankings** CTA in gold.

### 02 — Watch Ads & Earn
Explains the **“Watch Ads. Earn VEs.”** loop. Features a stylized ad screen with an animated play button, progress bar, floating VE coins, a reward wallet, and a **Watch & Earn** CTA that runs a simulated `Watching → Ad Completed → Reward Credited` flow (demo only — no ad network is used).

### 03 — Contact Us
Support banner with the message **“Need Help? We're Here.”** Shows a support-agent illustration, chat bubble, and a support panel. The **Contact Support** CTA and panel rows open the user's email client via `mailto:velooprewardsofficial@gmail.com`. A **Copy Email** shortcut copies the address.

### 04 — Follow & Earn
Encourages following official VELOOP social channels with **“Follow & Earn.”** Includes a floating phone profile mock-up, social orbs, follower stats that react to an interactive **Follow** toggle, a campaign reward card, and a **Follow & Earn** CTA. No social links are hard-coded since no official URLs were provided — interactions are safe demo states only.

### 05 — Daily Bonus
Rewards loyalty with **“Your Daily Bonus Is Waiting.”** Includes a floating gift box, gem reward visual, daily bonus card, and a 7-day streak tracker. The **Claim Bonus** CTA changes the UI to a disabled **Bonus Claimed** state (demo only — no reward is actually issued).

## 5. Technology Stack

- **React 19** — components, hooks, state
- **Vite 7** — fast dev server and production builds (`@vitejs/plugin-react`)
- **Bootstrap 5** — base CSS/reset (via `bootstrap/dist/css/bootstrap.min.css`)
- **CSS Modules** — scoped, maintainable styling
- **Lucide React** — consistent, tree-shaken icon set
- **ESLint 9** — quality gate with React Hooks + Refresh rules

## 6. Design Approach

- **Dark fintech foundation**: `#161827` page background over deep `#0b0e1b` banner cards with soft radial accent glows.
- **Strong hierarchy**: large display headings, eyebrow labels, tightened letter-spacing, restrained copy.
- **Depth**: layered shadows, gradient borders/surfaces, `backdrop-filter`, subtle noise grain and a top light sweep.
- **Cohesive but distinct**: each banner shares the shell/grid/typography system while owning a dedicated accent — gold (leaderboard), blue (ads), slate (support), purple (social), and gold (daily bonus).
- **Reduced-motion friendly**: all motion is disabled under `prefers-reduced-motion`.

## 7. Responsive Breakpoints

- **Desktop / Laptop (≥ 901px)**: one-copy-one-visual split, target banner height **410–450px**, page content max-width 1440px.
- **Tablet (≤ 900px)**: banners stack vertically (copy above visual), target height **380–540px**, visuals centered at 270px.
- **Mobile (≤ 560px)**: compact typography, scaled illustrations, target height **330–520px**, no horizontal overflow, buttons remain touch-friendly.
- Global safeguards: `overflow-x: hidden` on the body and `overflow: hidden` on each banner clip occasional decorative elements instead of causing page scroll.

## 8. Animation & Interaction Details

- **Leaderboard**: trophy float + glow, podium cards gently rising, `+250 XP` status chip appears on demand.
- **Watch Ads**: pulsing play button, progress bar that fills while “watching”, wallet flips to `+38 VEs — Credited`, coins drift.
- **Contact**: floating chat bubble; copied state on the email shortcut.
- **Follow**: floating phone, bobbing social orbs; follower count ticks up on follow.
- **Daily Bonus**: floating gift that tilts when opened; streak days light up on claim.
- All transitions are CSS-driven (no animation libraries). Timed flows use `setTimeout` guarded with `clearTimeout` cleanup (no leaks), and Strict Mode-safe effects.

## 9. Project Structure

```
veloop-rewards-banners/
├─ index.html
├─ vite.config.js
├─ package.json
├─ eslint.config.js
├─ .gitignore
├─ README.md
└─ src/
   ├─ main.jsx                 # entry: React root + global CSS
   ├─ App.jsx                  # page shell (header, banner stack, footer)
   ├─ styles/
   │  ├─ global.css            # reset, focus, reduced-motion
   │  ├─ App.module.css        # page-level layout
   │  └─ banners.module.css    # banner design-system styles
   └─ components/
      ├─ BannerShell.jsx       # reusable banner wrapper
      ├─ BannerShell.module.css
      ├─ CTAButton.jsx         # reusable CTA (button or mailto link)
      ├─ CTAButton.module.css
      └─ banners/
         ├─ LeaderboardBanner.jsx
         ├─ WatchAdBanner.jsx
         ├─ ContactBanner.jsx
         ├─ FollowEarnBanner.jsx
         └─ DailyBonusBanner.jsx
```

## 10. Installation

```bash
npm install
```

## 11. Development

```bash
npm run dev
```

Open http://localhost:5173

## 12. Production Build

```bash
npm run build
```

## 13. Preview

```bash
npm run preview
```

## 14. Deployment

The build output in `dist/` is fully static and can be hosted anywhere:

- **Vercel** — import the repo; framework preset *Vite*; build command `npm run build`.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — use the Vite `base` option and deploy `dist`.

## 15. Placeholder / Demo Data Note

Rankings, VEs, XP, gems, streak counts, follower stats, campaign rewards, and the simulated ad completion flow are **frontend demo values only**. No advertising, rewards, or social APIs exist in this project, and none are implied.

- Support email used by the assignment: **velooprewardsofficial@gmail.com**
- Social URLs were intentionally **not** invented — Follow & Earn uses safe demo interactions until official channels are provided.
- Replace the inline CTA handlers with the platform's real routes/APIs when they become available.

## Author

**Mitesh Ramesh Lohar** — VELOOP Rewards Internship Task.