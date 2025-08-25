import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, CreditCard } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  const orderNumber = `SF${Date.now().toString().slice(-6)}`;
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Order Confirmed!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-semibold">{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated Delivery:</span>
              <span className="font-semibold">3-5 business days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Shipping Method:</span>
              <span className="font-semibold">Standard Shipping</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CreditCard className="w-6 h-6 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">Payment Processed</h4>
                <p className="text-sm text-gray-600">Your payment has been successfully processed.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Package className="w-6 h-6 text-orange-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">Order Processing</h4>
                <p className="text-sm text-gray-600">We're preparing your items for shipment.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Truck className="w-6 h-6 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900">Shipping Updates</h4>
                <p className="text-sm text-gray-600">You'll receive tracking information via email.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            to="/products"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
          >
            Continue Shopping
          </Link>
          
          <Link
            to="/"
            className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center block"
          >
            Back to Home
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Questions about your order?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500 font-semibold">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;