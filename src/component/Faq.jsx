import React, { useState } from 'react';
import Nav from './Nav/Nav';

const faqData = [
  {
    question: "What is Fetcher?",
    answer: "Fetcher is a premium streaming platform offering the latest movies, TV shows, and original content in HD and 4K."
  },
  {
    question: "How much does Fetcher cost?",
    answer: "Fetcher offers flexible plans starting at $7.99/month. Annual plans and family bundles are also available."
  },
  {
    question: "Can I download content to watch offline?",
    answer: "Yes! Fetcher allows offline downloads on mobile devices so you can watch your favorites anytime, anywhere."
  },
  {
    question: "How many devices can I stream on?",
    answer: "You can stream on up to 4 devices simultaneously with a single Fetcher account."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, Fetcher offers a 7-day free trial for new users to explore our complete library risk-free."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 px-6 flex flex-col items-center">
        <Nav />
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center font-inter tracking-tight">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-2xl flex flex-col gap-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-5 cursor-pointer hover:bg-gray-700 transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-semibold">{item.question}</h2>
              <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 font-inter font-medium tracking-tighter text-gray-300 leading-relaxed">{item.answer}</p>
            )}
          </div>
        ))}
        <img src="/images/logo.png" className='w-32 mx-auto' alt="" />
      </div>
    </div>
  );
};

export default Faq;
