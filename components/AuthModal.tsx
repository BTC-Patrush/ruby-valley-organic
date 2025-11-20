'use client';

import React, { useState } from 'react';

// Define the props interface
interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Simple SVG Icon for WhatsApp
const WhatsAppIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.06 21.94L7.31 20.58C8.75 21.38 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.13C10.5 20.13 9.01 19.7 7.7 18.96L7.31 18.72L3.5 19.8L4.62 16.1L4.37 15.71C3.56 14.28 3.12 12.63 3.12 10.92C3.12 7.27 5.76 4.64 9.42 4.64C11.18 4.64 12.87 5.34 14.16 6.63C15.45 7.92 16.15 9.61 16.15 11.37C16.15 15.02 13.51 17.65 9.85 17.65C9.85 17.65 12.04 20.13 12.04 20.13C15.69 20.13 18.33 17.49 18.33 13.84C18.33 10.19 15.69 7.56 12.04 7.56C8.38 7.56 5.74 10.19 5.74 13.84C5.74 14.73 5.95 15.59 6.33 16.38L6.8 17.32L5.87 18.27C6.81 19.39 8.04 20.13 9.42 20.13C10.08 20.13 10.72 19.99 11.33 19.72L11.96 19.43L12.61 19.81C13.8 20.42 15.09 20.76 16.46 20.76C17.91 20.76 19.27 20.35 20.45 19.6L20.69 19.45L21.26 19.49L21.58 19.51L21.94 19.8L20.58 16.86C21.44 15.36 21.9 13.66 21.9 11.91C21.9 6.45 17.5 2 12.04 2Z" />
    </svg>
);

// Simple SVG Icon for SMS/Mobile
const MobileIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
    </svg>
);

// Simple SVG Icon for Messenger
const MessengerIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.818 0 5.418-1.023 7.4-2.74L23.777 24l-.68-4.432C24.407 17.7 25 14.93 25 12C25 5.373 19.627 0 13 0H12zm1.64 18.91s-1.11-.08-2.11-.47c-1.3-.5-2.9-1.63-2.9-3.23s1.21-3.03 2.75-3.8L16.2 8.7s.44-.22.7-.02c.26.2.14.65-.05.85l-4.52 4.38c-.3.28-.4.72-.2 1.05.2.33.64.44.97.26l3.3-1.68c.3-.15.65.1.55.44l-1.3 3.68c-.1.32-.47.52-.8.43z" />
    </svg>
);

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    // This stops clicks inside the modal from closing it
    const handleModalContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    // Placeholder function for sending code
    const handleSendCode = (via: 'whatsapp' | 'sms' | 'messenger') => {
        if (phoneNumber.length < 9) { // Simple validation for Nepal
            setError('Please enter a valid 10-digit phone number.');
            return;
        }
        setIsLoading(true);
        setError('');
        console.log(`Sending code to +977${phoneNumber} via ${via}`);
        
        // In a real app, you'd call Firebase auth or another service here
        setTimeout(() => {
            setIsLoading(false);
            setIsOtpSent(true); // Show the OTP field
        }, 1500);
    };

    // Placeholder function for login
    const handleLogin = () => {
        if (otp.length < 6) {
            setError('Please enter the 6-digit code.');
            return;
        }
        setIsLoading(true);
        setError('');
        console.log(`Verifying OTP ${otp}`);
        
        // In a real app, you'd verify the OTP here
        setTimeout(() => {
            setIsLoading(false);
            onClose(); // Close modal on "success"
        }, 1500);
    };

    return (
        // Backdrop
        <div 
            className="font-body fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            onClick={onClose} // Click outside to close
        >
            {/* Modal Content */}
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 p-8 relative"
                onClick={handleModalContentClick}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                >
                    &times;
                </button>

                {/* Header */}
                <h2 className="font-header text-2xl font-bold text-center text-charcoal mb-6">Login or Sign up</h2>

                {/* Phone Input */}
                <div className="flex space-x-2 mb-4">
                    <span className="flex items-center px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-charcoal">
                        <span className="mr-2">🇳🇵</span> +977
                    </span>
                    <input 
                        type="tel" 
                        placeholder="Please enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ruby"
                        maxLength={10}
                    />
                </div>

                {/* OTP Input (Conditional) */}
                {isOtpSent && (
                    <div className="mt-4 mb-4">
                        <input 
                            type="text" 
                            placeholder="Enter 6-digit code"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ruby"
                            maxLength={6}
                        />
                    </div>
                )}

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                {/* Action Buttons */}
                {!isOtpSent ? (
                    <div className="space-y-3">
                        <button 
                            onClick={() => handleSendCode('whatsapp')}
                            disabled={isLoading}
                            className="w-full bg-ruby text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition flex items-center justify-center disabled:bg-gray-400"
                        >
                            {isLoading ? 'Sending...' : (
                                <>
                                    <WhatsAppIcon />
                                    Send code via Whatsapp
                                </>
                            )}
                        </button>
                        
                        <button 
                            onClick={() => handleSendCode('messenger')}
                            disabled={isLoading}
                            style={{ backgroundColor: '#006AFF' }} // Messenger Blue
                            className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center disabled:bg-gray-400"
                        >
                            {isLoading ? 'Sending...' : (
                                <>
                                    <MessengerIcon />
                                    Send code via Messenger
                                </>
                            )}
                        </button>

                        <button 
                            onClick={() => handleSendCode('sms')}
                            disabled={isLoading}
                            className="w-full bg-white text-ruby border-2 border-ruby py-3 rounded-lg font-semibold hover:bg-red-50 transition flex items-center justify-center disabled:opacity-50"
                        >
                             {isLoading ? 'Sending...' : (
                                <>
                                    <MobileIcon />
                                    Send code via SMS
                                </>
                             )}
                        </button>
                    </div>
                ) : (
                    <button 
                        onClick={handleLogin}
                        disabled={isLoading}
                        className="w-full bg-ruby text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition disabled:bg-gray-400"
                    >
                        {isLoading ? 'Verifying...' : 'Login'}
                    </button>
                )}

                {/* Pre-order Note */}
                <div className="text-center mt-4">
                    <p className="text-xs text-gray-500">
                        <span className="font-semibold text-charcoal">Note:</span> For bulk orders, please pre-order as our organic products take time to prepare.
                    </p>
                </div>
            </div>
        </div>
    );
}