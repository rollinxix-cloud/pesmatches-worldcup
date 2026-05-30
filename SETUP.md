# PES WORLDCUP 2026 - Setup & Installation Guide

## 🎯 Prerequisites Checklist

Before starting, ensure you have:

- ✅ Node.js 16+ installed ([Download](https://nodejs.org/))
- ✅ npm or yarn package manager
- ✅ Firebase account (free tier works) ([Create](https://firebase.google.com/))
- ✅ Git installed for version control
- ✅ Text editor (VS Code recommended)
- ✅ GitHub account for repository

---

## 📦 Installation Steps

### Step 1: Clone the Repository

```bash
git clone https://github.com/rollinxix-cloud/pesmatches-worldcup.git
cd pesmatches-worldcup
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Firebase SDK
- Tailwind CSS
- And more...

### Step 3: Set Up Firebase

#### 3.1 Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `PES-WORLDCUP-2026`
4. Follow the setup wizard
5. Create project

#### 3.2 Get Firebase Credentials

1. In Firebase Console, go to **Project Settings** (⚙️)
2. Under "Your apps", click **</> Web**
3. Copy your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

#### 3.3 Enable Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create Database**
3. Choose **Start in production mode**
4. Select your region (closest to your location)
5. Click **Enable**

#### 3.4 Set Security Rules

Go to **Firestore → Rules** and set:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to public collections
    match /{document=**} {
      allow read: if true;
      allow write: if false;
    }
    
    // Allow write access for admin
    match /admin/{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Step 4: Configure Environment Variables

#### 4.1 Create `.env.local` file

In the project root, create a file named `.env.local`:

```bash
touch .env.local
```

#### 4.2 Add Firebase Variables

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

#### 4.3 Add Payment Integration Variables

```env
# eSewa Configuration
NEXT_PUBLIC_ESEWA_MERCHANT_CODE=EPAYTEST
NEXT_PUBLIC_ESEWA_SUCCESS_URL=http://localhost:3000/payment/success
NEXT_PUBLIC_ESEWA_FAILURE_URL=http://localhost:3000/payment/failure

# Khalti Configuration
NEXT_PUBLIC_KHALTI_PUBLIC_KEY=test_public_key_here

# Organizer Messenger
NEXT_PUBLIC_ORGANIZER_MESSENGER_URL=https://m.me/pesmatches5
```

### Step 5: Run Development Server

```bash
npm run dev
```

You should see:
```
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local
```

### Step 6: Open in Browser

Go to **http://localhost:3000** 🎉

---

## ⚡ Quick Setup Summary

```bash
# 1. Clone
git clone https://github.com/rollinxix-cloud/pesmatches-worldcup.git
cd pesmatches-worldcup

# 2. Install
npm install

# 3. Configure .env.local (Add Firebase credentials)

# 4. Run
npm run dev

# 5. Open http://localhost:3000
```

---

## 🔧 Payment Gateway Setup

### eSewa Setup

1. Register at https://esewa.com.np/
2. Complete merchant verification
3. Get your merchant code
4. Update in `.env.local`

### Khalti Setup

1. Register at https://khalti.com/
2. Complete verification
3. Get public API key
4. Update in `.env.local`

---

## 📱 Testing the Platform

### Test Booking Flow

1. Go to http://localhost:3000
2. Click **"BOOK YOUR NATION NOW"**
3. Select a team
4. Enter test details:
   - Name: John Doe
   - PSN: TestPlayer123
   - Email: test@example.com
   - Phone: +1234567890
5. Continue to payment

### View Admin Dashboard

1. Go to http://localhost:3000/admin/dashboard
2. Should see empty bookings
3. (Add authentication before production)

---

## 🚀 Build & Production

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Vercel will automatically:
- Connect to your GitHub repo
- Build on every push
- Deploy to production

---

## ❓ Troubleshooting

### Issue: "Cannot find module 'firebase'"

**Solution:**
```bash
npm install firebase
```

### Issue: Port 3000 already in use

**Solution:**
```bash
npm run dev -- -p 3001
```

### Issue: Firebase credentials not working

**Solution:**
1. Double-check your API key
2. Verify Firebase project is active
3. Check `.env.local` is in project root
4. Restart dev server: `npm run dev`

### Issue: Payment gateway not working

**Solution:**
1. Use test merchant codes
2. Check payment provider documentation
3. Verify merchant account is active

---

## 📚 Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start                # Start production server

# Linting
npm run lint             # Check code quality

# Export
npm run export           # Export static site (GitHub Pages)
```

---

## 🎯 Next Steps

1. ✅ Complete installation
2. ✅ Test booking flow
3. ✅ Set up payment gateways
4. ✅ Configure admin authentication
5. ✅ Add email notifications
6. ✅ Deploy to production
7. ✅ Launch registration

---

## 💬 Need Help?

- **Discord:** (Add your Discord)
- **Messenger:** https://m.me/pesmatches5
- **Email:** (Add your email)
- **GitHub Issues:** Create an issue

---

**Happy Coding! ⚽🎮**
