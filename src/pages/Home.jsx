import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Screenshot from "../components/ScreenShot";
import StarterKitDownload from "../components/StarterKitsDownload";
import SubmissionsShow from "../components/SubmissionsShow";

const Home = () => {
  // Countdown Logic
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const deadline = new Date("2025-05-25T23:59:59");
    const updateTimer = () => {
      const now = new Date();
      const diff = deadline - now;

      if (diff <= 0) {
        setTimeLeft("Challenge ended!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#ebf2fa] text-[#064789] min-h-screen w-full">
      {/* Hero */}

      <HeroSection />
      {/* Countdown */}
      <section className="px-6 py-10 bg-[#427aa1] text-white text-center">
        <h2 className="text-3xl font-bold mb-2">⏳ Time Remaining</h2>
        <p className="text-2xl font-mono">{timeLeft}</p>
      </section>

      {/* Screenshot Section */}
      <Screenshot />

      {/* Challenge Breakdown */}
      <section id="challenge" className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">📌 This Week’s Challenge</h2>
        <p className="text-[#427aa1] text-lg mb-8 max-w-xl mx-auto">
          Clone the <strong>Facebook Messenger Web App</strong>. Build a clean,
          responsive messaging interface.
        </p>
        <div className="grid gap-4 max-w-3xl mx-auto text-left text-[#064789] text-base">
          <div className="bg-[#ebf2fa] rounded-xl p-4 shadow-sm">
            ✅ Login & authentication
          </div>
          <div className="bg-[#ebf2fa] rounded-xl p-4 shadow-sm">
            ✅ Sidebar with recent chats
          </div>
          <div className="bg-[#ebf2fa] rounded-xl p-4 shadow-sm">
            ✅ Real-time chat UI
          </div>
          <div className="bg-[#ebf2fa] rounded-xl p-4 shadow-sm">
            ✅ Timestamps & avatars
          </div>
          <div className="bg-[#ebf2fa] rounded-xl p-4 shadow-sm">
            ⭐ Bonus: Typing indicator + emoji picker
          </div>
        </div>
      </section>

      {/* Starter Kit Download */}
      <StarterKitDownload />

      {/* Why Join */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Why Join?</h2>
        <div className="max-w-2xl mx-auto text-[#427aa1] text-lg space-y-4">
          <p>🔥 Practice real-world UI building</p>
          <p>🚀 Boost your portfolio and confidence</p>
          <p>🌍 Connect with fellow builders</p>
          <p>🏆 Get featured in the Hall of Fame</p>
        </div>
      </section>

      {/* Submissions Showcase */}
      <section className="px-6 py-16 bg-[#ebf2fa] text-center">
        <SubmissionsShow />
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 bg-[#064789] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
        <a
          href="#"
          className="inline-block bg-white text-[#064789] px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-[#ebf2fa] transition"
        >
          Submit Your Build
        </a>
      </section>
    </div>
  );
};

export default Home;
