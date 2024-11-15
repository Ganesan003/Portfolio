import React from "react";
import ro from "../assets/images/ro.png";

const Hero = () => {
  const social_media = [
    {
      name: "logo-linkedin",
      link: "https://www.linkedin.com/in/rohith-ganesan-403479334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
    },
    {
      name: "logo-github",
      link: "https://github.com/Ganesan003", // Replace with your GitHub profile link
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={ro}
          alt="Profile"
          className="md:w-8/12 w-10/12 h-auto object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Ganesan</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front-End Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          {/* Social media section */}
          <div className="mt-8 text-3xl flex justify-center items-center gap-5">
            {social_media.map((icon) => (
              <a
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={icon.name}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


