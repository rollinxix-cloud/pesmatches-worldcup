# PES WORLDCUP 2026 - Payment Integration Guide

## 💳 Payment Methods Supported

- ✅ **eSewa** (Nepal's most popular)
- ✅ **Khalti** (Multi-platform)

---

## eSewa Integration

### 1. Register eSewa Merchant Account

1. Visit https://esewa.com.np/
2. Complete merchant registration
3. Verify your business
4. Get merchant code

### 2. Environment Variables

```env
NEXT_PUBLIC_ESEWA_MERCHANT_CODE=EPAYTEST  # Test mode
NEXT_PUBLIC_ESEWA_SUCCESS_URL=http://localhost:3000/payment/success
NEXT_PUBLIC_ESEWA_FAILURE_URL=http://localhost:3000/payment/failure
NEXT_PUBLIC_ESEWA_SERVICE_CHARGE=0
NEXT_PUBLIC_ESEWA_DELIVERY_CHARGE=0
```

### 3. Payment Flow

```
User selects eSewa
    ↓
Server creates transaction
    ↓
User redirected to eSewa gateway
    ↓
User enters credentials & pays
    ↓
eSewa redirects back to callback
    ↓
Server verifies payment
    ↓
Booking confirmed ✅
```

### 4. Test Credentials

```
Merchant Code: EPAYTEST
Test Account: 9841111111
Test Password: demo
```

### 5. Production Deployment

1. Complete eSewa verification
2. Get production merchant code
3. Update environment variables
4. Test thoroughly
5. Go live

---

## Khalti Integration

### 1. Register Khalti Account

1. Visit https://khalti.com/
2. Create business account
3. Complete KYC verification
4. Get public key & secret key

### 2. Environment Variables

```env
NEXT_PUBLIC_KHALTI_PUBLIC_KEY=test_public_key_xxx
KHALTI_SECRET_KEY=test_secret_key_xxx  # Backend only
```

### 3. Payment Flow

```
User selects Khalti
    ↓
Khalti payment modal opens
    ↓
User enters payment details
    ↓
Khalti processes payment
    ↓
Callback to server
    ↓
Server verifies token
    ↓
Booking confirmed ✅
```

### 4. Test Credentials

```
Public Key: test_public_key_xxx
Secret Key: test_secret_key_xxx

Test Card: 5555555555555553
Expiry: 05/25
CVV: 123
```

### 5. Production Deployment

1. Complete Khalti verification
2. Switch to live keys
3. Update environment variables
4. Test with real transactions
5. Go live

---

## Implementation Code

### eSewa Payment Button

```javascript
// pages/register.js
import { initiateEsewaPayment } from '../utils/payment';

<button
  onClick={() => initiateEsewaPayment(booking)}
  className="btn-primary"
>
  Pay with eSewa - $150
</button>
```

### Khalti Payment Button

```javascript
// pages/register.js
import { initiateKhaltiPayment } from '../utils/payment';

const khaltiConfig = initiateKhaltiPayment(booking);

<button
  onClick={() => KhaltiCheckout(khaltiConfig)}
  className="btn-primary"
>
  Pay with Khalti - $150
</button>
```

### Server-Side Verification (IMPORTANT)

```javascript
// pages/api/payments/esewa-verify.js
export default async function handler(req, res) {
  const { oid, amount, refId } = req.body;

  // Verify with eSewa API
  const verification = await fetch('https://esewa.com.np/api/payment/validate/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `pidx=${refId}`,
  });

  const result = await verification.json();

  if (result.status === 'COMPLETE') {
    // Update booking as paid
    await updateBookingStatus(oid, 'paid');
    return res.status(200).json({ success: true });
  }

  return res.status(400).json({ success: false });
}
```

---

## Testing Checklist

### Before Going Live

- [ ] eSewa test payment works
- [ ] Khalti test payment works
- [ ] Payment success redirects correctly
- [ ] Payment failure handled properly
- [ ] Booking confirmed in database
- [ ] Email confirmation sent
- [ ] Admin can view payment
- [ ] Refund process works

---

## Currency Conversion

**$150 USD equivalent in local currency:**

| Currency | Amount |
|----------|--------|
| NPR (Nepal) | ₹19,500 - 20,000 |
| INR (India) | ₹12,500 - 13,000 |
| USD | $150 |

---

## Transaction Fees

### eSewa
- Service charge: 1.5% - 2%
- Delivery charge: As configured
- Total for $150: ~$152.25 - 153

### Khalti  
- Service charge: 2.4%
- Delivery charge: As configured
- Total for $150: ~$153.60

---

## Common Issues & Solutions

### Issue: "Merchant code not recognized"
**Solution:** Verify merchant code in `.env.local` matches provider

### Issue: "Payment gateway timeout"
**Solution:** Check internet connection, try again

### Issue: "Payment verified but booking not updated"
**Solution:** Check Firebase connection, restart server

### Issue: "Card declined"
**Solution:** Check card details, use test card for testing

---

## Monitoring Payments

### View Transaction Logs

```javascript
// pages/api/payments/logs.js
export default async function handler(req, res) {
  const payments = await db.collection('payments').getAll();
  return res.json({ payments });
}
```

### Track Failed Payments

```javascript
db.collection('payments')
  .where('status', '==', 'failed')
  .get();
```

---

## Going from Test to Production

### Checklist

1. **eSewa**
   - [ ] Request production merchant code
   - [ ] Complete verification process
   - [ ] Update `.env` with production code
   - [ ] Test with real transactions
   - [ ] Monitor for 48 hours

2. **Khalti**
   - [ ] Request production API keys
   - [ ] Complete verification
   - [ ] Update `.env` with live keys
   - [ ] Test with real transactions
   - [ ] Monitor for 48 hours

---

**Questions?** Contact payment providers directly for support. 💳
