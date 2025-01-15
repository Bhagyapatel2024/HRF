import React from 'react';
import './Developer.css';  // Import the CSS file here (you may remove this if you don't need custom styles)
import DeveloperImage from './../../images/bhagya.jpg'; // Import your image here
import Navbar from '../components/Navbar';

const Developer = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12 bg-white text-black">
        {/* Developer Profile Section */}
        <section className="flex flex-col items-center text-center mb-12">
          {/* 3D Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4">
            <img
              src={DeveloperImage}
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold">Bhagya Nitinkumar Patel</h1>
          <p className="text-lg mt-2">Full Stack Developer | AI/ML Enthusiast</p>
        </section>

        {/* About Developer Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am an enthusiastic Computer Science Engineering student with a strong foundation in programming languages like Java and Python. I have hands-on experience in web development technologies such as React.js to build real-time applications. My background in machine learning includes developing predictive models using frameworks like scikit-learn and TensorFlow. Additionally, I have solved over 500 problems on LeetCode. I also secured an All India Rank of 553 in the National Level Science Talent Search Examination.
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">SummarizeX</h3>
              <p className="text-gray-600 mt-2">A web application built with React.js for summarizing articles with URLs.</p>
              <a href="https://summarizex-bhagya-patel.vercel.app/" className="text-blue-500 mt-4 inline-block">Live Demo</a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Nexgen Invoice Extractor</h3>
              <p className="text-gray-600 mt-2">Extract Information from Invoice</p>
              <a href="https://drive.google.com/file/d/1n1BbXYtQpHB8pwZs-OzZt_-DMSj2Joue/view" className="text-blue-500 mt-4 inline-block">Live Demo</a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">ConnectPlus</h3>
              <p className="text-gray-600 mt-2">A web application built with React.js, Firebase.</p>
              <a href="https://connectpulse-bhagya-patel.vercel.app/" className="text-blue-500 mt-4 inline-block">Live Demo</a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">OS Simulator</h3>
              <p className="text-gray-600 mt-2">A web application for Operating System algorithms.</p>
              <a href="https://os-bhagya-patel.vercel.app/" className="text-blue-500 mt-4 inline-block">Live Demo</a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Portfolio</h3>
              <a href="#" className="text-blue-500 mt-4 inline-block">Live Demo</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Developer;
