"use client";

import { useState } from "react";

interface HelpPanelProps {
  onClose: () => void;
}

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What do each ceiling level really mean?",
    answer: (
      <>
        <p>
          <strong>Tier 1</strong>: Normal buildings — you cannot use your laser
          designator for CAS, place mortars, or use medevacs.
        </p>
        <p>
          <strong>Tier 2</strong>: No mortar strikes, fulton extractions, supply
          drops, or green flares.
        </p>
        <p>
          <strong>Tier 3</strong>: Firemissions are not allowed.
        </p>
        <p>
          <strong>Tier 4</strong>: Cannot send OB there.
        </p>
      </>
    ),
  },
  {
    question: "How did you get this information?",
    answer: (
      
        <p>
          Maps are generated from the game files, not personal observations, so
          they are extremely accurate. Some errors may exist. If you&apos;re
          from RMC14 or another fork, there might be mismatches. Files were
          sourced from CM13.
        </p>
      
    ),
  },
  {
    question: "How can I contact you?",
    answer: (
      <p>
        Reach me on Discord:{" "}
        <code className="bg-gray-700 px-1 rounded">ozgurakca</code> or find me
        as Cure Elim on CM13 and RMC14.
      </p>
    ),
  },
];

export default function HelpPanel({ onClose }: HelpPanelProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="fixed inset-0 bg-black/10 bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gray-900 text-white w-[90%] max-w-xl max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300 text-lg"
          aria-label="Close help"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-indigo-300 text-center">
          Help & Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-4 flex justify-between items-center bg-gray-800 hover:bg-gray-700 rounded-t-lg"
              >
                <span className="font-medium text-white">{faq.question}</span>
                <span className="text-gray-400 text-sm">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-300 border-t border-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
