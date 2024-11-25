import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-page bg-gray-900">
      <section className="about py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white font-serif">About Me</h2>
          <p className="text-white mb-8 text-bold text-[18px]">
          Hello! I'm  Shafique Baloch and I am a passionate Front-End Web Designer. I specialize in creating visually stunning, user-friendly websites that provide the best possible experience across all devices. With expertise in HTML, CSS, JavaScript, and various front-end frameworks, I strive to bring innovative and responsive designs to life.
          My focus is on both aesthetics and functionality, ensuring that the websites I design not only look great but also perform flawlessly. I believe in continuous learning and staying up-to-date with the latest web design trends to deliver high-quality and modern digital experiences. Feel free to explore my work and connect with me for any design projects!
          </p>

          <div className="team grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="team-member bg-blue-300 p-6 rounded-lg shadow-md hover:bg-green-400 cursor-pointer transition ease-in-out delay-300">
              <Image
                src="/Images/images.jpg"
                alt="Your Image Description"
                width={500}
                height={300}
              />

              <h3 className="text-xl font-bold mb-2">Developer</h3>
              <p className="text-black text-[15px] font-bold">Sobia Khan</p>
            </div>

            <div className="team-member bg-blue-300 p-6 rounded-lg shadow-md hover:bg-green-400 cursor-pointer transition ease-in-out delay-300">
            <Image
                src="/Images/3.jpg" // Path ko slash se start karna hoga
                alt="Your Image Description"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">Developer</h3>
              <p className="text-black text-[15px] font-bold">Muhammad Shafique</p>
            </div>
            <div className="team-member bg-blue-300 p-6 rounded-lg shadow-md hover:bg-green-400 cursor-pointer transition ease-in-out delay-300">
            <Image
                src="/Images/4.jpg" // Path ko slash se start karna hoga
                alt="Your Image Description"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">Developer</h3>
              <p className="text-black text-[15px] font-bold">Aliza shah</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
