import React from "react";

const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex flex-col items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hi, I'm Ganesan, a passionate Frontend Developer from Tamil Nadu
                with a keen eye for creating visually stunning and user-friendly
                web interfaces. I specialize in bringing designs to life using
                modern web technologies like HTML, CSS, and JavaScript.
              </p>
              <h2 className="text-cyan-600 pr-5 pt-3 ">
                EDUCATION
                <p className="text-white">
                  SSLC - Ideal Matric Higher Secondary School Aranthangi [2018-2019]
                  <p className="pt-2">HSC - Ideal Matric Higher Secondary School Aranthangi [2020-2021]</p>
                  <p className="pt-4">
                    I Am Currently Pursuing Bachelor of Engineering in Electronics and Communication Engineering in University College of Pattukottai
                  </p>
                  <h1 className="pt-4">
                    HOBBIES
                    <p className="text-white">football</p>
                  </h1>
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



