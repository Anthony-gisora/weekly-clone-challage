import React from "react";
import myPhoto from "../assets/brandLogo.png"; // Replace with your actual image path

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-white text-[#064789]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <img
          src={myPhoto}
          alt="About Me"
          className="w-full h-auto rounded-3xl shadow-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">👋 Hey, I'm Tonny!</h2>
        <p className="text-lg mb-4">
          I'm a versatile full-stack developer with a strong focus on modern web
          and mobile technologies. I specialize in building smooth, responsive
          UIs and powerful backend systems.
        </p>
        <p className="text-lg mb-4">
          On the frontend, I work with <strong>React</strong>,{" "}
          <strong>Next.js</strong>, and <strong>React Native</strong> to create
          clean and dynamic interfaces. For backend and data, I integrate{" "}
          <strong>Firebase</strong>, <strong>MongoDB</strong>, and{" "}
          <strong>REST APIs</strong> to deliver real-time, scalable solutions.
        </p>
        <p className="text-lg mb-4">
          I'm also experienced with{" "}
          <strong>authentication systems like Clerk</strong>, deployment, and
          connecting complex workflows to create full products — from admin
          dashboards to mobile apps.
        </p>
        <p className="text-lg">
          Always learning, always building. Let’s ship something impactful
          together. 🚀
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
