const SubmissionsShow = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-[#064789] mb-6">
        🏁 Submissions Showcase
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {/* Static entries — replace with dynamic logic later */}
        <div className="bg-white p-4 rounded-lg shadow text-left">
          <h3 className="font-semibold text-lg text-[#064789]">👤 Jane Dev</h3>
          <p className="text-[#427aa1] text-sm">
            https://github.com/janedev/messenger-clone
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-left">
          <h3 className="font-semibold text-lg text-[#064789]">👤 CodeGuy</h3>
          <p className="text-[#427aa1] text-sm">
            https://github.com/codeguy/messenger-app
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-left">
          <h3 className="font-semibold text-lg text-[#064789]">👤 Sarah</h3>
          <p className="text-[#427aa1] text-sm">
            https://github.com/sarahdev/messenger-replica
          </p>
        </div>
      </div>
    </>
  );
};

export default SubmissionsShow;
