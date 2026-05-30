# 🏆 PES WORLDCUP 2026 - Professional eFootball Tournament Platform

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square)
![Firebase](https://img.shields.io/badge/Firebase-10-orange?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 📋 Overview

**PES WORLDCUP 2026** is a professional, full-featured eFootball tournament management platform built with **Next.js**, **Firebase**, and **Tailwind CSS**. 

🎯 **32 Teams • 8 Groups • Real FIFA Rules • $4,800 Prize Pool**

---

## ⚡ Features

### 🎮 Player Features
- ✅ **Nation Booking System** - Select from 32 qualified nations
- ✅ **Secure Payment Integration** - eSewa & Khalti support
- ✅ **Player Registration** - Enter gaming details and preferences
- ✅ **Live Standings** - Real-time group stage standings
- ✅ **Match Schedule** - View all fixtures and results
- ✅ **One-Click Messenger** - Contact organizer directly
- ✅ **Tournament Info** - Full tournament structure and rules

### 👨‍💼 Admin Features
- ✅ **Booking Management** - View all player registrations
- ✅ **Match Management** - Update scores and results
- ✅ **Standings Calculator** - Auto-generated standings
- ✅ **Bracket Generation** - Knockout stage seeding
- ✅ **Payment Tracking** - Monitor all transactions
- ✅ **Dashboard Analytics** - Real-time tournament stats

### 🏆 Tournament Features
- ✅ **32 Nations** - Real flags and team ratings
- ✅ **Group Stage** - 8 groups with 4 teams each
- ✅ **Knockout Bracket** - R16 → QF → SF → Final
- ✅ **Real FIFA Rules** - Professional gameplay standards
- ✅ **Prize Pool** - $4,800 distributed among top finishers
- ✅ **Live Updates** - Real-time match results

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Firebase project (free tier available)
- eSewa & Khalti merchant accounts (optional for testing)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/rollinxix-cloud/pesmatches-worldcup.git
cd pesmatches-worldcup
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Payment Integration
NEXT_PUBLIC_ESEWA_MERCHANT_CODE=EPAYTEST
NEXT_PUBLIC_KHALTI_PUBLIC_KEY=test_public_key

# Organizer Contact
NEXT_PUBLIC_ORGANIZER_MESSENGER_URL=https://m.me/pesmatches5
```

4. **Run development server:**
```bash
npm run dev
```

5. **Open in browser:**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
pesmatches-worldcup/
├── pages/
│   ├── index.js                    # 🏠 Landing Page
│   ├── register.js                 # 📝 Nation Booking
│   ├── tournament.js               # 🏆 Tournament Info
│   ├── standings.js                # 📊 Live Standings
│   ├── matches.js                  # ⚽ Match Schedule
│   ├── admin/
│   │   └── dashboard.js            # 👨‍💼 Admin Panel
│   ├── payment/
│   │   ├── success.js              # ✅ Payment Success
│   │   ├── failure.js              # ❌ Payment Failed
│   │   └── callback.js             # 🔄 Payment Callback
│   ├── api/
│   │   ├── bookings/
│   │   │   └── create.js           # Create booking
│   │   ├── payments/
│   │   │   ├── esewa-verify.js    # eSewa verification
│   │   │   └── khalti-verify.js   # Khalti verification
│   │   └── tournaments/
│   │       └── standings.js        # Calculate standings
│   ├── _app.js
│   └── _document.js
├── components/
│   ├── Layout.js                   # Main layout wrapper
│   ├── Navigation.js               # Top navigation bar
│   ├── Footer.js                   # Footer section
│   ├── StandingsTable.js           # Group standings
│   ├── MatchCard.js                # Match display card
│   ├── MessengerButton.js          # Floating messenger button
│   └── TournamentCard.js           # Tournament card
├── utils/
│   ├── firebase.js                 # Firebase config
│   ├── teams.js                    # 32 nations data
│   ├── tournament-logic.js         # Standings calculation
│   └── payment.js                  # Payment utilities
├── styles/
│   └── globals.css                 # Global styles + Tailwind
├── public/
│   └── (static assets)
├── .env.local                      # Environment variables
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

---

## 🔧 Configuration

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Copy your config credentials to `.env.local`

### eSewa Integration

1. Register at [eSewa](https://esewa.com.np/)
2. Get your merchant code
3. Update `.env.local` with merchant details

### Khalti Integration

1. Register at [Khalti](https://khalti.com/)
2. Get your public key
3. Update `.env.local` with public key

### Messenger Setup

1. Replace `https://m.me/pesmatches5` with your Facebook Messenger URL
2. Update in `.env.local`

---

## 📊 Tournament Structure

### Group Stage
```
32 TEAMS
   ↓
8 GROUPS (A-H)
4 Teams per Group
Round Robin Format
   ↓
TOP 2 FROM EACH GROUP → KNOCKOUT
```

### Knockout Stage
```
16 TEAMS - ROUND OF 16
    ↓
8 TEAMS - QUARTERFINALS
    ↓
4 TEAMS - SEMIFINALS
    ↓
3RD PLACE MATCH & GRAND FINAL
```

### Point System
- **Win:** 3 Points
- **Draw:** 1 Point
- **Loss:** 0 Points
- **Tiebreaker:** Goal Difference, then Goals For

---

## 💰 Prize Distribution

| Position | Prize | Percentage |
|----------|-------|----------|
| 🥇 1st Place | $1,920 | 40% |
| 🥈 2nd Place | $960 | 20% |
| 🥉 3rd Place | $480 | 10% |
| ⭐ 4th-8th | $240 Each | 10% |

**Total Prize Pool:** $4,800 USD

---

## 🌐 Pages Overview

### 🏠 Landing Page (`/`)
- Hero section with countdown timer
- Tournament highlights
- Prize distribution
- Rules and regulations
- Call-to-action buttons

### 📝 Registration (`/register`)
**Step 1:** Select Nation
- Browse all 32 teams
- View team ratings
- See regional info

**Step 2:** Enter Details
- Full name
- Gaming ID (PSN/Steam/Epic)
- Email & phone
- Difficulty level

**Step 3:** Payment
- eSewa payment
- Khalti payment
- Contact organizer option

### 🏆 Tournament (`/tournament`)
- Tournament format explanation
- Group stage seeding
- All 32 nations with flags
- Rules and regulations

### 📊 Standings (`/standings`)
- Live group standings
- Auto-calculated from results
- Qualification indicators
- Goal difference tracking

### ⚽ Matches (`/matches`)
- Match schedule by group
- Live score updates
- Match status indicators
- Date and time information

### 👨‍💼 Admin Dashboard (`/admin/dashboard`)
- Booking management
- Match score updates
- Real-time standings
- Payment tracking

---

## 🔐 Firestore Collections

### `bookings`
```javascript
{
  teamId: number,
  teamName: string,
  playerName: string,
  playerPSN: string,
  email: string,
  phone: string,
  difficulty: string,
  status: string, // pending, paid, confirmed, cancelled
  entryFee: number,
  paymentMethod: string, // esewa, khalti
  transactionId: string,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### `matches`
```javascript
{
  matchDay: number,
  stage: string, // Group A, R16, QF, SF, Final
  team1Id: number,
  team2Id: number,
  score1: number,
  score2: number,
  date: string,
  time: string,
  status: string, // scheduled, live, finished
  referee: string,
  stadium: string
}
```

### `standings`
```javascript
{
  groupId: string,
  teamId: number,
  wins: number,
  draws: number,
  losses: number,
  goalsFor: number,
  goalsAgainst: number,
  goalDifference: number,
  points: number,
  position: number
}
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'football-blue': '#1e40af',
  'football-green': '#15803d',
  'football-gold': '#ca8a04',
}
```

### Teams
Edit `utils/teams.js`:
```javascript
export const TEAMS_2026 = [
  { id: 1, name: 'Brazil', flag: '🇧🇷', rating: 98, region: 'South America' },
  // ...
]
```

### Messenger URL
Update `.env.local`:
```env
NEXT_PUBLIC_ORGANIZER_MESSENGER_URL=https://m.me/your_page_id
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages

```bash
npm run export
```

### Deploy to Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

---

## 🔗 Important Links

- **Firebase Console:** https://console.firebase.google.com/
- **eSewa Docs:** https://esewa.com.np/
- **Khalti Docs:** https://khalti.com/
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs

---

## 🛠️ API Endpoints

### Bookings
- `POST /api/bookings/create` - Create new booking

### Payments
- `POST /api/payments/esewa-verify` - Verify eSewa payment
- `POST /api/payments/khalti-verify` - Verify Khalti payment

### Tournament
- `GET /api/tournaments/standings` - Get current standings

---

## 🚀 Next Steps

- [ ] Connect Firebase database
- [ ] Test payment integrations
- [ ] Populate tournament matches
- [ ] Set up admin authentication
- [ ] Configure email notifications
- [ ] Add live streaming integration
- [ ] Deploy to production
- [ ] Launch registration

---

## 💡 Tips

1. **Testing Payments:** Use eSewa/Khalti test credentials
2. **Admin Access:** Add authentication before going live
3. **Email Notifications:** Integrate SendGrid or Mailgun
4. **Analytics:** Add Google Analytics tracking
5. **SEO:** Update meta tags for each page
6. **Mobile:** Test on all device sizes
7. **Performance:** Use Next.js Image optimization

---

## 📞 Support

**Need help?** Contact the organizer:
- 💬 **Messenger:** https://m.me/pesmatches5
- 📧 **Email:** (Add your email)
- 🤝 **GitHub Issues:** Create an issue on repository

---

## 📄 License

MIT License - Feel free to use this template for your tournaments!

---

## 👏 Credits

Built with ❤️ for the eFootball Community

**Made with:**
- Next.js 14
- React 18
- Firebase 10
- Tailwind CSS 3

---

## 🎯 Roadmap

### Phase 1 (Current) ✅
- [x] Platform setup
- [x] Nation booking system
- [x] Payment integration
- [x] Admin dashboard
- [x] Standings calculation

### Phase 2 (Coming Soon)
- [ ] User authentication
- [ ] Email notifications
- [ ] Live streaming integration
- [ ] Mobile app
- [ ] Statistics & analytics

### Phase 3 (Future)
- [ ] Tournament bracket visualization
- [ ] Live commentary system
- [ ] Sponsor integration
- [ ] Multi-language support
- [ ] Community features

---

**PES WORLDCUP 2026** - The Ultimate eFootball Tournament Experience 🏆⚽
