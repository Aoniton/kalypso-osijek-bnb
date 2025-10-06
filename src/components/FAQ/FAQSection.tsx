import React from 'react';
import FAQItem from './FAQItem';
import { faqData } from './faqData';

export default function FAQSection() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {faqData.map((category, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-8">{category.title}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <FAQItem
                    key={faqIndex}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}