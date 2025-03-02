import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
function Footer() {
  return (
    <div>
      <div className="w-full h-50 bg-gray-200 flex items-center md:flex-wrap justify-center mt-20  shadow-xl">
        <div className="m-10">
          <p className="text-gray-900  text-md md:text-lg font-bold  ">
            Hey my name is Bhushan currently in second year learnig MERN stack I have
            given my Contact Links below you can connect me with this
          </p>
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/bhushan-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-800 hover:transition duration-300 mt-8 ml-3 "
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bhushan-ingole/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:transition duration-300 mt-8 ml-3"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:bhushaningole2004@gmail.com?subject=Contact from Portfolio"
              className="text-gray-800 hover:transition duration-300 mt-8 ml-3"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        {/* 
        <p className="text-gray-700 mt-20 mr-0 bottom-0 text-sm">
          © 2025 Bhushan. All rights reserved.
        </p> */}
      </div>
    </div>
  );
}

export default Footer;
