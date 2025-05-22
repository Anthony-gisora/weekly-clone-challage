import React, { useState } from "react";
import brandLogo from "../assets/brandLogo.png";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleJoinClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <header className="backdrop-blur-sm bg-white/70 shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Avatar */}
          <div className="flex items-center space-x-2">
            <img
              src={brandLogo}
              alt="Avatar"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-lg font-semibold text-[#064789]">
              SimpleTech
            </span>
          </div>

          {/* Buttons */}
          <div className="space-x-4">
            <button
              onClick={handleJoinClick}
              className="bg-[#064789] text-white px-4 py-2 rounded-full hover:bg-[#053a6b] transition"
            >
              Join SimpleTech
            </button>
            <button
              onClick={handleJoinClick}
              className="border border-[#064789] text-[#064789] px-4 py-2 rounded-full hover:bg-[#064789] hover:text-white transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold text-[#064789] mb-4">
              🚧 Coming Soon!
            </h2>
            <p className="text-[#427aa1] mb-6">
              The community will be stable to join in 3 days.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#064789] text-white px-4 py-2 rounded-full hover:bg-[#053a6b] transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
