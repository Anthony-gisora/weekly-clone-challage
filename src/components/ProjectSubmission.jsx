import { useState } from "react";

const ProjectSubmission = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    live: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project submitted:", formData);
    // Process the submission (e.g., send to backend or email)
    setShowModal(false);
    setFormData({ name: "", email: "", github: "", live: "" });
  };

  return (
    <>
      <section className="px-6 py-16 bg-[#064789] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
        <button
          onClick={() => setShowModal(true)}
          className="inline-block bg-white text-[#064789] px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-[#ebf2fa] transition"
        >
          Ready to Submit Your Build
        </button>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
            <h3 className="text-2xl font-bold mb-4 text-center text-[#064789]">
              Submit Your Project
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name / Alias"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="url"
                name="github"
                placeholder="GitHub Link to Project"
                value={formData.github}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="url"
                name="live"
                placeholder="Live Deploy Link (optional)"
                value={formData.live}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-[#064789] text-white px-6 py-2 rounded-md hover:bg-[#053a6b] transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-gray-600 hover:text-black transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSubmission;
