const StarterKitDownload = () => {
  return (
    <section className="bg-white px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-[#064789]">
        💻 Starter Templates
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">React + Tailwind</h3>
          <p className="text-sm mb-3">
            Pre-configured Vite setup with Tailwind ready to go.{" "}
            {"(You can use Create-react-app)"} but for this starter we provided
            Vite.
          </p>
          <a
            href="#"
            className="text-white bg-[#427aa1] hover:bg-[#365e7d] px-4 py-2 inline-block rounded"
          >
            Download Starter
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">HTML + CSS + JS</h3>
          <p className="text-sm mb-3">
            Clean boilerplate for vanilla frontend development.
          </p>
          <a
            href="#"
            className="text-white bg-[#427aa1] hover:bg-[#365e7d] px-4 py-2 inline-block rounded"
          >
            Download Starter
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">PHP</h3>
          <p className="text-sm mb-3">
            Simple starter with basic routing and layout.
          </p>
          <a
            href="#"
            className="text-white bg-[#427aa1] hover:bg-[#365e7d] px-4 py-2 inline-block rounded"
          >
            Download Starter
          </a>
        </div>
      </div>
    </section>
  );
};

export default StarterKitDownload;
