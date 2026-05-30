# Security & Best Practices

## 🔐 Security Checklist

### Before Going Live

- [ ] Enable HTTPS/SSL
- [ ] Set strong Firebase security rules
- [ ] Add admin authentication
- [ ] Verify payment gateway credentials
- [ ] Enable CORS for backend APIs
- [ ] Add rate limiting
- [ ] Enable email verification
- [ ] Set up logging and monitoring

### Firebase Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read access
    match /{document=**} {
      allow read: if true;
    }
    
    // Write access only for authenticated users
    match /bookings/{document=**} {
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.userId;
    }
    
    // Admin only
    match /admin/{document=**} {
      allow read, write: if request.auth != null && isAdmin();
    }
  }
  
  function isAdmin() {
    return request.auth.token.admin == true;
  }
}
```

### Payment Security

1. **Never expose secret keys in frontend**
   - Keep private keys in backend only
   - Use `.env` files for secrets

2. **Verify transactions server-side**
   - Always verify payment on backend
   - Don't trust client-side confirmation

3. **Use HTTPS for all payments**
   - Enforce SSL/TLS
   - Use secure payment gateways

### Data Protection

1. **Encrypt sensitive data**
   - Player passwords
   - Payment information
   - Personal details

2. **Regular backups**
   - Daily database backups
   - Version control for code
   - Disaster recovery plan

3. **Privacy compliance**
   - GDPR compliance (if EU users)
   - Privacy policy
   - Data deletion requests

---

## 🔑 Environment Variables Security

### ✅ DO

```javascript
// ✅ Good: Use environment variables
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
```

### ❌ DON'T

```javascript
// ❌ Bad: Hardcoded secrets
const apiKey = "AIzaSyDxZ...";
```

---

## 🛡️ Common Vulnerabilities

### 1. Injection Attacks

**Prevention:**
- Use parameterized queries
- Sanitize user input
- Use Firebase validation

### 2. XSS (Cross-Site Scripting)

**Prevention:**
- Use React's built-in escaping
- Use DOMPurify for user content
- Content Security Policy headers

### 3. CSRF (Cross-Site Request Forgery)

**Prevention:**
- Use CSRF tokens
- SameSite cookie attributes
- Verify origins

### 4. SQL Injection

**Note:** Firestore uses NoSQL, but still:
- Validate all inputs
- Use parameterized queries
- Implement field-level security

---

## 🔍 Monitoring & Logging

### Enable Firebase Monitoring

```javascript
// utils/firebase.js
import { initializeAnalytics } from 'firebase/analytics';

const analytics = initializeAnalytics(app);
```

### Log Important Events

```javascript
// Log booking creation
logEvent(analytics, 'booking_created', {
  teamId: team.id,
  timestamp: new Date(),
});

// Log payment completion
logEvent(analytics, 'payment_completed', {
  amount: 150,
  method: 'esewa',
});
```

---

## 📋 Deployment Checklist

```bash
# Before deploying to production:

# 1. Security
- [ ] All secrets in .env.local
- [ ] Firebase rules configured
- [ ] HTTPS enabled
- [ ] Admin authentication added

# 2. Testing
- [ ] All pages tested
- [ ] Payment flow tested
- [ ] Error handling verified
- [ ] Mobile responsive tested

# 3. Performance
- [ ] Images optimized
- [ ] Code minified
- [ ] Database indexed
- [ ] CDN configured

# 4. Monitoring
- [ ] Error tracking enabled
- [ ] Analytics configured
- [ ] Logging set up
- [ ] Alerts configured
```

---

## 🔄 Backup & Recovery

### Firebase Backups

Google Cloud Console → Firestore → Backups

- Enable daily automated backups
- Store in separate location
- Test recovery process quarterly

### GitHub Backups

```bash
# Regular commits
git add .
git commit -m "Backup: $(date)"
git push origin main
```

---

## 📞 Incident Response

### If Payment Fails

1. Check payment gateway status
2. Verify merchant credentials
3. Review transaction logs
4. Contact payment provider
5. Notify affected users

### If Database Goes Down

1. Switch to backup database
2. Notify users immediately
3. Investigate root cause
4. Implement fix
5. Monitor closely

### If Security Breach Occurs

1. Immediately take site offline
2. Assess damage
3. Notify users immediately
4. Patch vulnerability
5. Conduct security audit
6. Restore from backup

---

**Protect your tournament! Security is everyone's responsibility.** 🛡️
