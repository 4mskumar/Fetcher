import React from 'react';
import Nav from '../component/Nav/Nav';
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative">
      <Nav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center font-title">
          Need Help? We're Here!
        </h1>

        <p className="text-gray-400 text-md sm:text-lg text-center mb-16 max-w-2xl mx-auto">
          If you have any issues, questions, or feedback regarding Fetcher, don't hesitate to reach out to us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Support */}
          <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
            <FaPhoneAlt className="text-3xl sm:text-4xl text-blue-400 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Phone Support</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4">Talk to our support team anytime.</p>
            <a href="tel:+1234567890" className="text-blue-400 font-semibold hover:underline text-sm sm:text-base">
              +1 (234) 567-890
            </a>
          </div>

          {/* Email Support */}
          <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
            <FaEnvelope className="text-3xl sm:text-4xl text-green-400 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Email Support</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4">Get responses within 24 hours.</p>
            <a href="mailto:support@fetcher.com" className="text-green-400 font-semibold hover:underline text-sm sm:text-base">
              support@fetcher.com
            </a>
          </div>

          {/* FAQs */}
          <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
            <FaQuestionCircle className="text-3xl sm:text-4xl text-purple-400 mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">FAQs</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4">Find quick answers to common questions.</p>
            <a href="/faq" className="text-purple-400 font-semibold hover:underline text-sm sm:text-base">
              View FAQ
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-gray-500 text-xs sm:text-sm">
          © 2025 Fetcher - Streaming made simple and accessible.
        </div>
      </div>
    </div>
  );
};

export default Support;
