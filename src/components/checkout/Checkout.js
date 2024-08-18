import React, { useState } from 'react';

const Checkout = () => {
    const [amount, setAmount] = useState(500); // Amount in INR (e.g., 500 = Rs. 500)

    const handlePayment = async () => {
        const response = await fetch('http://localhost:5004/api/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, currency: 'INR' }),
        });

        const orderData = await response.json();

        const options = {
            key: 'your_key_id', // Replace with your Razorpay Key ID
            amount: orderData.amount,
            currency: orderData.currency,
            name: 'E-commerce Store',
            description: 'Test Transaction',
            order_id: orderData.id,
            handler: function (response) {
                alert('Payment successful!');
                console.log(response);
            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Customer Address',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div>
            <h2>Checkout Page</h2>
            <p>Amount to be paid: ₹{amount}</p>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Checkout;
