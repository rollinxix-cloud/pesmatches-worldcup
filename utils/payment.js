// eSewa Payment Integration
export const initiateEsewaPayment = (booking) => {
  const amount = 150; // $150 USD or equivalent in NPR
  const taxAmount = 0;
  const totalAmount = amount + taxAmount;
  const transactionUUID = generateUUID();

  const esewaConfig = {
    amt: totalAmount,
    psc: 0,
    pdc: 0,
    txAmt: taxAmount,
    tAmt: totalAmount,
    pid: `PES_WC_${booking.id}`,
    scd: process.env.NEXT_PUBLIC_ESEWA_MERCHANT_CODE,
    su: process.env.NEXT_PUBLIC_ESEWA_SUCCESS_URL,
    fu: process.env.NEXT_PUBLIC_ESEWA_FAILURE_URL,
  };

  // Create form and submit
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://esewa.com.np/epay/main';

  Object.keys(esewaConfig).forEach((key) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = esewaConfig[key];
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
};

// Khalti Payment Integration
export const initiateKhaltiPayment = (booking) => {
  const amount = 15000; // In paisa (150 USD ~ 15000 paisa for demo)

  const khaltiConfig = {
    publicKey: process.env.NEXT_PUBLIC_KHALTI_PUBLIC_KEY,
    amount: amount * 100,
    product_name: `PES WORLDCUP 2026 - ${booking.teamName}`,
    product_url: window.location.href,
    eventHandler: {
      onSuccess: (payload) => {
        console.log(payload);
        // Verify payment on backend
        fetch('/api/payments/khalti-verify', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
      },
      onError: (error) => {
        console.error(error);
      },
      onClose: () => {
        console.log('Payment cancelled');
      },
    },
  };

  return khaltiConfig;
};

// Generate UUID for transactions
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
