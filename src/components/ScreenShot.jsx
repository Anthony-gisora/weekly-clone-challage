import login from "../assets/login.jpeg";
import conversationList from "../assets/chatList.jpg";

const Screenshot = () => {
  return (
    <section className="px-6 py-16 bg-white text-center space-y-2">
      <h2 className="text-3xl font-bold mb-6">🖼️ Reference UI Preview</h2>
      <div className="flex  space-x-1 w-full justify-evenly items-center  ">
        <img
          src={login} // You can replace this with a real preview
          alt="Messenger UI"
          className="mx-auto rounded-lg shadow-md max-h-[50vh]  max-w-[40vw] border"
        />
        <p className="text-lg font-extrabold">To </p>
        <img
          src={conversationList} // You can replace this with a real preview
          alt="Messenger UI"
          className="mx-auto rounded-lg shadow-md max-h-[50vh] max-w-[40vw] border"
        />
      </div>
    </section>
  );
};

export default Screenshot;
