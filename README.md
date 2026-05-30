# ⚽ PES Matches World Cup

A modern Next.js website for managing and showcasing eFootball tournaments.

## 🚀 Features

- **Tournament Management** - Create and manage multiple tournaments
- **Match Tracking** - Display matches with scores and dates
- **Standings** - View team rankings and points
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Admin Panel** - Manage tournaments and matches
- **Modern UI** - Built with Tailwind CSS

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **JavaScript** - Logic

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/rollinxix-cloud/pesmatches-worldcup.git
cd pesmatches-worldcup
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
pesmatches-worldcup/
├── components/          # React components
│   ├── Layout.js
│   ├── TournamentCard.js
│   ├── MatchCard.js
│   └── Standings.js
├── pages/              # Next.js pages
│   ├── index.js        # Home page
│   ├── tournament/[id].js # Tournament details
│   ├── admin.js        # Admin panel
│   └── api/            # API routes
├── styles/             # Global styles
├── utils/              # Utility functions
└── public/             # Static files
```

## 🎮 Usage

### Home Page
- Browse all tournaments
- Click on a tournament to view details

### Tournament Details
- View all matches in the tournament
- Check team standings
- See match scores and dates

### Admin Panel
- Create new tournaments
- Add matches
- Manage tournament details

## 🗄️ Database

Currently using mock data in `utils/db.js`. To add a real database:

### Option 1: Firebase
```bash
npm install firebase
```

### Option 2: Supabase
```bash
npm install @supabase/supabase-js
```

### Option 3: MongoDB + Prisma
```bash
npm install @prisma/client
npx prisma init
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run export
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Fonts**: Update `styles/globals.css`
- **Teams/Matches**: Modify `utils/db.js`
- **Layout**: Update `components/Layout.js`

## 🤝 Contributing

Feel free to fork and submit pull requests!

## 📄 License

MIT License - feel free to use this template for your projects

## 💡 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run dev server: `npm run dev`
3. ✅ Customize tournaments in `utils/db.js`
4. ✅ Add database integration (Firebase, Supabase, MongoDB)
5. ✅ Implement user authentication
6. ✅ Add tournament bracket visualization
7. ✅ Add live score updates with WebSockets
8. ✅ Deploy to Vercel or GitHub Pages

---

**Made with ❤️ for eFootball fans**
