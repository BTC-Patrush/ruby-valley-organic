'use client';

import React from 'react';

// Define the props interface
interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    quantity: number;
}

// Get contact info from environment variables
const whatsappNumber = process.env.NEXT_PUBLIC_SHOP_WHATSAPP_NUMBER;
const smsNumber = process.env.NEXT_PUBLIC_SHOP_SMS_NUMBER;
const facebookPage = process.env.NEXT_PUBLIC_SHOP_FACEBOOK_PAGE;

export default function OrderModal({ isOpen, onClose, productName, quantity }: OrderModalProps) {
    if (!isOpen) return null;

    // Create the pre-filled message
    const message = `Hi! I'd like to order:
Product: ${productName}
Quantity: ${quantity}
    
Please let me know the next steps. Thank you!`;

    // Encode the message for URLs
    const encodedMessage = encodeURIComponent(message);

    // Create the links
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    const messengerLink = `https://m.me/${facebookPage}?text=${encodedMessage}`;
    const smsLink = `sms:${smsNumber}?body=${encodedMessage}`;

    // This stops clicks inside the modal from closing it
    const handleModalContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
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
                <h2 className="font-header text-2xl font-bold text-center text-charcoal mb-4">Place Your Order</h2>
                <p className="text-center text-gray-600 mb-6">
                    To order, please send us a message on your preferred platform. We will confirm your order and details shortly.
                </p>

                {/* Order Details */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                    <p className="font-semibold text-charcoal">Your Order:</p>
                    <div className="flex justify-between mt-2">
                        <span className="text-gray-700">{productName}</span>
                        <span className="font-medium text-charcoal">Quantity: {quantity}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-ruby text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition flex items-center justify-center"
                    >
                        <i className="bi bi-whatsapp mr-2"></i>
                        Order via Whatsapp
                    </a>
                    
                    <a 
                        href={messengerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#006AFF' }} // Messenger Blue
                        className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center"
                    >
                        <i className="bi bi-messenger mr-2"></i>
                        Order via Messenger
                    </a>

                    <a 
                        href={smsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white text-ruby border-2 border-ruby py-3 rounded-lg font-semibold hover:bg-red-50 transition flex items-center justify-center"
                    >
                        <i className="bi bi-phone mr-2"></i>
                        Order via SMS
                    </a>
                </div>

                {/* Note */}
                <div className="text-center mt-6">
                    <p className="text-xs text-gray-500">
                        <span className="font-semibold text-charcoal">Note:</span> For bulk orders, please pre-order as our organic products take time to prepare.
                    </p>
                </div>
            </div>
        </div>
    );
}