import { useState } from "react";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="px-6 py-20 text-center bg-[#064789] text-white">
        <h1 className="text-5xl font-bold mb-4">
          🚀 Weekly Clone App Challenge
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-4">
          Ready to level up your dev skills? Clone the Facebook Messenger Web
          App and show off your frontend game!
        </p>
        <p className="text-lg mb-6">
          📱 Join the WhatsApp group to connect with others:{" "}
          <a
            href="https://chat.whatsapp.com/IDTl4fRSGqTEXasuTFT10w" // Replace with your actual number or group invite link
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#ebf2fa] hover:text-white"
          >
            Click here to join
          </a>
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-2 inline-block bg-white text-[#064789] px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-[#ebf2fa] transition"
        >
          Join the Challenge
        </button>
      </section>

      {/* Modal Message */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm text-center">
            <h2 className="text-2xl font-semibold text-[#064789] mb-3">
              📅 Challenge Starts Soon!
            </h2>
            <p className="text-[#427aa1] mb-4 text-lg">
              The Clone Challenge officially begins on{" "}
              <strong>26th May 2025</strong>.
            </p>
            <p className="text-[#427aa1] mb-6 text-base">
              🏆 Top-rated submissions will receive cash rewards:
              <br />
              <strong>🥇 1st Place:</strong> Ksh. 1000
              <br />
              <strong>🥈 2nd Place:</strong> Ksh. 500
              <br />
              <strong>🥉 3rd Place:</strong> Ksh. 250
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#064789] text-white px-6 py-2 rounded-full hover:bg-[#053a6b] transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
