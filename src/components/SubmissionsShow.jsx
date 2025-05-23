const SubmissionsShow = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-[#064789] mb-6 text-center">
        Submissions Showcase
      </h2>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md text-center mb-10">
        <p className="text-lg text-[#427aa1]">
          🗓️ Submissions begin on{" "}
          <span className="font-semibold text-[#064789]">28th May 2025</span>{" "}
          and close on{" "}
          <span className="font-semibold text-[#064789]">4th June 2025</span>.
        </p>
        <p className="mt-2 text-[#5d6e82]">
          Stay tuned! The showcase will go live once the submission window
          opens.
        </p>
      </div>

      {/* 
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
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
      */}
    </>
  );
};

export default SubmissionsShow;
